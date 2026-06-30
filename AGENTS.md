# AGENTS.md

## Project

CryptoLens AI is a portfolio-focused web application for exploring cryptocurrency data and learning Web3 concepts with basic AI assistance.

## Main Goal

Build a production-quality frontend project using React, TypeScript, Tailwind CSS, testing, Docker and Netlify deployment.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- TanStack Query
- Recharts
- Gemini API
- Vitest
- React Testing Library
- Docker
- Netlify

## Architecture Rules

- This project is frontend-only.
- Do not create a backend.
- Do not add a database.
- Do not add authentication.
- Keep components small and reusable.
- Put API calls inside `services/`.
- Put reusable stateful logic inside `hooks/`.
- Put shared types inside `types/`.
- Put formatting helpers inside `utils/`.
- Use environment variables for API keys.
- Never hardcode secrets in source code.

## Code Quality

- Use TypeScript strictly.
- Prefer readable code over clever code.
- Avoid unnecessary abstractions.
- Keep business logic out of UI components when possible.
- Use meaningful names for files, components and functions.
- Do not install new libraries without explaining why.

## Testing

- Use Vitest and React Testing Library.
- Test user-visible behavior.
- Do not test implementation details.
- Add tests for utilities, important components and core hooks.

## Git Workflow

Use Conventional Commits.

Examples:

- `feat: add crypto dashboard layout`
- `feat: integrate coingecko api`
- `test: add crypto card tests`
- `refactor: improve crypto service`
- `docs: update project overview`

## AI Workflow

When using Codex, prompts should follow this format:

1. Role
2. Context
3. Exact task
4. Restrictions
5. Output format
6. Acceptance criteria

## Restrictions for AI Agents

- Do not modify unrelated files.
- Do not remove existing functionality without permission.
- Do not introduce backend code.
- Do not expose API keys.
- Do not skip tests when the task affects tested code.
- Explain relevant changes clearly.

