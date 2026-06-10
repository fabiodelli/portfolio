# MIGRAZIONE_NOTTURNO.md — Istruzioni per Claude Code
> Repo: `fabiodelli/portfolio`. Obiettivo: migrare l'intero sito alla direzione **Notturno** definita in `DESIGN.md`.
> Strategia: si ricostruisce SOLO il layer di presentazione. NON toccare: routing i18n, proxy.ts, dictionaries (salvo Blocco 4), sitemap, robots, metadata/hreflang, JSON-LD.
> Prerequisito: committare `DESIGN.md` nella root del repo. È la fonte di verità: in caso di dubbio vince DESIGN.md.

## Blocco 0 — Pulizia riferimenti obsoleti
La cartella `design system/` (commit 8eedfe3) contiene mockup HTML della PRECEDENTE direzione chiara (carta/blu/bronzo, Fraunces+Inter). NON usarla come riferimento. Spostarla in `design system/_archivio-direzione-chiara/` (o eliminarla se Fabio conferma). L'unica fonte di stile è DESIGN.md.

## Blocco 1 — Fondamenta
1. `app/globals.css`: sostituire integralmente il blocco token `:root` con i token Notturno di DESIGN.md §1. Mantenere invariate le scale `--s1..--s9` e i radius `--r-*`. Aggiornare `@theme inline` mappando i nuovi nomi colore (notte, espresso, calce, ambra, salvia). Aggiungere `color-scheme: dark`, regola `::selection`, stile focus-visible globale (DESIGN.md §3.5–3.6).
2. Font: in `app/[lang]/layout.tsx` sostituire Fraunces+Inter con `Spectral` (pesi 300, 400 + italic) e `Schibsted_Grotesk` (400, 500) via `next/font/google`; esporre come `--font-spectral` / `--font-schibsted` e aggiornare `--serif`/`--sans` in globals.css.
3. `<meta name="theme-color" content="#16140F">` nel layout. `html { background: var(--notte); color: var(--calce); }`.
4. Grep di sicurezza: nessun colore hardcoded residuo (`#F6F4F1`, `#1F3A54`, `#8C7350`, `paper`, `bronze`, `blue`) fuori da globals.css. Tutti i componenti devono usare i token.

## Blocco 2 — Componenti UI
Riscrivere `components/ui/button.tsx`, `card.tsx`, `badge.tsx` secondo DESIGN.md §4 (primario ambra/on-ambra, secondario outline, card espresso+bordo, badge salvia). Eliminare ogni `shadow-*`: elevazione solo superficie+bordo.

## Blocco 3 — Componenti di pagina
1. `nav.tsx` + `mobile-menu.tsx` + `lang-switcher.tsx`: notte semitrasparente + backdrop-blur, bordo inferiore `--calce-08`, link attivo ambra.
2. `footer.tsx`: fondo `--espresso` (più chiaro della pagina, non più scuro).
3. `contact-form.tsx`: campi secondo DESIGN.md §4 (form).
4. Hero (home IT/EN): titolo Spectral 300 con la parola chiave in Italic ambra; un solo CTA ambra, il secondario outline.
5. Sezioni "leva ROI" e CTA finale: fascia con wash `--ambra-08` + bordi `--calce-08`.
6. KPI: numeri Spectral 300 ambra, label `--calce-60`.
7. Screenshot/preview demo nei case study: cornice espresso + bordo + filter come DESIGN.md §3.3.
8. `scroll-reveal.tsx`: invariato nella logica; verificare solo che non animi opacity da bianco.

## Blocco 4 — Correzioni contenuto (dictionaries IT + EN)
1. Softale, etichetta stato: `'In produzione · softale.app'` → IT `'Pubblicato · softale.app'`, EN `'Live · softale.app'`.
2. Softale, lead: `"...un prodotto proprio, in produzione."` → IT `"...un prodotto proprio, pubblicato e funzionante."` / EN `"...a product of my own, live and working."` (la pipeline generativa non è esposta commercialmente: mai dichiarare "in produzione").
3. Nessun'altra modifica ai testi.

## Blocco 5 — Verifica e chiusura
- [ ] `pnpm build` / `npm run build` senza errori
- [ ] Grep: zero occorrenze di "artigiano", zero colori vecchi hardcoded, zero `#fff`/`#000`
- [ ] Contrasto: testo piccolo mai in salvia; ambra mai su campiture grandi
- [ ] Focus visibile via tastiera su nav, bottoni, form
- [ ] Screenshot mobile + desktop di home e i due case study per review in Chat
- [ ] Aggiornare `STATUS.md`: blocco "Migrazione Notturno" completato, decisioni prese, residui aperti
- [ ] Aggiornare `CLAUDE.md`: riferimento a DESIGN.md come fonte vincolante dello stile

---

# Mini-istruzione separata — repo `fabiodelli/villa-levante-demo`
1. Sostituire ogni riferimento a `effedi.dev` (footer, meta description, eventuali costanti) con `fabiodelli.com` e testo "costruito da Fabio Delli". ⚠️ Il dominio è in fase di acquisto: linkare `https://fabiodelli.com` solo dopo conferma dell'acquisto; nel frattempo testo senza link.
2. Aggiornare STATUS.md: deploy live confermato su https://villa-levante-demo.vercel.app; annotare che hardening /api/chat e cache probe/config sono DEFERITI alla fase di miglioramento demo.
