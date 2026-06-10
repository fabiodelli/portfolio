type Props = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: Props) {
  return (
    <div
      className={`bg-[var(--espresso)] border border-[var(--calce-08)] rounded-[var(--r-lg)] p-6 transition-colors hover:border-[var(--calce-12)] ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: Props) {
  return <div className={`mb-3 ${className}`}>{children}</div>
}

export function CardBody({ children, className = '' }: Props) {
  return <div className={`text-[var(--calce-80)] leading-relaxed ${className}`}>{children}</div>
}
