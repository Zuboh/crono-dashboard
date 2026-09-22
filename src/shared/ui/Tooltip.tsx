import type { ReactNode } from 'react'

interface TooltipProps {
  content: string
  children: ReactNode
}

export function Tooltip({ content, children }: TooltipProps) {
  return (
    <span className="group relative inline-flex">
      <span
        tabIndex={0}
        role="button"
        aria-label={content}
        className="inline-flex"
      >
        {children}
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 flex h-16 w-61.5 -translate-x-1/2 items-center justify-center rounded bg-[#151618] px-4 py-2 text-center text-xs leading-4 font-medium whitespace-normal text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {content}
        <span className="absolute bottom-full left-1/2 -mb-px -translate-x-1/2 border-4 border-transparent border-b-[#151618]" />
      </span>
    </span>
  )
}
