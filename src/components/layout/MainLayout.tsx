import type { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800/80 bg-slate-950/80 px-6 py-5 backdrop-blur">
        <p className="text-lg font-semibold tracking-tight text-white">
          CryptoLens AI
        </p>
      </header>
      <main className="grid flex-1 place-items-center px-6 py-16">
        {children}
      </main>
    </div>
  )
}
