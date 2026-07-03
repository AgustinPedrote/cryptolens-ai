import { askCryptoAssistant } from '@/services/aiService'
import { useCallback, useState } from 'react'

type UseAiAssistantResult = {
  answer: string
  isLoading: boolean
  error: string | null
  askQuestion: (question: string) => Promise<void>
}

export function useAiAssistant(): UseAiAssistantResult {
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const askQuestion = useCallback(async (question: string) => {
    setIsLoading(true)
    setError(null)
    setAnswer('')

    try {
      const nextAnswer = await askCryptoAssistant(question)
      setAnswer(nextAnswer)
    } catch (requestError: unknown) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Unable to contact the AI assistant. Please try again.',
      )
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { answer, isLoading, error, askQuestion }
}
