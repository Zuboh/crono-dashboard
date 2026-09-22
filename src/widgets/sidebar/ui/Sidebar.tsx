import { ChevronsLeft } from 'lucide-react'
import { useState } from 'react'
import cronoLogo from '@/widgets/sidebar/assets/crono-logo.svg'
import iconGift from '@/widgets/sidebar/assets/icon-gift.svg'
import iconTrialSquiggle from '@/widgets/sidebar/assets/icon-trial-squiggle.svg'
import { NAV_ITEMS } from '../model/sidebar.config'
import { SidebarNav } from './SidebarNav'
import { SidebarUser } from './SidebarUser'

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <aside className="border-border-default bg-surface-primary sticky top-0 hidden h-screen w-52 shrink-0 flex-col justify-between border-r md:flex">
      <div>
        <div className="flex items-center justify-between pl-4 py-5.5 pr-2 mb-1">
          <img src={cronoLogo} alt="Crono" className="h-7 w-auto" />
          <span
            aria-hidden
            className="bg-surface-subtle text-text-muted flex h-6 w-6 items-center justify-center rounded-full"
          >
            <ChevronsLeft aria-hidden className="h-3.5 w-3.5" />
          </span>
        </div>

        <SidebarNav
          items={NAV_ITEMS}
          activeId={activeItem}
          onSelect={setActiveItem}
        />
        <div className="bg-surface-warning relative mx-2 mt-5 overflow-hidden rounded-xl p-3">
          <img
            src={iconTrialSquiggle}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1 h-19 w-12 mix-blend-color-burn"
          />
          <p className="text-text-primary text-sm font-medium">
            Trial ends in 2 days
          </p>
          <span className="bg-accent-warning mt-2 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white">
            Upgrade plan
            <img src={iconGift} alt="" className="h-3 w-3" />
          </span>
        </div>
      </div>

      <SidebarUser name="William Robertson" role="Sales" />
    </aside>
  )
}
