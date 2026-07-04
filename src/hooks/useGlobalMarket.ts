import { getGlobalMarket } from '@/services/cryptoService'
import type { GlobalMarket } from '@/types/market'
import { useCallback, useEffect, useState } from 'react'

type UseGlobalMarketResult = {
  market: GlobalMarket | null
  isLoading: boolean
  error: string | null
  refresh: () => void
}

export function useGlobalMarket(): UseGlobalMarketResult {
  const [market, setMarket] = useState<GlobalMarket | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)

  const refresh = useCallback(() => {
    setRefreshKey((currentKey) => currentKey + 1)
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    let isActive = true

    async function loadGlobalMarket() {
      setIsLoading(true)
      setError(null)

      try {
        const data = await getGlobalMarket(controller.signal)

        if (isActive) {
          setMarket(data)
        }
      } catch {
        if (isActive) {
          setMarket(null)
          setError('Unable to load global market data.')
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    void loadGlobalMarket()

    return () => {
      isActive = false
      controller.abort()
    }
  }, [refreshKey])

  return { market, isLoading, error, refresh }
}
