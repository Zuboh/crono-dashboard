import type { ComponentType, SVGProps } from 'react'
import { IconInbox } from '@/shared/ui/icons/IconInbox'
import { IconAnalytics } from '../ui/icons/IconAnalytics'
import { IconDashboard } from '../ui/icons/IconDashboard'
import { IconDeals } from '../ui/icons/IconDeals'
import { IconSearch } from '../ui/icons/IconSearch'
import { IconSequences } from '../ui/icons/IconSequences'
import { IconTasks } from '../ui/icons/IconTasks'
import { IconTemplates } from '../ui/icons/IconTemplates'

export interface SidebarNavEntry {
  id: string
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  badge?: number
  hasChildren?: boolean
}

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: IconDashboard },
  { id: 'find-new', label: 'Find New', icon: IconSearch },
  { id: 'lists', label: 'Lists', icon: IconDashboard },
  { id: 'templates', label: 'Templates', icon: IconTemplates },
  { id: 'sequences', label: 'Sequences', icon: IconSequences },
  { id: 'tasks', label: 'Tasks', icon: IconTasks },
  { id: 'inbox', label: 'Inbox', icon: IconInbox, badge: 24 },
  { id: 'deals', label: 'Deals', icon: IconDeals },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: IconAnalytics,
    hasChildren: true,
  },
] satisfies readonly SidebarNavEntry[]
