import { MainLayout } from '@/components/layout/MainLayout'
import { useCryptoDetail } from '@/hooks/useCryptoDetail'
import {
  formatCompactUsd,
  formatPercentage,
  formatUsd,
  stripHtml,
} from '@/utils/formatters'
import clsx from 'clsx'
import { Link, useParams } from 'react-router-dom'

export function CryptoDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { crypto, isLoading, error } = useCryptoDetail(id ?? '')

  return (
    <MainLayout>
      <Link
        to="/"
        className="inline-flex items-center text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
      >
        ← Back to Market
      </Link>

      {isLoading ? (
        <div
          className="mt-6 grid min-h-72 place-items-center rounded-2xl border border-slate-800 bg-slate-900/40"
          aria-live="polite"
        >
          <p className="text-sm font-medium text-slate-400">
            Loading cryptocurrency...
          </p>
        </div>
      ) : null}

      {error ? (
        <div
          role="alert"
          className="mt-6 rounded-2xl border border-rose-400/20 bg-rose-400/10 text-sm text-rose-300"
          style={{ padding: '1.5rem' }}
        >
          {error}
        </div>
      ) : null}

      {!isLoading && !error && crypto ? (
        <article className="mt-6">
          <header className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src={crypto.image.large}
              alt={`${crypto.name} logo`}
              width="80"
              height="80"
              className="size-20 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {crypto.symbol}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {crypto.name}
              </h1>
            </div>
          </header>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="rounded-2xl border border-slate-800 bg-slate-900/70"
              style={{ padding: '1.5rem' }}
            >
              <dt className="text-sm text-slate-400">Current price</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                {formatUsd(crypto.market_data.current_price.usd)}
              </dd>
            </div>
            <div
              className="rounded-2xl border border-slate-800 bg-slate-900/70"
              style={{ padding: '1.5rem' }}
            >
              <dt className="text-sm text-slate-400">Market cap</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                {formatCompactUsd(crypto.market_data.market_cap.usd)}
              </dd>
            </div>
            <div
              className="rounded-2xl border border-slate-800 bg-slate-900/70"
              style={{ padding: '1.5rem' }}
            >
              <dt className="text-sm text-slate-400">24h volume</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">
                {formatCompactUsd(crypto.market_data.total_volume.usd)}
              </dd>
            </div>
            <div
              className="rounded-2xl border border-slate-800 bg-slate-900/70"
              style={{ padding: '1.5rem' }}
            >
              <dt className="text-sm text-slate-400">24h change</dt>
              <dd
                className={clsx(
                  'mt-2 text-2xl font-semibold',
                  crypto.market_data.price_change_percentage_24h === null &&
                    'text-slate-500',
                  crypto.market_data.price_change_percentage_24h !== null &&
                    crypto.market_data.price_change_percentage_24h >= 0 &&
                    'text-emerald-400',
                  crypto.market_data.price_change_percentage_24h !== null &&
                    crypto.market_data.price_change_percentage_24h < 0 &&
                    'text-rose-400',
                )}
              >
                {formatPercentage(
                  crypto.market_data.price_change_percentage_24h,
                )}
              </dd>
            </div>
          </dl>

          <section
            aria-labelledby="about-crypto-title"
            className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40"
            style={{ padding: '1.5rem' }}
          >
            <h2
              id="about-crypto-title"
              className="text-xl font-semibold text-white"
            >
              About {crypto.name}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {stripHtml(crypto.description.en) ||
                'No English description is available for this cryptocurrency.'}
            </p>
          </section>
        </article>
      ) : null}
    </MainLayout>
  )
}
