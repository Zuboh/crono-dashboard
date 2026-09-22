import avatarMedium from '@/features/signals/assets/avatar-medium.svg'
import avatarAmazon from '@/shared/assets/avatars/avatar-amazon.svg'
import avatarMcdonalds from '@/shared/assets/avatars/avatar-mcdonalds.svg'
import avatarReddit from '@/shared/assets/avatars/avatar-reddit.svg'

const CONTACT_AVATARS: Record<string, string> = {
  amazon: avatarAmazon,
  reddit: avatarReddit,
  medium: avatarMedium,
  "mcdonald's": avatarMcdonalds,
}

export function getContactAvatar(contact: string): string | undefined {
  return CONTACT_AVATARS[contact.trim().toLowerCase()]
}
