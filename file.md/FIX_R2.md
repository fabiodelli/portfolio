# FIX_R2.md — Email, headline e coerenze · Istruzioni per Claude Code
> Repo: `fabiodelli/portfolio` (+ coda OBBLIGATORIA per `villa-levante-demo`, ancora non eseguita).
> Contesto: creata la casella reale contact@fabiodelli.com su Aruba. La vecchia fabio@ NON esiste e rimbalza.

## Blocco 0 — Sincronizzazione (PRIMA di tutto)
Il repo locale potrebbe essere indietro (lavoro da più PC). Prima di toccare qualsiasi file:
1. `git status` — se ci sono modifiche locali non committate, fermarsi e chiedere a Fabio cosa farne (commit, stash o scarto). Non procedere con file sporchi.
2. `git pull` — allineare a origin. In caso di conflitti, fermarsi e riportarli a Fabio.
3. Verificare di essere sull'ultimo commit atteso (`git log -1`) prima di iniziare il Blocco 1.
Stessa procedura nella coda per `villa-levante-demo`.

## Blocco 1 — Email (URGENTE: l'indirizzo nel footer rimbalza)
1. `dictionaries/it.ts` (~riga 369) e `en.ts` (~370): `'fabio@fabiodelli.com'` → `'contact@fabiodelli.com'`.
2. Grep di sicurezza su tutto il repo: nessuna occorrenza residua di `fabio@fabiodelli.com` (mailto, JSON-LD, metadata, pagina contatti, componenti).

## Blocco 2 — Nuova headline hero (IT + EN)
Decisa per coerenza con i biglietti da visita (stesso messaggio su carta e sito).
1. IT: `'Recupero le ore che la tua attività perde nei task ripetitivi.'` → `'Semplifico il lavoro ripetitivo e ti restituisco le ore.'` — la parte in corsivo/ambra (meccanismo accent già esistente nell'hero) diventa **"ti restituisco le ore"**.
2. EN equivalente: `'I simplify repetitive work and give you back your hours.'` — accent su **"give you back your hours"**.
3. Sottotitolo hero: evitare la ripetizione ore/tempo ora che la headline contiene già "le ore". IT: chiusura `'— così il tempo torna a ciò che conta davvero: i tuoi clienti.'` → `'— e le giornate tornano a ciò che conta davvero: i tuoi clienti.'` EN coerente (es. `'— so your days go back to what really matters: your guests and clients.'`).
4. Verificare che la nuova headline non rompa il layout hero su mobile (è più corta della precedente: ok atteso).

## Blocco 3 — CTA verso il modulo
I CTA "Incontro conoscitivo" (nav + hero + sezione finale) → `/contact#form` invece di `/contact` (l'id `form` esiste già in `contact-form.tsx`). Verificare lo scroll-to su pagina già aperta e cross-page. NON cambiare la voce di menu "Contatti", che resta su `/contact`.

## Blocco 4 — Verifica e chiusura
- [ ] Build pulita; grep zero `fabio@fabiodelli.com`
- [ ] Hero IT/EN renderizzato con il nuovo accent
- [ ] CTA atterra sul modulo
- [ ] STATUS.md aggiornato

---

# Coda OBBLIGATORIA — repo `villa-levante-demo` (terza richiesta, ancora aperta)
Occorrenze `effedi.dev` ancora presenti in: `app/page.tsx` (footer), `app/login/page.tsx` (placeholder email), `app/layout.tsx` (metadata).
1. Footer: "costruito da Fabio Delli" con link a `https://fabiodelli.com`.
2. Metadata: sostituire ogni riferimento effedi.dev con fabiodelli.com.
3. Placeholder login: `contact@fabiodelli.com` (o un placeholder neutro tipo `nome@esempio.it`).
4. STATUS.md: annotare il cambio.
