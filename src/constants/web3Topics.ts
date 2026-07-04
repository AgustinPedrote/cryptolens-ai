import type { LearnTopic } from '@/types/learn'

export const web3Topics = [
  {
    id: 'blockchain',
    title: 'Blockchain',
    description:
      'Learn how distributed ledgers record transactions and create shared, verifiable histories.',
    category: 'Foundations',
    level: 'Beginner',
  },
  {
    id: 'bitcoin',
    title: 'Bitcoin',
    description:
      'Explore digital scarcity, proof of work, and the network behind the first cryptocurrency.',
    category: 'Digital Assets',
    level: 'Beginner',
  },
  {
    id: 'ethereum',
    title: 'Ethereum',
    description:
      'Understand how Ethereum supports programmable applications and a global settlement layer.',
    category: 'Networks',
    level: 'Beginner',
  },
  {
    id: 'wallets',
    title: 'Wallets',
    description:
      'Discover how wallets manage keys, sign transactions, and connect users to Web3 applications.',
    category: 'Infrastructure',
    level: 'Beginner',
  },
  {
    id: 'tokens',
    title: 'Tokens',
    description:
      'Compare fungible and non-fungible tokens and learn how digital assets are issued onchain.',
    category: 'Digital Assets',
    level: 'Beginner',
  },
  {
    id: 'stablecoins',
    title: 'Stablecoins',
    description:
      'Understand crypto assets designed to track currencies like the US dollar and how they are used across Web3.',
    category: 'Digital Assets',
    level: 'Beginner',
  },
  {
    id: 'smart-contracts',
    title: 'Smart Contracts',
    description:
      'See how blockchain programs execute agreements and power decentralized applications.',
    category: 'Applications',
    level: 'Intermediate',
  },
  {
    id: 'defi',
    title: 'DeFi',
    description:
      'Learn how decentralized exchanges, lending protocols, and liquidity pools work together.',
    category: 'Applications',
    level: 'Intermediate',
  },
  {
    id: 'daos',
    title: 'DAOs',
    description:
      'Learn how decentralized communities coordinate decisions, proposals, and treasury management onchain.',
    category: 'Governance',
    level: 'Intermediate',
  },
  {
    id: 'nfts',
    title: 'NFTs',
    description:
      'Understand unique onchain assets, digital ownership, provenance, and common use cases.',
    category: 'Digital Assets',
    level: 'Beginner',
  },
  {
    id: 'rwa',
    title: 'Real-World Assets',
    description:
      'Explore how physical and traditional financial assets can be represented on blockchain networks.',
    category: 'Digital Assets',
    level: 'Intermediate',
  },
  {
    id: 'web3-security',
    title: 'Web3 Security',
    description:
      'Build safer habits around seed phrases, approvals, phishing, smart contracts, and wallet access.',
    category: 'Security',
    level: 'Beginner',
  },
] as const satisfies readonly LearnTopic[]
