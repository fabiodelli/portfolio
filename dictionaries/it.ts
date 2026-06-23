export const it = {
  /* ── Meta / globals ─────────────────────────────────────── */
  siteName: 'Fabio Delli',
  siteTagline: 'AI Integration Specialist · Versilia',

  /* ── Navigazione ─────────────────────────────────────────── */
  nav: {
    home: 'Home',
    caseStudies: 'Progetti',
    about: 'Chi sono',
    contact: 'Contatti',
    cta: 'Incontro conoscitivo',
    langSwitch: 'EN',
    langSwitchLabel: "Passa all'inglese",
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
  },

  /* ── Home ────────────────────────────────────────────────── */
  home: {
    meta: {
      title: 'Fabio Delli · AI Integration Specialist in Versilia',
      description:
        "C'è un divario tra quello che l'AI può fare per la tua attività e quello che oggi fa. Sono Fabio Delli, specialista AI in Versilia: aiuto hotel e attività locali a colmarlo.",
    },
    hero: {
      kicker: 'Specialista AI Integration · Versilia',
      headline: "C'è un divario tra quello che l'AI può fare per la tua attività e quello che oggi fa. Sono qui per colmarlo.",
      headlineKeyword: 'Sono qui per colmarlo.',
      lead: 'Costruisco soluzioni AI cucite sulla tua realtà: richieste, prenotazioni, comunicazioni multilingua. Le giornate tornano a ciò che conta davvero: i tuoi clienti.',
      cta: 'Incontro conoscitivo gratuito',
      ctaHref: '/contact#form',
      secondary: 'Vedi i progetti',
      secondaryHref: '#progetti',
      metaLabel: '',
      sectors: 'Per ogni attività che gestisce richieste, prenotazioni o processi a mano',
      chatCard: {
        header: 'Assistente AI · demo',
        bubbleGuest: 'Hi! Do you have a room for two this weekend?',
        bubbleAssistant: 'Certo, la Camera Levante è disponibile per quelle date. Posso aiutarti a prenotare direttamente, se vuoi.',
        chipCta: 'Prenota ora · senza commissioni',
        footer: 'Fabio Delli · Versilia',
      },
    },
    services: {
      kicker: 'Cosa risolvo per te',
      title: 'Tre modi per restituire tempo alla tua attività.',
      subtitle: 'Niente pacchetti in serie. Ogni intervento parte da un problema reale e da un guadagno misurabile: ore, conversioni, margine.',
      items: [
        {
          num: '01',
          title: 'Assistenti AI che rispondono al posto tuo, 24/7 e in ogni lingua',
          desc: "Un assistente che gestisce richieste e prenotazioni in autonomia, di giorno e di notte, nella lingua del cliente. Le domande ricorrenti trovano risposta subito; tu intervieni solo dove serve davvero.",
          gain: 'Ore liberate ogni settimana e più prenotazioni dirette, con meno dipendenza dai portali.',
        },
        {
          num: '02',
          title: 'Automazione dei processi ripetitivi',
          desc: "Mappo i passaggi manuali che si ripetono ogni giorno: copia-incolla, inserimenti, comunicazioni standard. Li affido a flussi automatici affidabili, integrati con gli strumenti che già usi.",
          gain: 'Meno lavoro manuale e meno errori, più tempo per ciò che conta.',
        },
        {
          num: '03',
          title: 'Consulenza digitale',
          desc: "Prima di investire, capiamo insieme dove l'AI conviene davvero e dove no. Ti lascio una roadmap concreta, con priorità, tempi e ritorni attesi. Anche se poi decidi di procedere da solo.",
          gain: 'Una rotta chiara prima di spendere un euro.',
        },
      ],
      footnote:
        "+ Sviluppo e integrazione dell'infrastruttura web come abilitatore (sito, prenotazioni, dati), quando serve a far funzionare il resto.",
    },
    projects: {
      kicker: 'Progetti in evidenza',
      title: 'Due soluzioni, complete di pipeline AI.',
      subtitle: "Due lavori che mostrano l'intera filiera: dal problema dell'attività al prodotto AI funzionante.",
      villaLevante: {
        index: '01',
        meta: 'Hospitality · Caso studio',
        title: 'Villa Levante',
        desc: 'Assistente AI multilingua per una struttura ricettiva: risponde agli ospiti 24/7, gestisce le richieste di prenotazione e spinge la conversione diretta, riducendo la dipendenza dalle OTA.',
        tags: ['Assistente AI', 'Multilingua', 'Conversione diretta'],
        kpi1: { value: '24/7', label: 'Risposte agli ospiti' },
        kpi2: { value: 'Diretto', label: 'Meno dipendenza dai portali' },
        cta: 'Leggi il caso studio',
        href: '/case-study/villa-levante',
        deviceUrl: 'villa-levante-demo.vercel.app',
      },
      softale: {
        index: '02',
        meta: 'Prodotto AI · Proof of capability',
        title: 'Softale',
        desc: "Un prodotto AI end-to-end: pipeline generativa più sintesi vocale (TTS) per creare contenuti narrati. La dimostrazione di cosa significa costruire l'intera catena, non solo collegare un servizio.",
        tags: ['Pipeline generativa', 'Text-to-Speech', 'End-to-end'],
        kpi1: { value: 'Testo → voce', label: 'Pipeline AI completa' },
        kpi2: { value: 'Live', label: 'www.softale.app' },
        cta: 'Scopri il prodotto',
        href: '/case-study/softale',
        deviceUrl: 'www.softale.app',
      },
    },
    why: {
      kicker: 'Perché me',
      title: 'Un interlocutore unico, vicino, che costruisce per te.',
      items: [
        {
          num: '01',
          title: 'Interlocutore unico',
          desc: 'Parli sempre con chi progetta e costruisce. Niente catene di referenti, niente account manager: una sola persona, presente sul territorio.',
        },
        {
          num: '02',
          title: 'Su misura, non in serie',
          desc: 'Ogni soluzione nasce dal tuo flusso reale e si adatta a come lavori, non il contrario. Cucita, non presa da uno scaffale.',
        },
        {
          num: '03',
          title: 'Più valore per ogni euro',
          desc: "Senza l'overhead di un'agenzia, l'investimento va nel lavoro che conta. Risultati concreti, costi trasparenti.",
        },
      ],
    },
    cta: {
      kicker: 'Iniziamo',
      title: "Parliamone davanti a un caffè, senza impegno.",
      lead: "Un incontro conoscitivo gratuito per capire dove la tua attività perde tempo e se l'AI può restituirtelo. Esci con una risposta chiara, in ogni caso.",
      button: "Prenota l'incontro",
      href: '/contact#form',
      points: [
        'Nessun gergo tecnico: parliamo di ore e di clienti.',
        'Una rotta concreta, anche se poi non lavoriamo insieme.',
        'Sul territorio, in Versilia o da remoto.',
      ],
    },
  },

  /* ── Case study Villa Levante ────────────────────────────── */
  villaLevante: {
    meta: {
      title: 'Case study · Assistente AI per Villa Levante (demo)',
      description:
        "Progetto dimostrativo: assistente AI multilingua per un boutique hotel. Risponde 24/7 in IT/EN/DE e guida le prenotazioni dirette, riducendo la dipendenza dai portali.",
    },
    kicker: 'Hospitality · Assistente AI',
    breadcrumb: ['Home', 'Progetti', 'Villa Levante'] as const,
    title: 'Villa Levante',
    lead: "Un assistente AI multilingua che risponde agli ospiti 24/7 e trasforma le richieste in prenotazioni dirette.",
    statusLabel: 'Stato',
    status: 'Progetto dimostrativo · demo live',
    settoreLabel: 'Settore',
    settore: 'Hospitality · Ricettivo',
    ruoloLabel: 'Ruolo',
    ruolo: 'Design + sviluppo end-to-end',
    tipoLabel: 'Tipo',
    tipo: 'Assistente AI · Web',
    deviceUrl: 'villa-levante-demo.vercel.app',
    context: {
      kicker: 'Il contesto',
      lead: 'Una struttura che riceve ospiti da tutto il mondo, a ogni ora del giorno.',
      body: "Le richieste arrivano in più lingue e fuori orario; ogni risposta tardiva è una prenotazione che rischia di passare a una OTA, con la sua commissione. Il personale spende ore su domande ripetitive (disponibilità, servizi, indicazioni), sottraendo tempo all'ospitalità vera.",
      body2: "L'obiettivo: rispondere subito, in ogni lingua, e riportare la prenotazione sul canale diretto.",
    },
    lever: {
      kicker: 'La soluzione · leva a due tempi',
      title: 'Taglia i costi e, allo stesso tempo, aumenta i ricavi diretti.',
      cost: {
        tag: 'Lato costi',
        title: 'Meno ore, nessun orario',
        body: "L'assistente gestisce in autonomia le domande ricorrenti, in ogni lingua e 24 ore su 24. Il personale interviene solo quando serve davvero.",
        items: [
          'Risposte immediate giorno e notte',
          'Multilingua nativo, senza traduttori',
          'Ore liberate dalle richieste ripetitive',
        ],
      },
      rev: {
        tag: 'Lato ricavi',
        title: 'Più prenotazioni dirette',
        body: "Rispondendo subito e bene, l'assistente accompagna l'ospite alla prenotazione sul canale diretto, riducendo la dipendenza dalle OTA e le loro commissioni.",
        items: [
          'Conversione diretta guidata',
          'Più prenotazioni dirette, meno commissioni di portale',
          "Relazione con l'ospite dal primo contatto",
        ],
      },
    },
    kpis: [
      { value: '24/7', label: 'Copertura delle richieste, in ogni fuso e ogni lingua.' },
      { value: 'Dirette', label: 'Prenotazioni che non passano dai portali.' },
      { value: 'ore/sett.', label: "Tempo del personale restituito all'ospitalità reale." },
    ],
    stack: {
      kicker: 'Stack',
      title: 'Costruito per durare e integrarsi.',
      body: "Un assistente conversazionale collegato ai dati reali della struttura, su un'infrastruttura web leggera e veloce. Nessuna dipendenza da piattaforme chiuse: tutto resta tuo.",
      items: ['LLM conversazionale', 'RAG sui dati struttura', 'Multilingua', 'Next.js', 'Vercel AI SDK', 'Supabase'],
    },
    demo: {
      kicker: 'Demo live',
      title: 'Prova il progetto dimostrativo.',
      lead: "Questo è un prototipo funzionante (non un hotel reale). Ti permette di vedere in concreto come funziona l'assistente, come risponde, come guida l'ospite.",
      cta: 'Apri la demo',
      ctaHref: 'https://villa-levante-demo.vercel.app',
      ctaContact: 'Voglio qualcosa di simile per la mia struttura',
      ctaContactHref: '/contact',
    },
    next: {
      label: 'Progetto successivo',
      title: 'Softale',
      href: '/case-study/softale',
    },
  },

  /* ── Case study Softale ──────────────────────────────────── */
  softale: {
    meta: {
      title: 'Case study · Softale, audio-storie generate con AI',
      description:
        'Softale: web app di audio-storie generate con AI (LLM + TTS), dalla pipeline al prodotto pubblicato su softale.app. Prova di capacità AI end-to-end.',
    },
    kicker: 'Prodotto AI · Proof of capability',
    breadcrumb: ['Home', 'Progetti', 'Softale'] as const,
    title: 'Softale',
    lead: "Un prodotto AI end-to-end: pipeline generativa più sintesi vocale per creare audio-storie personalizzate. Non una commessa cliente: un prodotto proprio, pubblicato e funzionante.",
    statusLabel: 'Stato',
    status: 'Pubblicato · softale.app',
    settoreLabel: 'Settore',
    settore: 'Prodotto proprio · AI generativa',
    ruoloLabel: 'Ruolo',
    ruolo: 'Design + sviluppo end-to-end',
    tipoLabel: 'Tipo',
    tipo: 'Web app · Pipeline AI',
    deviceUrl: 'www.softale.app',
    whatIs: {
      kicker: "Cos'è",
      lead: "Un'idea trasformata in un prodotto funzionante.",
      body: "Softale genera audio-storie personalizzate: l'utente sceglie genere, tono e personaggi; la pipeline AI produce il testo e lo trasforma in audio. Il risultato è una storia pronta da ascoltare.",
    },
    pipeline: {
      kicker: 'La pipeline tecnica',
      title: "Generazione + voce, dall'inizio alla fine.",
      body: "Orchestrazione LLM per la generazione del testo narrativo, sintesi vocale (TTS) per l'audio. Tutto su Next.js con deploy su Vercel. Infrastruttura gestita, nessun backend custom da mantenere.",
      items: [
        { label: 'Input utente', desc: 'Genere, tono, personaggi: pochi campi, risultato completo.' },
        { label: 'Generazione LLM', desc: 'Il modello crea la narrativa su misura del profilo scelto.' },
        { label: 'Sintesi vocale', desc: "TTS trasforma il testo in audio naturale, pronto all'ascolto." },
        { label: 'Delivery', desc: "La storia viene consegnata all'utente in pochi secondi." },
      ],
    },
    proof: {
      kicker: 'Cosa dimostra',
      body: "So portare un'idea AI dalla pipeline al prodotto pubblicato: architettura, UX, deploy e iterazione. La stessa competenza che metto a disposizione quando costruisco soluzioni custom per te.",
    },
    stack: {
      kicker: 'Stack',
      title: 'Infrastruttura gestita, nessun overhead.',
      items: ['Next.js', 'LLM pipeline (orchestrazione)', 'TTS (sintesi vocale)', 'Vercel'],
    },
    cta: {
      kicker: 'Prova il prodotto',
      title: 'Softale è live su softale.app',
      lead: 'Puoi provarlo adesso: è il prodotto reale, non una demo.',
      button: 'Visita softale.app',
      href: 'https://www.softale.app',
      ctaContact: 'Vuoi un prodotto AI end-to-end?',
      ctaContactHref: '/contact',
    },
    next: {
      label: "Vai all'inizio",
      title: 'Torna ai progetti',
      href: '/#progetti',
    },
  },

  /* ── Chi sono ────────────────────────────────────────────── */
  about: {
    meta: {
      title: 'Chi sono · Fabio Delli, AI Integration Specialist',
      description:
        'Fabio Delli: specialista AI Integration, full-stack, con base in Versilia. Costruisce soluzioni AI su misura per hotel e attività locali.',
    },
    kicker: 'Chi sono',
    title: 'Una sola persona, dal primo colloquio alla soluzione che funziona.',
    lead: 'Sono Fabio Delli, sviluppatore full-stack e specialista di integrazione AI. Lavoro in Versilia, vicino alle attività che aiuto: niente agenzia, niente catena di referenti.',
    role: 'Specialista AI Integration · Versilia',
    methodCard: {
      kicker: 'Come lavoro',
      steps: [
        { num: '01', title: 'Ascolto', desc: 'Capire il flusso reale, dove il tempo si perde davvero.' },
        { num: '02', title: 'Costruisco', desc: 'Su misura, integrato con ciò che già usi.' },
        { num: '03', title: 'Accompagno', desc: 'Manutenzione e miglioramento continuo.' },
      ],
      footer: 'Fabio Delli · Versilia',
    },
    narrativa: {
      kicker: 'La mia posizione',
      paragraphs: [
        "Non sono un generalista che fa un po' di tutto. Sono uno specialista di integrazione AI: il mio mestiere è capire dove, nella tua attività, il tempo si perde in compiti ripetitivi, e restituirtelo con soluzioni costruite su misura.",
        "Credo nella scala umana. Quando lavoriamo insieme parli sempre con me: chi ascolta il problema è la stessa persona che progetta, costruisce e ti segue dopo. Questo rende tutto più chiaro, più rapido e, alla fine, più conveniente. Senza l'overhead di una struttura tra te e il lavoro.",
        "E credo nella concretezza. Niente promesse rivoluzionarie: parliamo di ore liberate, di prenotazioni dirette, di processi che smettono di pesare. Se l'AI non serve, te lo dico.",
      ],
      pull: 'Su misura, non in serie. Cucito sulla tua attività, non preso da uno scaffale.',
    },
    principi: {
      kicker: 'Come ragiono',
      title: 'Tre principi, sempre gli stessi.',
      items: [
        {
          num: '01',
          title: 'Chiarezza prima di tutto',
          body: 'Spiego ogni scelta in parole semplici. Se un termine tecnico è necessario, te lo racconto: niente gergo per sembrare bravo.',
        },
        {
          num: '02',
          title: 'Mai astratto senza un esempio',
          body: "Ogni proposta nasce da un caso reale della tua attività. Concretezza prima della teoria, sempre.",
        },
        {
          num: '03',
          title: 'Calmo, mai hype',
          body: 'Niente urgenza artificiale né parole gonfiate. Tempi onesti, aspettative reali, risultati che restano.',
        },
      ],
    },
    steps: {
      kicker: 'Come lavoro',
      title: 'Quattro passi, dal primo caffè alla soluzione che gira da sola.',
      items: [
        {
          num: '01',
          title: 'Ascolto',
          body: 'Un incontro conoscitivo per capire dove perdi tempo e cosa conta davvero per te. Gratuito, senza impegno.',
        },
        {
          num: '02',
          title: 'Roadmap',
          body: 'Ti lascio una rotta concreta: cosa conviene automatizzare, in che ordine, con quali ritorni attesi.',
        },
        {
          num: '03',
          title: 'Costruzione',
          body: 'Sviluppo la soluzione su misura, integrata con gli strumenti che già usi, con aggiornamenti chiari lungo il percorso.',
        },
        {
          num: '04',
          title: 'Presenza',
          body: 'Resto il tuo interlocutore: la seguo, la affino, ci sono quando serve. Non sparisco alla consegna.',
        },
      ],
    },
    cta: {
      kicker: 'Conosciamoci',
      title: 'Il modo migliore per capirci è parlarne.',
      lead: 'Raccontami la tua attività. Ti dirò, in modo onesto, se e come posso restituirti delle ore.',
      button: 'Incontro conoscitivo gratuito',
      href: '/contact',
    },
  },

  /* ── Contatti ────────────────────────────────────────────── */
  contact: {
    meta: {
      title: 'Contatti · Fabio Delli',
      description:
        'Scrivi a Fabio Delli per un incontro conoscitivo gratuito. Senza impegno, senza pitch: solo una conversazione.',
    },
    kicker: 'Contatti',
    title: 'Parliamone, senza impegno.',
    lead: 'Raccontami la tua attività e dove senti di perdere tempo. Ti rispondo di persona, di solito entro un giorno lavorativo.',
    email: 'contact@fabiodelli.com',
    linkedinHref: 'https://linkedin.com/in/fabio-delli',
    location: 'Versilia, Toscana · in sede o da remoto',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    locationLabel: 'Dove',
    reassure: [
      'Risposta personale, mai un modulo automatico.',
      'Il primo incontro conoscitivo è gratuito.',
      'Nessun gergo: parliamo di ore e di clienti.',
    ],
    form: {
      title: "Prenota l'incontro conoscitivo",
      subtitle: 'Gratuito e senza impegno. Bastano pochi campi.',
      nameLabel: 'Nome',
      namePlaceholder: 'Il tuo nome',
      activityLabel: 'Attività',
      activityPlaceholder: 'Nome attività',
      emailLabel: 'Email',
      emailPlaceholder: 'nome@esempio.it',
      sectorLabel: 'Settore',
      sectorOptions: ['Hospitality', 'Commercio', 'Servizi', 'Altro'] as const,
      messageLabel: 'Dove perdi più tempo?',
      messagePlaceholder: 'Racconta in due righe il compito ripetitivo che ti pesa di più…',
      submit: 'Invia la richiesta',
      note: 'Inviando accetti di essere ricontattato. Nessuna newsletter, nessuno spam.',
      success: 'Grazie, ti rispondo presto.',
    },
  },

  /* ── Footer ──────────────────────────────────────────────── */
  footer: {
    tagline:
      "Specialista di integrazione AI in Versilia. Colmo il divario tra quello che l'AI può fare per la tua attività e quello che oggi fa.",
    navLabel: 'Naviga',
    contactLabel: 'Contatti',
    rights: '© {year} Fabio Delli. Tutti i diritti riservati.',
  },
} as const
