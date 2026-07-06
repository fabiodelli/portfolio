# STATUS — Portfolio Fabio Delli

Aggiornato: 2026-07-06 (Form contatti Resend + fix i18n)

## Round FORM_CONTATTI — completato 2026-07-06

- [x] **`app/api/contact/route.ts`**: nuova route Node (non edge) che valida i campi (nome+email obbligatori, limiti lunghezza), honeypot anti-spam (`website`), invia via Resend a `CONTACT_TO_EMAIL` con `replyTo` del visitatore
- [x] **`components/contact-form.tsx`**: POST JSON a `/api/contact` (rimosso l'ID Formspree placeholder `xpwxywqz` che causava l'errore a ogni invio), aggiunto honeypot nascosto, messaggio d'errore localizzato da dizionario (rimosso hardcoded IT con em dash)
- [x] **Dizionari**: aggiunta `contact.form.errorMessage` IT+EN; `footer.rights` aggiornata a "© {year} Fabio Delli · Versilia, Toscana/Tuscany"
- [x] **Fix i18n**: `footer.tsx` ora usa `dict.footer.rights` (prima copyright hardcoded in italiano anche su EN); `nav.tsx` aria-label localizzato via nuova chiave `nav.ariaLabel`
- [x] **`.env.local`**: aggiunte `RESEND_API_KEY` (da riempire) e `CONTACT_TO_EMAIL=contact@fabiodelli.com` (redirect attivo confermato)
- [x] LinkedIn `linkedin.com/in/fabio-delli` confermato corretto da Fabio

### Azioni residue per Fabio (Resend)
1. Verificare che il dominio in Resend sia scritto `fabiodelli.com` (due L)
2. Aggiungere i record DNS (DKIM+SPF) mostrati da Resend nel pannello del dominio, poi "Verify DNS Records"
3. Creare API key (Sending access) → incollarla in `.env.local` (`RESEND_API_KEY=`)
4. Su Vercel: aggiungere `RESEND_API_KEY` e `CONTACT_TO_EMAIL` (Production + Preview)

Finché la key non è configurata la route risponde 503 e il form mostra l'errore localizzato.

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

## Round FIX_ASSISTENTE_HOME — completato 2026-06-25

- [x] **Merge risolto**: conflitti HEAD vs origin/master in `it.ts` ed `en.ts` (headline definitiva mantenuta; "Consulenza digitale" da remote; punteggiatura da remote)
- [x] **Dizionari aggiornati**: `chatCard` con `welcome`, `starters`, `inputPlaceholder`, `errorMessage` (sostituisce `bubbleGuest`/`bubbleAssistant`/`chipCta`); `services.title` senza numero fisso; nuovo `service 04` sito/app AI-native. IT + EN.
- [x] **Dipendenze AI SDK v6**: `ai@^6`, `@ai-sdk/anthropic@^3`, `@ai-sdk/openai@^3`, `@ai-sdk/react@^3` installate
- [x] **`lib/ai/providers.ts`**: `primaryModel` (Haiku 4.5) + `fallbackModel` (gpt-4o-mini)
- [x] **`lib/ai/portfolio-assistant-prompt.ts`**: system prompt completo con positioning, regole ferme, chiusura morbida
- [x] **`app/api/chat/route.ts`**: edge route, cap 16 turni + 1500 char, fallback automatico su OpenAI, `x-model-used` header
- [x] **`components/hero-chat-card.tsx`**: riscritta come `'use client'` con `useChat` (AI SDK v6 API: `sendMessage`, `status`, `parts`); welcome statico + 3 chip avvio; input pill + bottone ambra; indicatore typing; autoscroll; gestione errori
- [x] **`app/globals.css`**: aggiunte classi `.hcc-messages`, `.hcc-starters`, `.hcc-starter-chip`, `.hcc-input-row`, `.hcc-input`, `.hcc-send-btn`, `.hcc-typing`
- [x] **`.env.local`**: chiavi Anthropic + OpenAI (stesse di Villa Levante, gitignored)
- [x] **Build clean**: TypeScript zero errori, 16 pagine SSG + 1 route edge `/api/chat`

### Note tecniche (AI SDK v6)
- `useChat()` non accetta `api:` — usa `DefaultChatTransport` con `/api/chat` come default
- Messaggi hanno `parts[]` non `content` — usare `isTextUIPart` da `ai` per filtrare
- `sendMessage({ text })` sostituisce `input`/`handleSubmit` — stato input gestito localmente

### Nota per Fabio (azione richiesta prima o subito dopo il deploy)
- Console Anthropic: impostare spend limit + alert email
- Console OpenAI: impostare usage limit hard + soft + alert
- Aggiungere `ANTHROPIC_API_KEY` e `OPENAI_API_KEY` su Vercel (Production + Preview)

## Round FIX_R4 — completato 2026-06-14

- [x] **Blocco 1 — Headline definitiva**: IT `'Tolgo dalle tue giornate il lavoro che si ripete. Le ore tornano tue.'` / EN `'I take the repetitive work off your days. The hours become yours again.'` Accent in ambra: IT `'Le ore tornano tue.'` / EN `'The hours become yours again.'` `HeadlineWithKeyword` funziona con sottostringa esatta — nessuna modifica al componente necessaria.
- [x] **Blocco 2 — Pulizia copy settoriale**: rimosso l'unico assolutismo chiaro: `services.items[0].gain` citava "commissioni OTA" (esclusivamente hospitality) in un tile generico → sostituito con "clienti acquisiti direttamente, senza commissioni di piattaforma" / "clients acquired directly, without platform commissions".
- [ ] **Blocco 2 — Da valutare con Fabio** (non modificato d'iniziativa):
  - `home.meta.description` / `about.meta.description` IT+EN: "hotel e attività locali" / "hotels and local businesses" — già plurale ma hotel in pole position. Considerare "attività locali e professionisti" o simile se si vuole bilanciare.
  - `about.narrativa.paragraphs[2]` IT: "prenotazioni dirette" / EN "direct bookings" — usato come esempio concreto in un paragrafo generico. In italiano "prenotazioni" è polisemico, ma in EN "bookings" suona più hospitality. Valutare sostituzione con "risultati diretti" / "direct outcomes" o lasciare come esempio.

## Round FIX_R3 — completato 2026-06-14

- [x] **Blocco 1 — Em dash rimossi**: tutti i trattini lunghi (`—`) sostituiti in `dictionaries/it.ts` e `en.ts` con punteggiatura contestuale (`:`, `,`, `( )`, `·`). Zero occorrenze residue nelle frasi; intervalli numerici `15–25%` conservati.
- [x] **Blocco 2 — Screenshot reali**: catturati `villa-levante-desktop.webp` (166KB), `villa-levante-mobile.webp` (49KB), `softale-desktop.webp` (30KB) via Playwright + sharp in `public/shots/`. Chat screenshot saltato (overlay intercetta il click — noto). Path aggiornati da `/screenshots/*.jpg` a `/shots/*.webp` in home + entrambi i case study. Filter `brightness(.96) saturate(.95)` applicato come da DESIGN.md §3.3.
- [x] **Blocco 3 — villa-levante-demo**: zero `effedi` nel repo (→ `fabiodelli.com`). Hero badge, footer, metadata, login placeholder, .env.local.example, README tutti aggiornati. Commit su master del repo demo.

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
