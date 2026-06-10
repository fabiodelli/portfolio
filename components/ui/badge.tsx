type Variant = 'default' | 'salvia'

const variants: Record<Variant, string> = {
  default: 'tag',
  salvia: 'tag',
}

type Props = {
  children: React.ReactNode
  variant?: Variant
  className?: string
}

export function Badge({ children, variant = 'default', className = '' }: Props) {
  return (
    <span className={`${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
