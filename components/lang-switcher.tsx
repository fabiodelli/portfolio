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
    <a
      href={href}
      aria-label={ariaLabel}
      className="text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-400 rounded-md px-2.5 py-1 transition-colors"
    >
      {label}
    </a>
  )
}
