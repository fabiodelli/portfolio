import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary, type Lang } from '@/lib/dictionaries'
import { pageAlternates, SITE_URL } from '@/lib/metadata'
import { Reveal } from '@/components/scroll-reveal'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as Lang
  const dict = await getDictionary(l)
  const { title, description } = dict.home.meta
  return {
    title,
    description,
    alternates: pageAlternates(l, ''),
    openGraph: { title, description, url: l === 'it' ? SITE_URL : `${SITE_URL}/en` },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as Lang
  const dict = await getDictionary(l)
  const h = dict.home

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Fabio Delli',
        jobTitle: 'AI Integration Specialist',
        url: SITE_URL,
        address: { '@type': 'PostalAddress', addressLocality: 'Versilia', addressCountry: 'IT' },
      },
      {
        '@type': 'ProfessionalService',
        name: 'Fabio Delli — AI Integration',
        url: SITE_URL,
        description: dict.home.meta.description,
        areaServed: { '@type': 'Place', name: 'Versilia, Toscana' },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* ── HERO ── */}
      <section className="hero-section">
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(120% 90% at 88% -10%, rgba(31,58,84,0.05), transparent 55%), linear-gradient(122deg, rgba(246,244,241,0.5) 0%, var(--paper) 40%, var(--paper-2) 100%)',
          }}
        />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid">
            <Reveal>
              <span className="kicker">{h.hero.kicker}</span>
              <h1 className="display hero-h1">
                {h.hero.headline}
              </h1>
              <p className="lead" style={{ maxWidth: '46ch' }}>
                {h.hero.lead}
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '38px' }}>
                <Link href={h.hero.ctaHref} className="btn btn-primary btn-lg">
                  {h.hero.cta} <span className="arw">→</span>
                </Link>
                <a href={h.hero.secondaryHref} className="btn btn-ghost btn-lg">
                  {h.hero.secondary}
                </a>
              </div>
              <div className="hero-meta">
                <span className="hero-meta-lbl">{h.hero.metaLabel}</span>
                <div className="hero-sectors">
                  {h.hero.sectors.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right — FD calling card */}
            <Reveal delay={120}>
              <div className="card-portrait">
                <div className="card-portrait-brand">
                  <div className="fd-sigil-lg">FD</div>
                  <div className="fd-name-lg">Fabio Delli</div>
                  <div className="fd-role-lg">AI Integration · Versilia</div>
                </div>
                <div className="card-portrait-cap">
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '19px' }}>Fabio Delli</div>
                    <div style={{ fontSize: '12.5px', color: 'var(--ink-60)', letterSpacing: '0.02em' }}>
                      Interlocutore unico · Versilia
                    </div>
                  </div>
                  <div className="seal">FD</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVIZI ── */}
      <section className="section" id="servizi">
        <div className="wrap">
          <div className="svc-head">
            <div>
              <span className="kicker">{h.services.kicker}</span>
              <h2 className="h1" style={{ marginTop: '22px', maxWidth: '16ch' }}>
                {h.services.title}
              </h2>
            </div>
            <p className="body" style={{ maxWidth: '44ch', color: 'var(--ink-80)' }}>
              {h.services.subtitle}
            </p>
          </div>

          <div>
            {h.services.items.map((svc) => (
              <Reveal key={svc.num} className="svc-row">
                <div className="svc-num">{svc.num}</div>
                <h3 className="h3" style={{ maxWidth: '18ch' }}>{svc.title}</h3>
                <p className="svc-desc">{svc.desc}</p>
                <div className="gain-box">
                  <div className="gain-lbl">{l === 'it' ? 'Il guadagno' : 'The gain'}</div>
                  <div className="gain-val">{svc.gain}</div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderBottom: '1px solid var(--ink-12)' }} />
          </div>

          <Reveal>
            <p className="svc-foot">
              <span className="index-num">+</span>
              {h.services.footnote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PROGETTI ── */}
      <section id="progetti" className="projects-section">
        <div className="wrap">
          <div className="svc-head" style={{ paddingTop: 'var(--s7)' }}>
            <div>
              <span className="kicker">{h.projects.kicker}</span>
              <h2 className="h1" style={{ marginTop: '22px', maxWidth: '14ch' }}>
                {h.projects.title}
              </h2>
            </div>
            <p className="body" style={{ maxWidth: '44ch', color: 'var(--ink-80)' }}>
              {h.projects.subtitle}
            </p>
          </div>

          {/* Villa Levante */}
          <Reveal>
            <article className="proj">
              <div className="proj-body">
                <div className="row" style={{ gap: '14px' }}>
                  <span className="index-num">{h.projects.villaLevante.index}</span>
                  <span className="small">{h.projects.villaLevante.meta}</span>
                </div>
                <h3 className="h2" style={{ margin: '18px 0 14px' }}>{h.projects.villaLevante.title}</h3>
                <p className="body measure">{h.projects.villaLevante.desc}</p>
                <div className="proj-tags">
                  {h.projects.villaLevante.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="proj-kpi">
                  <div>
                    <div className="stat-n">{h.projects.villaLevante.kpi1.value}</div>
                    <div className="kpi-lbl">{h.projects.villaLevante.kpi1.label}</div>
                  </div>
                  <div>
                    <div className="stat-n">{h.projects.villaLevante.kpi2.value}</div>
                    <div className="kpi-lbl">{h.projects.villaLevante.kpi2.label}</div>
                  </div>
                </div>
                <Link href={h.projects.villaLevante.href} className="tlink">
                  {h.projects.villaLevante.cta} <span className="arw">→</span>
                </Link>
              </div>
              <div className="proj-media">
                <div className="device">
                  <div className="device-bar">
                    <i /><i /><i />
                    <span className="url">{h.projects.villaLevante.deviceUrl}</span>
                  </div>
                  <div className="ph" style={{ aspectRatio: '16/10', borderRadius: 0 }} />
                </div>
              </div>
            </article>
          </Reveal>

          {/* Softale */}
          <Reveal>
            <article className="proj proj-flip">
              <div className="proj-body">
                <div className="row" style={{ gap: '14px' }}>
                  <span className="index-num">{h.projects.softale.index}</span>
                  <span className="small">{h.projects.softale.meta}</span>
                </div>
                <h3 className="h2" style={{ margin: '18px 0 14px' }}>{h.projects.softale.title}</h3>
                <p className="body measure">{h.projects.softale.desc}</p>
                <div className="proj-tags">
                  {h.projects.softale.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="proj-kpi">
                  <div>
                    <div className="stat-n">{h.projects.softale.kpi1.value}</div>
                    <div className="kpi-lbl">{h.projects.softale.kpi1.label}</div>
                  </div>
                  <div>
                    <div className="stat-n">{h.projects.softale.kpi2.value}</div>
                    <div className="kpi-lbl">{h.projects.softale.kpi2.label}</div>
                  </div>
                </div>
                <Link href={h.projects.softale.href} className="tlink">
                  {h.projects.softale.cta} <span className="arw">→</span>
                </Link>
              </div>
              <div className="proj-media">
                <div className="device">
                  <div className="device-bar">
                    <i /><i /><i />
                    <span className="url">{h.projects.softale.deviceUrl}</span>
                  </div>
                  <div className="ph dark" style={{ aspectRatio: '16/10', borderRadius: 0 }} />
                </div>
              </div>
            </article>
          </Reveal>

          <div style={{ paddingBottom: 'var(--s7)' }} />
        </div>
      </section>

      {/* ── PERCHÉ ME ── */}
      <section className="section">
        <div className="wrap">
          <span className="kicker">{h.why.kicker}</span>
          <h2 className="h1" style={{ marginTop: '22px', maxWidth: '18ch' }}>
            {h.why.title}
          </h2>
          <div className="why-grid">
            {h.why.items.map((item, i) => (
              <Reveal key={item.num} delay={i * 80}>
                <div className="why-item">
                  <div className="why-num">{item.num}</div>
                  <h3 className="h3" style={{ fontSize: '23px', margin: '14px 0 12px' }}>
                    {item.title}
                  </h3>
                  <p className="body">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section className="cta-final-section">
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(90% 120% at 90% 0%, rgba(255,255,255,0.06), transparent 60%)',
          }}
        />
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="cta-final-grid">
            <div>
              <span className="kicker on-dark">{h.cta.kicker}</span>
              <h2 className="h1" style={{ color: 'var(--on-blue)', margin: '22px 0 22px' }}>
                {h.cta.title}
              </h2>
              <p className="lead" style={{ color: 'var(--on-blue-60)' }}>
                {h.cta.lead}
              </p>
              <div style={{ marginTop: '34px' }}>
                <Link href={h.cta.href} className="btn btn-on-blue btn-lg">
                  {h.cta.button} <span className="arw">→</span>
                </Link>
              </div>
            </div>
            <ul className="cta-points">
              {h.cta.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
