# FIX_R1.md — Round fix + immagini · Istruzioni per Claude Code
> Repo: `fabiodelli/portfolio` (+ coda finale per `villa-levante-demo`). Fonte di stile: DESIGN.md.
> Contesto: sito live su fabiodelli.com, migrazione Notturno completata. Questo round chiude i difetti emersi in review live e sostituisce i placeholder "ritratto" con contenuto reale.

## Blocco 1 — Bug fix
1. **Lang switcher (404 su IT→EN).** `components/lang-switcher.tsx`: i pathname interni IT iniziano con `/it`, quindi `/en${pathname}` produce `/en/it/...`. Fix:
   ```ts
   const clean = pathname.replace(/^\/(it|en)/, '') || '/'
   const href = lang === 'it' ? (clean === '/' ? '/en' : `/en${clean}`) : clean
   ```
   Verificare su: home, about, contact, entrambi i case study, in entrambe le direzioni.
2. **deviceUrl fittizio.** `dictionaries/it.ts` (righe ~79, ~148) e `en.ts` (~80, ~149): `'villalevante.it'` → `'villa-levante-demo.vercel.app'` (dominio reale; quello fittizio non è posseduto).
3. **Stringa hardcoded non tradotta.** `app/[lang]/page.tsx` riga ~115: "Interlocutore unico · Versilia" appare anche in EN. Spostare nei dictionaries: IT `"Interlocutore unico · Versilia"`, EN `"Single point of contact · Versilia"`. (Nota: la card che la contiene viene comunque sostituita nel Blocco 3 — assicurarsi che il nuovo componente prenda i testi dai dictionaries.)

## Blocco 2 — Screenshot reali (Playwright)
1. Installare Playwright come devDependency (`npm i -D playwright && npx playwright install chromium`).
2. Script `scripts/capture.mjs` che cattura e salva in `public/shots/`:
   - `https://villa-levante-demo.vercel.app` → desktop 1440×900 (`villa-levante-desktop.png`) e mobile 390×844 (`villa-levante-mobile.png`)
   - Se fattibile: aprire il widget chat (click sul launcher) e catturare con la conversazione visibile (`villa-levante-chat.png`) — è lo scatto più prezioso. Se il selettore non è stabile, saltare senza bloccare.
   - `https://softale.app` → desktop 1440×900 (`softale-desktop.png`)
   - `https://fabiodelli.com` → solo per OG temporanea, vedi Blocco 4
3. Ottimizzare: PNG → comprimere o convertire a WebP ≤ 200KB ciascuno.
4. Montarli con `next/image` nelle cornici device esistenti (home project cards + pagine case study), con il trattamento DESIGN.md §3.3: cornice `--espresso`, bordo `--calce-12`, `filter: brightness(.96) saturate(.95)`. `alt` descrittivi in IT/EN da dictionaries.
5. Lo script NON va eseguito in build/CI: è manuale (`node scripts/capture.mjs`), gli scatti si committano.

## Blocco 3 — Sostituire i placeholder "ritratto"
Principio: niente formati che *evocano* una foto mancante (4:5 verticale + elemento centrato). Il monogramma FD resta come firma, non come protagonista.
1. **Home, hero destra** (`card-portrait` in `app/[lang]/page.tsx`): sostituire con una **mini-chat statica** (componente `HeroChatCard`):
   - Superficie `--espresso`, bordo `--calce-08`, radius `--r-lg`; header sottile con pallino salvia + "Assistente AI · demo" (testo da dictionaries).
   - Tre bolle (testi nei dictionaries): ospite EN "Hi! Do you have a room for two this weekend?" → assistente IT/EN coerente con la lingua pagina: "Certo! La Camera Levante è disponibile: 180€/notte, colazione inclusa. Vuoi procedere con la prenotazione diretta?" → chip/bottone finto "Prenota ora · senza commissioni" in ambra.
   - Bolle assistente: fondo `--espresso-2`; bolla ospite: bordo `--calce-12`. Niente animazioni complesse; al massimo il reveal già esistente.
   - Footer card: sigillo FD piccolo + "Fabio Delli · Versilia" in `--calce-60`.
2. **About, slot portrait** (`app/[lang]/about/page.tsx`): sostituire il riquadro 4:5 con una **card "Come lavoro"** (componente `MethodCard`): tre righe numerate — 01 Ascolto (capire il flusso reale), 02 Costruisco (su misura, integrato con ciò che usi), 03 Accompagno (manutenzione e miglioramento continuo) — numeri Spectral 300 ambra, titoli Schibsted 500, descrizioni `--calce-60`. Chiusura: divider `--calce-08` + sigillo FD piccolo allineato a destra. Testi IT/EN nei dictionaries.
3. Rimuovere CSS ora orfano (`card-portrait*`, `.portrait` se non riusato).

## Blocco 4 — OG image temporanea
In attesa dell'asset finale da Claude Design: generare OG 1200×630 via `next/og` (route `opengraph-image.tsx` per [lang]): fondo `--notte`, "Fabio Delli" Spectral/serif `--calce`, payoff breve `--calce-60`, linea ambra. Vale per home; le altre pagine ereditano. Twitter card → `summary_large_image`.

## Blocco 5 — Verifica e chiusura
- [ ] Build clean; switcher testato su tutte le pagine nelle due direzioni
- [ ] Lighthouse rapido su home (immagini ottimizzate, no CLS dalle nuove card)
- [ ] Grep: zero `villalevante.it`, zero stringhe IT hardcoded nei componenti condivisi
- [ ] Anteprima OG verificata (es. con un validatore locale o metatags.io)
- [ ] STATUS.md aggiornato con il round e le decisioni prese

---

# Coda — repo `villa-levante-demo` (ora sbloccata: dominio attivo)
1. Sostituire ogni riferimento a `effedi.dev` (footer, meta, costanti) con link a `https://fabiodelli.com`, testo "costruito da Fabio Delli".
2. STATUS.md: annotare il cambio e che il deploy live è confermato.
