import type { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <p className="main-layout__brand">CryptoLens AI</p>
      </header>
      <main className="main-layout__content">{children}</main>
    </div>
  )
}
