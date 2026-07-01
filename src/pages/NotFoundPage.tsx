import { MainLayout } from '@/components/layout/MainLayout'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <MainLayout>
      <section className="text-center" aria-labelledby="not-found-title">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          404
        </p>
        <h1
          id="not-found-title"
          className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Page not found
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-400">
          The page you are looking for does not exist.
        </p>
        <div style={{ paddingTop: '1.5rem' }}>
          <Link
            to="/"
            className="inline-flex rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            Back to market
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
