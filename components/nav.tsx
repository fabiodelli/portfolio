import Link from 'next/link'
import type { Dict, Lang } from '@/lib/dictionaries'
import { LangSwitcher } from './lang-switcher'
import { MobileMenu } from './mobile-menu'

type Props = { lang: Lang; dict: Dict }

function navLinks(lang: Lang, dict: Dict) {
  const base = lang === 'en' ? '/en' : ''
  const home = lang === 'en' ? '/en' : '/'
  return [
    { href: home, label: dict.nav.home },
    { href: `${home}#progetti`, label: dict.nav.caseStudies },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ]
}

export function Nav({ lang, dict }: Props) {
  const links = navLinks(lang, dict)
  const ctaHref = lang === 'en' ? '/en/contact' : '/contact'

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href={lang === 'en' ? '/en' : '/'} className="wordmark">
          <span className="fd">FD</span>
          Fabio Delli
        </Link>

        {/* Desktop nav links — hidden on mobile via globals.css */}
        <nav className="nav-links" aria-label="Navigazione principale">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right area — CTA hidden on mobile via globals.css */}
        <div className="nav-right">
          <LangSwitcher
            lang={lang}
            label={dict.nav.langSwitch}
            ariaLabel={dict.nav.langSwitchLabel}
          />
          <Link href={ctaHref} className="btn btn-ghost btn-sm">
            {dict.nav.cta} <span className="arw">→</span>
          </Link>
        </div>

        {/* Mobile hamburger — visible only on mobile */}
        <div className="nav-mobile-trigger">
          <MobileMenu
            links={links}
            cta={dict.nav.cta}
            ctaHref={ctaHref}
            langSwitch={dict.nav.langSwitch}
            langSwitchLabel={dict.nav.langSwitchLabel}
            langSwitchHref={lang === 'it' ? '/en' : '/'}
            openMenuLabel={dict.nav.openMenu}
            closeMenuLabel={dict.nav.closeMenu}
          />
        </div>
      </div>
    </header>
  )
}
