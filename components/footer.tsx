import Link from 'next/link'
import type { Dict, Lang } from '@/lib/dictionaries'

type Props = { lang: Lang; dict: Dict }

export function Footer({ lang, dict }: Props) {
  const base = lang === 'en' ? '/en' : ''
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-slate-900 text-lg">Fabio Delli</p>
            <p className="mt-1 text-sm text-slate-500">{dict.footer.tagline}</p>
          </div>

          {/* Case studies */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              {dict.footer.caseStudies}
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`${base}/case-study/villa-levante`}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {dict.footer.nav.villaLevante}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/case-study/softale`}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {dict.footer.nav.softale}
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Info
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`${base}/about`}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {dict.footer.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/contact`}
                  className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {dict.footer.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-400">
            {dict.footer.rights.replace('{year}', String(year))}
          </p>
        </div>
      </div>
    </footer>
  )
}
