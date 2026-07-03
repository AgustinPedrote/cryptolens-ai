import { MarkdownRenderer } from '@/components/ui/MarkdownRenderer'
import { aiSuggestedQuestions } from '@/constants/aiSuggestedQuestions'
import { useAiAssistant } from '@/hooks/useAiAssistant'
import clsx from 'clsx'
import type { FormEvent } from 'react'
import { useState } from 'react'

export function AiAssistantBox() {
  const [question, setQuestion] = useState('')
  const { answer, isLoading, error, askQuestion } = useAiAssistant()
  const isQuestionEmpty = !question.trim()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isLoading && !isQuestionEmpty) {
      void askQuestion(question)
    }
  }

  return (
    <div className="mt-8">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-800 bg-slate-900/70"
        style={{ padding: '1.5rem' }}
      >
        <label
          htmlFor="crypto-question"
          className="text-sm font-medium text-slate-200"
        >
          Ask a crypto or Web3 question
        </label>
        <textarea
          id="crypto-question"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="For example: What is the difference between a coin and a token?"
          rows={5}
          maxLength={1_000}
          disabled={isLoading}
          className="mt-3 w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
        />

        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Suggested questions
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {aiSuggestedQuestions.map((suggestedQuestion) => {
              const isSelected = question === suggestedQuestion

              return (
                <button
                  key={suggestedQuestion}
                  type="button"
                  onClick={() => setQuestion(suggestedQuestion)}
                  disabled={isLoading}
                  className={clsx(
                    'rounded-full border px-3 py-2 text-left text-xs leading-5 transition-colors',
                    isLoading && 'cursor-not-allowed opacity-60',
                    !isLoading && 'cursor-pointer',
                    isSelected
                      ? 'border-cyan-400/60 bg-cyan-400/10 text-cyan-300'
                      : 'border-slate-700 bg-slate-950/60 text-slate-400 hover:border-slate-600 hover:text-slate-200',
                  )}
                >
                  {suggestedQuestion}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            Educational information only — not financial advice.
          </p>
          <button
            type="submit"
            disabled={isLoading || isQuestionEmpty}
            className={clsx(
              'rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors',
              isLoading || isQuestionEmpty
                ? 'cursor-not-allowed bg-slate-800 text-slate-500'
                : 'cursor-pointer bg-cyan-400 text-slate-950 hover:bg-cyan-300',
            )}
          >
            {isLoading ? 'Thinking...' : 'Ask AI'}
          </button>
        </div>
      </form>

      {error ? (
        <div
          role="alert"
          className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 text-sm text-rose-300"
          style={{ padding: '1.5rem' }}
        >
          {error}
        </div>
      ) : null}

      {answer ? (
        <section
          aria-labelledby="ai-answer-title"
          className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/40"
          style={{ padding: '1.5rem' }}
        >
          <h2 id="ai-answer-title" className="text-lg font-semibold text-white">
            CryptoLens AI
          </h2>
          <MarkdownRenderer content={answer} className="mt-3" />
          <p className="mt-4 border-t border-slate-800 pt-4 text-xs text-slate-500">
            This response is for educational purposes and is not financial
            advice.
          </p>
        </section>
      ) : null}
    </div>
  )
}
