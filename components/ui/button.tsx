import { type ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost' | 'white'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
  secondary:
    'border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400',
  ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
  white: 'border border-white/30 text-white bg-transparent hover:bg-white hover:text-blue-600',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-base gap-2',
  lg: 'px-7 py-3.5 text-lg gap-2',
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  href?: string
  external?: boolean
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', size = 'md', href, external, className = '', children, ...rest }, ref) => {
    const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

    if (href) {
      return external ? (
        <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={cls} {...rest}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
