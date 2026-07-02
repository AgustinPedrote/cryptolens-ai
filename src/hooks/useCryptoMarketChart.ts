import { getCryptoMarketChart } from '@/services/cryptoService'
import type { CryptoPricePoint } from '@/types/crypto'
import { useEffect, useState } from 'react'

type UseCryptoMarketChartResult = {
  chartData: CryptoPricePoint[]
  isLoading: boolean
  error: string | null
}

export function useCryptoMarketChart(id: string): UseCryptoMarketChartResult {
  const [chartData, setChartData] = useState<CryptoPricePoint[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    let isActive = true

    async function loadMarketChart() {
      setChartData([])
      setIsLoading(true)
      setError(null)

      if (!id) {
        setError('No cryptocurrency was selected.')
        setIsLoading(false)
        return
      }

      try {
        const data = await getCryptoMarketChart(id, controller.signal)

        if (isActive) {
          setChartData(data)
        }
      } catch {
        if (isActive) {
          setError('Unable to load the 7-day price chart.')
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    void loadMarketChart()

    return () => {
      isActive = false
      controller.abort()
    }
  }, [id])

  return { chartData, isLoading, error }
}
