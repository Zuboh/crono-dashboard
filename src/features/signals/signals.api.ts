import seed from './signals.data.json'
import type { Signal } from './signals.types'

const LATENCY_MS = 150

let store: Signal[] = structuredClone(seed) as Signal[]

function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), LATENCY_MS))
}

export async function getSignals(): Promise<Signal[]> {
  return delay(structuredClone(store))
}

export async function completeSignal(id: string): Promise<void> {
  const signal = store.find((s) => s.id === id)
  if (!signal) return Promise.reject(new Error(`Signal ${id} not found`))
  signal.unread = false
  await delay(undefined)
}

export async function deleteSignal(id: string): Promise<void> {
  const exists = store.some((s) => s.id === id)
  if (!exists) return Promise.reject(new Error(`Signal ${id} not found`))
  store = store.filter((s) => s.id !== id)
  await delay(undefined)
}
