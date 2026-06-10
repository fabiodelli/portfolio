type MethodStep = { num: string; title: string; desc: string }

type MethodCardStrings = {
  kicker: string
  steps: readonly MethodStep[]
  footer: string
}

export function MethodCard({ strings }: { strings: MethodCardStrings }) {
  return (
    <div className="method-card">
      <span className="kicker" style={{ fontSize: '10px' }}>{strings.kicker}</span>
      <div className="mc-steps">
        {strings.steps.map((s) => (
          <div key={s.num} className="mc-step">
            <span className="mc-num">{s.num}</span>
            <div>
              <div className="mc-title">{s.title}</div>
              <div className="mc-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mc-footer">
        <div className="mc-divider" />
        <div className="mc-footer-row">
          <span className="mc-sigil">FD</span>
          <span className="mc-footer-label">{strings.footer}</span>
        </div>
      </div>
    </div>
  )
}
