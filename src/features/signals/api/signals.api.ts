import axios from 'axios'
import type { Signal } from '../model/signals.types'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10_000,
})

interface ApiErrorResponse {
  message?: unknown
}

export async function getSignals(signal?: AbortSignal): Promise<Signal[]> {
  const response = await client.get<Signal[]>('/signals', { signal })
  return response.data
}

export async function completeSignal(id: string): Promise<Signal> {
  const response = await client.patch<Signal>(
    `/signals/${encodeURIComponent(id)}`,
    { unread: false },
  )
  return response.data
}

export async function deleteSignal(id: string): Promise<void> {
  await client.delete(`/signals/${encodeURIComponent(id)}`)
}

export function getApiErrorMessage(error: unknown, fallback: string): string {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    const message = error.response?.data?.message
    if (typeof message === 'string') return message
  }

  return error instanceof Error ? error.message : fallback
}
