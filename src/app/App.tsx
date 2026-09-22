import { DashboardPage } from '@/pages/dashboard'
import { Sidebar } from '@/widgets/sidebar'

function App() {
  return (
    <div className="flex min-h-screen bg-[#f5f6f8] text-text-primary">
      <Sidebar />
      <main className="min-w-0 flex-1 p-4">
        <div className="mx-auto grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          <DashboardPage />
        </div>
      </main>
    </div>
  )
}

export default App
