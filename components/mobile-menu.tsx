'use client'

import { useState } from 'react'
import Link from 'next/link'

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

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? closeMenuLabel : openMenuLabel}
        aria-expanded={open}
        className="nav-toggle"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <div
          style={{
            position: 'fixed',
            inset: '66px 0 0',
            background: 'var(--paper)',
            borderTop: '1px solid var(--ink-12)',
            zIndex: 39,
            display: 'flex',
            flexDirection: 'column',
            padding: 'var(--s3)',
            gap: '4px',
            overflowY: 'auto',
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--r-sm)',
                fontSize: '17px',
                color: 'var(--ink)',
                textDecoration: 'none',
                fontFamily: 'var(--serif)',
                fontWeight: 300,
                transition: 'background .15s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.background = 'var(--paper-2)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.background = 'transparent')
              }
            >
              {link.label}
            </Link>
          ))}

          <div
            style={{
              borderTop: '1px solid var(--ink-12)',
              marginTop: '12px',
              paddingTop: '16px',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="btn btn-primary"
              style={{ flex: 1, justifyContent: 'center' }}
            >
              {cta} <span className="arw">→</span>
            </Link>
            <a
              href={langSwitchHref}
              aria-label={langSwitchLabel}
              className="lang-btn"
              style={{
                padding: '12px 16px',
                border: '1px solid var(--ink-12)',
                borderRadius: 'var(--r-sm)',
              }}
            >
              {langSwitch}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
