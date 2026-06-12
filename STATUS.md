# STATUS — Portfolio Fabio Delli

Aggiornato: 2026-06-12 (FIX_R2)

## Blocchi completati

- [x] **Block 0** — Scaffold Next.js 16 + TS + Tailwind 4, CLAUDE.md, package.json, repo GitHub pubblico
- [x] **Block 1** — Foundation: proxy.ts, [lang]/layout, Nav, Footer, dictionaries IT+EN, robots.ts, sitemap.ts, hreflang helper, UI primitives (Button, Card, Badge)
- [x] **Block 2** — Home page IT + EN (Hero, Services, Projects, Why me, CTA banner, JSON-LD Person + ProfessionalService)
- [x] **Block 3** — Case study Villa Levante IT + EN (Claudia: costi, ricavi, integrazione, stack, CTA demo + contatti)
- [x] **Block 4** — Case study Softale IT + EN (cos'è, pipeline, proof box, stack, CTA softale.app + contatti)
- [x] **Block 5** — Chi sono IT + EN + Contatti IT + EN (form mailto, email, LinkedIn)
- [x] **Block 6** — Redesign completo "Direzione Chiara" (marble/warm-paper + sea-blue + bronze, Fraunces+Inter)

## Migrazione Notturno — completata 2026-06-10

- [x] **Blocco 0** — Archiviati mockup HTML in `design system/_archivio-direzione-chiara/`, `DESIGN.md` copiato in root
- [x] **Blocco 1** — Token Notturno in `globals.css` (notte/espresso/calce/ambra/salvia), font Spectral+Schibsted Grotesk, `color-scheme: dark`, `::selection`, focus-visible, `<meta name="theme-color">`
- [x] **Blocco 2** — `button.tsx`, `card.tsx`, `badge.tsx` aggiornati a Notturno
- [x] **Blocco 3** — Nav, footer, mobile-menu, contact-form, home, villa-levante, softale, about: tutti i token inline sostituiti; CTA final e sezioni leva con `--ambra-08`; keyword hero in italic ambra; device frame con filter; classi `.on-blue`/`.btn-on-blue` rimosse
- [x] **Blocco 4** — Softale IT: `status → 'Pubblicato · softale.app'`, lead rimosso "in produzione" → "pubblicato e funzionante". EN: `status → 'Live · softale.app'`, lead → "live and working"
- [x] **Blocco 5** — Build clean (15 pagine SSG), grep zero "artigiano" e zero colori vietati (#fff, #000, vecchi hardcoded)

## Fix post-analisi — 2026-06-11

- [x] Nav CTA da ambra a ghost — rispetta la regola "un solo CTA ambra per viewport" (DESIGN.md §6)
- [x] Scroll-reveal accessibile: nascosto solo con `html.js` (script inline nel layout) — senza JS il contenuto resta visibile; aggiunto `prefers-reduced-motion`
- [x] Hero home e device hero dei case study fuori da `Reveal` (LCP non più nascosto)
- [x] Screenshot reali in `public/screenshots/` (JPEG ~300KB) nei device frame di home + case study, filter sull'immagine come DESIGN.md §3.3
- [x] URL corretti: `villa-levante-demo.vercel.app` e `www.softale.app`
- [x] Settori generici al posto di Marmo/Nautica: IT "Attività locali / Servizi / Commercio", EN "Local businesses / Services / Retail"
- [x] Refusi it.ts corretti (Un'idea, dall'inizio, all'utente)
- [x] KPI home più chiari: `−25% Commissioni OTA recuperabili`, `Testo → voce Pipeline AI completa`

### Decisioni prese (Notturno)
- Footer usa `--espresso` (più chiaro della pagina `--notte`), non più scuro — comportamento invertito rispetto ai siti chiari
- Status nei case study: da `--bronze`/`--ambra` (accento) a `--salvia` (metadato/stato) — semantica corretta
- `lever-rev` non usa più un grande fill blu ma `--ambra-08` (wash) per rispettare "ambra col contagocce"
- Proof callout Softale: da box blu pieno a `--ambra-08` + bordi `--calce-08`
- `headlineKeyword` aggiunto ai dizionari (unico campo strutturale fuori Blocco 4) per il rendering italic+ambra della headline hero

## Round FIX_R1 — completato 2026-06-10

### Blocco 1 — Bug fix
- [x] **Lang-switcher**: fix `pathname.replace(/^\/(it|en)/, '')` — risolve il 404 su IT→EN (pathname interno `/it/...` produceva `/en/it/...`)
- [x] **deviceUrl fittizio**: `villalevante.it` → `villa-levante-demo.vercel.app` in tutti e 4 i punti (it.ts home + villaLevante, en.ts home + villaLevante)
- [x] **Stringa hardcoded**: "Interlocutore unico · Versilia" spostata nei dictionaries (chiave `home.hero.chatCard.footer`); il campo è ora consumato da `HeroChatCard`

### Blocco 2 — Screenshot Playwright
- [x] `playwright` + `sharp` installati come devDependencies
- [x] `npx playwright install chromium` eseguito
- [x] `scripts/capture.mjs` creato (cattura VL desktop+mobile+chat, Softale desktop; ottimizza in WebP ≤ 200KB)
- [ ] Screenshot da catturare manualmente con `node scripts/capture.mjs` e poi committati — richiedono connessione ai domini live

### Blocco 3 — Sostituzione placeholder "ritratto"
- [x] **`HeroChatCard`** (`components/hero-chat-card.tsx`): sostituisce `card-portrait` nell'hero home; bolle ospite/assistente, chip "Prenota ora · senza commissioni" ambra, header salvia, footer FD sigillo. Testi da dictionaries (`home.hero.chatCard`).
- [x] **`MethodCard`** (`components/method-card.tsx`): sostituisce `.portrait` nell'about hero; tre step numerati Spectral 300 ambra, divider + sigillo FD. Testi da dictionaries (`about.methodCard`).
- [x] CSS orfano rimosso: `.card-portrait*`, `.fd-sigil-lg`, `.fd-name-lg`, `.fd-role-lg`, `.card-portrait-cap`, `.seal`, `.portrait`

### Blocco 4 — OG image
- [x] `app/[lang]/opengraph-image.tsx` creato via `next/og` (edge runtime): fondo notte `#16140F`, nome Spectral 300 calce, payoff IT/EN calce-60, linea ambra. Eredita a tutte le pagine del lang.
- [x] `twitter: { card: 'summary_large_image' }` aggiunto nel root layout.

### Blocco 5 — Verifica
- [x] Build clean — 15 pagine SSG, TypeScript zero errori
- [x] Grep: zero `villalevante.it`, zero stringhe IT hardcoded nei componenti condivisi
- [ ] Lighthouse (da fare post-deploy su Vercel, dopo aver catturato gli screenshot)
- [ ] Anteprima OG verificata su dominio live

### Coda villa-levante-demo
- [ ] **Da fare quando il repo è disponibile localmente**: sostituire `effedi.dev` (footer, meta, costanti) con `https://fabiodelli.com` + testo "costruito da Fabio Delli". Aggiornare STATUS.md del repo con conferma deploy live.

### Decisioni prese (FIX_R1)
- `HeroChatCard` usa testi EN per la bolla ospite in entrambe le lingue (straniero che scrive in inglese — realismo), risposta assistente localizzata IT/EN
- OG image in edge runtime → route dinamica (`ƒ`), non SSG — accettabile: le immagini OG non sono nel critical path della pagina
- Playwright Chromium installato ma cattura manuale: gli screenshot sono asset statici da committare, non da rigenerate in CI

## Definition of Done

- [x] Tutte le pagine SSG e indicizzabili — robots aperto, sitemap con IT+EN, generateMetadata per pagina
- [x] Versioni IT + EN complete con hreflang corretti (pageAlternates helper)
- [x] Case study Villa Levante con link al demo live (placeholder: villa-levante-demo.vercel.app)
- [x] Case study Softale con link a softale.app
- [ ] Responsive verificato visivamente — verificare su Vercel dopo deploy
- [ ] Lighthouse ≥ 90 — verificare dopo deploy su Vercel
- [x] CTA incontro conoscitivo su Home, case study e Contatti
- [x] Zero occorrenze della parola "artigiano" nel contenuto del sito

## Round FIX_R2 — completato 2026-06-12

- [x] **Blocco 1 — Email**: `fabio@fabiodelli.com` → `contact@fabiodelli.com` in `dictionaries/it.ts` e `en.ts`. Grep zero residui su tutto il repo.
- [x] **Blocco 2 — Headline hero**: IT `'Semplifico il lavoro ripetitivo e ti restituisco le ore.'` (accent: "ti restituisco le ore"); EN `'I simplify repetitive work and give you back your hours.'` (accent: "give you back your hours"). Sottotitolo lead: IT `— e le giornate tornano…`; EN `— so your days go back…`.
- [x] **Blocco 3 — CTA → `#form`**: `nav.tsx` e `footer.tsx` aggiornati inline; `home.hero.ctaHref` e `home.cta.href` aggiornati nei dizionari IT+EN. La voce di menu "Contatti" resta su `/contact`.

### Coda villa-levante-demo (ancora aperta)
- [ ] Footer `app/page.tsx`: "costruito da Fabio Delli" con link a `https://fabiodelli.com` (rimpiazza `effedi.dev`)
- [ ] Metadata `app/layout.tsx`: sostituire `effedi.dev` con `fabiodelli.com`
- [ ] Placeholder login `app/login/page.tsx`: `contact@fabiodelli.com` (o `nome@esempio.it`)
- [ ] STATUS.md del repo villa-levante-demo: annotare il cambio

## TODO post-deploy

1. **Dominio**: acquistare fabiodelli.com, aggiornare `SITE_URL` in `lib/metadata.ts`
2. **Demo Villa Levante**: aggiornare `villaLevanteDemo` / `ctaHref` nelle dictionaries
3. **LinkedIn**: aggiornare URL LinkedIn nelle dictionaries
5. **Form contatti**: sostituire il form mailto con Formspree/Resend/altro service per invio reale
6. **Calendly** (opzionale): aggiungere link Calendly per il CTA "incontro conoscitivo"
7. **OG image**: creare immagine Open Graph (1200×630) e aggiungerla in `app/opengraph-image.png`
8. **Vercel**: collegare repo GitHub al progetto Vercel per deploy automatico

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- i18n: routing `[lang]` + proxy.ts (IT default senza prefisso, EN a `/en/`)
- Deploy: Vercel (SSG implicito tramite Server Components)
- UI: componenti UI custom (Button, Card, Badge) — no shadcn
