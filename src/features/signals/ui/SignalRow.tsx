import { Avatar } from '@/shared/ui/Avatar'
import type { Signal, SignalTag } from '../model/signals.types'
import { SignalActionMenu } from './SignalActionMenu'
import { getContactAvatar } from './signals.avatars'

const TAG_COLORS: Record<SignalTag, string> = {
  'Role change': 'text-[#8846DC]',
  'Company change': 'text-accent-blue',
  'Website view': 'text-[#E769CB]',
}

interface SignalRowProps {
  signal: Signal
  onComplete: (id: string) => void
  onDelete: (id: string) => void
}

function EventText({
  event,
  highlight,
}: {
  event: string
  highlight?: string
}) {
  if (!highlight) return <>{event}</>
  const index = event.indexOf(highlight)
  if (index === -1) return <>{event}</>
  return (
    <>
      {event.slice(0, index)}
      <span className="font-semibold text-brand-interactive">{highlight}</span>
      {event.slice(index + highlight.length)}
    </>
  )
}

export function SignalRow({ signal, onComplete, onDelete }: SignalRowProps) {
  const avatar = getContactAvatar(signal.contact)

  return (
    <li className="flex items-center gap-3 p-4">
      <span className="relative shrink-0">
        <Avatar src={avatar} name={signal.contact} />
        {signal.unread && (
          <span
            className="absolute -top-0.5 -left-0.5 h-2.5 w-2.5 rounded-full bg-accent-warning ring-2 ring-white"
            aria-hidden
          />
        )}
      </span>

      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-sm ${signal.unread ? 'text-slate-900' : 'text-slate-400'}`}
        >
          <span className="font-medium">{signal.contact}</span>{' '}
          <EventText event={signal.event} highlight={signal.highlight} />
        </p>
        <div className="mt-0.5 flex items-center gap-2 text-[11px]">
          <span className={`font-medium ${TAG_COLORS[signal.tag]}`}>
            {signal.tag}
          </span>
          {signal.sequenceTag && (
            <span className="rounded-full bg-surface-teal-subtle px-2 py-0.5 font-medium text-brand-interactive">
              In sequence
            </span>
          )}
        </div>
      </div>

      <span className="shrink-0 text-[11px] text-text-muted font-medium">
        {signal.timestamp}
      </span>

      <SignalActionMenu
        onComplete={() => onComplete(signal.id)}
        onDelete={() => onDelete(signal.id)}
      />
    </li>
  )
}
