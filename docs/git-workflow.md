# Git Workflow

## Branch Strategy

For this learning project, we will work mainly on the `main` branch, using small commits by feature.

In a larger professional project, we would use feature branches and pull requests.

## Commit Style

Use Conventional Commits.

Examples:

```bash
feat: create initial project documentation
feat: add dashboard layout
feat: integrate coingecko api
test: add formatter tests
refactor: improve crypto table structure
docs: update readme
chore: configure docker
```

## Before Each Commit

Run:

```bash
npm run lint
npm run test
npm run build
```

If any command fails, fix it before committing.