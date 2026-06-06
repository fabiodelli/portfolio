'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLink = { href: string; label: string }

type Props = {
  links: NavLink[]
  cta: string
  ctaHref: string
  langSwitch: string
  langSwitchLabel: string
  langSwitchHref: string
  openMenuLabel: string
  closeMenuLabel: string
}

export function MobileMenu({
  links,
  cta,
  ctaHref,
  langSwitch,
  langSwitchLabel,
  langSwitchHref,
  openMenuLabel,
  closeMenuLabel,
}: Props) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? closeMenuLabel : openMenuLabel}
        aria-expanded={open}
        className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
      >
        {open ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-white border-b border-slate-200 shadow-lg z-50">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-slate-200 mt-3 pt-3 flex items-center justify-between gap-3">
              <Link
                href={ctaHref}
                onClick={() => setOpen(false)}
                className="flex-1 text-center bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
              >
                {cta}
              </Link>
              <a
                href={langSwitchHref}
                aria-label={langSwitchLabel}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
              >
                {langSwitch}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
