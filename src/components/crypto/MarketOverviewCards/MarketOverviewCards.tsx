import { MetricCard } from '@/components/ui/MetricCard'
import { useGlobalMarket } from '@/hooks/useGlobalMarket'
import { formatCompactUsd, formatPercentage } from '@/utils/formatters'

export function MarketOverviewCards() {
  const { market, isLoading, error, refresh } = useGlobalMarket()

  if (isLoading) {
    return (
      <section
        aria-label="Loading global market metrics"
        aria-busy="true"
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <MetricCard
          label="Global market cap"
          value="—"
          detail="Loading global market data..."
          tone="amber"
        />
        <MetricCard
          label="24h volume"
          value="—"
          detail="Loading global market data..."
          tone="emerald"
        />
        <MetricCard
          label="BTC dominance"
          value="—"
          detail="Loading global market data..."
          tone="violet"
        />
      </section>
    )
  }

  if (error) {
    return (
      <div
        role="alert"
        className="mt-8 flex flex-col gap-3 rounded-2xl border border-rose-400/20 bg-rose-400/10 text-sm text-rose-300 sm:flex-row sm:items-center sm:justify-between"
        style={{ padding: '1rem' }}
      >
        <p>{error}</p>
        <button
          type="button"
          onClick={refresh}
          className="cursor-pointer rounded-lg border border-rose-300/30 px-3 py-2 font-medium text-rose-200 transition-colors hover:bg-rose-300/10"
        >
          Try again
        </button>
      </div>
    )
  }

  if (!market) {
    return (
      <div
        className="mt-8 rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 text-sm text-slate-400"
        style={{ padding: '1rem' }}
      >
        Global market data is not available.
      </div>
    )
  }

  return (
    <section
      aria-label="Global market metrics"
      className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <MetricCard
        label="Global market cap"
        value={formatCompactUsd(market.totalMarketCapUsd)}
        detail="Total cryptocurrency market value"
        tone="amber"
      />
      <MetricCard
        label="24h volume"
        value={formatCompactUsd(market.totalVolumeUsd)}
        detail="Trading volume across the last 24 hours"
        tone="emerald"
      />
      <MetricCard
        label="BTC dominance"
        value={formatPercentage(market.btcDominance, {
          showSign: false,
          fractionDigits: 1,
        })}
        detail="Bitcoin share of the total market cap"
        tone="violet"
      />
    </section>
  )
}
