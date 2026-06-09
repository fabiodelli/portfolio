import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import '../globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { getDictionary } from '@/lib/dictionaries'
import { SITE_URL } from '@/lib/metadata'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Fabio Delli — AI Integration Specialist',
    template: '%s · Fabio Delli',
  },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', siteName: 'Fabio Delli' },
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

  return (
    <html lang={resolvedLang} className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Nav lang={resolvedLang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={resolvedLang} dict={dict} />
      </body>
    </html>
  )
}
