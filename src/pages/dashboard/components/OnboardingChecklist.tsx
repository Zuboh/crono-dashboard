import { Card, CardTitle } from '../../../components/ui/Card'
import iconExtension from '../../../assets/icon-extension.svg'
import iconAddContact from '../../../assets/icon-add-contact.svg'
import iconTargetGoal from '../../../assets/icon-target-goal.svg'
import iconAddToStrategy from '../../../assets/icon-add-to-strategy.svg'
import iconRunTask from '../../../assets/icon-run-task.svg'

interface OnboardingStepData {
  label: string
  time: string
  icon: string
}

const STEPS = [
  {
    label: 'Integrations Setup',
    time: '5 min',
    icon: iconExtension,
  },
  {
    label: 'Add new Contact',
    time: '5 min',
    icon: iconAddContact,
  },
  {
    label: 'Create your first sequence',
    time: '10 min',
    icon: iconTargetGoal,
  },
  {
    label: 'Add contacts to sequence',
    time: '5 min',
    icon: iconAddToStrategy,
  },
  {
    label: 'Run your first task',
    time: '10 min',
    icon: iconRunTask,
  },
] satisfies readonly OnboardingStepData[]

function OnboardingStep({ step }: { step: OnboardingStepData }) {
  return (
    <li className="flex min-h-17 items-center gap-3 py-3">
      <img src={step.icon} alt="" aria-hidden className="h-10 w-10 shrink-0" />
      <span className="flex-1 text-sm font-semibold text-text-primary">
        {step.label}
      </span>
      <span className="text-sm text-text-muted">{step.time}</span>
    </li>
  )
}

export function OnboardingChecklist({
  className = '',
}: {
  className?: string
}) {
  return (
    <Card className={`p-4 ${className}`}>
      <CardTitle>Onboarding</CardTitle>
      <ul className="mt-2 divide-y divide-scrollbar-thumb">
        {STEPS.map((step) => (
          <OnboardingStep key={step.label} step={step} />
        ))}
      </ul>
    </Card>
  )
}
