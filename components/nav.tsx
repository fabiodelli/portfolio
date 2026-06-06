import Link from 'next/link'
import type { Dict, Lang } from '@/lib/dictionaries'
import { LangSwitcher } from './lang-switcher'
import { MobileMenu } from './mobile-menu'

type Props = { lang: Lang; dict: Dict }

function navLinks(lang: Lang, dict: Dict) {
  const base = lang === 'en' ? '/en' : ''
  return [
    { href: lang === 'en' ? '/en' : '/', label: dict.nav.home },
    { href: `${base}/case-study/villa-levante`, label: dict.nav.villaLevante },
    { href: `${base}/case-study/softale`, label: dict.nav.softale },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ]
}

export function Nav({ lang, dict }: Props) {
  const links = navLinks(lang, dict)
  const ctaHref = lang === 'en' ? '/en/contact' : '/contact'
  const langSwitchHref = lang === 'it' ? '/en' : '/'

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16 gap-6">
          {/* Logo */}
          <Link
            href={lang === 'en' ? '/en' : '/'}
            className="flex-shrink-0 font-bold text-slate-900 text-lg tracking-tight hover:text-blue-600 transition-colors"
          >
            Fabio Delli
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 ml-4 flex-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-600 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + lang switcher */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <LangSwitcher
              lang={lang}
              label={dict.nav.langSwitch}
              ariaLabel={dict.nav.langSwitchLabel}
            />
            <Link
              href={ctaHref}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              {dict.nav.cta}
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="ml-auto md:hidden">
            <MobileMenu
              links={links}
              cta={dict.nav.cta}
              ctaHref={ctaHref}
              langSwitch={dict.nav.langSwitch}
              langSwitchLabel={dict.nav.langSwitchLabel}
              langSwitchHref={langSwitchHref}
              openMenuLabel={dict.nav.openMenu}
              closeMenuLabel={dict.nav.closeMenu}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
