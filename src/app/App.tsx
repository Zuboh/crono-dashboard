import { AppShell } from '../components/ui/AppShell'
import { DashboardPage } from '../pages/dashboard/DashboardPage'
import { Sidebar } from './layout/Sidebar/Sidebar'

function App() {
  return (
    <AppShell>
      <Sidebar />
      <main className="min-w-0 flex-1 p-4">
        <div className="mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          <DashboardPage />
        </div>
      </main>
    </AppShell>
  )
}

export default App
