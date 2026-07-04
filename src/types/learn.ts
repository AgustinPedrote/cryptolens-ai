export type LearnTopicCategory =
  | 'Foundations'
  | 'Networks'
  | 'Infrastructure'
  | 'Applications'
  | 'Digital Assets'
  | 'Governance'
  | 'Security'

export type LearnTopicLevel = 'Beginner' | 'Intermediate'

export type LearnTopic = {
  id: string
  title: string
  description: string
  category: LearnTopicCategory
  level: LearnTopicLevel
}
