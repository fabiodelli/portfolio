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
  const { title, description } = dict.softale.meta
  return {
    title,
    description,
    alternates: pageAlternates(l, 'case-study/softale'),
    openGraph: { title, description },
  }
}

export default async function SoftaleCS({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as Lang
  const dict = await getDictionary(l)
  const s = dict.softale
  const home = l === 'en' ? '/en' : '/'

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ paddingTop: 'var(--s7)' }}>
        <div className="wrap">
          <nav
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              fontSize: '13px',
              color: 'var(--calce-45)',
              marginBottom: '30px',
            }}
            aria-label="Breadcrumb"
          >
            <Link href={home} style={{ color: 'inherit', textDecoration: 'none' }}>
              {s.breadcrumb[0]}
            </Link>
            <span>/</span>
            <a href={`${home}#progetti`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {s.breadcrumb[1]}
            </a>
            <span>/</span>
            <span style={{ color: 'var(--calce-80)' }}>{s.breadcrumb[2]}</span>
          </nav>

          <div className="cs-title-grid">
            <div>
              <span className="kicker">{s.kicker}</span>
              <h1 className="display" style={{ margin: '24px 0 0', maxWidth: '11ch' }}>
                {s.title}
              </h1>
              <p className="lead" style={{ marginTop: '26px', maxWidth: '42ch' }}>
                {s.lead}
              </p>
            </div>
            <div className="cs-meta">
              <div>
                <div className="cs-meta-lbl">{s.settoreLabel}</div>
                <div className="cs-meta-val">{s.settore}</div>
              </div>
              <div>
                <div className="cs-meta-lbl">{s.ruoloLabel}</div>
                <div className="cs-meta-val">{s.ruolo}</div>
              </div>
              <div>
                <div className="cs-meta-lbl">{s.tipoLabel}</div>
                <div className="cs-meta-val">{s.tipo}</div>
              </div>
              <div>
                <div className="cs-meta-lbl">{s.statusLabel}</div>
                <div className="cs-meta-val" style={{ color: 'var(--salvia)' }}>{s.status}</div>
              </div>
            </div>
          </div>

          <Reveal>
            <div className="device" style={{ marginTop: 'var(--s6)' }}>
              <div className="device-bar">
                <i /><i /><i />
                <span className="url">{s.deviceUrl}</span>
              </div>
              <div className="ph dark" style={{ aspectRatio: '16/9', borderRadius: 0 }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT IS ── */}
      <section className="section-sm">
        <div className="wrap">
          <div className="cs-intro">
            <span className="kicker">{s.whatIs.kicker}</span>
            <div>
              <p className="h3" style={{ marginBottom: '24px', maxWidth: '24ch' }}>
                {s.whatIs.lead}
              </p>
              <p className="body measure">{s.whatIs.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PIPELINE ── */}
      <section
        className="section-sm"
        style={{
          background: 'var(--espresso)',
          borderTop: '1px solid var(--calce-08)',
          borderBottom: '1px solid var(--calce-08)',
        }}
      >
        <div className="wrap">
          <span className="kicker">{s.pipeline.kicker}</span>
          <h2 className="h1" style={{ marginTop: '22px', marginBottom: 'var(--s6)', maxWidth: '18ch' }}>
            {s.pipeline.title}
          </h2>
          <div className="stack-grid">
            <p className="body measure">{s.pipeline.body}</p>
            <div>
              {s.pipeline.items.map((item, i) => (
                <Reveal key={item.label} delay={i * 60}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '60px 1fr',
                      gap: 'var(--s3)',
                      padding: 'var(--s3) 0',
                      borderTop: '1px solid var(--calce-12)',
                      alignItems: 'baseline',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--serif)',
                        fontWeight: 300,
                        fontSize: '30px',
                        color: 'var(--calce-30)',
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                      }}
                    >
                      0{i + 1}
                    </div>
                    <div>
                      <div className="h3" style={{ fontSize: '20px', marginBottom: '6px' }}>{item.label}</div>
                      <p style={{ color: 'var(--calce-80)', fontSize: '15.5px', maxWidth: '44ch' }}>{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <div style={{ borderBottom: '1px solid var(--calce-12)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF CALLOUT ── */}
      <section className="section-sm">
        <div className="wrap">
          <div
            style={{
              background: 'var(--ambra-08)',
              borderTop: '1px solid var(--calce-08)',
              borderBottom: '1px solid var(--calce-08)',
              borderRadius: 'var(--r-lg)',
              padding: 'var(--s6)',
            }}
          >
            <span className="kicker">{s.proof.kicker}</span>
            <p
              className="h2"
              style={{
                marginTop: '20px',
                maxWidth: '56ch',
                fontStyle: 'italic',
              }}
            >
              &ldquo;{s.proof.body}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="section-sm">
        <div className="wrap">
          <div className="stack-grid">
            <div>
              <span className="kicker">{s.stack.kicker}</span>
              <h2 className="h2" style={{ marginTop: '20px', maxWidth: '14ch' }}>
                {s.stack.title}
              </h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'flex-start' }}>
              {s.stack.items.map((item) => (
                <span key={item} className="chip-tech">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-sm">
        <div className="wrap">
          <div className="demo-cta">
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <span className="kicker">{s.cta.kicker}</span>
              <h2 className="h2" style={{ maxWidth: '18ch', margin: '22px auto' }}>
                {s.cta.title}
              </h2>
              <p className="lead" style={{ color: 'var(--calce-80)', maxWidth: '50ch', margin: '0 auto 34px' }}>
                {s.cta.lead}
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={s.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  {s.cta.button} <span className="arw">→</span>
                </a>
                <Link href={s.cta.ctaContactHref} className="btn btn-ghost btn-lg">
                  {s.cta.ctaContact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEXT ── */}
      <section className="section-sm">
        <div className="wrap">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 'var(--s4)',
              paddingBlock: 'var(--s6)',
              borderTop: '1px solid var(--calce-12)',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--calce-45)',
                  marginBottom: '10px',
                }}
              >
                {s.next.label}
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 'clamp(28px, 3vw, 40px)' }}>
                {s.next.title}
              </h3>
            </div>
            <a href={s.next.href} className="btn btn-primary btn-lg">
              {s.next.title} <span className="arw">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
