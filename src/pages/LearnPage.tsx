import { MainLayout } from '@/components/layout/MainLayout'

export function LearnPage() {
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
          Beginner-friendly lessons and resources will be available here soon.
        </p>
      </section>
    </MainLayout>
  )
}
