import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'

const slugs = [
  '',
  'case-study/villa-levante',
  'case-study/softale',
  'about',
  'contact',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const slug of slugs) {
    const itUrl = slug ? `${SITE_URL}/${slug}` : SITE_URL
    const enUrl = `${SITE_URL}/en${slug ? `/${slug}` : ''}`

    entries.push(
      { url: itUrl, lastModified: now, alternates: { languages: { it: itUrl, en: enUrl } } },
      { url: enUrl, lastModified: now, alternates: { languages: { it: itUrl, en: enUrl } } },
    )
  }

  return entries
}
