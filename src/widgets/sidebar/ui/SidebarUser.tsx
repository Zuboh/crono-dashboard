import { IconZap } from './icons/IconZap'

interface SidebarUserProps {
  name: string
  role: string
}

export function SidebarUser({ name, role }: SidebarUserProps) {
  return (
    <div className="border-border-default flex items-center justify-center gap-2 border-t px-2 py-5">
      <span className="bg-surface-avatar flex h-8 w-8 items-center justify-center rounded-full">
        <IconZap aria-hidden className="text-white" />
      </span>

      <div className="text-sm font-normal">
        <p className="text-text-primary">{name}</p>
        <p className="text-text-muted">{role}</p>
      </div>
    </div>
  )
}
