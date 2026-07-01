import type { CryptoMarket } from '@/types/crypto'
import axios from 'axios'

const cryptoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 10_000,
})

export async function getTopCryptos(
  signal?: AbortSignal,
): Promise<CryptoMarket[]> {
  const response = await cryptoApi.get<CryptoMarket[]>('/coins/markets', {
    signal,
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 10,
      page: 1,
      sparkline: false,
      price_change_percentage: '24h',
    },
  })

  return response.data
}
