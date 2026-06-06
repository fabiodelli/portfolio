export const en = {
  /* ── Meta / globals ─────────────────────────────────────── */
  siteName: 'Fabio Delli',
  siteTagline: 'AI Integration Specialist — Versilia, Tuscany',

  /* ── Navigation ──────────────────────────────────────────── */
  nav: {
    home: 'Home',
    caseStudies: 'Projects',
    villaLevante: 'Villa Levante',
    softale: 'Softale',
    about: 'About',
    contact: 'Contact',
    cta: 'Book a discovery call',
    langSwitch: 'IT',
    langSwitchLabel: 'Switch to Italian',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  /* ── Home ────────────────────────────────────────────────── */
  home: {
    meta: {
      title: 'Fabio Delli — AI Integration Specialist, Versilia',
      description:
        'I build custom AI solutions for hotels and local businesses in Versilia, Tuscany: conversational assistants, automations, and integrations tailored to your workflows.',
    },
    hero: {
      headline: 'AI built around your business, not around everyone\'s business',
      sub: 'I\'m Fabio Delli. I build custom AI solutions — conversational assistants, automations, integrations — for hotels and hospitality businesses in Versilia, Tuscany.',
      cta: 'Book a free discovery call',
      ctaHref: '/en/contact',
      secondary: 'See my projects',
      secondaryHref: '#projects',
    },
    services: {
      title: 'What I build',
      items: [
        {
          title: 'Custom AI solutions',
          desc: 'Conversational assistants, chatbots, and AI agents shaped around your workflow — not a copy-paste template.',
          icon: '🤖',
        },
        {
          title: 'Development & system integration',
          desc: 'I connect AI to the tools you already use — booking engines, CRMs, management systems. No reinventing the wheel.',
          icon: '🔗',
        },
        {
          title: 'Consulting & audit',
          desc: 'Together we identify where AI saves you time or brings in revenue — and where it\'s still too early to invest.',
          icon: '🔍',
        },
      ],
    },
    projects: {
      title: 'Projects',
      viewProject: 'Read the case study',
      villaLevante: {
        title: 'Villa Levante',
        desc: 'Multilingual AI conversational assistant (IT · EN · DE) for a boutique hotel in Versilia: 24/7 availability and higher direct bookings.',
        tag: 'Hotel · Conversational AI',
        href: '/en/case-study/villa-levante',
      },
      softale: {
        title: 'Softale',
        desc: 'Web app that generates personalised audio stories using AI — from LLM pipeline to live product.',
        tag: 'Own product · Generative AI',
        href: '/en/case-study/softale',
      },
    },
    why: {
      title: 'Why work with me',
      items: [
        {
          title: 'Single point of contact',
          desc: 'From concept to deployment to ongoing support — one person. No project hand-offs, no agency bouncing.',
        },
        {
          title: 'Built for you, not for everyone',
          desc: 'Every solution is shaped around your processes, your booking engine, your management system. Not a renamed template.',
        },
        {
          title: 'More value per euro',
          desc: 'Lean structure, no agency overhead. Budget goes into the solution, not into account management layers.',
        },
      ],
    },
    cta: {
      text: 'Have an idea, or want to know if AI is right for your business?',
      button: 'Let\'s talk — it\'s free',
      href: '/en/contact',
    },
  },

  /* ── Case study Villa Levante ────────────────────────────── */
  villaLevante: {
    meta: {
      title: 'Case study — Claudia, AI assistant for Villa Levante',
      description:
        'Claudia: multilingual AI conversational assistant for a boutique hotel in Versilia. Answers 24/7 in Italian, English and German, drives direct bookings.',
    },
    breadcrumb: 'Case study',
    tag: 'Hotel · Conversational AI',
    disclaimer: 'Demonstration example',
    title: 'Claudia — AI assistant for a boutique hotel',
    lead: 'A multilingual conversational assistant (IT · EN · DE) available 24/7, embedded in the website of a boutique hotel in Versilia.',
    sections: {
      whatIs: {
        title: 'What is Claudia',
        body: 'Claudia answers guests\' and prospective guests\' questions in real time: check-in and check-out times, available services, cancellation policy, directions. No forms, no waiting, no unanswered emails at 11 pm.',
      },
      costs: {
        title: 'The value — cost side',
        body: 'It handles repetitive enquiries 24/7 in three languages, freeing up your team\'s time. Hours saved every week, a noticeably more responsive guest experience — even during peak season.',
      },
      revenue: {
        title: 'The value — revenue side',
        body: 'A guest finds the property on Booking, then looks for a better price directly on your site. Claudia greets them, addresses their doubts, and guides them to book directly — recovering 15–25% of OTA commissions. From 2026, Italian regulations no longer prohibit openly discounting direct bookings (rate parity removed), making this an even stronger lever.',
      },
      payment: {
        title: 'Payment integration',
        body: 'No reinventing the wheel: I connect the AI to the booking engine or payment system you already use. The assistant reduces checkout abandonment on direct bookings — without replacing Stripe or your existing provider.',
      },
      stack: {
        title: 'Tech stack',
        items: ['Next.js', 'Vercel AI SDK', 'Claude Haiku 4.5', 'GPT-4o-mini (fallback)', 'Supabase'],
      },
    },
    cta: 'Try the live demo',
    ctaHref: 'https://villa-levante-demo.vercel.app',
    ctaContact: 'I want something like this for my property',
    ctaContactHref: '/en/contact',
  },

  /* ── Case study Softale ──────────────────────────────────── */
  softale: {
    meta: {
      title: 'Case study — Softale, AI-generated audio stories',
      description:
        'Softale: web app for AI-generated audio stories (LLM + TTS pipeline), taken from idea to live product. A proof of end-to-end AI capability.',
    },
    breadcrumb: 'Case study',
    tag: 'Own product · Generative AI',
    title: 'Softale — AI-generated audio stories',
    lead: 'A web app that turns an idea into a complete audio story. Not a client commission: my own product, built to show that I can take an AI idea from pipeline to live domain.',
    sections: {
      whatIs: {
        title: 'What is Softale',
        body: 'Softale generates personalised audio stories: the user picks a genre, tone, and characters; the AI pipeline produces the narrative and converts it to audio. The result is a story ready to listen to.',
      },
      pipeline: {
        title: 'The technical pipeline',
        body: 'LLM orchestration for narrative generation, text-to-speech (TTS) for the audio output. Everything on Next.js deployed on Vercel — managed infrastructure, no custom backend to maintain.',
      },
      proof: {
        title: 'What it proves',
        body: 'I know how to take an AI idea from pipeline to published product: architecture, UX, deployment, and iteration. The same capability I bring when I build custom solutions for you.',
      },
      stack: {
        title: 'Tech stack',
        items: ['Next.js', 'LLM pipeline (orchestration)', 'TTS (speech synthesis)', 'Vercel'],
      },
    },
    cta: 'Visit softale.app',
    ctaHref: 'https://softale.app',
    ctaContact: 'Want an end-to-end AI product?',
    ctaContactHref: '/en/contact',
  },

  /* ── About ───────────────────────────────────────────────── */
  about: {
    meta: {
      title: 'About — Fabio Delli, AI Integration Specialist',
      description:
        'Fabio Delli: AI Integration Specialist, full-stack, based in Versilia, Tuscany. Builds custom AI solutions for hotels and local businesses.',
    },
    title: 'About me',
    paragraphs: [
      'I\'m Fabio Delli, an AI Integration Specialist based in Versilia, Tuscany.',
      'I work full-stack — from backend architecture to user interfaces — with a specific focus on integrating large language models and AI pipelines into production-ready products. Not proof-of-concepts gathering dust: working solutions you can measure.',
      'What sets me apart isn\'t a narrow technical niche, but an end-to-end way of working: I come with everything needed to take a project from whiteboard to live domain. One point of contact, local presence, who understands the specifics of running a hospitality property or small business in Versilia.',
      'I\'ve been AI-native from the start — building with these tools before they went mainstream, using them every day both for clients and for my own products. This lets me give honest assessments: where AI genuinely adds value, and where it\'s still too early to invest.',
    ],
    cta: 'Let\'s talk about your project',
    ctaHref: '/en/contact',
  },

  /* ── Contact ─────────────────────────────────────────────── */
  contact: {
    meta: {
      title: 'Contact — Fabio Delli',
      description:
        'Get in touch with Fabio Delli for a free discovery call. No commitment, no pitch — just a conversation.',
    },
    title: 'Let\'s talk',
    lead: 'Have an idea, want an analysis, or just want to know if AI makes sense for your business? Book a free discovery call — no commitment, no sales pitch.',
    emailLabel: 'Email',
    email: 'fabio@fabiodelli.com',
    linkedinLabel: 'LinkedIn',
    linkedinHref: 'https://linkedin.com/in/fabio-delli',
    linkedin: 'linkedin.com/in/fabio-delli',
    orDivider: 'or write directly',
    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'How can I help?',
      messagePlaceholder: 'Briefly describe your project or question…',
      submit: 'Send message',
    },
  },

  /* ── Footer ──────────────────────────────────────────────── */
  footer: {
    tagline: 'Custom AI solutions for hotels and local businesses in Versilia, Tuscany.',
    caseStudies: 'Case studies',
    rights: '© {year} Fabio Delli. All rights reserved.',
    nav: {
      about: 'About',
      contact: 'Contact',
      villaLevante: 'Villa Levante',
      softale: 'Softale',
    },
  },
} as const
