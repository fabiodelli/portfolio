# Portfolio — Fabio Delli

Sito portfolio di [Fabio Delli](https://fabiodelli.com), AI Integration Specialist in Versilia (Toscana). Presenta i servizi (assistenti AI, automazioni, siti AI-ready, consulenza digitale) e due case study: Villa Levante (assistente AI multilingua per hospitality, progetto dimostrativo) e Softale (web app di audio-storie AI, prodotto proprio live su [softale.app](https://www.softale.app)).

## Stack

- **Next.js 16** (App Router) + TypeScript + Tailwind CSS 4
- **Bilingue IT/EN**: routing `[lang]` via `proxy.ts` — IT senza prefisso (default), EN sotto `/en/`
- **Assistente AI in home**: AI SDK v6, Claude Haiku 4.5 con fallback GPT-4o-mini (`/api/chat`, edge)
- **Form contatti**: Resend via `/api/contact`
- **Deploy**: Vercel (SSG per le pagine di contenuto)

## Sviluppo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Variabili d'ambiente richieste (`.env.local`, vedi anche Vercel):

```
ANTHROPIC_API_KEY=   # assistente AI (primario)
OPENAI_API_KEY=      # assistente AI (fallback)
RESEND_API_KEY=      # form contatti
CONTACT_TO_EMAIL=    # destinatario form
```

## Documentazione interna

- `CLAUDE.md` — istruzioni di progetto per Claude Code
- `DESIGN.md` — design system **Notturno** (vincolante)
- `STATUS.md` — stato operativo e diario dei round di lavoro
- `file.md/VISION.md` — contesto strategico
- `file.md/PORTFOLIO_BRIEF.md` — brief di build originale
