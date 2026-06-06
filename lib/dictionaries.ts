import 'server-only'

export type Lang = 'it' | 'en'

const loaders = {
  it: () => import('@/dictionaries/it').then((m) => m.it),
  en: () => import('@/dictionaries/en').then((m) => m.en),
}

export async function getDictionary(lang: Lang) {
  return loaders[lang]()
}

export type Dict = Awaited<ReturnType<typeof getDictionary>>
