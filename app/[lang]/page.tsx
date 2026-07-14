import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getDictionary, type Lang } from '@/lib/dictionaries'
import { pageAlternates, SITE_URL } from '@/lib/metadata'
import { Reveal } from '@/components/scroll-reveal'
import { HeroChatCard } from '@/components/hero-chat-card'

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

function HeadlineWithKeyword({ text, keyword }: { text: string; keyword: string }) {
  const idx = text.indexOf(keyword)
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <em style={{ fontStyle: 'italic', color: 'var(--ambra)' }}>{keyword}</em>
      {text.slice(idx + keyword.length)}
    </>
  )
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

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-section">
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid">
            <div>
              <span className="kicker">{h.hero.kicker}</span>
              <h1 className="display hero-h1">
                <HeadlineWithKeyword text={h.hero.headline} keyword={h.hero.headlineKeyword} />
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
                <span className="hero-meta-lbl">{h.hero.sectors}</span>
              </div>
            </div>

            {/* Right — mini-chat demo card (fuori da Reveal: è above the fold) */}
            <div>
              <HeroChatCard strings={h.hero.chatCard} />
            </div>
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
            <p className="body" style={{ maxWidth: '44ch', color: 'var(--calce-80)' }}>
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
            <div style={{ borderBottom: '1px solid var(--calce-12)' }} />
          </div>

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
            <p className="body" style={{ maxWidth: '44ch', color: 'var(--calce-80)' }}>
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
                  <div className="device-shot" style={{ aspectRatio: '16/10' }}>
                    <Image
                      src="/shots/villa-levante-desktop.webp"
                      alt={`${h.projects.villaLevante.title} · ${h.projects.villaLevante.meta}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 55vw"
                      style={{ filter: 'brightness(.96) saturate(.95)' }}
                    />
                  </div>
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
                  <div className="device-shot" style={{ aspectRatio: '16/10' }}>
                    <Image
                      src="/shots/softale-desktop.webp"
                      alt={`${h.projects.softale.title} · ${h.projects.softale.meta}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 55vw"
                      style={{ filter: 'brightness(.96) saturate(.95)' }}
                    />
                  </div>
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
        <div className="wrap" style={{ position: 'relative' }}>
          <div className="cta-final-grid">
            <div>
              <span className="kicker">{h.cta.kicker}</span>
              <h2 className="h1" style={{ margin: '22px 0 22px' }}>
                {h.cta.title}
              </h2>
              <p className="lead" style={{ color: 'var(--calce-80)' }}>
                {h.cta.lead}
              </p>
              <div style={{ marginTop: '34px' }}>
                <Link href={h.cta.href} className="btn btn-primary btn-lg">
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
