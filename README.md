# Chá de Bebé do Alec 🐉

Site para celebrar a chegada do nosso pequeno príncipe.

## URLs

- **Convidados:** `https://[utilizador].github.io/cha-do-alec/`
- **Pais (organizadores):** `https://[utilizador].github.io/cha-do-alec/pais.html`

## Estrutura

```
cha-do-alec/
├── index.html              # Site público (convidados)
├── pais.html               # Painel dos pais (organizadores)
├── assets/
│   ├── styles.css          # CSS partilhado
│   ├── firebase-data.js    # Camada de dados (Firestore)
│   ├── ui.js               # Componentes UI partilhados
│   ├── default-gifts.js    # Seed inicial dos presentes
│   └── convite-alec.png    # Imagem do convite
└── imagens/                # Imagens dos produtos (futuro)
```

## Funcionalidades

### Para convidados (`index.html`)
- Ver os detalhes do evento
- Ver lista de presentes com filtros (todos / disponíveis / reservados)
- Reservar presentes
- Cancelar as suas próprias reservas
- Enviar / atualizar RSVP

### Para pais (`pais.html`)
- Tudo o que os convidados podem fazer
- Editar inline os textos do site (data, local, títulos)
- Adicionar / editar / remover presentes
- Toggle "várias pessoas podem reservar" por presente
- Ver todos os RSVPs com totais
- Remover RSVPs
- Exportar todos os dados em JSON (backup)
- Apagar todos os dados (pós-evento)

## Tecnologia

- **Hosting:** GitHub Pages (estático)
- **Base de dados:** Firebase Firestore (tempo real)
- **Sem framework, sem build** — HTML/CSS/JS puro com módulos ES6

## Privacidade

- Convidados não vêem nomes em reservas alheias
- Convidados vêem apenas "Reservado" ou contagem (no caso de presentes múltiplos)
- Cada convidado identifica-se uma vez por dispositivo (`localStorage`)
- Pais acedem via URL `/pais.html` (sem palavra-passe, mas não-óbvio)

## Backup e manutenção

Antes de cada mudança grande, ou pós-evento:
1. Vai a `/pais.html`
2. Clica em "⬇ Exportar JSON"
3. Guarda o ficheiro

Para limpar tudo pós-evento:
1. Exporta primeiro (ver acima)
2. Clica em "⊗ Apagar tudo"
3. Confirma escrevendo "APAGAR"

## Cores e tipografia

Tema "Reino Encantado" — paleta extraída do mood board:
- Cream `#F6F1E6`, Parchment `#E6DCC5`, Sand `#CBB892`
- Moss `#6E7358`, Forest `#4C4F3A`, Gold `#B88E4A`
- Fontes: Cinzel Decorative, Cormorant Garamond, Great Vibes
