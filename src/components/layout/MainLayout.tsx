import type { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a
            href="#overview"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white"
          >
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-xl bg-cyan-400 font-bold text-slate-950 shadow-lg shadow-cyan-500/20"
            >
              C
            </span>
            CryptoLens AI
          </a>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1 overflow-x-auto text-sm font-medium text-slate-400">
              <li>
                <a
                  href="#market"
                  aria-current="page"
                  className="block rounded-lg bg-slate-800 px-3 py-2 text-white"
                >
                  Market
                </a>
              </li>
              <li>
                <a
                  href="#ai-assistant"
                  className="block whitespace-nowrap rounded-lg px-3 py-2 transition-colors hover:bg-slate-900 hover:text-white"
                >
                  AI Assistant
                </a>
              </li>
              <li>
                <a
                  href="#learn-web3"
                  className="block whitespace-nowrap rounded-lg px-3 py-2 transition-colors hover:bg-slate-900 hover:text-white"
                >
                  Learn Web3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {children}
      </main>
    </div>
  )
}
