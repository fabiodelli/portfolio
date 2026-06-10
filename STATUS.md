# STATUS — Portfolio Fabio Delli

Aggiornato: 2026-06-10

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

### Decisioni prese (Notturno)
- Footer usa `--espresso` (più chiaro della pagina `--notte`), non più scuro — comportamento invertito rispetto ai siti chiari
- Status nei case study: da `--bronze`/`--ambra` (accento) a `--salvia` (metadato/stato) — semantica corretta
- `lever-rev` non usa più un grande fill blu ma `--ambra-08` (wash) per rispettare "ambra col contagocce"
- Proof callout Softale: da box blu pieno a `--ambra-08` + bordi `--calce-08`
- `headlineKeyword` aggiunto ai dizionari (unico campo strutturale fuori Blocco 4) per il rendering italic+ambra della headline hero

## Definition of Done

- [x] Tutte le pagine SSG e indicizzabili — robots aperto, sitemap con IT+EN, generateMetadata per pagina
- [x] Versioni IT + EN complete con hreflang corretti (pageAlternates helper)
- [x] Case study Villa Levante con link al demo live (placeholder: villa-levante-demo.vercel.app)
- [x] Case study Softale con link a softale.app
- [ ] Responsive verificato visivamente — verificare su Vercel dopo deploy
- [ ] Lighthouse ≥ 90 — verificare dopo deploy su Vercel
- [x] CTA incontro conoscitivo su Home, case study e Contatti
- [x] Zero occorrenze della parola "artigiano" nel contenuto del sito

## TODO post-deploy

1. **Dominio**: acquistare fabiodelli.com, aggiornare `SITE_URL` in `lib/metadata.ts`
2. **Demo Villa Levante**: aggiornare `villaLevanteDemo` / `ctaHref` nelle dictionaries
3. **Email**: aggiornare `fabio@fabiodelli.com` con l'email reale se diversa
4. **LinkedIn**: aggiornare URL LinkedIn nelle dictionaries
5. **Form contatti**: sostituire il form mailto con Formspree/Resend/altro service per invio reale
6. **Calendly** (opzionale): aggiungere link Calendly per il CTA "incontro conoscitivo"
7. **OG image**: creare immagine Open Graph (1200×630) e aggiungerla in `app/opengraph-image.png`
8. **Vercel**: collegare repo GitHub al progetto Vercel per deploy automatico

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- i18n: routing `[lang]` + proxy.ts (IT default senza prefisso, EN a `/en/`)
- Deploy: Vercel (SSG implicito tramite Server Components)
- UI: componenti UI custom (Button, Card, Badge) — no shadcn
