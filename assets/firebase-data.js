// ============================================================
// CHÁ DE BEBÉ DO ALEC — Módulo Firebase (camada de dados)
// ============================================================
// Centraliza toda a interação com Firestore. Os HTMLs só consomem
// estas funções, não conhecem detalhes do Firebase.
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getFirestore,
  doc, getDoc, setDoc, deleteDoc,
  collection, addDoc, updateDoc, getDocs,
  onSnapshot, runTransaction, query, orderBy,
  serverTimestamp, writeBatch
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Config do projecto cha-do-alec
const firebaseConfig = {
  apiKey: "AIzaSyAPE5_xcn0xUtIlw8bJj-q9XsNdvUX4-Rw",
  authDomain: "cha-do-alec.firebaseapp.com",
  projectId: "cha-do-alec",
  storageBucket: "cha-do-alec.firebasestorage.app",
  messagingSenderId: "23836671039",
  appId: "1:23836671039:web:5d751704df54d1948a4c8a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ============================================================
// EVENT DETAILS
// ============================================================
// Documento único em /eventDetails/main com todos os textos editáveis
const EVENT_DOC = doc(db, "eventDetails", "main");

export async function getEventDetails() {
  try {
    const snap = await getDoc(EVENT_DOC);
    return snap.exists() ? snap.data() : {};
  } catch (e) {
    console.error("[Firebase] getEventDetails error:", e);
    return {};
  }
}

export async function updateEventDetail(field, value) {
  // Usa merge=true para criar campos individualmente sem destruir os outros
  return setDoc(EVENT_DOC, { [field]: value }, { merge: true });
}

export function subscribeEventDetails(callback) {
  return onSnapshot(EVENT_DOC, (snap) => {
    callback(snap.exists() ? snap.data() : {});
  }, (err) => {
    console.error("[Firebase] subscribeEventDetails error:", err);
  });
}

// ============================================================
// GIFTS
// ============================================================
const giftsCol = collection(db, "gifts");

export async function getAllGifts() {
  try {
    const snap = await getDocs(giftsCol);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.error("[Firebase] getAllGifts error:", e);
    return [];
  }
}

export function subscribeGifts(callback) {
  return onSnapshot(giftsCol, (snap) => {
    const gifts = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(gifts);
  }, (err) => {
    console.error("[Firebase] subscribeGifts error:", err);
  });
}

export async function createGift(gift) {
  const data = cleanGift(gift);
  return addDoc(giftsCol, data);
}

export async function updateGift(id, gift) {
  const data = cleanGift(gift);
  return setDoc(doc(db, "gifts", id), data, { merge: true });
}

export async function deleteGift(id) {
  return deleteDoc(doc(db, "gifts", id));
}

// Reserva atómica para singulares — só funciona se ainda não estiver reservado
// (resolve race condition: primeiro que reserva, fica)
export async function reserveGiftSingular(id, name) {
  const giftRef = doc(db, "gifts", id);
  return runTransaction(db, async (tx) => {
    const snap = await tx.get(giftRef);
    if (!snap.exists()) throw new Error("Presente não encontrado");
    const data = snap.data();
    if (data.reserved) {
      throw new Error("ALREADY_RESERVED");
    }
    tx.update(giftRef, { reserved: true, reservedBy: name });
  });
}

// Reserva para múltiplos — adiciona ao array, com checagem de duplicação
export async function reserveGiftMultiple(id, name) {
  const giftRef = doc(db, "gifts", id);
  return runTransaction(db, async (tx) => {
    const snap = await tx.get(giftRef);
    if (!snap.exists()) throw new Error("Presente não encontrado");
    const data = snap.data();
    const reservations = Array.isArray(data.reservations) ? [...data.reservations] : [];
    const already = reservations.some(r => r.toLowerCase() === name.toLowerCase());
    if (already) throw new Error("ALREADY_IN_LIST");
    reservations.push(name);
    tx.update(giftRef, { reservations });
  });
}

export async function cancelGiftSingular(id) {
  const giftRef = doc(db, "gifts", id);
  return updateDoc(giftRef, { reserved: false, reservedBy: null });
}

export async function cancelGiftMultiple(id, name) {
  const giftRef = doc(db, "gifts", id);
  return runTransaction(db, async (tx) => {
    const snap = await tx.get(giftRef);
    if (!snap.exists()) return;
    const data = snap.data();
    const reservations = (data.reservations || []).filter(
      r => r.toLowerCase() !== name.toLowerCase()
    );
    tx.update(giftRef, { reservations });
  });
}

// Helper para sanitizar antes de gravar
function cleanGift(gift) {
  const clean = {
    name: String(gift.name || "").slice(0, 200),
    store: String(gift.store || "").slice(0, 100),
    description: String(gift.description || "").slice(0, 300),
    price: String(gift.price || "").slice(0, 50),
    link: String(gift.link || "").slice(0, 2000),
    image: String(gift.image || "").slice(0, 2000),
    category: String(gift.category || "box").slice(0, 50),
    multipleReservations: !!gift.multipleReservations,
    reserved: !!gift.reserved,
    reservedBy: gift.reservedBy || null,
    reservations: Array.isArray(gift.reservations)
      ? gift.reservations.filter(r => typeof r === "string").slice(0, 100)
      : []
  };
  return clean;
}

// ============================================================
// RSVPS
// ============================================================
const rsvpsCol = collection(db, "rsvps");

export async function getAllRsvps() {
  try {
    const snap = await getDocs(rsvpsCol);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.error("[Firebase] getAllRsvps error:", e);
    return [];
  }
}

export function subscribeRsvps(callback) {
  return onSnapshot(rsvpsCol, (snap) => {
    const rsvps = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(rsvps);
  }, (err) => {
    console.error("[Firebase] subscribeRsvps error:", err);
  });
}

// Submete RSVP: se já existe um com o mesmo nome, atualiza em vez de duplicar
export async function submitRsvp(rsvp) {
  const data = {
    name: String(rsvp.name || "").slice(0, 100),
    status: ['yes', 'no', 'maybe'].includes(rsvp.status) ? rsvp.status : 'yes',
    guests: Math.min(20, Math.max(1, parseInt(rsvp.guests) || 1)),
    message: String(rsvp.message || "").slice(0, 1000)
  };
  // Procurar entrada existente com o mesmo nome (case-insensitive)
  const existing = await getAllRsvps();
  const match = existing.find(r => (r.name || "").toLowerCase() === data.name.toLowerCase());
  if (match) {
    await setDoc(doc(db, "rsvps", match.id), data, { merge: true });
    return match.id;
  }
  const docRef = await addDoc(rsvpsCol, data);
  return docRef.id;
}

export async function deleteRsvp(id) {
  return deleteDoc(doc(db, "rsvps", id));
}

// ============================================================
// EXPORTAR / APAGAR TUDO (apenas usado pelo pais.html)
// ============================================================
export async function exportAllData() {
  const [eventDetails, gifts, rsvps] = await Promise.all([
    getEventDetails(),
    getAllGifts(),
    getAllRsvps()
  ]);
  return {
    exportedAt: new Date().toISOString(),
    eventDetails,
    gifts,
    rsvps
  };
}

export async function deleteAllData() {
  // Apaga tudo: presentes, RSVPs, e detalhes do evento
  const [gifts, rsvps] = await Promise.all([
    getAllGifts(),
    getAllRsvps()
  ]);
  const batch = writeBatch(db);
  gifts.forEach(g => batch.delete(doc(db, "gifts", g.id)));
  rsvps.forEach(r => batch.delete(doc(db, "rsvps", r.id)));
  batch.delete(EVENT_DOC);
  await batch.commit();
}

// ============================================================
// SEED INICIAL — popula a lista de presentes caso esteja vazia
// ============================================================
export async function seedGiftsIfEmpty(defaultGifts) {
  const existing = await getAllGifts();
  if (existing.length > 0) {
    console.log("[Firebase] Gifts already exist, skipping seed");
    return false;
  }
  console.log("[Firebase] Seeding initial gifts:", defaultGifts.length);
  const batch = writeBatch(db);
  defaultGifts.forEach(g => {
    const newDoc = doc(giftsCol);
    batch.set(newDoc, cleanGift(g));
  });
  await batch.commit();
  return true;
}
