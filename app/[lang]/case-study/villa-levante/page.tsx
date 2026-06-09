import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary, type Lang } from '@/lib/dictionaries'
import { pageAlternates } from '@/lib/metadata'
import { Reveal } from '@/components/scroll-reveal'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as Lang
  const dict = await getDictionary(l)
  const { title, description } = dict.villaLevante.meta
  return {
    title,
    description,
    alternates: pageAlternates(l, 'case-study/villa-levante'),
    openGraph: { title, description },
  }
}

export default async function VillaLevanteCS({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as Lang
  const dict = await getDictionary(l)
  const vl = dict.villaLevante
  const base = l === 'en' ? '/en' : ''
  const home = l === 'en' ? '/en' : '/'

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ paddingTop: 'var(--s7)' }}>
        <div className="wrap">
          {/* Breadcrumb */}
          <nav
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              fontSize: '13px',
              color: 'var(--ink-45)',
              marginBottom: '30px',
            }}
            aria-label="Breadcrumb"
          >
            <Link href={home} style={{ color: 'inherit', textDecoration: 'none' }}>
              {vl.breadcrumb[0]}
            </Link>
            <span>/</span>
            <a href={`${home}#progetti`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {vl.breadcrumb[1]}
            </a>
            <span>/</span>
            <span style={{ color: 'var(--ink)' }}>{vl.breadcrumb[2]}</span>
          </nav>

          {/* Title grid */}
          <div className="cs-title-grid">
            <div>
              <span className="kicker">{vl.kicker}</span>
              <h1 className="display" style={{ margin: '24px 0 0', maxWidth: '11ch' }}>
                {vl.title}
              </h1>
              <p className="lead" style={{ marginTop: '26px', maxWidth: '42ch' }}>
                {vl.lead}
              </p>
            </div>
            <div className="cs-meta">
              <div>
                <div className="cs-meta-lbl">{vl.settoreLabel}</div>
                <div className="cs-meta-val">{vl.settore}</div>
              </div>
              <div>
                <div className="cs-meta-lbl">{vl.ruoloLabel}</div>
                <div className="cs-meta-val">{vl.ruolo}</div>
              </div>
              <div>
                <div className="cs-meta-lbl">{vl.tipoLabel}</div>
                <div className="cs-meta-val">{vl.tipo}</div>
              </div>
              <div>
                <div className="cs-meta-lbl">{vl.statusLabel}</div>
                <div className="cs-meta-val" style={{ color: 'var(--bronze)' }}>{vl.status}</div>
              </div>
            </div>
          </div>

          {/* Hero screenshot */}
          <Reveal>
            <div className="device" style={{ marginTop: 'var(--s6)' }}>
              <div className="device-bar">
                <i /><i /><i />
                <span className="url">{vl.deviceUrl}</span>
              </div>
              <div className="ph" style={{ aspectRatio: '16/9', borderRadius: 0 }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTESTO ── */}
      <section className="section-sm">
        <div className="wrap">
          <div className="cs-intro">
            <span className="kicker">{vl.context.kicker}</span>
            <div>
              <p className="h3" style={{ marginBottom: '24px', maxWidth: '24ch' }}>
                {vl.context.lead}
              </p>
              <p className="body measure">{vl.context.body}</p>
              <p className="body measure" style={{ marginTop: '18px' }}>
                {vl.context.body2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEVA A DUE TEMPI ── */}
      <section className="section-sm">
        <div className="wrap">
          <span className="kicker">{vl.lever.kicker}</span>
          <h2 className="h1" style={{ marginTop: '22px', maxWidth: '20ch' }}>
            {vl.lever.title}
          </h2>
          <div className="lever-grid">
            <Reveal>
              <div className="lever-card lever-cost">
                <span className="lever-tag">{vl.lever.cost.tag}</span>
                <h3 className="h3" style={{ marginBottom: '16px' }}>{vl.lever.cost.title}</h3>
                <p className="lever-body">{vl.lever.cost.body}</p>
                <ul className="lever-list">
                  {vl.lever.cost.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="lever-card lever-rev">
                <span className="lever-tag">{vl.lever.rev.tag}</span>
                <h3 className="h3" style={{ marginBottom: '16px', color: 'var(--on-blue)' }}>
                  {vl.lever.rev.title}
                </h3>
                <p className="lever-body lever-body-dark">{vl.lever.rev.body}</p>
                <ul className="lever-list lever-list-dark">
                  {vl.lever.rev.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── KPI BAND ── */}
      <section className="section-sm">
        <div className="wrap">
          <div className="kpi-band">
            {vl.kpis.map((kpi) => (
              <Reveal key={kpi.value}>
                <div>
                  <div className="kpi-n">{kpi.value}</div>
                  <div className="kpi-l">{kpi.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="section-sm">
        <div className="wrap">
          <div className="stack-grid">
            <div>
              <span className="kicker">{vl.stack.kicker}</span>
              <h2 className="h2" style={{ marginTop: '20px', maxWidth: '14ch' }}>
                {vl.stack.title}
              </h2>
            </div>
            <div>
              <p className="body measure" style={{ marginBottom: '26px' }}>
                {vl.stack.body}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {vl.stack.items.map((item) => (
                  <span key={item} className="chip-tech">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEMO CTA ── */}
      <section className="section-sm">
        <div className="wrap">
          <div className="demo-cta">
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(70% 120% at 50% 0%, rgba(255,255,255,0.06), transparent 60%)',
              }}
            />
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <span className="kicker on-dark">{vl.demo.kicker}</span>
              <h2 className="h2" style={{ color: 'var(--on-blue)', maxWidth: '18ch', margin: '22px auto' }}>
                {vl.demo.title}
              </h2>
              <p className="lead" style={{ color: 'var(--on-blue-60)', maxWidth: '50ch', margin: '0 auto 34px' }}>
                {vl.demo.lead}
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={vl.demo.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-on-blue btn-lg"
                >
                  {vl.demo.cta} <span className="arw">→</span>
                </a>
                <Link href={vl.demo.ctaContactHref} className="btn btn-ghost btn-lg" style={{ borderColor: 'rgba(244,242,238,0.3)', color: 'var(--on-blue)' }}>
                  {vl.demo.ctaContact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      <section className="section-sm">
        <div className="wrap">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 'var(--s4)',
              paddingBlock: 'var(--s6)',
              borderTop: '1px solid var(--ink-12)',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-45)',
                  marginBottom: '10px',
                }}
              >
                {vl.next.label}
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(28px, 3vw, 40px)' }}>
                {vl.next.title}
              </h3>
            </div>
            <Link href={vl.next.href} className="btn btn-primary btn-lg">
              {vl.next.title} <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
