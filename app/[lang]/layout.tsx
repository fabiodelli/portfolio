import type { Metadata } from 'next'
import { Spectral, Schibsted_Grotesk } from 'next/font/google'
import '../globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { getDictionary } from '@/lib/dictionaries'
import { SITE_URL } from '@/lib/metadata'

const spectral = Spectral({
  subsets: ['latin'],
  variable: '--font-spectral',
  display: 'swap',
  weight: ['300', '400'],
  style: ['normal', 'italic'],
})

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Fabio Delli — AI Integration Specialist',
    template: '%s · Fabio Delli',
  },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', siteName: 'Fabio Delli' },
  twitter: { card: 'summary_large_image' },
}

export function generateStaticParams() {
  return [{ lang: 'it' }, { lang: 'en' }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const resolvedLang = (lang === 'en' ? 'en' : 'it') as 'it' | 'en'
  const dict = await getDictionary(resolvedLang)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Fabio Delli',
        jobTitle: 'AI Integration Specialist',
        url: SITE_URL,
        address: { '@type': 'PostalAddress', addressLocality: 'Versilia', addressCountry: 'IT' },
      },
      {
        '@type': 'ProfessionalService',
        name: 'Fabio Delli — AI Integration',
        url: SITE_URL,
        description: dict.home.meta.description,
        areaServed: { '@type': 'Place', name: 'Versilia, Toscana' },
      },
    ],
  }

  return (
    <html lang={resolvedLang} className={`${spectral.variable} ${schibsted.variable} h-full`}>
      <head>
        <meta name="theme-color" content="#16140F" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        {/* Abilita lo scroll-reveal solo quando il JS è attivo: senza JS i contenuti restano visibili */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav lang={resolvedLang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={resolvedLang} dict={dict} />
      </body>
    </html>
  )
}
