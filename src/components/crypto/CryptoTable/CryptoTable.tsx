import type { CryptoMarket } from '@/types/crypto'
import {
  formatCompactUsd,
  formatPercentage,
  formatUsd,
} from '@/utils/formatters'
import clsx from 'clsx'
import type { KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'

type CryptoTableProps = {
  cryptos: CryptoMarket[]
}

export function CryptoTable({ cryptos }: CryptoTableProps) {
  const navigate = useNavigate()

  function navigateToCrypto(id: string) {
    navigate(`/crypto/${encodeURIComponent(id)}`)
  }

  function handleRowKeyDown(
    event: KeyboardEvent<HTMLTableRowElement>,
    id: string,
  ) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      navigateToCrypto(id)
    }
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-500">
          <tr>
            <th scope="col" className="px-5 py-4 font-medium">
              Rank
            </th>
            <th scope="col" className="px-5 py-4 font-medium">
              Coin
            </th>
            <th scope="col" className="px-5 py-4 text-right font-medium">
              Price
            </th>
            <th scope="col" className="px-5 py-4 text-right font-medium">
              24h %
            </th>
            <th scope="col" className="px-5 py-4 text-right font-medium">
              Market Cap
            </th>
            <th scope="col" className="px-5 py-4 text-right font-medium">
              Volume
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/80">
          {cryptos.map((crypto) => (
            <tr
              key={crypto.id}
              role="link"
              tabIndex={0}
              aria-label={`View ${crypto.name} details`}
              onClick={() => navigateToCrypto(crypto.id)}
              onKeyDown={(event) => handleRowKeyDown(event, crypto.id)}
              className="cursor-pointer transition-colors hover:bg-slate-800/40 focus-visible:bg-slate-800/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400"
            >
              <td className="px-5 py-4 text-slate-500">
                {crypto.market_cap_rank ?? '—'}
              </td>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={crypto.image}
                    alt=""
                    width="32"
                    height="32"
                    className="size-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-white">{crypto.name}</p>
                    <p className="text-xs uppercase text-slate-500">
                      {crypto.symbol}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-4 text-right font-medium text-slate-200">
                {formatUsd(crypto.current_price)}
              </td>
              <td
                className={clsx(
                  'px-5 py-4 text-right font-medium',
                  crypto.price_change_percentage_24h === null &&
                    'text-slate-500',
                  crypto.price_change_percentage_24h !== null &&
                    crypto.price_change_percentage_24h >= 0 &&
                    'text-emerald-400',
                  crypto.price_change_percentage_24h !== null &&
                    crypto.price_change_percentage_24h < 0 &&
                    'text-rose-400',
                )}
              >
                {formatPercentage(crypto.price_change_percentage_24h)}
              </td>
              <td className="px-5 py-4 text-right text-slate-300">
                {formatCompactUsd(crypto.market_cap)}
              </td>
              <td className="px-5 py-4 text-right text-slate-300">
                {formatCompactUsd(crypto.total_volume)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
