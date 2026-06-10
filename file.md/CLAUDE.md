# CLAUDE.md — Portfolio di Fabio Delli

## Contesto business

Fabio Delli è un **AI Integration Specialist** con base in Versilia (Toscana). Costruisce soluzioni AI su misura per hotel, strutture ricettive e piccole imprese locali: assistenti conversazionali, pipeline di automazione, integrazioni con sistemi di prenotazione e gestionali.

**Progetto di riferimento principale — Villa Levante:**
Claudia è un assistente AI conversazionale multilingua (IT/EN/DE) integrato nel sito di Villa Levante, un boutique hotel. Risponde 24/7 alle domande di ospiti e potenziali clienti, riduce le ore dedicate alla gestione delle richieste ripetitive e accompagna l'utente alla prenotazione diretta (recuperando le commissioni OTA, 15–25%). Dal 2026 in Italia la rate parity non impedisce più di scontare le prenotazioni dirette senza penalità. Stack: Next.js, Vercel AI SDK, Claude Haiku 4.5 + fallback GPT-4o-mini, Supabase.

**Secondo caso — Softale:**
Web app di audio-storie generate con AI (pipeline LLM + TTS). Prodotto proprio, non commessa cliente — dimostra la capacità di portare un'idea AI dalla pipeline al dominio live. Stack: Next.js, Vercel.

---

## Questo repo — Portfolio

Sito portfolio professionale di Fabio Delli. Obiettivo: strumento credibile e indicizzabile che porti albergatori e attività locali a chiedere un incontro conoscitivo.

### Stack
- **Next.js 16** (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui
- Deploy: Vercel
- i18n: routing `[lang]` con `proxy.ts` — IT senza prefisso (default), EN a `/en/`
- Nessun `output: 'export'` — SSG implicito via Server Components su Vercel

### Struttura directory
```
app/
  [lang]/layout.tsx          # root layout con <html lang={lang}>
  [lang]/page.tsx            # home
  [lang]/case-study/villa-levante/page.tsx
  [lang]/case-study/softale/page.tsx
  [lang]/about/page.tsx      # chi sono / about
  [lang]/contact/page.tsx    # contatti / contact
  robots.ts                  # /robots.txt
  sitemap.ts                 # /sitemap.xml
dictionaries/it.ts           # contenuti IT
dictionaries/en.ts           # contenuti EN
components/                  # Nav, Footer, Hero, UI primitives
proxy.ts                     # locale routing
lib/metadata.ts              # helper per canonical + hreflang
```

### SEO
- `robots.ts` aperto (User-agent: *, Allow: /)
- `sitemap.ts` con tutte le pagine IT (no prefisso) + EN (`/en/...`)
- `generateMetadata()` per ogni pagina: title, description, OG, `alternates.languages` (hreflang)
- Dati strutturati `Person` + `ProfessionalService` (JSON-LD) nella home
- `generateStaticParams()` in `[lang]/layout.tsx` per SSG: `['it', 'en']`

### Bilingue IT + EN
- IT: `/`, `/case-study/villa-levante`, `/case-study/softale`, `/about`, `/contact`
- EN: `/en`, `/en/case-study/villa-levante`, `/en/case-study/softale`, `/en/about`, `/en/contact`
- Il proxy riscrive le richieste senza prefisso a `/it/...` internamente
- hreflang `it` → URL senza prefisso, `en` → URL con `/en/`

### Regole di tono (da POSITIONING.md)
- Divulgativo professionale: chiaro, concreto, calmo, mai gergale
- **MAI la parola "artigiano"** — usare invece: "su misura, non in serie", "cucito", "costruito per te"
- Dall'astratto al concreto: mai "automatizzo i processi" senza dire quali
- Scala umana evocata senza parole inflazionate

### Variabili da configurare
- `SITE_URL` in `lib/metadata.ts` — aggiornare al dominio reale (es. `https://fabiodelli.com`)
- Demo Villa Levante: aggiornare link in `dictionaries/*.ts`
- Email/LinkedIn in `dictionaries/*.ts`
- Formspree/Calendly endpoint in `app/[lang]/contact/page.tsx` se si aggiunge il form
