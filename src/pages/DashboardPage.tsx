import { MainLayout } from '@/components/layout/MainLayout'
import { MetricCard } from '@/components/ui/MetricCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function DashboardPage() {
  return (
    <MainLayout>
      <section id="overview" aria-labelledby="dashboard-title">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Market overview
        </p>
        <h1
          id="dashboard-title"
          className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Your crypto dashboard
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
          Follow the market at a glance and explore the assets shaping Web3.
        </p>
      </section>

      <section
        aria-label="Market metrics"
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <MetricCard
          label="Global market cap"
          value="$2.41T"
          detail="+2.4% in the last 24h"
          tone="cyan"
        />
        <MetricCard
          label="24h volume"
          value="$98.7B"
          detail="+8.1% compared with yesterday"
          tone="emerald"
        />
        <MetricCard
          label="BTC dominance"
          value="52.3%"
          detail="-0.3% in the last 24h"
          tone="violet"
        />
      </section>

      <section
        id="market"
        aria-labelledby="top-cryptocurrencies-title"
        className="mt-12"
      >
        <SectionHeader
          id="top-cryptocurrencies-title"
          title="Top Cryptocurrencies"
          description="A snapshot of the leading assets by market capitalization."
        />

        <div className="mt-5 grid min-h-72 place-items-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 px-6 text-center">
          <div>
            <p className="font-medium text-slate-200">
              Market data is coming soon
            </p>
            <p className="mt-2 text-sm text-slate-500">
              The cryptocurrency table will appear here.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
