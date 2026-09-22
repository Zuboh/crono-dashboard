import { delay, http, HttpResponse } from 'msw'
import seed from './signals.data.json'
import type { Signal } from '../model/signals.types'

const LATENCY_MS = 150

let store = structuredClone(seed) as Signal[]

function resetSignalsMock() {
  store = structuredClone(seed) as Signal[]
}

export const signalsHandlers = [
  http.get('*/api/signals', async () => {
    await delay(LATENCY_MS)
    return HttpResponse.json(structuredClone(store))
  }),

  http.patch('*/api/signals/:id', async ({ params, request }) => {
    await delay(LATENCY_MS)

    const body: unknown = await request.json()
    if (
      typeof body !== 'object' ||
      body === null ||
      !('unread' in body) ||
      body.unread !== false
    ) {
      return HttpResponse.json(
        { message: 'Expected unread to be false' },
        { status: 400 },
      )
    }

    const id = String(params.id)
    const index = store.findIndex((signal) => signal.id === id)
    if (index === -1) {
      return HttpResponse.json(
        { message: `Signal ${id} not found` },
        { status: 404 },
      )
    }

    const updated = { ...store[index], unread: false }
    store = store.map((signal, signalIndex) =>
      signalIndex === index ? updated : signal,
    )

    return HttpResponse.json(updated)
  }),

  http.delete('*/api/signals/:id', async ({ params }) => {
    await delay(LATENCY_MS)

    const id = String(params.id)
    if (!store.some((signal) => signal.id === id)) {
      return HttpResponse.json(
        { message: `Signal ${id} not found` },
        { status: 404 },
      )
    }

    store = store.filter((signal) => signal.id !== id)
    return new HttpResponse(null, { status: 204 })
  }),
]

export { resetSignalsMock }
