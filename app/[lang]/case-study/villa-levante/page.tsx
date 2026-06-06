import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { pageAlternates } from '@/lib/metadata'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as 'it' | 'en'
  const dict = await getDictionary(l)
  return {
    title: dict.villaLevante.meta.title,
    description: dict.villaLevante.meta.description,
    alternates: pageAlternates(l, 'case-study/villa-levante'),
    openGraph: {
      title: dict.villaLevante.meta.title,
      description: dict.villaLevante.meta.description,
    },
  }
}

export default async function VillaLevantePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as 'it' | 'en'
  const dict = await getDictionary(l)
  const cs = dict.villaLevante
  const base = l === 'en' ? '/en' : ''

  return (
    <article>
      {/* ── Header ──────────────────────────────────────────── */}
      <header className="bg-slate-950 text-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-slate-500 text-sm mb-8" aria-label="breadcrumb">
            <Link href={`${base}/`} className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-300">{cs.breadcrumb}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="blue">{cs.tag}</Badge>
            <Badge variant="slate">{cs.disclaimer}</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
            {cs.title}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">{cs.lead}</p>
        </div>
      </header>

      {/* ── Body ────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        {/* What is */}
        <section className="mb-12" aria-labelledby="what-is">
          <h2 id="what-is" className="text-2xl font-bold text-slate-900 mb-4">
            {cs.sections.whatIs.title}
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">{cs.sections.whatIs.body}</p>
        </section>

        <hr className="border-slate-200 my-12" />

        {/* Value: costs */}
        <section className="mb-12" aria-labelledby="value-costs">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg font-bold" aria-hidden="true">↓</span>
            <div>
              <h2 id="value-costs" className="text-2xl font-bold text-slate-900 mb-4">
                {cs.sections.costs.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">{cs.sections.costs.body}</p>
            </div>
          </div>
        </section>

        {/* Value: revenue */}
        <section className="mb-12 bg-blue-50 border border-blue-100 rounded-2xl p-8" aria-labelledby="value-revenue">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-lg font-bold" aria-hidden="true">↑</span>
            <div>
              <h2 id="value-revenue" className="text-2xl font-bold text-slate-900 mb-4">
                {cs.sections.revenue.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">{cs.sections.revenue.body}</p>
            </div>
          </div>
        </section>

        {/* Payment integration */}
        <section className="mb-12" aria-labelledby="payment">
          <h2 id="payment" className="text-2xl font-bold text-slate-900 mb-4">
            {cs.sections.payment.title}
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">{cs.sections.payment.body}</p>
        </section>

        <hr className="border-slate-200 my-12" />

        {/* Stack */}
        <section className="mb-12" aria-labelledby="stack">
          <h2 id="stack" className="text-2xl font-bold text-slate-900 mb-4">
            {cs.sections.stack.title}
          </h2>
          <ul className="flex flex-wrap gap-2" role="list">
            {cs.sections.stack.items.map((item) => (
              <li key={item}>
                <Badge variant="default" className="text-sm px-3 py-1">{item}</Badge>
              </li>
            ))}
          </ul>
        </section>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mt-12">
          <Button href={cs.ctaHref} external size="lg">
            {cs.cta}
            <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Button>
          <Button href={cs.ctaContactHref} variant="secondary" size="lg">
            {cs.ctaContact}
          </Button>
        </div>
      </div>
    </article>
  )
}
