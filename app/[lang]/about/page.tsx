import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { pageAlternates } from '@/lib/metadata'
import { Button } from '@/components/ui/button'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as 'it' | 'en'
  const dict = await getDictionary(l)
  return {
    title: dict.about.meta.title,
    description: dict.about.meta.description,
    alternates: pageAlternates(l, 'about'),
    openGraph: {
      title: dict.about.meta.title,
      description: dict.about.meta.description,
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as 'it' | 'en'
  const dict = await getDictionary(l)
  const ab = dict.about

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <header className="bg-slate-950 text-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            {ab.title}
          </h1>
          <p className="text-lg text-slate-300">{ab.paragraphs[0]}</p>
        </div>
      </header>

      {/* ── Body ────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="prose prose-slate max-w-none">
          {ab.paragraphs.slice(1).map((p, i) => (
            <p key={i} className="text-slate-600 leading-relaxed text-lg mb-6 last:mb-0">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-12">
          <Button href={ab.ctaHref} size="lg">
            {ab.cta}
          </Button>
        </div>
      </section>
    </>
  )
}
