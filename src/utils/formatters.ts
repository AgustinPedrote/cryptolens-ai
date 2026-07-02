const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
})

const compactUsdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  maximumFractionDigits: 2,
})

export function formatUsd(value: number | null): string {
  if (value === null) {
    return '—'
  }

  if (value > 0 && value < 1) {
    return `$${value.toLocaleString('en-US', { maximumSignificantDigits: 4 })}`
  }

  return usdFormatter.format(value)
}

export function formatCompactUsd(value: number | null): string {
  return value === null ? '—' : compactUsdFormatter.format(value)
}

export function formatPercentage(value: number | null): string {
  return value === null ? '—' : `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`
}

export function stripHtml(value: string): string {
  if (!value) {
    return ''
  }

  const parsedHtml = new DOMParser().parseFromString(value, 'text/html')

  return parsedHtml.body.textContent?.trim() ?? ''
}
