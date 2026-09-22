import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll, expect, it, vi } from 'vitest'
import { resetSignalsMock, signalsHandlers } from './signals.handlers'

const server = setupServer(...signalsHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterEach(() => {
  server.resetHandlers()
  resetSignalsMock()
  vi.unstubAllEnvs()
})

afterAll(() => server.close())

it('loads, completes, and deletes signals through the HTTP contract', async () => {
  vi.stubEnv('VITE_API_URL', 'http://localhost/api')
  const { completeSignal, deleteSignal, getSignals } =
    await import('./signals.api')

  const initial = await getSignals()
  expect(initial).toHaveLength(8)

  const completed = await completeSignal('1')
  expect(completed).toMatchObject({ id: '1', unread: false })
  expect(await getSignals()).toContainEqual(completed)

  await deleteSignal('1')
  expect(await getSignals()).not.toContainEqual(completed)

  await expect(deleteSignal('missing')).rejects.toMatchObject({
    response: { status: 404 },
  })
})
