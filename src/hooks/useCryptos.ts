import { getTopCryptos } from '@/services/cryptoService'
import type { CryptoMarket } from '@/types/crypto'
import { useEffect, useState } from 'react'

type UseCryptosResult = {
  cryptos: CryptoMarket[]
  isLoading: boolean
  error: string | null
}

export function useCryptos(): UseCryptosResult {
  const [cryptos, setCryptos] = useState<CryptoMarket[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    let isActive = true

    async function loadCryptos() {
      try {
        const data = await getTopCryptos(controller.signal)

        if (isActive) {
          setCryptos(data)
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
  }, [])

  return { cryptos, isLoading, error }
}
