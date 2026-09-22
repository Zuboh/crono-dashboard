import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import iconComplete from '@/features/signals/assets/icon-complete.svg'
import iconRemove from '@/features/signals/assets/icon-remove.svg'

interface SignalActionMenuProps {
  onComplete: () => void
  onDelete: () => void
}

export function SignalActionMenu({
  onComplete,
  onDelete,
}: SignalActionMenuProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="rounded-full bg-[#1EBAB2] px-4 py-1.75 text-xs font-semibold text-white hover:bg-brand-interactive hover:cursor-pointer w-22.5 outline-none"
        >
          Action
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={6}
          className="w-54 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
        >
          <DropdownMenu.Item
            onSelect={onComplete}
            className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-xs text-text-primary outline-none data-highlighted:bg-teal-50 hover:text-brand-interactive"
          >
            Complete
            <img src={iconComplete} alt="complete" className="h-6 w-6" />
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={onDelete}
            className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-xs text-text-primary outline-none data-highlighted:bg-slate-50"
          >
            Delete
            <img src={iconRemove} alt="delete" className="h-6 w-6" />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
