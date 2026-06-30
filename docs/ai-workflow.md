# AI Workflow

## Purpose

This document defines how AI tools such as Codex should be used in this project.

The goal is not to let AI build the project blindly, but to use it as a development assistant while understanding each decision.

## Standard Prompt Structure

Every Codex prompt should include:

1. Role
2. Context
3. Exact task
4. Restrictions
5. Output format
6. Acceptance criteria

## Prompt Template

```txt
## 1. Role

Act as a senior frontend developer specialized in React, TypeScript, Tailwind CSS, testing and frontend architecture.

## 2. Context

We are building CryptoLens AI, a frontend-only portfolio project using React, TypeScript, Vite, Tailwind CSS, Axios, TanStack Query, Gemini API, Vitest, React Testing Library, Docker and Netlify.

The project has no backend, no database and no authentication.

## 3. Exact Task

[Describe the exact task here.]

## 4. Restrictions

- Use TypeScript.
- Use Tailwind CSS.
- Do not create backend code.
- Do not add a database.
- Do not add authentication.
- Do not expose API keys.
- Do not modify unrelated files.
- Keep components small and reusable.
- Do not install new libraries without justification.

## 5. Output Format

Return:

- Files created or modified.
- Summary of changes.
- Commands to run.
- Risks or things to review.

## 6. Acceptance Criteria

- The app builds successfully.
- TypeScript has no errors.
- ESLint has no relevant errors.
- Existing tests pass.
- The requested functionality works.

# Paso 7 — Contenido de `docs/mcp-notes.md`

```md
# MCP Notes

## What is MCP?

MCP stands for Model Context Protocol. It is a way to connect AI tools with external context, tools and data sources.

## Possible Uses in This Project

MCP could be useful later for:

- GitHub context
- Filesystem context
- Documentation lookup
- Browser/search workflows

## Current Decision

MCP is not required at the beginning of the project.

We will first build the project foundation. Later, if MCP adds real value, we may configure it.

## Security Notes

- Do not give AI tools unnecessary access.
- Do not expose API keys.
- Review generated code before committing.
- Avoid connecting tools without understanding their permissions.
