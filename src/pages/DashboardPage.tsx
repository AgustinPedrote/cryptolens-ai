import { MainLayout } from '../components/layout/MainLayout'

export function DashboardPage() {
  return (
    <MainLayout>
      <section className="dashboard">
        <h1 className="dashboard__title">CryptoLens AI</h1>
        <p className="dashboard__description">
          Explora el mercado de criptomonedas y aprende sobre Web3.
        </p>
      </section>
    </MainLayout>
  )
}
