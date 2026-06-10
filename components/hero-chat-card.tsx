type ChatCardStrings = {
  header: string
  bubbleGuest: string
  bubbleAssistant: string
  chipCta: string
  footer: string
}

export function HeroChatCard({ strings }: { strings: ChatCardStrings }) {
  return (
    <div className="hero-chat-card">
      {/* Header */}
      <div className="hcc-header">
        <span className="hcc-dot" />
        <span className="hcc-header-label">{strings.header}</span>
      </div>

      {/* Bubbles */}
      <div className="hcc-bubbles">
        <div className="hcc-bubble hcc-bubble-guest">{strings.bubbleGuest}</div>
        <div className="hcc-bubble hcc-bubble-assistant">{strings.bubbleAssistant}</div>
        <div className="hcc-chip">{strings.chipCta}</div>
      </div>

      {/* Footer */}
      <div className="hcc-footer">
        <span className="hcc-sigil">FD</span>
        <span className="hcc-footer-label">{strings.footer}</span>
      </div>
    </div>
  )
}
