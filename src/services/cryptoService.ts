import type {
  CryptoDetail,
  CryptoMarket,
  CryptoMarketChartResponse,
  CryptoPricePoint,
} from '@/types/crypto'
import type { GlobalMarket } from '@/types/market'
import axios from 'axios'

type GlobalMarketResponse = {
  data: {
    total_market_cap: {
      usd: number
    }
    total_volume: {
      usd: number
    }
    market_cap_percentage: {
      btc: number
    }
  }
}

const cryptoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 10_000,
})

export async function getTopCryptos(
  perPage: number,
  signal?: AbortSignal,
): Promise<CryptoMarket[]> {
  const response = await cryptoApi.get<CryptoMarket[]>('/coins/markets', {
    signal,
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: perPage,
      page: 1,
      sparkline: false,
      price_change_percentage: '24h',
    },
  })

  return response.data
}

export async function getGlobalMarket(
  signal?: AbortSignal,
): Promise<GlobalMarket> {
  const response = await cryptoApi.get<GlobalMarketResponse>('/global', {
    signal,
  })

  return {
    totalMarketCapUsd: response.data.data.total_market_cap.usd,
    totalVolumeUsd: response.data.data.total_volume.usd,
    btcDominance: response.data.data.market_cap_percentage.btc,
  }
}

export async function getCryptoMarketChart(
  id: string,
  signal?: AbortSignal,
): Promise<CryptoPricePoint[]> {
  const response = await cryptoApi.get<CryptoMarketChartResponse>(
    `/coins/${encodeURIComponent(id)}/market_chart`,
    {
      signal,
      params: {
        vs_currency: 'usd',
        days: 7,
      },
    },
  )

  return response.data.prices.map(([timestamp, price]) => ({
    timestamp,
    price,
  }))
}

export async function getCryptoById(
  id: string,
  signal?: AbortSignal,
): Promise<CryptoDetail> {
  const response = await cryptoApi.get<CryptoDetail>(
    `/coins/${encodeURIComponent(id)}`,
    {
      signal,
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
      },
    },
  )

  return response.data
}
