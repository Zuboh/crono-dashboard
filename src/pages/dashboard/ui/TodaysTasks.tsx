import { ChevronRight } from 'lucide-react'
import { Card, CardTitle } from '@/shared/ui/Card'
import { IconAlertTriangle } from './icons/IconAlertTriangle'

const TASKS = [
  { label: 'Overdue', value: '3', color: 'bg-[#FFE9E9] text-[#ED4C5E]' },
  {
    label: 'Pending Manual',
    value: '10',
    color: 'bg-[#FEF3D2] text-[#C69812]',
  },
  {
    label: 'Pending Auto',
    value: '20',
    color: 'bg-[#EAF1FB] text-accent-blue',
    error: '1 error',
  },
  { label: 'Completed', value: '8', color: 'bg-[#E8F5D9] text-accent-green' },
]

type TaskSummary = (typeof TASKS)[number]

function TaskSummaryCard({ task }: { task: TaskSummary }) {
  return (
    <div className={`rounded-xl p-4 ${task.color}`}>
      <div className="flex items-start justify-between">
        <span className="text-2xl font-semibold leading-none">
          {task.value}
        </span>
        {'error' in task && task.error && (
          <span className="flex -translate-y-1/2 items-center gap-1 rounded-full bg-white px-1.5 py-0.5 text-[10px] font-semibold text-[#ED4C5E]">
            {task.error}
            <IconAlertTriangle aria-hidden className="h-3 w-3" />
          </span>
        )}
      </div>
      <div className="mt-2 flex items-center justify-between text-text-secondary">
        <p className="text-sm font-medium">{task.label}</p>
        <ChevronRight aria-hidden className="h-4 w-4 opacity-50 " />
      </div>
    </div>
  )
}

export function TodaysTasks({ className = '' }: { className?: string }) {
  return (
    <Card className={`p-4 ${className}`}>
      <CardTitle>Today's tasks</CardTitle>
      <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {TASKS.map((task) => (
          <TaskSummaryCard key={task.label} task={task} />
        ))}
      </div>
    </Card>
  )
}
