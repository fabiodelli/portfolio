import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'
export const maxDuration = 15

const FROM = 'Portfolio Fabio Delli <form@fabiodelli.com>'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MAX = {
  nome: 100,
  attivita: 150,
  email: 200,
  settore: 60,
  messaggio: 3000,
} as const

type Field = keyof typeof MAX

function clean(value: unknown, field: Field): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, MAX[field])
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  // Honeypot: i bot compilano il campo nascosto → finto successo, nessun invio
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const nome = clean(body.nome, 'nome')
  const attivita = clean(body.attivita, 'attivita')
  const email = clean(body.email, 'email')
  const settore = clean(body.settore, 'settore')
  const messaggio = clean(body.messaggio, 'messaggio')

  if (!nome || !email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    return NextResponse.json({ error: 'Contact service not configured' }, { status: 503 })
  }

  const rows: Array<[string, string]> = [
    ['Nome', nome],
    ['Attività', attivita || '—'],
    ['Email', email],
    ['Settore', settore || '—'],
    ['Messaggio', messaggio || '—'],
  ]

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n')
  const html = `<div style="font-family:sans-serif;line-height:1.6">${rows
    .map(([k, v]) => `<p><strong>${k}:</strong><br>${escapeHtml(v).replace(/\n/g, '<br>')}</p>`)
    .join('')}</div>`

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: FROM,
      to,
      replyTo: email,
      subject: `Richiesta dal portfolio: ${nome}${attivita ? ` (${attivita})` : ''}`,
      text,
      html,
    })
    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Send failed' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  }
}
