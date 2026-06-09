'use client'

import { useState, type FormEvent } from 'react'

type FormDict = {
  title: string
  subtitle: string
  nameLabel: string
  namePlaceholder: string
  activityLabel: string
  activityPlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  sectorLabel: string
  sectorOptions: readonly string[]
  messageLabel: string
  messagePlaceholder: string
  submit: string
  note: string
  success: string
}

export function ContactForm({ form }: { form: FormDict }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('https://formspree.io/f/xpwxywqz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="form-card"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '320px' }}
      >
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              border: '1.5px solid var(--bronze)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontFamily: 'var(--serif)',
              fontSize: '22px',
              color: 'var(--bronze)',
            }}
          >
            ✓
          </div>
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '22px',
              color: 'var(--ink)',
            }}
          >
            {form.success}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="form-card" id="form">
      <div
        style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: '24px', marginBottom: '6px' }}
      >
        {form.title}
      </div>
      <div style={{ color: 'var(--ink-60)', fontSize: '14.5px', marginBottom: 'var(--s4)' }}>
        {form.subtitle}
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="field-row">
          <div className="field">
            <label htmlFor="nome">{form.nameLabel}</label>
            <input id="nome" name="nome" type="text" placeholder={form.namePlaceholder} required />
          </div>
          <div className="field">
            <label htmlFor="attivita">{form.activityLabel}</label>
            <input id="attivita" name="attivita" type="text" placeholder={form.activityPlaceholder} />
          </div>
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="email">{form.emailLabel}</label>
            <input id="email" name="email" type="email" placeholder={form.emailPlaceholder} required />
          </div>
          <div className="field">
            <label htmlFor="settore">{form.sectorLabel}</label>
            <select id="settore" name="settore">
              {form.sectorOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="messaggio">{form.messageLabel}</label>
          <textarea id="messaggio" name="messaggio" placeholder={form.messagePlaceholder} />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={status === 'submitting'}
          style={{ width: '100%', justifyContent: 'center', marginTop: '8px', opacity: status === 'submitting' ? 0.6 : 1 }}
        >
          {status === 'submitting' ? '…' : form.submit}
          {status !== 'submitting' && <span className="arw">→</span>}
        </button>

        {status === 'error' && (
          <p style={{ color: 'var(--bronze)', fontSize: '13.5px', marginTop: '12px', textAlign: 'center' }}>
            Errore nell&apos;invio — riprova o scrivimi via email.
          </p>
        )}

        <p className="form-note">{form.note}</p>
      </form>
    </div>
  )
}
