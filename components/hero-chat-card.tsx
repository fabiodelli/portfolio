'use client'

import { useChat } from '@ai-sdk/react'
import { isTextUIPart } from 'ai'
import { useEffect, useRef, useState } from 'react'

type ChatCardStrings = {
  header: string
  welcome: string
  starters: readonly string[]
  inputPlaceholder: string
  errorMessage: string
  footer: string
}

export function HeroChatCard({ strings }: { strings: ChatCardStrings }) {
  const { messages, sendMessage, status, error } = useChat()

  const [input, setInput] = useState('')
  const messagesRef = useRef<HTMLDivElement>(null)
  const isLoading = status === 'submitted' || status === 'streaming'

  useEffect(() => {
    if (messages.length === 0) return
    const el = messagesRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, isLoading])

  const send = (text: string) => {
    if (!text.trim()) return
    sendMessage({ text })
    setInput('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    send(input)
  }

  const showStarters = messages.length === 0 && !isLoading

  return (
    <div className="hero-chat-card">
      {/* Header */}
      <div className="hcc-header">
        <span className="hcc-dot" />
        <span className="hcc-header-label">{strings.header}</span>
      </div>

      {/* Messages area */}
      <div className="hcc-messages" ref={messagesRef}>
        {/* Welcome message — always visible */}
        <div className="hcc-bubble hcc-bubble-assistant">{strings.welcome}</div>

        {/* Starter chips — only before first user message */}
        {showStarters && (
          <div className="hcc-starters">
            {strings.starters.map((starter) => (
              <button
                key={starter}
                className="hcc-starter-chip"
                onClick={() => send(starter)}
                type="button"
              >
                {starter}
              </button>
            ))}
          </div>
        )}

        {/* Conversation messages */}
        {messages.map((message) => {
          const text = message.parts
            .filter(isTextUIPart)
            .map((p) => p.text)
            .join('')
          if (!text) return null
          return (
            <div
              key={message.id}
              className={`hcc-bubble ${
                message.role === 'user' ? 'hcc-bubble-guest' : 'hcc-bubble-assistant'
              }`}
            >
              {text}
            </div>
          )
        })}

        {/* Error fallback */}
        {error && (
          <div className="hcc-bubble hcc-bubble-assistant">{strings.errorMessage}</div>
        )}

        {/* Typing indicator — show while submitted but no assistant text yet */}
        {isLoading && !messages.some(
          (m) => m.role === 'assistant' && m.parts.some((p) => p.type === 'text')
        ) && (
          <div className="hcc-bubble hcc-bubble-assistant hcc-typing">
            <span /><span /><span />
          </div>
        )}

      </div>

      {/* Input row */}
      <form className="hcc-input-row" onSubmit={handleSubmit}>
        <input
          className="hcc-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={strings.inputPlaceholder}
          disabled={isLoading}
          autoComplete="off"
        />
        <button
          type="submit"
          className="hcc-send-btn"
          disabled={isLoading || !input.trim()}
          aria-label="Invia"
        >
          →
        </button>
      </form>

      {/* Footer */}
      <div className="hcc-footer">
        <span className="hcc-sigil">FD</span>
        <span className="hcc-footer-label">{strings.footer}</span>
      </div>
    </div>
  )
}
