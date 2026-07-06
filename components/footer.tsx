import Link from 'next/link'
import type { Dict, Lang } from '@/lib/dictionaries'

type Props = { lang: Lang; dict: Dict }

export function Footer({ lang, dict }: Props) {
  const base = lang === 'en' ? '/en' : ''
  const home = lang === 'en' ? '/en' : '/'
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: 'var(--s5)',
            paddingBottom: 'var(--s6)',
            borderBottom: '1px solid var(--calce-12)',
          }}
          className="footer-top-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '22px', color: 'var(--calce)' }}>
              Fabio Delli
            </div>
            <p
              style={{
                color: 'var(--calce-60)',
                maxWidth: '38ch',
                marginTop: '18px',
                fontSize: '15px',
                lineHeight: '1.6',
              }}
            >
              {dict.footer.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4
              style={{
                fontSize: '12px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--calce-45)',
                marginBottom: '18px',
                fontWeight: 500,
              }}
            >
              {dict.footer.navLabel}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <Link href={home} className="footer-link">{dict.nav.home}</Link>
              <Link href={`${home}#progetti`} className="footer-link">{dict.nav.caseStudies}</Link>
              <Link href={`${base}/about`} className="footer-link">{dict.nav.about}</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: '12px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--calce-45)',
                marginBottom: '18px',
                fontWeight: 500,
              }}
            >
              {dict.footer.contactLabel}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <a href={`mailto:${dict.contact.email}`} className="footer-link">
                {dict.contact.email}
              </a>
              <a href={dict.contact.linkedinHref} target="_blank" rel="noopener noreferrer" className="footer-link">
                LinkedIn
              </a>
              <Link href={`${base}/contact#form`} className="footer-link">
                {dict.nav.cta} →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '28px',
            fontSize: '13px',
            color: 'var(--calce-60)',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <span>{dict.footer.rights.replace('{year}', String(year))}</span>
          <a
            href={lang === 'it' ? '/en' : '/'}
            style={{ color: 'var(--calce-60)', textDecoration: 'none', fontSize: '13px' }}
          >
            {dict.nav.langSwitch}
          </a>
        </div>
      </div>
    </footer>
  )
}
