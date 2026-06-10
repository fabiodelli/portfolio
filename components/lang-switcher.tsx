'use client'

import { usePathname } from 'next/navigation'
import type { Lang } from '@/lib/dictionaries'

type Props = { lang: Lang; label: string; ariaLabel: string }

export function LangSwitcher({ lang, label, ariaLabel }: Props) {
  const pathname = usePathname()

  const clean = pathname.replace(/^\/(it|en)/, '') || '/'
  const href = lang === 'it' ? (clean === '/' ? '/en' : `/en${clean}`) : clean

  return (
    <a href={href} aria-label={ariaLabel} className="lang-btn">
      {label}
    </a>
  )
}
