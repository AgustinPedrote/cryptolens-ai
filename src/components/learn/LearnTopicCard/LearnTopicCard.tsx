import type { LearnTopic, LearnTopicLevel } from '@/types/learn'
import clsx from 'clsx'

type LearnTopicCardProps = {
  topic: LearnTopic
}

const levelStyles: Record<LearnTopicLevel, string> = {
  Beginner: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  Intermediate: 'border-amber-400/20 bg-amber-400/10 text-amber-300',
}

export function LearnTopicCard({ topic }: LearnTopicCardProps) {
  return (
    <article
      className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 transition-colors hover:border-slate-700"
      style={{ padding: '1.5rem' }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
        {topic.category}
      </p>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
        {topic.title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
        {topic.description}
      </p>
      <div className="mt-5">
        <span
          className={clsx(
            'inline-flex rounded-full border px-2.5 py-1 text-xs font-medium',
            levelStyles[topic.level],
          )}
        >
          {topic.level}
        </span>
      </div>
    </article>
  )
}
