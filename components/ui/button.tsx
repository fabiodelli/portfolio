import { type ButtonHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'

type Variant = 'primary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center font-medium transition-colors cursor-pointer no-underline'

const variants: Record<Variant, string> = {
  primary: 'btn btn-primary',
  ghost: 'btn btn-ghost',
}

const sizes: Record<Size, string> = {
  sm: 'btn-sm',
  md: '',
  lg: 'text-[17px] px-8 py-4',
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
