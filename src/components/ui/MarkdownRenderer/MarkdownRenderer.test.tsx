import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { MarkdownRenderer } from './MarkdownRenderer'

describe('MarkdownRenderer', () => {
  it('renders bold text correctly', () => {
    render(<MarkdownRenderer content="This is **important**." />)

    const strongText = screen.getByText('important')

    expect(strongText).toBeInTheDocument()
    expect(strongText.tagName).toBe('STRONG')
  })

  it('renders lists correctly', () => {
    render(<MarkdownRenderer content={'- Bitcoin\n- Ethereum'} />)

    const list = screen.getByRole('list')

    expect(within(list).getByText('Bitcoin')).toBeInTheDocument()
    expect(within(list).getByText('Ethereum')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('renders external links with safe attributes', () => {
    render(
      <MarkdownRenderer content="[CoinGecko](https://www.coingecko.com)" />,
    )

    const link = screen.getByRole('link', { name: 'CoinGecko' })

    expect(link).toHaveAttribute('href', 'https://www.coingecko.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('does not render raw HTML elements', () => {
    const { container } = render(
      <MarkdownRenderer content={'Visible text\n\n<span>Raw HTML</span>'} />,
    )

    expect(screen.getByText('Visible text')).toBeInTheDocument()
    expect(container.querySelector('span')).not.toBeInTheDocument()
  })
})
