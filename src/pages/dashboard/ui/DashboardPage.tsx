import { SignalsPanel } from '@/features/signals'
import { OnboardingChecklist } from './OnboardingChecklist'
import { PerformanceCard } from './PerformanceCard'
import { RepliesCard } from './RepliesCard'
import { TodaysTasks } from './TodaysTasks'
import { WelcomeCard } from './WelcomeCard'

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
