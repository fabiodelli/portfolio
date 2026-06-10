import { ImageResponse } from 'next/og'
import { getDictionary, type Lang } from '@/lib/dictionaries'

export const runtime = 'edge'
export const alt = 'Fabio Delli — AI Integration Specialist'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const l = (lang === 'en' ? 'en' : 'it') as Lang
  const dict = await getDictionary(l)
  const payoff =
    l === 'it'
      ? 'Soluzioni AI su misura per hotel e attività locali in Versilia.'
      : 'Custom AI solutions for hotels and local businesses in Versilia.'

  const spectralData = await fetch(
    'https://fonts.gstatic.com/s/spectral/v13/rnCr-xNNww_2s0amA9M8qrXHAfosWh.woff2',
  ).then((r) => r.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#16140F',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'Spectral, serif',
        }}
      >
        {/* Top — name + role */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontFamily: 'Spectral, serif',
              fontWeight: 300,
              fontSize: 72,
              color: '#F0EADE',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            {dict.siteName}
          </div>
          <div
            style={{
              fontFamily: 'Spectral, serif',
              fontWeight: 300,
              fontSize: 28,
              color: 'rgba(240,234,222,0.60)',
              letterSpacing: '0.01em',
            }}
          >
            {payoff}
          </div>
        </div>

        {/* Bottom — amber line + role badge */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ width: 80, height: 2, background: '#D9A441' }} />
          <div
            style={{
              fontSize: 20,
              color: 'rgba(240,234,222,0.45)',
              fontFamily: 'Spectral, serif',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {dict.siteTagline}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Spectral',
          data: spectralData,
          style: 'normal',
          weight: 300,
        },
      ],
    },
  )
}
