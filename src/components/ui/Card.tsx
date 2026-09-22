import type { ComponentPropsWithoutRef } from 'react'

export function Card({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/30 ${className}`}
      {...props}
    />
  )
}

export function CardTitle({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2
      className={`text-sm font-semibold text-text-primary ${className}`}
      {...props}
    />
  )
}
