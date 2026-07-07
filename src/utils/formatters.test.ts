import { describe, expect, it } from 'vitest'

import { formatCompactUsd, formatPercentage, formatUsd } from './formatters'

describe('formatters', () => {
  describe('formatUsd', () => {
    it('formats large currency values with thousands separators', () => {
      expect(formatUsd(1234567890.12)).toBe('$1,234,567,890.12')
    })
  })

  describe('formatCompactUsd', () => {
    it('formats large currency values using compact notation', () => {
      expect(formatCompactUsd(1234567890)).toBe('$1.23B')
    })
  })

  describe('formatPercentage', () => {
    it('formats percentages with the default precision and positive sign', () => {
      expect(formatPercentage(12.345)).toBe('+12.35%')
    })

    it('supports configurable precision', () => {
      expect(formatPercentage(12.345, { fractionDigits: 1 })).toBe('+12.3%')
    })

    it('does not add a positive sign when showSign is disabled', () => {
      expect(formatPercentage(12.345, { showSign: false })).toBe('12.35%')
    })
  })
})
