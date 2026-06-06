import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { pageAlternates } from '@/lib/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as 'it' | 'en'
  const dict = await getDictionary(l)
  return {
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
    alternates: pageAlternates(l, 'contact'),
    openGraph: {
      title: dict.contact.meta.title,
      description: dict.contact.meta.description,
    },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as 'it' | 'en'
  const dict = await getDictionary(l)
  const ct = dict.contact

  return (
    <>
      {/* ── Header ──────────────────────────────────────────── */}
      <header className="bg-slate-950 text-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
            {ct.title}
          </h1>
          <p className="text-lg text-slate-300 max-w-xl">{ct.lead}</p>
        </div>
      </header>

      {/* ── Body ────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Direct contact */}
          <section aria-labelledby="direct-contact">
            <h2 id="direct-contact" className="text-xl font-semibold text-slate-900 mb-6">
              {ct.orDivider}
            </h2>
            <ul className="space-y-4">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  {ct.emailLabel}
                </p>
                <a
                  href={`mailto:${ct.email}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors"
                >
                  {ct.email}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  {ct.linkedinLabel}
                </p>
                <a
                  href={ct.linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {ct.linkedin}
                </a>
              </li>
            </ul>
          </section>

          {/* Form */}
          <section aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="text-xl font-semibold text-slate-900 mb-6 sr-only">
              {ct.form.messageLabel}
            </h2>
            <form
              action={`mailto:${ct.email}`}
              method="get"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  {ct.form.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={ct.form.namePlaceholder}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  {ct.form.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={ct.form.emailPlaceholder}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  {ct.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="body"
                  rows={5}
                  placeholder={ct.form.messagePlaceholder}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                {ct.form.submit}
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}
