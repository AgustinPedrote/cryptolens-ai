import { CryptoTable } from '@/components/crypto/CryptoTable'
import { CryptoTableControls } from '@/components/crypto/CryptoTableControls'
import { MarketOverviewCards } from '@/components/crypto/MarketOverviewCards'
import { MainLayout } from '@/components/layout/MainLayout'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { useCryptos } from '@/hooks/useCryptos'
import { useMemo, useState } from 'react'

export function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [perPage, setPerPage] = useState(10)
  const { cryptos, isLoading, error, lastUpdated, refetch } =
    useCryptos(perPage)

  const filteredCryptos = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase()

    if (!normalizedSearchTerm) {
      return cryptos
    }

    return cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(normalizedSearchTerm) ||
        crypto.symbol.toLowerCase().includes(normalizedSearchTerm),
    )
  }, [cryptos, searchTerm])

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

      <MarketOverviewCards />

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
          <CryptoTableControls
            searchTerm={searchTerm}
            perPage={perPage}
            isLoading={isLoading}
            lastUpdated={lastUpdated}
            onSearchTermChange={setSearchTerm}
            onPerPageChange={setPerPage}
            onRefresh={refetch}
          />

          {isLoading ? (
            <div
              className="mt-4 grid min-h-72 place-items-center rounded-2xl border border-slate-800 bg-slate-900/40 text-center"
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
              className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 text-sm text-rose-300"
              style={{ padding: '1.5rem' }}
            >
              {error}
            </div>
          ) : null}

          {!isLoading && !error && filteredCryptos.length > 0 ? (
            <div className="mt-4">
              <CryptoTable cryptos={filteredCryptos} />
            </div>
          ) : null}

          {!isLoading && !error && filteredCryptos.length === 0 ? (
            <div className="mt-4 grid min-h-48 place-items-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 text-center">
              <div style={{ padding: '1.5rem' }}>
                <p className="font-medium text-slate-200">
                  No cryptocurrencies found
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Try a different name or symbol.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </MainLayout>
  )
}
