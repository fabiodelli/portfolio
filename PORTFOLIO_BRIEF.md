# PORTFOLIO — Brief di build

> Sito-portfolio professionale di Fabio Delli. Repo nuovo, dedicato.
> Identità v1: **Fabio Delli**. Dominio da acquistare — preferibilmente il nome reale (`fabiodelli.com` / `fabiodelli.it`); vedi raccomandazione. Brand commerciale innestato più avanti, quando deciso.
> Coordinamento: questo Project. Implementazione: Claude Code.
> Fonte di posizionamento: `POSITIONING.md` (repo `context`).

---

## Obiettivo
Sito credibile e **indicizzabile** che presenti Fabio come specialista AI Integration in Versilia, con due case study come prova concreta. Sostituisce la vecchia SPA Vue (invisibile ai crawler). Il sito deve essere lo strumento che porta gli albergatori (e altre attività) a chiedere un incontro conoscitivo.

## Stack e requisiti tecnici
- Next.js (App Router) + TypeScript + Tailwind + shadcn/ui, deploy su Vercel.
- **Generazione statica (SSG)** per tutte le pagine di contenuto → veloce e indicizzabile.
- **SEO**: `robots` aperto (a differenza del demo), `sitemap.xml`, metadata + OpenGraph per pagina, dati strutturati `Person` / `ProfessionalService`, HTML semantico.
- **Bilingue IT + EN da subito**: routing `[locale]` con **IT come default**, `/en` per l'inglese, `hreflang` corretti tra le due versioni. L'inglese dev'essere naturale, non una traduzione letterale.

## Tono e regole (da POSITIONING.md)
- Divulgativo professionale (Geopop / Nova Lectio / Starting Finance): chiaro, concreto, calmo, mai gergale.
- **Mai la parola "artigiano".** Evocare la scala umana con "su misura, non in serie", "cucito", "costruito per te".
- Dall'astratto al concreto in una frase: mai "automatizzo i processi" senza dire quali.

---

## Pagine

### Home
- **Hero**: frase pilastro (versione estesa) + CTA primaria all'**incontro conoscitivo gratuito**.
- **I tre servizi** in sintesi: soluzioni AI custom · sviluppo/integrazione infrastruttura · consulenza e audit.
- **Due progetti in evidenza**: card per Villa Levante e Softale, ciascuna linka al rispettivo case study.
- **Perché me** (sintesi): interlocutore unico · su misura, non in serie · più valore per euro.

### Case study — Villa Levante
Pagina dedicata. Inquadrare come *"ecco cosa costruisco per te"*. Contenuti:
- Cos'è: assistente AI conversazionale (Claudia) per un boutique hotel, multilingua (IT/EN/DE), 24/7. Dichiarare che è un esempio dimostrativo.
- **La leva di valore, in due tempi:**
  - *Lato costi* — risponde 24/7 in tre lingue alle domande ripetitive di ospiti e potenziali clienti, liberando ore ogni settimana.
  - *Lato ricavi* — quando l'ospite che ti ha trovato su Booking arriva sul tuo sito per cercare il prezzo migliore, l'AI lo accoglie a caldo, scioglie i dubbi e lo accompagna alla prenotazione diretta — recuperando il 15-25% di commissione OTA, che dal 2026 in Italia si può anche scontare apertamente senza penalità (rimozione rate parity).
- Posizionamento dell'integrazione pagamento: *"non reinvento la ruota, collego l'AI al sistema di prenotazione/pagamento che già usate"* — l'AI riduce l'abbandono del checkout diretto, non sostituisce Stripe o il booking engine.
- Stack: Next.js, Vercel AI SDK, Claude Haiku 4.5 + fallback GPT-4o-mini, Supabase.
- **CTA**: link al demo live.

### Case study — Softale
Pagina dedicata. Inquadrare onestamente come *prodotto proprio / proof of capability*, non commessa cliente. Contenuti:
- Cos'è: web app di audio-storie generate con AI. Dimostra la capacità di costruire un **prodotto AI end-to-end**.
- Punti tecnici: pipeline generativa con orchestrazione LLM per la storia + sintesi vocale (TTS), su Next.js, deploy Vercel.
- Messaggio: "so portare un'idea AI dalla pipeline al prodotto pubblicato", che sostanzia la credibilità tecnica dietro le soluzioni custom.
- **CTA**: link a softale.app.

### Chi sono
- Posizionamento: specialista AI Integration, full-stack, AI-native dall'inizio del percorso.
- Narrativa: interlocutore unico e presente sul territorio, scala umana (mai "artigiano").
- Versilia. Tono umano, non curriculare.

### Contatti
- Email `fabio@[dominio scelto]`, LinkedIn, CTA all'incontro conoscitivo. Form semplice opzionale.

---

## Bridge / repo
Repo nuovo → aggiungi un `CLAUDE.md` con il blocco "Contesto business" copiato (da Villa Levante) + sezione "Questo repo" specifica per il portfolio (stack, requisiti SEO, bilingue IT/EN, regole di tono). Mantieni `STATUS.md` aggiornato a fine blocco.

## Avvio operativo (per Code)
Crea il repo **prima**, poi sviluppa in incrementi:
1. Inizializza il progetto Next.js + primo commit di scaffold; crea il repo remoto **pubblico** su GitHub e pusha.
2. Sviluppa per blocchi (setup i18n + SEO → home → case study → chi sono/contatti), committando e pushando a ogni blocco e aggiornando `STATUS.md`.

Prerequisito lato macchina: `gh` (GitHub CLI) autenticato, così Code può creare il remoto e pushare da solo. Nessun segreto nel repo (eventuali chiavi in `.env`, configurate su Vercel).

## Definition of Done
- [ ] Tutte le pagine SSG e **indicizzabili** (robots aperto, sitemap, metadata/OG per pagina)
- [ ] Versioni IT + EN complete con hreflang corretti
- [ ] I due case study live, con link funzionanti al demo Villa Levante e a softale.app
- [ ] Responsive verificato, Lighthouse (Performance/SEO/Accessibilità) ≥ 90
- [ ] CTA incontro conoscitivo presente su Home, case study e Contatti
- [ ] Nessuna occorrenza della parola "artigiano"
