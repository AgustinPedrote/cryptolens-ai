import { getTopCryptos } from '@/services/cryptoService'
import type { CryptoMarket } from '@/types/crypto'
import { useCallback, useEffect, useState } from 'react'

type UseCryptosResult = {
  cryptos: CryptoMarket[]
  isLoading: boolean
  error: string | null
  lastUpdated: Date | null
  refetch: () => void
}

export function useCryptos(perPage: number): UseCryptosResult {
  const [cryptos, setCryptos] = useState<CryptoMarket[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [refreshKey, setRefreshKey] = useState(0)

  const refetch = useCallback(() => {
    setRefreshKey((currentKey) => currentKey + 1)
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    let isActive = true

    async function loadCryptos() {
      setIsLoading(true)
      setError(null)

      try {
        const data = await getTopCryptos(perPage, controller.signal)

        if (isActive) {
          setCryptos(data)
          setLastUpdated(new Date())
        }
      } catch {
        if (isActive) {
          setError('Unable to load market data. Please try again later.')
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    void loadCryptos()

    return () => {
      isActive = false
      controller.abort()
    }
  }, [perPage, refreshKey])

  return { cryptos, isLoading, error, lastUpdated, refetch }
}
