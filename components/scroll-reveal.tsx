'use client'

import { useEffect, useRef, type ReactNode, type ElementType } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  tag?: ElementType
  style?: React.CSSProperties
}

export function Reveal({ children, className = '', delay = 0, tag: Tag = 'div', style }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  }

  const TagAny = Tag as 'div'

  return (
    <TagAny
      ref={ref}
      className={`reveal ${className}`}
      style={Object.keys(combinedStyle).length ? combinedStyle : undefined}
    >
      {children}
    </TagAny>
  )
}
