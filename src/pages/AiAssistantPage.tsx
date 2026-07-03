import { AiAssistantBox } from '@/components/ai/AiAssistantBox'
import { MainLayout } from '@/components/layout/MainLayout'

export function AiAssistantPage() {
  return (
    <MainLayout>
      <section aria-labelledby="ai-assistant-title">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          AI Assistant
        </p>
        <h1
          id="ai-assistant-title"
          className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Explore crypto with AI
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
          Ask educational questions about crypto, blockchain, Web3, DeFi, and
          real-world assets.
        </p>
      </section>

      <AiAssistantBox />
    </MainLayout>
  )
}
