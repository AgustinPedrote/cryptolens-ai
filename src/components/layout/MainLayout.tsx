import clsx from 'clsx'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const navigationLinkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      'block whitespace-nowrap rounded-lg px-3 py-2 transition-colors',
      isActive
        ? 'bg-slate-800 text-white'
        : 'text-slate-400 hover:bg-slate-900 hover:text-white',
    )

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <NavLink
            to="/"
            className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white"
          >
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-xl bg-cyan-400 font-bold text-slate-950 shadow-lg shadow-cyan-500/20"
            >
              C
            </span>
            CryptoLens AI
          </NavLink>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1 overflow-x-auto text-sm font-medium text-slate-400">
              <li>
                <NavLink to="/" end className={navigationLinkClass}>
                  Market
                </NavLink>
              </li>
              <li>
                <NavLink to="/ai" className={navigationLinkClass}>
                  AI Assistant
                </NavLink>
              </li>
              <li>
                <NavLink to="/learn" className={navigationLinkClass}>
                  Learn Web3
                </NavLink>
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
