// ============================================================
// CHÁ DE BEBÉ DO ALEC — Módulo de UI partilhado
// ============================================================
// Funções e dados reutilizados entre index.html e pais.html.
// ============================================================

// ===== ÍCONES SVG POR CATEGORIA =====
export const GIFT_ICONS = {
  "monitor": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="2" y="4" width="20" height="14" rx="1.5"/><path d="M9 22h6M12 18v4"/><circle cx="12" cy="11" r="3"/><circle cx="18" cy="7" r="0.5" fill="currentColor"/></svg>',
  "nasal": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 22V10c0-2 1.5-3 4-3s4 1 4 3v12"/><circle cx="12" cy="5" r="3"/><path d="M10 14h4M10 18h4"/></svg>',
  "bottle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M9 2h6v3l-1 2v13a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2V7l-1-2V2z"/><path d="M9 11h6M9 15h6"/></svg>',
  "sterilizer": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z"/><path d="M4 8V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/><path d="M9 13c0 2 1 3 3 3s3-1 3-3" stroke-dasharray="1 1.5"/><path d="M8 12c0-1 .5-2 1.5-2M16 12c0-1-.5-2-1.5-2"/></svg>',
  "pacifier": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="9" r="5"/><circle cx="12" cy="9" r="2"/><ellipse cx="12" cy="17" rx="6" ry="3"/></svg>',
  "diaper": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3 7h18l-2 8a4 4 0 0 1-4 3H9a4 4 0 0 1-4-3L3 7z"/><path d="M3 7l2-2h14l2 2M9 12h6"/></svg>',
  "diaper-cloth": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 6l16 0 -2 10c-.5 2-2 4-6 4s-5.5-2-6-4L4 6z"/><path d="M4 6l2-2h12l2 2M8 11h8M9 14h6" stroke-dasharray="1.5 1.5"/></svg>',
  "bedding": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7"/><path d="M3 14h18M3 18h18M8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  "wipes": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M9 10c1-1 2-1 3 0s2 1 3 0M9 14c1-1 2-1 3 0s2 1 3 0"/><ellipse cx="12" cy="6" rx="3" ry="1.5"/></svg>',
  "cream": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="7" y="6" width="10" height="16" rx="1"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M9 11h6M9 15h6"/></svg>',
  "bottle-spray": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 10h8v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V10z"/><path d="M10 10V6h4v4M9 6h6M14 6V3h2v3"/><circle cx="18" cy="2" r="0.5" fill="currentColor"/><circle cx="20" cy="3" r="0.5" fill="currentColor"/><circle cx="19" cy="5" r="0.5" fill="currentColor"/></svg>',
  "cotton": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><line x1="8" y1="8" x2="16" y2="16"/></svg>',
  "mat": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="3" y="7" width="18" height="10" rx="1"/><path d="M3 11h18M3 13h18" stroke-dasharray="1 1.5"/></svg>',
  "box": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="4" y="7" width="16" height="13" rx="1"/><path d="M4 11h16M4 7l2-3h12l2 3M12 7v13"/></svg>',
  "sun": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M4.5 19.5l2-2M17.5 6.5l2-2"/></svg>',
  "bin": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M5 7h14l-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 7z"/><path d="M3 7h18M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M10 12v6M14 12v6"/></svg>',
  "nail": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h6"/><circle cx="12" cy="20" r="0.5" fill="currentColor"/></svg>',
  "gas": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 22V8c0-3 3-6 6-6s6 3 6 6v14"/><circle cx="12" cy="10" r="2"/><path d="M9 22h6"/></svg>',
  "bib": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 4c0-1 1-2 2-2h4c1 0 2 1 2 2 4 1 5 5 5 8v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6c0-3 1-7 5-8z"/><circle cx="12" cy="11" r="1.5"/></svg>',
  "sling": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 4l4 16M20 4l-4 16"/><path d="M8 8c2 2 4 3 4 3s2-1 4-3"/><circle cx="12" cy="14" r="3"/><path d="M9 18l3 4 3-4"/></svg>',
  "playmat": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 7h2v2H7zM15 7h2v2h-2zM7 15h2v2H7zM15 15h2v2h-2z"/><circle cx="12" cy="12" r="2"/></svg>',
  "bag": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M5 8h14v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/><path d="M9 12h6"/></svg>',
  "corner": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3 3v6M3 3h6M3 3l8 8"/><path d="M21 21v-6M21 21h-6M21 21l-8-8"/><circle cx="12" cy="12" r="1"/></svg>',
  "clothes": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 4l-4 4 3 3 1-1v12h12V10l1 1 3-3-4-4-4 2-4-2z"/><path d="M10 4c0 1.5 1 2 2 2s2-.5 2-2"/></svg>',
  "towel": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M4 8h16M4 16h16" stroke-dasharray="2 1"/><path d="M8 5v14M16 5v14"/></svg>'
};

export function giftIconSvg(category) {
  return GIFT_ICONS[category] || GIFT_ICONS["box"];
}

// ===== HELPERS DE TEXTO =====
export function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[m]));
}

// Marca a mostrar no card: extrai do nome (após "—"), ou usa a description,
// ou cai para "Qualquer"
export function getBrandLabel(gift) {
  const desc = (gift.description || '').trim();
  const name = (gift.name || '').trim();
  const dashMatch = name.match(/[—–]\s*(.+)$/);
  if (dashMatch) return escapeHtml(dashMatch[1].trim());
  if (!desc) return 'Qualquer';
  const lower = desc.toLowerCase();
  if (lower.includes('indiferente')) return 'Qualquer';
  if (lower === 'opção alternativa' || lower === 'opcao alternativa') return 'Qualquer';
  if (/^\d+x\d+/.test(desc)) return 'Qualquer';
  return escapeHtml(desc);
}

// Nome a mostrar (sem a parte da marca extraída)
export function getDisplayName(gift) {
  const name = (gift.name || '').trim();
  const dashMatch = name.match(/^(.+?)\s*[—–]\s*.+$/);
  if (dashMatch) return escapeHtml(dashMatch[1].trim());
  return escapeHtml(name);
}

// Mostra a obs em itálico apenas se NÃO for já mostrada como marca e for útil
export function shouldShowExtraDesc(gift) {
  const desc = (gift.description || '').trim();
  if (!desc) return false;
  const lower = desc.toLowerCase();
  if (lower === 'opção alternativa' || lower === 'opcao alternativa') return false;
  if (lower.startsWith('marca indiferente')) return false;
  return getBrandLabel(gift) === 'Qualquer';
}

// ===== IDENTIDADE DO CONVIDADO =====
// Guardada em localStorage (uma vez por dispositivo)
const GUEST_KEY = 'cha-alec-guest-name';

export function getGuestName() {
  try { return localStorage.getItem(GUEST_KEY) || ''; }
  catch (e) { return ''; }
}

export function setGuestName(name) {
  try { localStorage.setItem(GUEST_KEY, name); }
  catch (e) {}
}

export function askGuestName() {
  let name = getGuestName();
  if (name) return name;
  const input = prompt('Qual é o teu nome? (será memorizado neste dispositivo para futuras reservas)');
  if (!input || !input.trim()) return null;
  name = input.trim().slice(0, 100);
  setGuestName(name);
  return name;
}

export function isOwnReservation(reservedName) {
  if (!reservedName) return false;
  const me = getGuestName();
  if (!me) return false;
  return reservedName.toLowerCase() === me.toLowerCase();
}

// ===== TOAST =====
export function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== STATUS DE CONEXÃO =====
export function showConnectionStatus(text, kind) {
  let el = document.getElementById('connection-status');
  if (!el) {
    el = document.createElement('div');
    el.id = 'connection-status';
    el.className = 'connection-status';
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.className = 'connection-status show ' + (kind || '');
  if (kind === 'loading') {
    // não esconde automaticamente
  } else {
    clearTimeout(showConnectionStatus._t);
    showConnectionStatus._t = setTimeout(() => el.classList.remove('show'), 4000);
  }
}

export function hideConnectionStatus() {
  const el = document.getElementById('connection-status');
  if (el) el.classList.remove('show');
}

// ===== RENDER DE GIFT CARDS =====
// Renderiza um array de gifts num grid, respeitando modo organizador vs convidado
export function renderGiftCards(grid, gifts, opts) {
  const {
    isOrganizer = false,
    currentFilter = 'todos',
    onReserve, onCancelReserve,
    onCancelMultiReserve, onCancelOwnMultiReserve,
    onEdit, onDelete
  } = opts;

  let filtered = gifts;
  if (currentFilter === 'disponivel') {
    filtered = gifts.filter(g => !isFullyReserved(g));
  }
  if (currentFilter === 'reservado') {
    filtered = gifts.filter(g => isFullyReserved(g) || (g.multipleReservations && (g.reservations || []).length > 0));
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state">~ sem presentes nesta categoria ~</div>';
    return;
  }

  grid.innerHTML = filtered.map(g => buildGiftCardHtml(g, { isOrganizer })).join('');

  // Anexar event listeners
  grid.querySelectorAll('[data-action]').forEach(el => {
    const action = el.dataset.action;
    const id = el.dataset.id;
    const idx = el.dataset.idx;
    el.addEventListener('click', (e) => {
      if (action === 'reserve' && onReserve) onReserve(id);
      else if (action === 'cancel-single' && onCancelReserve) onCancelReserve(id);
      else if (action === 'cancel-multi' && onCancelMultiReserve) onCancelMultiReserve(id, parseInt(idx, 10));
      else if (action === 'cancel-own-multi' && onCancelOwnMultiReserve) onCancelOwnMultiReserve(id);
      else if (action === 'edit' && onEdit) onEdit(id);
      else if (action === 'delete' && onDelete) onDelete(id);
    });
  });
}

function isFullyReserved(gift) {
  if (gift.multipleReservations) return false;
  return !!gift.reserved;
}

function buildGiftCardHtml(g, { isOrganizer }) {
  const isMulti = !!g.multipleReservations;
  const reservations = isMulti ? (g.reservations || []) : [];
  const fullyReserved = isFullyReserved(g);
  const iReserved = isMulti
    ? reservations.some(r => isOwnReservation(r))
    : isOwnReservation(g.reservedBy);

  // Texto "reservado por X" para singulares
  const showReservedByLabel = !isMulti && g.reservedBy && (isOrganizer || iReserved);
  const reservedByLabel = showReservedByLabel
    ? (iReserved ? ' · reservado por ti' : ' · reservado por ' + escapeHtml(g.reservedBy))
    : '';

  // Bloco de reservas múltiplas (com privacidade)
  let multiBlock = '';
  if (isMulti && reservations.length > 0) {
    const visible = isOrganizer
      ? reservations.map((r, idx) => ({ name: r, idx, mine: isOwnReservation(r) }))
      : reservations
          .map((r, idx) => ({ name: r, idx, mine: isOwnReservation(r) }))
          .filter(x => x.mine);
    const title = isOrganizer
      ? `Reservado por ${reservations.length}:`
      : (reservations.length === 1 ? `Reservado por 1 pessoa` : `Reservado por ${reservations.length} pessoas`);
    const pillsHtml = visible.map(item =>
      `<button class="gift-reservation-pill ${item.mine ? 'mine' : ''}" data-action="cancel-multi" data-id="${g.id}" data-idx="${item.idx}" title="${item.mine ? 'Cancelar a tua reserva' : 'Cancelar reserva de ' + escapeHtml(item.name)}">${escapeHtml(item.name)}${item.mine ? ' (tu)' : ''} <span class="pill-x">×</span></button>`
    ).join('');
    multiBlock = `
      <div class="gift-reservations">
        <div class="gift-reservations-title">${title}</div>
        ${pillsHtml ? `<div class="gift-reservations-list">${pillsHtml}</div>` : ''}
      </div>`;
  }

  // Botões de organizador (editar/eliminar)
  const orgButtons = isOrganizer
    ? `<button class="gift-delete" data-action="delete" data-id="${g.id}" title="Remover">×</button>
       <button class="gift-edit" data-action="edit" data-id="${g.id}" title="Editar">✎</button>`
    : '';

  // Botão de acção
  let actionBtn;
  if (isMulti) {
    if (iReserved) {
      actionBtn = `<button class="gift-btn gift-btn-cancel" data-action="cancel-own-multi" data-id="${g.id}">Cancelar a minha</button>`;
    } else {
      const txt = reservations.length > 0 ? '+ Reservar também' : 'Reservar';
      actionBtn = `<button class="gift-btn gift-btn-reserve" data-action="reserve" data-id="${g.id}">${txt}</button>`;
    }
  } else {
    if (fullyReserved) {
      if (iReserved || isOrganizer) {
        actionBtn = `<button class="gift-btn gift-btn-cancel" data-action="cancel-single" data-id="${g.id}">Cancelar</button>`;
      } else {
        actionBtn = `<span class="gift-btn gift-btn-cancel" style="opacity:0.5; cursor:default;">Indisponível</span>`;
      }
    } else {
      actionBtn = `<button class="gift-btn gift-btn-reserve" data-action="reserve" data-id="${g.id}">Reservar</button>`;
    }
  }

  const linkBtn = (g.link && g.link !== '#' && g.link !== '')
    ? `<a href="${escapeHtml(g.link)}" target="_blank" rel="noopener" class="gift-btn gift-btn-link">Ver loja</a>`
    : `<span class="gift-btn gift-btn-link" style="opacity:0.5; cursor:default;">Sem link</span>`;

  return `
    <article class="gift-card ${fullyReserved && !isMulti ? 'reserved' : ''} ${isMulti ? 'multi' : ''}" data-id="${g.id}">
      ${orgButtons}
      <div class="gift-image">
        ${giftIconSvg(g.category)}
        ${g.image ? `<img src="${escapeHtml(g.image)}" alt="${escapeHtml(g.name)}" class="gift-photo" onerror="this.classList.add('broken')">` : ''}
      </div>
      <div class="gift-body">
        <div class="gift-store">${getBrandLabel(g)}</div>
        <div class="gift-name">${getDisplayName(g)}</div>
        ${shouldShowExtraDesc(g) ? `<div class="gift-description">${escapeHtml(g.description)}</div>` : ''}
        ${reservedByLabel ? `<div class="gift-price">${reservedByLabel}</div>` : ''}
        ${multiBlock}
        <div class="gift-actions">
          ${linkBtn}
          ${actionBtn}
        </div>
      </div>
    </article>`;
}

// ===== INTERCETOR DE PASTE EM EDITABLES =====
// Força texto plano em todos os contenteditable
export function setupPlainPaste() {
  document.querySelectorAll('[contenteditable="true"]').forEach(el => {
    el.addEventListener('paste', (e) => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData('text/plain');
      document.execCommand('insertText', false, text);
    });
  });
}
