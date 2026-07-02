import { getCryptoById } from '@/services/cryptoService'
import type { CryptoDetail } from '@/types/crypto'
import { useEffect, useState } from 'react'

type UseCryptoDetailResult = {
  crypto: CryptoDetail | null
  isLoading: boolean
  error: string | null
}

export function useCryptoDetail(id: string): UseCryptoDetailResult {
  const [crypto, setCrypto] = useState<CryptoDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    let isActive = true

    async function loadCrypto() {
      setCrypto(null)
      setIsLoading(true)
      setError(null)

      if (!id) {
        setError('No cryptocurrency was selected.')
        setIsLoading(false)
        return
      }

      try {
        const data = await getCryptoById(id, controller.signal)

        if (isActive) {
          setCrypto(data)
        }
      } catch {
        if (isActive) {
          setError('Unable to load this cryptocurrency. Please try again.')
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    void loadCrypto()

    return () => {
      isActive = false
      controller.abort()
    }
  }, [id])

  return { crypto, isLoading, error }
}
