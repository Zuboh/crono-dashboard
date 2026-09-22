import { SignalsPanel } from '../../features/signals/SignalsPanel'
import { OnboardingChecklist } from './components/OnboardingChecklist'
import { PerformanceCard } from './components/PerformanceCard'
import { RepliesCard } from './components/RepliesCard'
import { TodaysTasks } from './components/TodaysTasks'
import { WelcomeCard } from './components/WelcomeCard'

export function DashboardPage() {
  return (
    <>
      <WelcomeCard
        className="
            xl:col-start-1
            xl:row-start-1
        "
      />
      <RepliesCard
        className="
            xl:col-start-2
            xl:row-start-1
          "
      />
      <PerformanceCard
        className="
            xl:col-start-3
            xl:row-start-1
            xl:row-span-2
          "
      />
      <TodaysTasks
        className="
            xl:col-start-1
            xl:col-span-2
            xl:row-start-2
          "
      />
      <SignalsPanel
        className="
            xl:col-start-1
            xl:col-span-2
            xl:row-start-3
          "
      />
      <OnboardingChecklist
        className="
            xl:col-start-3
            xl:row-start-3
          "
      />
    </>
  )
}
