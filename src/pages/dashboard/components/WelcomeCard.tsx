import { Card } from '../../../components/ui/Card'

export function WelcomeCard({ className = '' }: { className?: string }) {
  return (
    <Card className={`min-h-36 px-6 py-8 ${className}`}>
      <h1 className="text-2xl font-bold tracking-tight text-text-primary">
        Welcome Alex,
      </h1>
      <p className="mt-2 max-w-md text-sm leading-6 text-text-muted">
        Here's your performance overview where you can track your daily and
        monthly KPIs.
      </p>
    </Card>
  )
}
