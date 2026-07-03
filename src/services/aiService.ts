import { GoogleGenAI } from '@google/genai'

const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim()

const systemInstruction = `
You are CryptoLens AI, an educational assistant focused on cryptocurrency,
blockchain, Web3, decentralized finance (DeFi), and real-world assets (RWA).

Explain concepts clearly and accurately for learners. Match the language used
by the user. Distinguish facts from uncertainty and mention important risks
when relevant.

Never provide personalized financial advice, price predictions, trading
signals, or instructions to buy, sell, or hold an asset. If a user asks for
financial advice, redirect the answer toward educational concepts, risk
management principles, and independent research.
`.trim()

export async function askCryptoAssistant(question: string): Promise<string> {
  const normalizedQuestion = question.trim()

  if (!apiKey) {
    throw new Error(
      'Gemini API key is missing. Add VITE_GEMINI_API_KEY to .env.local and restart the development server.',
    )
  }

  if (!normalizedQuestion) {
    throw new Error('Enter a question before asking the assistant.')
  }

  try {
    const ai = new GoogleGenAI({ apiKey })
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: normalizedQuestion,
      config: {
        systemInstruction,
        maxOutputTokens: 600,
      },
    })
    const answer = response.text?.trim()

    if (!answer) {
      throw new Error('Empty Gemini response')
    }

    return answer
  } catch {
    throw new Error(
      'Unable to contact Gemini. Check the API key, quota, and network connection, then try again.',
    )
  }
}
