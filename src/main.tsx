import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app/App'
import '@/app/styles/index.css'

async function enableMocking() {
  if (import.meta.env.VITE_API_URL) return

  const { worker } = await import('@/features/signals/api/signals.browser')
  await worker.start({ onUnhandledRequest: 'bypass' })
}

function renderApp() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

enableMocking()
  .catch((error: unknown) => {
    console.error('Unable to start the mock API', error)
  })
  .finally(renderApp)
