export type CryptoMarket = {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number | null
  market_cap: number | null
  market_cap_rank: number | null
  total_volume: number | null
  price_change_percentage_24h: number | null
}

export type CryptoDetail = {
  id: string
  symbol: string
  name: string
  image: {
    large: string
  }
  description: {
    en: string
  }
  market_data: {
    current_price: {
      usd: number | null
    }
    market_cap: {
      usd: number | null
    }
    total_volume: {
      usd: number | null
    }
    price_change_percentage_24h: number | null
  }
}
