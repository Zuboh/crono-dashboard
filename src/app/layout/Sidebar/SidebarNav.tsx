import { IconChevron } from './icons/IconChevron'
import type { SidebarNavEntry } from './sidebar.config'

interface SidebarNavProps {
  items: readonly SidebarNavEntry[]
  activeId: string
  onSelect: (id: string) => void
}

interface SidebarNavItemProps {
  item: SidebarNavEntry
  active: boolean
  onSelect: (id: string) => void
}

function SidebarNavItem({ item, active, onSelect }: SidebarNavItemProps) {
  const Icon = item.icon

  return (
    <button
      type="button"
      aria-current={active ? 'page' : undefined}
      onClick={() => onSelect(item.id)}
      className={`relative flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium cursor-pointer transition-colors ${
        active ? 'text-brand-interactive' : 'text-text-muted'
      }`}
    >
      <span
        aria-hidden
        className={`bg-brand-interactive absolute -left-2 top-0 h-full w-0.75 origin-center rounded-r-full transition-transform duration-200 ease-out ${
          active ? 'scale-y-100' : 'scale-y-0'
        }`}
      />
      <Icon aria-hidden className="h-6 w-6" />
      <span className="flex-1">{item.label}</span>
      {item.badge !== undefined && (
        <span className="bg-accent-warning rounded-xl px-2 py-1 text-[10px] font-semibold text-white">
          {item.badge}
        </span>
      )}
      {item.hasChildren && (
        <IconChevron aria-hidden className="text-text-muted h-6 w-6" />
      )}
    </button>
  )
}

export function SidebarNav({ items, activeId, onSelect }: SidebarNavProps) {
  return (
    <nav aria-label="Primary" className="flex flex-col gap-2 px-2">
      {items.map((item) => (
        <SidebarNavItem
          key={item.id}
          item={item}
          active={item.id === activeId}
          onSelect={onSelect}
        />
      ))}
    </nav>
  )
}
