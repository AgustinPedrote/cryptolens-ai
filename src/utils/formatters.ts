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

type FormatPercentageOptions = {
  showSign?: boolean
  fractionDigits?: number
}

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

export function formatPercentage(
  value: number | null,
  { showSign = true, fractionDigits = 2 }: FormatPercentageOptions = {},
): string {
  if (value === null) {
    return '—'
  }

  const sign = showSign && value >= 0 ? '+' : ''

  return `${sign}${value.toFixed(fractionDigits)}%`
}

export function stripHtml(value: string): string {
  if (!value) {
    return ''
  }

  const parsedHtml = new DOMParser().parseFromString(value, 'text/html')

  return parsedHtml.body.textContent?.trim() ?? ''
}
