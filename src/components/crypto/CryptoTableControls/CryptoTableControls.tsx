import clsx from 'clsx'

type CryptoTableControlsProps = {
  searchTerm: string
  perPage: number
  isLoading: boolean
  lastUpdated: Date | null
  onSearchTermChange: (searchTerm: string) => void
  onPerPageChange: (perPage: number) => void
  onRefresh: () => void
}

const perPageOptions = [10, 25, 50]

export function CryptoTableControls({
  searchTerm,
  perPage,
  isLoading,
  lastUpdated,
  onSearchTermChange,
  onPerPageChange,
  onRefresh,
}: CryptoTableControlsProps) {
  const lastUpdatedLabel = lastUpdated
    ? `Last updated at ${lastUpdated.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}`
    : 'Not updated yet'

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="flex flex-1 flex-col gap-4 sm:flex-row">
        <label className="flex flex-1 flex-col gap-2 text-sm font-medium text-slate-300">
          Search
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchTermChange(event.target.value)}
            placeholder="Search by name or symbol"
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-400"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-300">
          Results
          <select
            value={perPage}
            onChange={(event) => onPerPageChange(Number(event.target.value))}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-cyan-400"
          >
            {perPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <p className="text-xs text-slate-500" aria-live="polite">
          {lastUpdatedLabel}
        </p>
        <button
          type="button"
          onClick={onRefresh}
          disabled={isLoading}
          className={clsx(
            'rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors',
            isLoading
              ? 'cursor-not-allowed bg-slate-800 text-slate-500'
              : 'cursor-pointer bg-cyan-400 text-slate-950 hover:bg-cyan-300',
          )}
        >
          {isLoading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
    </div>
  )
}
