'use client'

import { usePathname } from 'next/navigation'
import type { Lang } from '@/lib/dictionaries'

type Props = { lang: Lang; label: string; ariaLabel: string }

export function LangSwitcher({ lang, label, ariaLabel }: Props) {
  const pathname = usePathname()

  const href =
    lang === 'it'
      ? // from IT path: prefix with /en
        pathname === '/'
        ? '/en'
        : `/en${pathname}`
      : // from EN path: strip /en prefix
        pathname === '/en'
        ? '/'
        : pathname.replace(/^\/en/, '') || '/'

  return (
    <a href={href} aria-label={ariaLabel} className="lang-btn">
      {label}
    </a>
  )
}
