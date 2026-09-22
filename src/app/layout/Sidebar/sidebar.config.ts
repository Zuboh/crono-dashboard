import type { ComponentType, SVGProps } from 'react'
import { IconAnalytics } from './icons/IconAnalytics'
import { IconDashboard } from './icons/IconDashboard'
import { IconDeals } from './icons/IconDeals'
import { IconInbox } from '../../../components/ui/icons/IconInbox'
import { IconSearch } from './icons/IconSearch'
import { IconSequences } from './icons/IconSequences'
import { IconTasks } from './icons/IconTasks'
import { IconTemplates } from './icons/IconTemplates'

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
