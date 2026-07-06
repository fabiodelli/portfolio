export const en = {
  /* ── Meta / globals ─────────────────────────────────────── */
  siteName: 'Fabio Delli',
  siteTagline: 'AI Integration Specialist · Versilia, Tuscany',

  /* ── Navigation ──────────────────────────────────────────── */
  nav: {
    home: 'Home',
    caseStudies: 'Projects',
    about: 'About',
    contact: 'Contact',
    cta: 'Book a call',
    langSwitch: 'IT',
    langSwitchLabel: 'Switch to Italian',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    ariaLabel: 'Main navigation',
  },

  /* ── Home ────────────────────────────────────────────────── */
  home: {
    meta: {
      title: 'Fabio Delli · AI Integration Specialist, Versilia',
      description:
        "There's a gap between what AI can do for your business and what it does today. I'm Fabio Delli, AI specialist in Versilia: I help hotels and local businesses close it.",
    },
    hero: {
      kicker: 'AI Integration Specialist · Versilia',
      headline: "There's a gap between what AI can do for your business and what it does today. I'm here to close it.",
      headlineKeyword: "I'm here to close it.",
      lead: 'I build AI solutions shaped around your reality: enquiries, bookings, multilingual communication. Your days go back to what really matters.',
      cta: 'Free discovery call',
      ctaHref: '/en/contact#form',
      secondary: 'See my work',
      secondaryHref: '#progetti',
      metaLabel: '',
      sectors: 'For every business that handles enquiries, bookings, or manual processes',
      chatCard: {
        header: 'AI Assistant',
        welcome: "Hi, I'm Fabio's assistant. I can help you understand if and how AI can save you time. Where shall we start?",
        starters: [
          'What can you do for my business?',
          'How would you save me time?',
          "I want to see if this is right for me",
        ],
        inputPlaceholder: 'Write a message...',
        errorMessage: 'Something went wrong, please try again or contact me directly.',
        footer: 'Fabio Delli · Versilia',
      },
    },
    services: {
      kicker: 'What I solve for you',
      title: 'Concrete ways to give your business its time back.',
      subtitle: 'No off-the-shelf packages. Every engagement starts from a real problem and a measurable return: hours, conversions, margin.',
      items: [
        {
          num: '01',
          title: 'AI assistants that respond instead of you, 24/7 in any language',
          desc: "An assistant that handles enquiries and bookings autonomously, day and night, in your customer's language. Recurring questions get an instant answer; you step in only where it really matters.",
          gain: 'Hours freed every week and more clients acquired directly, without platform commissions.',
        },
        {
          num: '02',
          title: 'The website or app to build on, designed AI-ready from day one',
          desc: "Often the first step isn't AI, it's having a solid foundation: a website, an app, a management system that actually works. I build it already ready to host automations and assistants when the time comes. Start here, and AI gets added when you need it, without rebuilding everything a year from now.",
          gain: 'A solid digital foundation, ready to grow, without having to start over.',
        },
        {
          num: '03',
          title: 'Automation of repetitive processes',
          desc: 'I map the manual steps that repeat every day (copy-paste, data entry, standard communications) and hand them off to reliable automated flows, integrated with the tools you already use.',
          gain: 'Less manual work and fewer errors, more time for what counts.',
        },
        {
          num: '04',
          title: 'Digital consulting',
          desc: "Before investing, we figure out together where AI genuinely pays off, and where it's still too early. I leave you a concrete roadmap with priorities, timelines, and expected returns, even if you decide to proceed on your own.",
          gain: 'A clear direction before spending a single euro.',
        },
      ],
    },
    projects: {
      kicker: 'Featured work',
      title: 'Two solutions, complete AI pipeline.',
      subtitle:
        'Two projects that show the full chain: from the business problem to a working AI product.',
      villaLevante: {
        index: '01',
        meta: 'Hospitality · Case study',
        title: 'Villa Levante',
        desc: 'Multilingual AI assistant for a hospitality property: responds to guests 24/7, manages booking enquiries, and drives direct conversion, reducing OTA dependency.',
        tags: ['AI assistant', 'Multilingual', 'Direct conversion'],
        kpi1: { value: '24/7', label: 'Guest responses' },
        kpi2: { value: 'Direct', label: 'Less dependency on portals' },
        cta: 'Read the case study',
        href: '/en/case-study/villa-levante',
        deviceUrl: 'villa-levante-demo.vercel.app',
      },
      softale: {
        index: '02',
        meta: 'AI product · Proof of capability',
        title: 'Softale',
        desc: 'An end-to-end AI product: generative pipeline plus text-to-speech for narrated content. A demonstration of what it means to build the full chain, not just wire up a service.',
        tags: ['Generative pipeline', 'Text-to-Speech', 'End-to-end'],
        kpi1: { value: 'Text → voice', label: 'Full AI pipeline' },
        kpi2: { value: 'Live', label: 'www.softale.app' },
        cta: 'Explore the product',
        href: '/en/case-study/softale',
        deviceUrl: 'www.softale.app',
      },
    },
    why: {
      kicker: 'Why me',
      title: 'One person, close by, building for you.',
      items: [
        {
          num: '01',
          title: 'Single point of contact',
          desc: 'You always talk to the person who designs and builds. No referral chains, no account managers: one person, present on the ground.',
        },
        {
          num: '02',
          title: 'Built for you, not for everyone',
          desc: 'Every solution starts from your actual workflow and adapts to how you work, not the other way around. Tailored, not taken off a shelf.',
        },
        {
          num: '03',
          title: 'More value per euro',
          desc: 'Without agency overhead, investment goes into the work that matters. Concrete results, transparent costs.',
        },
      ],
    },
    cta: {
      kicker: "Let's start",
      title: "Let's talk over a coffee, no strings attached.",
      lead: 'A free discovery call to understand where your business loses time and whether AI can give it back. You leave with a clear answer either way.',
      button: 'Book the call',
      href: '/en/contact#form',
      points: [
        'No technical jargon: we talk about hours and customers.',
        "A concrete direction, even if we don't end up working together.",
        'On the ground in Versilia, or remote.',
      ],
    },
  },

  /* ── Case study Villa Levante ────────────────────────────── */
  villaLevante: {
    meta: {
      title: 'Case study · AI assistant for Villa Levante (demo)',
      description:
        'Demo project: multilingual AI assistant for a boutique hotel. Responds 24/7 in IT/EN/DE and guides direct bookings, reducing dependency on OTA portals.',
    },
    kicker: 'Hospitality · AI assistant',
    breadcrumb: ['Home', 'Projects', 'Villa Levante'],
    title: 'Villa Levante',
    lead: 'A multilingual AI assistant that responds to guests 24/7 and turns enquiries into direct bookings.',
    statusLabel: 'Status',
    status: 'Demo project · live prototype',
    settoreLabel: 'Sector',
    settore: 'Hospitality',
    ruoloLabel: 'Role',
    ruolo: 'Design + full-stack development',
    tipoLabel: 'Type',
    tipo: 'AI assistant · Web',
    deviceUrl: 'villa-levante-demo.vercel.app',
    context: {
      kicker: 'The context',
      lead: 'A property receiving guests from around the world, at every hour of the day.',
      body: 'Enquiries arrive in multiple languages and outside office hours; every late response is a booking that risks shifting to an OTA, along with its commission. Staff spend hours on repetitive questions (availability, services, directions), taking time away from real hospitality.',
      body2: 'The goal: respond immediately, in any language, and bring the booking back to the direct channel.',
    },
    lever: {
      kicker: 'The solution · two-sided lever',
      title: 'Cut costs and increase direct revenue at the same time.',
      cost: {
        tag: 'Cost side',
        title: 'Fewer hours, no opening times',
        body: 'The assistant handles recurring questions autonomously, in any language, 24 hours a day. Staff step in only when it genuinely matters.',
        items: [
          'Instant responses day and night',
          'Native multilingual, no translators needed',
          'Hours freed from repetitive enquiries',
        ],
      },
      rev: {
        tag: 'Revenue side',
        title: 'More direct bookings',
        body: 'By responding promptly and well, the assistant guides the guest to book on the direct channel, reducing OTA dependency and their commissions.',
        items: [
          'Guided direct conversion',
          'More direct bookings, fewer portal commissions',
          'Guest relationship from first contact',
        ],
      },
    },
    kpis: [
      { value: '24/7', label: 'Request coverage, every time zone, every language.' },
      { value: 'Direct', label: 'Bookings that bypass the portals.' },
      { value: 'hrs/week', label: 'Staff time returned to real hospitality.' },
    ],
    stack: {
      kicker: 'Stack',
      title: 'Built to last and integrate.',
      body: 'A conversational assistant connected to real property data, on a lightweight and fast web infrastructure. No dependency on closed platforms: everything stays yours.',
      items: ['Conversational LLM', 'RAG on property data', 'Multilingual', 'Next.js', 'Vercel AI SDK', 'Supabase'],
    },
    demo: {
      kicker: 'Live demo',
      title: 'Try the working prototype.',
      lead: 'This is a functional prototype (not a real hotel). It lets you see concretely how the assistant works, how it responds, how it guides the guest.',
      cta: 'Open the demo',
      ctaHref: 'https://villa-levante-demo.vercel.app',
      ctaContact: 'I want something like this for my property',
      ctaContactHref: '/en/contact',
    },
    next: {
      label: 'Next project',
      title: 'Softale',
      href: '/en/case-study/softale',
    },
  },

  /* ── Case study Softale ──────────────────────────────────── */
  softale: {
    meta: {
      title: 'Case study · Softale, AI-generated audio stories',
      description:
        'Softale: web app for AI-generated audio stories (LLM + TTS pipeline), taken from idea to live product at softale.app. A proof of end-to-end AI capability.',
    },
    kicker: 'AI product · Proof of capability',
    breadcrumb: ['Home', 'Projects', 'Softale'],
    title: 'Softale',
    lead: 'An end-to-end AI product: generative pipeline plus speech synthesis to create personalised audio stories. Not a client commission: a product of my own, live and working.',
    statusLabel: 'Status',
    status: 'Live · softale.app',
    settoreLabel: 'Sector',
    settore: 'Own product · Generative AI',
    ruoloLabel: 'Role',
    ruolo: 'Design + full-stack development',
    tipoLabel: 'Type',
    tipo: 'Web app · AI pipeline',
    deviceUrl: 'www.softale.app',
    whatIs: {
      kicker: 'What it is',
      lead: 'An idea turned into a working product.',
      body: 'Softale generates personalised audio stories: the user picks a genre, tone, and characters; the AI pipeline produces the narrative and converts it to audio. The result is a story ready to listen to.',
    },
    pipeline: {
      kicker: 'The technical pipeline',
      title: 'Generation + voice, start to finish.',
      body: 'LLM orchestration for narrative generation, text-to-speech (TTS) for the audio output. Everything on Next.js deployed on Vercel: managed infrastructure, no custom backend to maintain.',
      items: [
        { label: 'User input', desc: 'Genre, tone, characters: a few fields, a complete result.' },
        { label: 'LLM generation', desc: 'The model creates a narrative tailored to the chosen profile.' },
        { label: 'Speech synthesis', desc: 'TTS turns the text into natural audio, ready to listen.' },
        { label: 'Delivery', desc: 'The story is delivered to the user in seconds.' },
      ],
    },
    proof: {
      kicker: 'What it proves',
      body: 'I can take an AI idea from pipeline to published product: architecture, UX, deployment, and iteration. The same capability I bring when building custom solutions for you.',
    },
    stack: {
      kicker: 'Stack',
      title: 'Managed infrastructure, zero overhead.',
      items: ['Next.js', 'LLM pipeline (orchestration)', 'TTS (speech synthesis)', 'Vercel'],
    },
    cta: {
      kicker: 'Try it',
      title: 'Softale is live at softale.app',
      lead: 'You can try it now: this is the real product, not a demo.',
      button: 'Visit softale.app',
      href: 'https://www.softale.app',
      ctaContact: 'Want an end-to-end AI product?',
      ctaContactHref: '/en/contact',
    },
    next: {
      label: 'Back to start',
      title: 'Back to projects',
      href: '/en#progetti',
    },
  },

  /* ── About ───────────────────────────────────────────────── */
  about: {
    meta: {
      title: 'About · Fabio Delli, AI Integration Specialist',
      description:
        'Fabio Delli: AI Integration Specialist, full-stack, based in Versilia, Tuscany. Builds custom AI solutions for hotels and local businesses.',
    },
    kicker: 'About',
    title: 'One person, from first conversation to a working solution.',
    lead: "I'm Fabio Delli, a full-stack developer and AI integration specialist. I work in Versilia, close to the businesses I help: no agency, no chain of contacts.",
    role: 'AI Integration Specialist · Versilia',
    methodCard: {
      kicker: 'How I work',
      steps: [
        { num: '01', title: 'Listen', desc: 'Understand the real workflow: where time is actually lost.' },
        { num: '02', title: 'Build', desc: 'Tailored to you, integrated with what you already use.' },
        { num: '03', title: 'Stay present', desc: 'Ongoing maintenance and continuous improvement.' },
      ],
      footer: 'Fabio Delli · Versilia',
    },
    narrativa: {
      kicker: 'My position',
      paragraphs: [
        "I'm not a generalist who does a bit of everything. I'm an AI integration specialist: my job is to identify where, in your business, time gets lost in repetitive tasks, and give it back to you with solutions built around you.",
        "I believe in human scale. When we work together you always talk to me: the person who listens to the problem is the same person who designs, builds, and supports you afterwards. This makes everything clearer, faster and, in the end, more cost-effective, without the overhead of a layer between you and the work.",
        "And I believe in concreteness. No revolutionary promises: we talk about hours freed, direct bookings, processes that stop weighing on you. If AI isn't the answer, I'll tell you.",
      ],
      pull: "Built for you, not for everyone. Shaped around your business, not taken off a shelf.",
    },
    principi: {
      kicker: 'How I think',
      title: 'Three principles, always the same.',
      items: [
        {
          num: '01',
          title: 'Clarity first',
          body: "I explain every decision in plain words. If a technical term is necessary, I'll walk you through it: no jargon to sound impressive.",
        },
        {
          num: '02',
          title: 'Never abstract without an example',
          body: 'Every proposal starts from a real case in your business. Concrete before theory, always.',
        },
        {
          num: '03',
          title: 'Calm, never hype',
          body: 'No artificial urgency, no inflated language. Honest timelines, realistic expectations, results that stick.',
        },
      ],
    },
    steps: {
      kicker: 'How I work',
      title: 'Four steps, from first coffee to a solution that runs on its own.',
      items: [
        {
          num: '01',
          title: 'Listen',
          body: 'A discovery call to understand where you lose time and what really matters to you. Free, no commitment.',
        },
        {
          num: '02',
          title: 'Roadmap',
          body: 'I give you a concrete plan: what to automate, in what order, with what expected returns.',
        },
        {
          num: '03',
          title: 'Build',
          body: 'I develop the tailored solution, integrated with the tools you already use, with clear updates along the way.',
        },
        {
          num: '04',
          title: 'Stay present',
          body: "I remain your point of contact: I monitor, refine, and I'm there when you need me. I don't disappear at delivery.",
        },
      ],
    },
    cta: {
      kicker: "Let's meet",
      title: 'The best way to understand each other is to talk.',
      lead: "Tell me about your business. I'll give you an honest take on whether and how I can give you back some hours.",
      button: 'Free discovery call',
      href: '/en/contact',
    },
  },

  /* ── Contact ─────────────────────────────────────────────── */
  contact: {
    meta: {
      title: 'Contact · Fabio Delli',
      description:
        "Get in touch with Fabio Delli for a free discovery call. No commitment, no pitch: just a conversation.",
    },
    kicker: 'Contact',
    title: "Let's talk, no strings attached.",
    lead: "Tell me about your business and where you feel time is being lost. I respond personally, usually within one working day.",
    email: 'contact@fabiodelli.com',
    linkedinHref: 'https://linkedin.com/in/fabio-delli',
    location: 'Versilia, Tuscany · on-site or remote',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    locationLabel: 'Where',
    reassure: [
      'A personal response, never an automated reply.',
      'The first discovery call is free.',
      'No jargon: we talk about hours and customers.',
    ],
    form: {
      title: 'Book the discovery call',
      subtitle: 'Free and no commitment. Just a few fields.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      activityLabel: 'Business',
      activityPlaceholder: 'Business name',
      emailLabel: 'Email',
      emailPlaceholder: 'name@example.com',
      sectorLabel: 'Sector',
      sectorOptions: ['Hospitality', 'Retail', 'Services', 'Other'],
      messageLabel: 'Where do you lose the most time?',
      messagePlaceholder: 'Describe in a couple of lines the repetitive task that weighs on you most…',
      submit: 'Send request',
      note: 'By submitting you agree to be contacted. No newsletter, no spam.',
      success: "Thank you, I'll be in touch soon.",
      errorMessage: 'Something went wrong: please try again shortly or write me an email.',
    },
  },

  /* ── Footer ──────────────────────────────────────────────── */
  footer: {
    tagline:
      "AI integration specialist in Versilia, Tuscany. I close the gap between what AI can do for your business and what it does today.",
    navLabel: 'Navigate',
    contactLabel: 'Contact',
    rights: '© {year} Fabio Delli · Versilia, Tuscany',
  },
} as const
