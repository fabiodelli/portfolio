# VISION.md — Fabio Delli / Sistema Lead Generation Versilia
> Fonte di verità strategica. Aggiornare SOLO a decisioni prese, non a ogni sessione.
> Stato operativo dei repo → STATUS.md di ciascun repo. Ultimo aggiornamento: 2026-06-10 (sera)

## 0. NORTH STAR
Costruire un **sistema di generazione lead** per l'attività freelance di AI integration in Versilia.
Tutti gli asset (demo, portfolio, CV, LinkedIn) sono MEZZI per questo fine, non il fine.
Catena: asset credibili → conversazioni warm → outreach hospitality (ott–feb) → primi clienti → casi reali → loop.

## 1. CHI
- Fabio Delli, full-stack dev + AI integration specialist, Camaiore (Versilia, Toscana)
- P.IVA forfettaria · mid-junior, AI-native · Boolean 2023 · part-time con agenzia Versilweb
- Disponibilità business AI: ~15 h/settimana
- Fatturazione sempre a nome legale, indipendentemente dal brand

## 2. POSIZIONAMENTO
Pillar: "Costruisco soluzioni AI che automatizzano i processi ripetitivi delle aziende —
gestione richieste, prenotazioni, comunicazioni multilingua, qualificazione lead, preparazione
documenti — recuperando ore di lavoro ogni settimana per dedicarle a ciò che conta davvero."

- Servizi (gerarchia): 1) soluzioni AI custom · 2) sviluppo infrastrutture · 3) consulenza/audit
- Segmenti: **hospitality (beachhead, outreach ott–feb)** · marmo Pietrasanta (year-round) · nautica Viareggio (year-round)
- Differenziatori: interlocutore unico · su misura non in serie · miglior rapporto valore/prezzo vs agenzie
- Caso ROI hospitality (leva a due tempi): costi = ore risparmiate su comunicazioni multilingua ripetitive;
  ricavi = recupero commissioni OTA (Booking 15–25% vs Stripe ~2–3%; dal 2026 niente rate parity in Italia)
- Tono: divulgativo professionale (modelli: Geopop, Nova Lectio, Starting Finance). Dal concreto, mai gergale.

## 2b. DESIGN (deciso 2026-06-10)
Direzione **Notturno integrale** (da "Direzioni di Stile", Claude Design): notte #16140F · espresso #24201A · ambra #D9A441 · salvia #7FA99B · calce #F0EADE · Spectral 300 + Schibsted Grotesk. Caldo, mai nero freddo, niente ombre/glow. Spec completa: DESIGN.md nel repo portfolio. Vale per portfolio, biglietti da visita, CV, OG image.

## 3. VINCOLI NON NEGOZIABILI
- ⛔ MAI la parola "artigiano" (legalmente riservata in Italia) → usare "su misura, non in serie"
- ⛔ Nessuna foto personale in portfolio/CV
- ⛔ Onestà sugli stati: Villa Levante = "prototipo/demo", Softale = "pubblicato/MVP", MAI "in produzione" se la pipeline non è esposta commercialmente. La trasparenza è un asset di brand.
- Tariffe floor (riservato): €30/h freelance locale · RAL €33k (traccia dipendente deprioritizzata; CV solo freelance)
- Brand commerciale: **"Fabio Delli" (brand personale)** — deciso il 2026-06-10 con l'acquisto di fabiodelli.com. "Versilia Integrazioni/Sync" accantonati. ⛔ Mai riferimenti a effedi.dev (dominio non posseduto).

## 4. REGISTRO ASSET
| Asset | Stato | URL / Repo | Note |
|---|---|---|---|
| Villa Levante (demo hospitality) | ✅ LIVE | github.com/fabiodelli/villa-levante-demo · https://villa-levante-demo.vercel.app | Assistente "Claudia". Haiku 4.5 + fallback GPT-4o-mini, Supabase. Footer da correggere: cita effedi.dev |
| Portfolio | Migrazione a direzione NOTTURNO integrale in corso | github.com/fabiodelli/portfolio | IT+EN, SSG. DESIGN.md nel repo = fonte vincolante. Da Notturno derivano biglietti + CV |
| Softale | MVP online, pipeline non esposta | softale.app | Audio-storie AI (LLM + Coqui TTS locale). Proof of capability |
| Dominio | In acquisto (2026-06-10) | fabiodelli.com + .it | Prerequisito al deploy portfolio. NON possiedo effedi.dev |
| CV | In avvio (con LinkedIn) | — | Via Claude Design, coerente col tema scuro |
| LinkedIn | In lavorazione | linkedin.com/in/fabio-delli | Copy in corso in Chat |
| Biglietti da visita | Pianificati | — | Da tema scuro, via Claude Design |
| Repo context privato | Attivo | github.com/fabiodelli/context (privato) | POSITIONING.md, PIANO_SPRINT.md (pricing) |

## 5. SEQUENZA E FASI
Dipendenze: Softale ✓ → Villa Levante → Portfolio → CV → LinkedIn → outreach. Nessun outreach freddo prima del completamento.
- Fase 1 lug–set 2026: network + soft launch (conversazioni warm GIÀ in parallelo agli asset)
- Fase 2 set 2026–feb 2027: outreach attivo (hospitality concentrato ott–feb)
- Fase 3 da mar 2027: automazione e scaling → qui torna centrale il SISTEMA di lead generation automatizzato
- Villa Levante v1.5 (futuro): chat assistant nel portfolio riusando l'architettura demo

## 6. MODELLO OPERATIVO
- **Chat (questo project)**: strategia, piani cross-repo, copywriting, ricerca, review design, istruzioni per Code
- **Claude Code (Sonnet)**: implementazione repo-scoped. Legge CLAUDE.md a inizio sessione, aggiorna STATUS.md a fine blocco
- **Claude Design**: CV, brand, mockup
- Chat verifica lo stato reale clonando i repo pubblici (mai fidarsi dei riassunti se il codice è leggibile)
- Stack standard: Next.js · Vercel · Vercel AI SDK · Supabase · Claude Haiku primario / GPT-4o-mini fallback

## 7. APERTI (al 2026-06-10 sera)
- [ ] Demo: sostituire "effedi.dev" (footer + meta) con fabiodelli.com appena acquistato — PRIORITARIO
- [ ] Portfolio: eseguire MIGRAZIONE_NOTTURNO.md con Code (DESIGN.md committato in root) → poi biglietti + CV
- [ ] Portfolio: etichetta Softale "In produzione" → "Pubblicato/Online" (da fare nella migrazione tema)
- [ ] LinkedIn: completare copy e pubblicare
- [ ] Mitigazione costi: spend limit/alert su console Anthropic e OpenAI (endpoint demo pubblico)
- [ ] DEFERITI (post-asset, fase miglioramento demo): hardening /api/chat, cache probe+config, verifica fix middleware
- [ ] FUTURO: nuove demo per segmenti marmo e nautica (portfolio + esperienza)
