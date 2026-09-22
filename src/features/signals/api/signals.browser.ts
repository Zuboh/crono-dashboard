import { setupWorker } from 'msw/browser'
import { signalsHandlers } from './signals.handlers'

export const worker = setupWorker(...signalsHandlers)
