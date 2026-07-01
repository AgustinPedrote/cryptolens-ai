import { MainLayout } from '@/components/layout/MainLayout'

export function DashboardPage() {
  return (
    <MainLayout>
      <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
          Portfolio dashboard
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          CryptoLens AI
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
          Explora el mercado de criptomonedas y aprende sobre Web3.
        </p>
      </section>
    </MainLayout>
  )
}
