import type { Metadata } from 'next'
import { getDictionary, type Lang } from '@/lib/dictionaries'
import { pageAlternates } from '@/lib/metadata'
import { ContactForm } from '@/components/contact-form'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as Lang
  const dict = await getDictionary(l)
  const { title, description } = dict.contact.meta
  return {
    title,
    description,
    alternates: pageAlternates(l, 'contact'),
    openGraph: { title, description },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as Lang
  const dict = await getDictionary(l)
  const ct = dict.contact

  return (
    <section style={{ paddingTop: 'var(--s7)', paddingBottom: 'var(--s8)' }}>
      <div className="wrap">
        <div className="contact-grid">
          {/* ── Left ── */}
          <div>
            <span className="kicker">{ct.kicker}</span>
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 300,
                fontSize: 'clamp(40px, 5.4vw, 70px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.04,
                margin: '24px 0 26px',
                maxWidth: '14ch',
              }}
            >
              {ct.title}
            </h1>
            <p className="lead measure">{ct.lead}</p>

            {/* Channels */}
            <div className="channels">
              <a className="channel" href={`mailto:${ct.email}`}>
                <span className="channel-ic">@</span>
                <span>
                  <span className="channel-lbl">{ct.emailLabel}</span>
                  <span className="channel-val">{ct.email}</span>
                </span>
                <span className="channel-arw">→</span>
              </a>

              <a
                className="channel"
                href={ct.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="channel-ic" style={{ fontFamily: 'var(--sans)', fontWeight: 600, fontSize: '14px' }}>
                  in
                </span>
                <span>
                  <span className="channel-lbl">{ct.linkedinLabel}</span>
                  <span className="channel-val">Fabio Delli</span>
                </span>
                <span className="channel-arw">→</span>
              </a>

              <div className="channel" style={{ cursor: 'default' }}>
                <span className="channel-ic" style={{ fontSize: '20px' }}>◷</span>
                <span>
                  <span className="channel-lbl">{ct.locationLabel}</span>
                  <span className="channel-val">{ct.location}</span>
                </span>
              </div>
            </div>

            {/* Reassurance */}
            <ul className="reassure">
              {ct.reassure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* ── Right — Form ── */}
          <ContactForm form={ct.form} />
        </div>
      </div>
    </section>
  )
}
