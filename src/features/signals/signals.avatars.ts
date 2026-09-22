import avatarAmazon from '../../assets/avatar-amazon.svg'
import avatarMcdonalds from '../../assets/avatar-mcdonalds.svg'
import avatarMedium from '../../assets/avatar-medium.svg'
import avatarReddit from '../../assets/avatar-reddit.svg'

const CONTACT_AVATARS: Record<string, string> = {
  amazon: avatarAmazon,
  reddit: avatarReddit,
  medium: avatarMedium,
  "mcdonald's": avatarMcdonalds,
}

export function getContactAvatar(contact: string): string | undefined {
  return CONTACT_AVATARS[contact.trim().toLowerCase()]
}
