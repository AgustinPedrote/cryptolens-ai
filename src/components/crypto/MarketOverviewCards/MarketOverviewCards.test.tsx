import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import type { GlobalMarket } from '@/types/market'

import { MarketOverviewCards } from './MarketOverviewCards'

type UseGlobalMarketMockResult = {
  market: GlobalMarket | null
  isLoading: boolean
  error: string | null
  refresh: () => void
}

const useGlobalMarketMock = vi.hoisted(() =>
  vi.fn<() => UseGlobalMarketMockResult>(),
)

vi.mock('@/hooks/useGlobalMarket', () => ({
  useGlobalMarket: useGlobalMarketMock,
}))

describe('MarketOverviewCards', () => {
  const refreshMock = vi.fn()

  beforeEach(() => {
    refreshMock.mockClear()
    useGlobalMarketMock.mockReset()
  })

  it('shows loading cards while global market data is loading', () => {
    useGlobalMarketMock.mockReturnValue({
      market: null,
      isLoading: true,
      error: null,
      refresh: refreshMock,
    })

    render(<MarketOverviewCards />)

    expect(
      screen.getByRole('region', { name: 'Loading global market metrics' }),
    ).toHaveAttribute('aria-busy', 'true')
    expect(screen.getAllByText('Loading global market data...')).toHaveLength(3)
  })

  it('shows an error message and allows retrying', () => {
    useGlobalMarketMock.mockReturnValue({
      market: null,
      isLoading: false,
      error: 'Unable to load global market data.',
      refresh: refreshMock,
    })

    render(<MarketOverviewCards />)

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Unable to load global market data.',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Try again' }))

    expect(refreshMock).toHaveBeenCalledTimes(1)
  })

  it('shows global market metrics when data is available', () => {
    useGlobalMarketMock.mockReturnValue({
      market: {
        totalMarketCapUsd: 1234567890000,
        totalVolumeUsd: 98765432100,
        btcDominance: 52.34,
      },
      isLoading: false,
      error: null,
      refresh: refreshMock,
    })

    render(<MarketOverviewCards />)

    expect(
      screen.getByRole('region', { name: 'Global market metrics' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Global market cap')).toBeInTheDocument()
    expect(screen.getByText('$1.23T')).toBeInTheDocument()
    expect(screen.getByText('24h volume')).toBeInTheDocument()
    expect(screen.getByText('$98.77B')).toBeInTheDocument()
    expect(screen.getByText('BTC dominance')).toBeInTheDocument()
    expect(screen.getByText('52.3%')).toBeInTheDocument()
  })

  it('shows an empty state when global market data is not available', () => {
    useGlobalMarketMock.mockReturnValue({
      market: null,
      isLoading: false,
      error: null,
      refresh: refreshMock,
    })

    render(<MarketOverviewCards />)

    expect(
      screen.getByText('Global market data is not available.'),
    ).toBeInTheDocument()
  })
})
