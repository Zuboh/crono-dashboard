export type SignalTag = 'Role change' | 'Company change' | 'Website view'

export interface Signal {
  id: string
  contact: string
  event: string
  tag: SignalTag
  sequenceTag?: boolean
  highlight?: string
  timestamp: string
  unread: boolean
}
