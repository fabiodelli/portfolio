import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary, type Lang } from '@/lib/dictionaries'
import { pageAlternates } from '@/lib/metadata'
import { Reveal } from '@/components/scroll-reveal'
import { MethodCard } from '@/components/method-card'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as Lang
  const dict = await getDictionary(l)
  const { title, description } = dict.about.meta
  return {
    title,
    description,
    alternates: pageAlternates(l, 'about'),
    openGraph: { title, description },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as Lang
  const dict = await getDictionary(l)
  const a = dict.about
  const base = l === 'en' ? '/en' : ''

  return (
    <>
      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="wrap">
          <div className="about-grid">
            <div>
              <span className="kicker">{a.kicker}</span>
              <h1 className="h1" style={{ margin: '24px 0 28px', maxWidth: '20ch' }}>
                {a.title}
              </h1>
              <p className="lead measure">{a.lead}</p>
              <div className="about-sign">
                <div className="sign-seal">FD</div>
                <div>
                  <div className="sign-name">Fabio Delli</div>
                  <div className="sign-role">{a.role}</div>
                </div>
              </div>
            </div>

            {/* Method card — no personal photo */}
            <Reveal>
              <MethodCard strings={a.methodCard} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── NARRATIVA ── */}
      <section className="section-sm">
        <div className="wrap">
          <div className="narr">
            <span className="kicker">{a.narrativa.kicker}</span>
            <div>
              <div className="narr-flow">
                {a.narrativa.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <blockquote className="pull" style={{ marginTop: '40px' }}>
                {a.narrativa.pull}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPI ── */}
      <section className="section-sm">
        <div className="wrap">
          <span className="kicker">{a.principi.kicker}</span>
          <h2 className="h1" style={{ margin: '22px 0 var(--s5)', maxWidth: '16ch' }}>
            {a.principi.title}
          </h2>
          <div className="principles">
            {a.principi.items.map((item) => (
              <Reveal key={item.num} className="principle">
                <div className="principle-num">{item.num}</div>
                <h3 className="h3" style={{ fontSize: '22px', margin: '14px 0 12px' }}>
                  {item.title}
                </h3>
                <p className="body">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COME LAVORO ── */}
      <section className="section-sm">
        <div className="wrap">
          <div className="narr" style={{ alignItems: 'start' }}>
            <span className="kicker">{a.steps.kicker}</span>
            <div>
              <p className="h3" style={{ maxWidth: '22ch', marginBottom: '8px' }}>
                {a.steps.title}
              </p>
              <div className="steps">
                {a.steps.items.map((step) => (
                  <div key={step.num} className="step">
                    <div className="step-num">{step.num}</div>
                    <div>
                      <h3 className="h3" style={{ marginBottom: '8px' }}>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: 'var(--ambra-08)',
          borderTop: '1px solid var(--calce-08)',
          borderBottom: '1px solid var(--calce-08)',
          paddingBlock: 'var(--s6)',
        }}
      >
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: 'var(--s6)',
              alignItems: 'center',
            }}
            className="about-cta-grid"
          >
            <div>
              <span className="kicker">{a.cta.kicker}</span>
              <h2 className="h1" style={{ margin: '22px 0' }}>
                {a.cta.title}
              </h2>
              <p className="lead" style={{ color: 'var(--calce-80)' }}>
                {a.cta.lead}
              </p>
            </div>
            <div>
              <Link href={`${base}/contact`} className="btn btn-primary btn-lg">
                {a.cta.button} <span className="arw">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
