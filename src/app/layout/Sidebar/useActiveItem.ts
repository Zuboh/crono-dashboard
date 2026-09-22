import { useState } from 'react'

export function useActiveItem<T>(initialValue: T) {
  const [activeItem, setActiveItem] = useState<T>(initialValue)

  return {
    activeItem,
    setActiveItem,
  }
}
