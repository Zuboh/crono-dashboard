import { useCallback, useEffect, useState } from 'react'
import { completeSignal, deleteSignal, getSignals } from './signals.api'
import type { Signal } from './signals.types'

export function useSignals() {
  const [signals, setSignals] = useState<Signal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    getSignals()
      .then((data) => {
        if (active) setSignals(data)
      })
      .catch((cause: unknown) => {
        if (active)
          setError(
            cause instanceof Error ? cause.message : 'Unable to load signals',
          )
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const complete = useCallback(async (id: string) => {
    try {
      setError(null)
      await completeSignal(id)
      setSignals((prev) =>
        prev.map((s) => (s.id === id ? { ...s, unread: false } : s)),
      )
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : 'Unable to complete signal',
      )
    }
  }, [])

  const remove = useCallback(async (id: string) => {
    try {
      setError(null)
      await deleteSignal(id)
      setSignals((prev) => prev.filter((s) => s.id !== id))
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : 'Unable to delete signal',
      )
    }
  }, [])

  const unreadCount = signals.filter((s) => s.unread).length

  return { signals, loading, error, unreadCount, complete, remove }
}
