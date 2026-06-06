import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { pageAlternates, SITE_URL } from '@/lib/metadata'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as 'it' | 'en'
  const dict = await getDictionary(l)
  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    alternates: pageAlternates(l, ''),
    openGraph: {
      title: dict.home.meta.title,
      description: dict.home.meta.description,
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as 'it' | 'en'
  const dict = await getDictionary(l)
  const h = dict.home
  const base = l === 'en' ? '/en' : ''

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Fabio Delli',
    jobTitle: l === 'en' ? 'AI Integration Specialist' : 'Specialista AI Integration',
    url: SITE_URL,
    sameAs: [dict.contact.linkedinHref],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Versilia',
      addressRegion: 'Toscana',
      addressCountry: 'IT',
    },
  }

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: 'Fabio Delli — AI Integration',
    description: dict.home.meta.description,
    url: SITE_URL,
    provider: { '@id': `${SITE_URL}/#person` },
    areaServed: { '@type': 'Place', name: 'Versilia, Toscana, Italia' },
    serviceType: l === 'en' ? 'AI Integration & Development' : 'Integrazione AI e Sviluppo',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personLd, serviceLd]).replace(/</g, '\\u003c'),
        }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.4), transparent)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-6">
            {dict.siteTagline}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            {h.hero.headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            {h.hero.sub}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={h.hero.ctaHref} size="lg">
              {h.hero.cta}
            </Button>
            <Button href={h.hero.secondaryHref} variant="white" size="lg">
              {h.hero.secondary}
            </Button>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-14"
          >
            {h.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {h.services.items.map((item) => (
              <article
                key={item.title}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
              >
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────── */}
      <section
        id="projects"
        className="py-20 md:py-28 bg-slate-950"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold text-white text-center mb-14"
          >
            {h.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Villa Levante */}
            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-700/50 transition-colors group flex flex-col">
              <Badge variant="blue" className="self-start mb-4">{h.projects.villaLevante.tag}</Badge>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {h.projects.villaLevante.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm flex-1">
                {h.projects.villaLevante.desc}
              </p>
              <Link
                href={h.projects.villaLevante.href}
                className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                {h.projects.viewProject}
                <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            {/* Softale */}
            <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-700/50 transition-colors group flex flex-col">
              <Badge variant="blue" className="self-start mb-4">{h.projects.softale.tag}</Badge>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {h.projects.softale.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm flex-1">
                {h.projects.softale.desc}
              </p>
              <Link
                href={h.projects.softale.href}
                className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                {h.projects.viewProject}
                <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── Why me ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="why-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-14"
          >
            {h.why.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {h.why.items.map((item, i) => (
              <div key={item.title} className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm ml-11">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="py-20 bg-blue-600" aria-labelledby="cta-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-bold text-white mb-6"
          >
            {h.cta.text}
          </h2>
          <Button href={h.cta.href} variant="white" size="lg">
            {h.cta.button}
          </Button>
        </div>
      </section>
    </>
  )
}
