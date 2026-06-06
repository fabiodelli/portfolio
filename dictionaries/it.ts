export const it = {
  /* ── Meta / globals ─────────────────────────────────────── */
  siteName: 'Fabio Delli',
  siteTagline: 'AI Integration Specialist — Versilia',

  /* ── Navigazione ─────────────────────────────────────────── */
  nav: {
    home: 'Home',
    caseStudies: 'Progetti',
    villaLevante: 'Villa Levante',
    softale: 'Softale',
    about: 'Chi sono',
    contact: 'Contatti',
    cta: 'Incontro conoscitivo',
    langSwitch: 'EN',
    langSwitchLabel: 'Passa all\'inglese',
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
  },

  /* ── Home ────────────────────────────────────────────────── */
  home: {
    meta: {
      title: 'Fabio Delli — AI Integration Specialist in Versilia',
      description:
        'Costruisco soluzioni AI su misura per hotel e attività locali in Versilia: assistenti conversazionali, automazioni e integrazioni cuciti sui tuoi processi.',
    },
    hero: {
      headline: 'L\'intelligenza artificiale costruita per la tua attività, non per tutte le attività',
      sub: 'Sono Fabio Delli. Costruisco soluzioni AI su misura — assistenti conversazionali, automazioni, integrazioni — per hotel e strutture ricettive in Versilia.',
      cta: 'Prenota un incontro conoscitivo gratuito',
      ctaHref: '/contact',
      secondary: 'Scopri i progetti',
      secondaryHref: '#projects',
    },
    services: {
      title: 'Cosa costruisco',
      items: [
        {
          title: 'Soluzioni AI custom',
          desc: 'Assistenti conversazionali, chatbot e agenti AI cuciti sul tuo flusso di lavoro — non su quello del tuo concorrente.',
          icon: '🤖',
        },
        {
          title: 'Sviluppo e integrazione infrastruttura',
          desc: 'Connetto l\'AI ai sistemi che già usi: booking engine, CRM, gestionale. Zero reinvenzione della ruota.',
          icon: '🔗',
        },
        {
          title: 'Consulenza e audit',
          desc: 'Valutiamo insieme dove l\'AI ti fa guadagnare ore o clienti, e dove invece è ancora prematuro.',
          icon: '🔍',
        },
      ],
    },
    projects: {
      title: 'Progetti',
      viewProject: 'Scopri il case study',
      villaLevante: {
        title: 'Villa Levante',
        desc: 'Assistente AI conversazionale multilingua (IT · EN · DE) per un boutique hotel in Versilia: risposta 24/7, prenotazioni dirette aumentate.',
        tag: 'Hotel · AI conversazionale',
        href: '/case-study/villa-levante',
      },
      softale: {
        title: 'Softale',
        desc: 'Web app che genera audio-storie personalizzate con AI. Dalla pipeline LLM al prodotto pubblicato.',
        tag: 'Prodotto proprio · AI generativa',
        href: '/case-study/softale',
      },
    },
    why: {
      title: 'Perché scegliermi',
      items: [
        {
          title: 'Interlocutore unico',
          desc: 'Ideazione, sviluppo, messa in produzione e assistenza: un solo referente. Nessun rimbalzo tra agenzie.',
        },
        {
          title: 'Su misura, non in serie',
          desc: 'Ogni soluzione è costruita per i tuoi processi, il tuo booking engine, il tuo gestionale. Non è un template rinominato.',
        },
        {
          title: 'Più valore per euro',
          desc: 'Struttura leggera, senza i costi fissi di una grande agenzia. Il budget va in soluzione, non in overhead.',
        },
      ],
    },
    cta: {
      text: 'Hai un\'idea o vuoi capire se l\'AI fa al caso tuo?',
      button: 'Parliamo — è gratis',
      href: '/contact',
    },
  },

  /* ── Case study Villa Levante ────────────────────────────── */
  villaLevante: {
    meta: {
      title: 'Case study — Claudia, assistente AI per Villa Levante',
      description:
        'Claudia: assistente AI conversazionale multilingua per un boutique hotel in Versilia. Risponde 24/7 in IT/EN/DE, aumenta le prenotazioni dirette.',
    },
    breadcrumb: 'Case study',
    tag: 'Hotel · AI conversazionale',
    disclaimer: 'Esempio dimostrativo',
    title: 'Claudia — Assistente AI per un boutique hotel',
    lead: 'Un assistente conversazionale multilingua (IT · EN · DE) disponibile 24 ore su 24, 7 giorni su 7, integrato nel sito di un boutique hotel in Versilia.',
    sections: {
      whatIs: {
        title: 'Cos\'è Claudia',
        body: 'Claudia risponde in tempo reale alle domande di ospiti e potenziali clienti: orari check-in/out, servizi disponibili, politica di cancellazione, indicazioni per raggiungere la struttura. Niente form, niente attese, niente email rimaste senza risposta alle 23.',
      },
      costs: {
        title: 'Il valore — lato costi',
        body: 'Risponde 24/7 in tre lingue alle domande che altrimenti impegnano il personale. Ore recuperate ogni settimana, servizio percepito come più reattivo, gestione dell\'arrivo ospiti più fluida anche nei periodi di picco.',
      },
      revenue: {
        title: 'Il valore — lato ricavi',
        body: 'Un ospite trova la struttura su Booking, poi cerca il prezzo migliore direttamente sul sito. Claudia lo accoglie, scioglie i dubbi, lo guida alla prenotazione diretta. Risultato: recupero del 15–25% di commissioni OTA. Dal 2026 in Italia la rate parity non impedisce più di scontare le prenotazioni dirette senza penalità — un vantaggio concreto da sfruttare.',
      },
      payment: {
        title: 'Integrazione pagamento',
        body: 'Non reinvento la ruota: collego l\'AI al booking engine o al sistema di pagamento che già usate. L\'assistente riduce l\'abbandono del checkout diretto — senza sostituire Stripe, Stripe Payments o il tuo provider.',
      },
      stack: {
        title: 'Stack tecnico',
        items: ['Next.js', 'Vercel AI SDK', 'Claude Haiku 4.5', 'GPT-4o-mini (fallback)', 'Supabase'],
      },
    },
    cta: 'Prova il demo live',
    ctaHref: 'https://villa-levante-demo.vercel.app',
    ctaContact: 'Voglio qualcosa di simile per la mia struttura',
    ctaContactHref: '/contact',
  },

  /* ── Case study Softale ──────────────────────────────────── */
  softale: {
    meta: {
      title: 'Case study — Softale, audio-storie generate con AI',
      description:
        'Softale: web app di audio-storie generate con AI (LLM + TTS), dalla pipeline al prodotto pubblicato. Prova di capacità AI end-to-end.',
    },
    breadcrumb: 'Case study',
    tag: 'Prodotto proprio · AI generativa',
    title: 'Softale — Audio-storie generate con AI',
    lead: 'Una web app che trasforma un\'idea in un\'audio-storia completa. Non una commessa cliente: un prodotto proprio, costruito per dimostrare la capacità di portare un\'idea AI dalla pipeline al dominio live.',
    sections: {
      whatIs: {
        title: 'Cos\'è Softale',
        body: 'Softale genera audio-storie personalizzate: l\'utente sceglie genere, tono e personaggi; la pipeline AI produce il testo e lo trasforma in audio. Il risultato è una storia pronta da ascoltare.',
      },
      pipeline: {
        title: 'La pipeline tecnica',
        body: 'Orchestrazione LLM per la generazione del testo narrativo, sintesi vocale (TTS) per l\'audio. Tutto su Next.js con deploy su Vercel. Infrastruttura gestita, nessun backend custom da mantenere.',
      },
      proof: {
        title: 'Cosa dimostra',
        body: 'So portare un\'idea AI dalla pipeline al prodotto pubblicato: architettura, UX, deploy e iterazione. La stessa competenza che metto a disposizione quando costruisco soluzioni custom per te.',
      },
      stack: {
        title: 'Stack tecnico',
        items: ['Next.js', 'LLM pipeline (orchestrazione)', 'TTS (sintesi vocale)', 'Vercel'],
      },
    },
    cta: 'Visita softale.app',
    ctaHref: 'https://softale.app',
    ctaContact: 'Vuoi un prodotto AI end-to-end?',
    ctaContactHref: '/contact',
  },

  /* ── Chi sono ────────────────────────────────────────────── */
  about: {
    meta: {
      title: 'Chi sono — Fabio Delli, AI Integration Specialist',
      description:
        'Fabio Delli: specialista AI Integration, full-stack, con base in Versilia. Costruisce soluzioni AI su misura per hotel e attività locali.',
    },
    title: 'Chi sono',
    paragraphs: [
      'Sono Fabio Delli, specialista AI Integration con base in Versilia.',
      'Lavoro full-stack — dall\'architettura backend all\'interfaccia utente — con un focus specifico sull\'integrazione di modelli linguistici e pipeline AI in prodotti reali. Non POC da mettere nei cassetti: soluzioni in produzione, misurabili.',
      'Quello che mi distingue non è una nicchia tecnica stretta, ma un modo di lavorare: arrivo con tutto il necessario per portare un progetto dalla lavagna al dominio live. Un solo interlocutore, presente sul territorio, che capisce le specifiche di chi gestisce strutture ricettive o piccole imprese in Versilia.',
      'Sono AI-native dall\'inizio: ho costruito con questi strumenti quando non erano ancora "mainstream", e li uso ogni giorno tanto per il lavoro dei clienti quanto per i miei prodotti. Questo mi permette di valutare in modo onesto dove l\'AI aggiunge davvero valore — e dove invece è ancora prematuro.',
    ],
    cta: 'Parliamo del tuo progetto',
    ctaHref: '/contact',
  },

  /* ── Contatti ────────────────────────────────────────────── */
  contact: {
    meta: {
      title: 'Contatti — Fabio Delli',
      description:
        'Scrivi a Fabio Delli per un incontro conoscitivo gratuito. Senza impegno, senza pitch — solo una conversazione.',
    },
    title: 'Parliamo',
    lead: 'Hai un\'idea, vuoi un\'analisi, o vuoi semplicemente capire se l\'AI fa al caso tuo. Prenota un incontro conoscitivo gratuito — senza impegno, senza pitch.',
    emailLabel: 'Email',
    email: 'fabio@fabiodelli.com',
    linkedinLabel: 'LinkedIn',
    linkedinHref: 'https://linkedin.com/in/fabio-delli',
    linkedin: 'linkedin.com/in/fabio-delli',
    orDivider: 'oppure scrivimi direttamente',
    form: {
      nameLabel: 'Nome',
      namePlaceholder: 'Il tuo nome',
      emailLabel: 'Email',
      emailPlaceholder: 'la@tua.email',
      messageLabel: 'Come posso aiutarti?',
      messagePlaceholder: 'Descrivi brevemente il tuo progetto o la tua domanda…',
      submit: 'Invia messaggio',
    },
  },

  /* ── Footer ──────────────────────────────────────────────── */
  footer: {
    tagline: 'Soluzioni AI su misura per hotel e attività locali in Versilia.',
    caseStudies: 'Case study',
    rights: '© {year} Fabio Delli. Tutti i diritti riservati.',
    nav: {
      about: 'Chi sono',
      contact: 'Contatti',
      villaLevante: 'Villa Levante',
      softale: 'Softale',
    },
  },
} as const
