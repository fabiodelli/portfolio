type Props = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: Props) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: Props) {
  return <div className={`mb-3 ${className}`}>{children}</div>
}

export function CardBody({ children, className = '' }: Props) {
  return <div className={`text-slate-600 leading-relaxed ${className}`}>{children}</div>
}
