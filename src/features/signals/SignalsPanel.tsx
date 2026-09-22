import { Card, CardTitle } from '../../components/ui/Card'
import { SignalRow } from './SignalRow'
import { useSignals } from './useSignals'

export function SignalsPanel({ className = '' }: { className?: string }) {
  const { signals, loading, error, unreadCount, complete, remove } =
    useSignals()

  return (
    <Card className={`min-h-0 flex-1 ${className}`}>
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2">
          <CardTitle>Signals</CardTitle>
          {unreadCount > 0 && (
            <span className="bg-accent-warning rounded-xl px-2 py-0.75 text-[12px] font-semibold text-white">
              {unreadCount}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-text-muted font-normal">
          Never miss a single opportunity: check out your top signals from your
          1st-degree LinkedIn connections.
        </p>
      </div>
      {error && (
        <p className="mt-4 text-sm text-error" role="alert">
          {error}
        </p>
      )}
      {loading ? (
        <p className="mt-4 text-sm text-text-muted">Loading signals…</p>
      ) : (
        <ul className="mt-1 max-h-88 divide-y divide-slate-100 overflow-y-auto">
          {signals.map((signal) => (
            <SignalRow
              key={signal.id}
              signal={signal}
              onComplete={complete}
              onDelete={remove}
            />
          ))}
          {signals.length === 0 && (
            <li className="py-6 text-center text-sm text-text-muted">
              No signals left.
            </li>
          )}
        </ul>
      )}
    </Card>
  )
}
