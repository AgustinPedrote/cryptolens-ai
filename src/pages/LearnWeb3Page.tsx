import { LearnTopicCard } from '@/components/learn/LearnTopicCard'
import { MainLayout } from '@/components/layout/MainLayout'
import { web3Topics } from '@/constants/web3Topics'

export function LearnWeb3Page() {
  return (
    <MainLayout>
      <section aria-labelledby="learn-title">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Learn Web3
        </p>
        <h1
          id="learn-title"
          className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Build your Web3 knowledge
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
          Explore the core ideas, technologies, and safety practices shaping the
          decentralized web.
        </p>
      </section>

      <section
        aria-label="Web3 learning topics"
        className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {web3Topics.map((topic) => (
          <LearnTopicCard key={topic.id} topic={topic} />
        ))}
      </section>
    </MainLayout>
  )
}
