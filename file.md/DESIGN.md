# DESIGN.md — Direzione Notturno (02) · Portfolio Fabio Delli
> Design system vincolante. Fonte: "Direzioni di Stile" (Claude Design, 2026-06). Scelta: **Notturno integrale**.
> DNA invariato: editoriale, calmo, su misura, mai techy. La temperatura è CALDA: espresso e ambra, mai nero freddo.

## 1. PALETTE — token CSS
```css
:root {
  /* Superfici (dal più profondo al più alto) */
  --notte:    #16140F;   /* fondo pagina */
  --espresso: #24201A;   /* card, superfici rialzate, campi form */
  --espresso-2:#2C2720;  /* hover delle superfici, righe tabella alternate */

  /* Testo (calce con scala alpha, come l'attuale sistema ink) */
  --calce:    #F0EADE;
  --calce-80: rgba(240,234,222,.80);
  --calce-60: rgba(240,234,222,.60);
  --calce-45: rgba(240,234,222,.45);
  --calce-30: rgba(240,234,222,.30);
  --calce-12: rgba(240,234,222,.12);  /* bordi standard */
  --calce-08: rgba(240,234,222,.08);  /* bordi sottili, divider */

  /* Accenti */
  --ambra:      #D9A441;             /* accento primario: CTA, link, numeri, linee attive */
  --ambra-soft: rgba(217,164,65,.55);
  --ambra-08:   rgba(217,164,65,.08); /* wash di fondo per sezioni evidenziate */
  --salvia:     #7FA99B;             /* accento secondario: tag, badge, stati positivi */
  --salvia-soft:rgba(127,169,155,.45);
  --on-ambra:   #16140F;             /* testo su bottoni ambra: SEMPRE notte, mai bianco */
}
```
Regole d'uso: ambra col contagocce (CTA, un elemento per viewport, numeri KPI, link). Salvia solo per metadati/tag, mai per CTA. Mai ambra e salvia sullo stesso elemento.

## 2. TIPOGRAFIA
- **Display/serif**: `Spectral` — peso **300** + Italic per i titoli grandi (≥ 32px). Sotto i 24px usare peso 400 (il 300 su fondo scuro sfarfalla).
- **Corpo/sans**: `Schibsted Grotesk` — 400 corpo, 500 per label/nav/bottoni. Niente 700: il contrasto lo fa il colore, non il peso.
- Caricamento: `next/font/google` → variabili `--font-spectral`, `--font-schibsted`; mappare su `--serif` / `--sans` esistenti.
- Scala invariata rispetto al sito attuale (riusare le size correnti). Titoli hero: Spectral 300, parola chiave in *Italic* ambra (pattern del file di Design: "task ripetitivi" in corsivo).
- line-height corpo su scuro: 1.65 (leggermente più ariosa che su chiaro).

## 3. REGOLE DEL BUIO (non negoziabili)
1. **Niente ombre.** L'elevazione si fa con: superficie più chiara (espresso) + bordo `1px solid var(--calce-08)`. Hover: `--espresso-2` + bordo `--calce-12`.
2. **Niente bianco puro** (#FFF vietato). Il massimo è calce #F0EADE.
3. **Immagini e screenshot** (demo Villa Levante è chiara): dentro cornice `--espresso` con bordo `--calce-12`, radius `--r-md`, e `filter: brightness(.96) saturate(.95)` per non bucare il buio.
4. **Contrasti AA**: calce/notte ✓ · ambra/notte ✓ testo normale · salvia/notte SOLO ≥18px o bold; per testo piccolo salvia usare `--calce-60`.
5. **Focus ring**: `2px solid var(--ambra)`, offset 2px — sempre visibile, accessibilità prima dell'estetica.
6. `::selection`: fondo `--ambra`, testo `--on-ambra`. `<meta name="theme-color" content="#16140F">`. `color-scheme: dark`.

## 4. COMPONENTI
- **Button primario**: fondo `--ambra`, testo `--on-ambra`, Schibsted 500; hover: leggera desaturazione `#C99838`, mai glow.
- **Button secondario**: trasparente, bordo `--calce-12`, testo `--calce`; hover bordo `--ambra-soft`, testo ambra.
- **Card**: `--espresso`, bordo `--calce-08`, radius `--r-lg`. Kicker in salvia o `--calce-45`, uppercase, tracking +0.08em.
- **Nav**: notte semitrasparente + `backdrop-blur`, bordo inferiore `--calce-08`. Link attivo: ambra.
- **Footer**: `--espresso` (non più scuro della pagina: sul dark il footer SALE, non scende).
- **Badge/tag**: bordo `--salvia-soft`, testo salvia, fondo trasparente.
- **KPI / numeri**: Spectral 300, ambra, grandi. Label in `--calce-60`.
- **Form**: campi `--espresso`, bordo `--calce-12`, placeholder `--calce-45`, focus bordo ambra.
- **Divider di sezione**: linea `--calce-08` oppure fascia `--ambra-08` per le sezioni da evidenziare (leva ROI, CTA finale).

## 5. ESTENSIONI DI BRAND (derivano da qui)
- **Biglietti da visita**: fronte notte + nome in Spectral calce + filo ambra; retro espresso con pillar abbreviato. Stampa: ambra → Pantone 7407C circa, carta uso mano scura o stampa quadricromia su nero.
- **CV (Claude Design)**: stessi token; versione stampa = palette invertita su calce (notte→calce, calce→inchiostro, ambra invariata) per non sprecare toner.
- **OG image** (1200×630): fondo notte, "Fabio Delli" Spectral calce, payoff Schibsted `--calce-60`, linea ambra.

## 6. VIETATO
Nero #000 · bianco #FFF · ombre/glow/neon · gradienti vistosi · ambra su grandi campiture · più di un CTA ambra per viewport · pesi bold ovunque · la parola "artigiano".
