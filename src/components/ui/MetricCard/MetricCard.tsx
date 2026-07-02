import clsx from 'clsx'

type MetricCardProps = {
  label: string
  value: string
  detail: string
  tone?: 'amber' | 'cyan' | 'emerald' | 'violet'
}

const toneStyles = {
  amber: 'bg-amber-400',
  cyan: 'bg-cyan-400',
  emerald: 'bg-emerald-400',
  violet: 'bg-violet-400',
} as const

export function MetricCard({
  label,
  value,
  detail,
  tone = 'cyan',
}: MetricCardProps) {
  return (
    <article
      className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/10"
      style={{ padding: '1rem' }}
    >
      <span
        aria-hidden="true"
        className={clsx('absolute inset-x-0 top-0 h-0.5', toneStyles[tone])}
      />
      <p className="text-sm font-medium text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
        {value}
      </p>
      <p className="mt-3 text-sm text-slate-500">{detail}</p>
    </article>
  )
}
