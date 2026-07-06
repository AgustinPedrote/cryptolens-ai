import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import type { LearnTopic } from '@/types/learn'

import { LearnTopicCard } from './LearnTopicCard'

const topic: LearnTopic = {
  id: 'blockchain',
  title: 'Blockchain',
  description: 'Learn how blockchain technology records and verifies data.',
  category: 'Foundations',
  level: 'Beginner',
}

describe('LearnTopicCard', () => {
  it('renders the topic information', () => {
    render(<LearnTopicCard topic={topic} />)

    expect(
      screen.getByRole('heading', { name: topic.title }),
    ).toBeInTheDocument()
    expect(screen.getByText(topic.description)).toBeInTheDocument()
    expect(screen.getByText(topic.category)).toBeInTheDocument()
    expect(screen.getByText(topic.level)).toBeInTheDocument()
  })
})
