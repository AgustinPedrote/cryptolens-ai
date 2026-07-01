import { CryptoTable } from '@/components/crypto/CryptoTable'
import { MainLayout } from '@/components/layout/MainLayout'
import { MetricCard } from '@/components/ui/MetricCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useCryptos } from '@/hooks/useCryptos'

export function DashboardPage() {
  const { cryptos, isLoading, error } = useCryptos()

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

        <div className="mt-5">
          {isLoading ? (
            <div
              className="grid min-h-72 place-items-center rounded-2xl border border-slate-800 bg-slate-900/40 text-center"
              aria-live="polite"
            >
              <p className="text-sm font-medium text-slate-400">
                Loading market data...
              </p>
            </div>
          ) : null}

          {error ? (
            <div
              role="alert"
              className="rounded-2xl border border-rose-400/20 bg-rose-400/10 text-sm text-rose-300"
              style={{ padding: '1.5rem' }}
            >
              {error}
            </div>
          ) : null}

          {!isLoading && !error ? <CryptoTable cryptos={cryptos} /> : null}
        </div>
      </section>
    </MainLayout>
  )
}
