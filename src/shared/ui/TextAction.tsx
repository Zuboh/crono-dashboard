import type { ComponentType, SVGProps } from 'react'

interface TextActionProps {
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  onClick?: () => void
  className?: string
}

export function TextAction({
  label,
  icon: Icon,
  onClick,
  className = '',
}: TextActionProps) {
  return (
    <span
      onClick={onClick}
      className={`flex items-center gap-1 text-sm font-medium text-brand-interactive hover:cursor-pointer ${className}`}
    >
      {label}
      <Icon aria-hidden className="h-4 w-4" />
    </span>
  )
}
