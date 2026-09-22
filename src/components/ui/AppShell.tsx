import type { ComponentPropsWithoutRef } from 'react'

export function AppShell({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={`flex min-h-screen bg-[#f5f6f8] text-text-primary ${className}`}
      {...props}
    />
  )
}
