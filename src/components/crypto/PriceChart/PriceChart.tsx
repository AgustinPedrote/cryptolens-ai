import type { CryptoPricePoint } from '@/types/crypto'
import { formatCompactUsd, formatUsd } from '@/utils/formatters'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type PriceChartProps = {
  chartData: CryptoPricePoint[]
}

function formatChartDate(timestamp: number): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(timestamp)
}

function formatChartDateTime(timestamp: number): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(timestamp)
}

export function PriceChart({ chartData }: PriceChartProps) {
  return (
    <section
      aria-labelledby="price-chart-title"
      className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/40"
      style={{ padding: '1.5rem' }}
    >
      <div>
        <h2 id="price-chart-title" className="text-xl font-semibold text-white">
          Price history
        </h2>
        <p className="mt-1 text-sm text-slate-400">Last 7 days in USD</p>
      </div>

      {chartData.length > 0 ? (
        <div style={{ width: '100%', height: '20rem', marginTop: '1.5rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
            >
              <defs>
                <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                stroke="#1e293b"
                strokeDasharray="4 4"
                vertical={false}
              />
              <XAxis
                dataKey="timestamp"
                type="number"
                scale="time"
                domain={['dataMin', 'dataMax']}
                tickFormatter={formatChartDate}
                tick={{ fill: '#64748b', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                minTickGap={32}
              />
              <YAxis
                dataKey="price"
                domain={['auto', 'auto']}
                tickFormatter={formatCompactUsd}
                tick={{ fill: '#64748b', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                width={72}
              />
              <Tooltip
                labelFormatter={(label) => formatChartDateTime(Number(label))}
                formatter={(value) => [formatUsd(Number(value)), 'Price']}
                contentStyle={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '0.75rem',
                  color: '#e2e8f0',
                }}
                labelStyle={{ color: '#94a3b8' }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#22d3ee"
                strokeWidth={2}
                fill="url(#priceGradient)"
                fillOpacity={1}
                activeDot={{ r: 4, fill: '#22d3ee', strokeWidth: 0 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="mt-6 text-sm text-slate-500">
          No price history is available.
        </p>
      )}
    </section>
  )
}
