import type { ComponentType, SVGProps } from 'react'
import { Card, CardTitle } from '../../../components/ui/Card'
import { Tooltip } from '../../../components/ui/Tooltip'
import { TextAction } from '../../../components/ui/TextAction'
import { IconCompany } from './icons/IconCompany'
import { IconContact } from './icons/IconContact'
import { IconEdit } from './icons/IconEdit'
import { IconInfo } from './icons/IconInfo'
import { IconMeeting } from './icons/IconMeeting'
import { IconTaskList } from './icons/IconTaskList'

interface PerformanceMetric {
  label: string
  value: string
  target: string
  progress: number
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  color: string
  bar: string
  tooltip?: string
}

const STATS = [
  {
    label: 'Contacts engaged',
    value: '0',
    target: '500',
    progress: 0,
    icon: IconContact,
    color: 'text-accent-blue',
    bar: 'bg-accent-blue',
    tooltip:
      'Contacts who have at least one logged activity within the current month',
  },
  {
    label: 'Companies engaged',
    value: '0',
    target: '500',
    progress: 0,
    icon: IconCompany,
    color: 'text-[#3B58DB]',
    bar: 'bg-[#3B58DB]',
  },
  {
    label: 'Activities',
    value: '1000',
    target: '2000',
    progress: 50,
    icon: IconTaskList,
    color: 'text-[#995AFF]',
    bar: 'bg-[#995AFF]',
  },
  {
    label: 'Meetings',
    value: '20',
    target: '30',
    progress: 66.67,
    icon: IconMeeting,
    color: 'text-[#E2AD13]',
    bar: 'bg-[#E2AD13]',
  },
  {
    label: 'Deals',
    value: '100',
    target: '200',
    progress: 50,
    icon: IconTaskList,
    color: 'text-[#F376D8]',
    bar: 'bg-[#F376D8]',
  },
  {
    label: 'Pipeline',
    value: '€50K',
    target: '100K',
    progress: 40,
    color: 'text-accent-green',
    bar: 'bg-accent-green',
  },
] satisfies readonly PerformanceMetric[]

function PerformanceMetricCard({ metric }: { metric: PerformanceMetric }) {
  const Icon = metric.icon

  return (
    <div className="rounded-xl border border-scrollbar-thumb p-3">
      <p className="flex items-center justify-between text-xs font-medium text-text-secondary">
        {metric.label}
        {metric.tooltip && (
          <Tooltip content={metric.tooltip}>
            <IconInfo aria-hidden className="h-4 w-4 text-text-muted" />
          </Tooltip>
        )}
      </p>
      <p
        className={`mt-2 flex items-center gap-1 text-base font-normal ${metric.color}`}
      >
        {Icon && <Icon aria-hidden className="h-4 w-4" />}
        {metric.value}
        <span className="font-normal text-[#AFB5BF]">/{metric.target}</span>
      </p>
      <div
        role="progressbar"
        aria-label={metric.label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={metric.progress}
        className="mt-1 h-1 w-full rounded-full bg-slate-100"
      >
        <div
          className={`h-1 rounded-full ${metric.bar}`}
          style={{ width: `${metric.progress}%` }}
        />
      </div>
    </div>
  )
}

export function PerformanceCard({ className = '' }: { className?: string }) {
  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <CardTitle>May's performance</CardTitle>
        <TextAction label="Edit KPIs" icon={IconEdit} />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {STATS.map((metric) => (
          <PerformanceMetricCard key={metric.label} metric={metric} />
        ))}
      </div>
    </Card>
  )
}
