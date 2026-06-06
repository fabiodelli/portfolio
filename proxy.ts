import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LOCALES = ['it', 'en'] as const
const DEFAULT_LOCALE = 'it' as const

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  )

  if (!hasLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|api|.*\\..*).*)', '/'],
}
