import { ChevronRight } from 'lucide-react'
import avatarAmazon from '../../../assets/avatar-amazon.svg'
import avatarMcdonalds from '../../../assets/avatar-mcdonalds.svg'
import avatarReddit from '../../../assets/avatar-reddit.svg'
import { Card } from '../../../components/ui/Card'
import { Avatar } from '../../../components/ui/Avatar'
import { TextAction } from '../../../components/ui/TextAction'
import { IconInbox } from '../../../components/ui/icons/IconInbox'

const REPLY_CONTACTS = [
  { name: 'Robert Smith' },
  { name: 'Amazon', avatar: avatarAmazon },
  { name: 'Reddit', avatar: avatarReddit },
  { name: "McDonald's", avatar: avatarMcdonalds },
]

export function RepliesCard({ className = '' }: { className?: string }) {
  return (
    <Card className={`min-h-36 p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-text-primary">Replies</h2>
        <TextAction label="Open inbox" icon={ChevronRight} />
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-surface-teal-subtle px-6 py-4">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CEEDED] p-3 text-brand-interactive">
            <IconInbox aria-hidden className="h-6 w-6" />
          </span>
          <p className="text-4xl font-medium text-text-secondary">24</p>
        </div>
        <div className="flex -space-x-2">
          {REPLY_CONTACTS.map((contact) => (
            <Avatar
              key={contact.name}
              src={contact.avatar}
              name={contact.name}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}
