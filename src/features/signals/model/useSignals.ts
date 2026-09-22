import { useCallback, useEffect, useState } from 'react'
import {
  completeSignal,
  deleteSignal,
  getApiErrorMessage,
  getSignals,
} from '../api/signals.api'
import type { Signal } from './signals.types'

export function useSignals() {
  const [signals, setSignals] = useState<Signal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    getSignals(controller.signal)
      .then(setSignals)
      .catch((cause: unknown) => {
        if (!controller.signal.aborted) {
          setError(getApiErrorMessage(cause, 'Unable to load signals'))
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
  }, [])

  const complete = useCallback(async (id: string) => {
    try {
      setError(null)
      const updated = await completeSignal(id)
      setSignals((current) =>
        current.map((signal) => (signal.id === id ? updated : signal)),
      )
    } catch (cause) {
      setError(getApiErrorMessage(cause, 'Unable to complete signal'))
    }
  }, [])

  const remove = useCallback(async (id: string) => {
    try {
      setError(null)
      await deleteSignal(id)
      setSignals((current) => current.filter((signal) => signal.id !== id))
    } catch (cause) {
      setError(getApiErrorMessage(cause, 'Unable to delete signal'))
    }
  }, [])

  const unreadCount = signals.filter((signal) => signal.unread).length

  return { signals, loading, error, unreadCount, complete, remove }
}
