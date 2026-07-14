import type { Metadata } from 'next'

export const SITE_URL = 'https://fabiodelli.com'

type Slug = '' | 'case-study/villa-levante' | 'case-study/softale' | 'about' | 'contact'
type Lang = 'it' | 'en'

function urls(slug: Slug) {
  const it = slug ? `${SITE_URL}/${slug}` : SITE_URL
  const en = `${SITE_URL}/en${slug ? `/${slug}` : ''}`
  return { it, en }
}

export function pageAlternates(lang: Lang, slug: Slug): Metadata['alternates'] {
  const { it, en } = urls(slug)
  return {
    canonical: lang === 'it' ? it : en,
    languages: { it, en, 'x-default': it },
  }
}

export function pageUrl(lang: Lang, slug: Slug): string {
  const { it, en } = urls(slug)
  return lang === 'it' ? it : en
}
