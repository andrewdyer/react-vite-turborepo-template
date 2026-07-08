# Contributing

Thank you for your interest in contributing! We welcome improvements and suggestions to make this project even better. Please follow the guidelines below for a smooth experience.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Working with Workspaces](#working-with-workspaces)
- [Development Setup](#development-setup)
- [Branching](#branching)
- [Dependencies](#dependencies)
- [Testing](#testing)
- [Building](#building)
- [Coding Standards](#coding-standards)
- [Issue Reporting](#issue-reporting)
- [Commit Messages](#commit-messages)

## Code of Conduct

We strive to maintain a welcoming, respectful, and inclusive community where everyone can collaborate productively. Please adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) in all interactions.

## Working with Workspaces

Understanding how workspaces are organised helps you run commands efficiently and make changes without affecting unrelated projects.

This repository is a monorepo managed with [Turborepo](https://turbo.build/repo) and [PNPM Workspaces](https://pnpm.io/workspaces). Commands run from the repository root apply across all **apps** and **packages** by default.

Target a specific workspace with the `--filter <workspace>` flag, for example `pnpm --filter <workspace> <command>`, to scope a command to that workspace while preserving dependency awareness.

> 💡 **Tip:** Common tasks like `pnpm build`, `pnpm dev`, `pnpm lint`, and `pnpm test` can be run globally or scoped to a single workspace using filters.

## Development Setup

A consistent development environment helps ensure contributors can build, test, and run the project reliably.

1. Clone the repository and navigate to its directory.
2. Install the correct [Node.js](https://nodejs.org/) version, as specified in `package.json`.
3. Install dependencies with `pnpm install`.
4. Build all packages to make shared dependencies available with `pnpm build`.
5. Start the development server with `pnpm dev`.

> 💡 **Note:** Turborepo runs tasks in dependency order using smart caching and parallel execution.

## Branching

Keeping work isolated in focused branches makes reviews easier and reduces the risk of unrelated changes being introduced.

- Create a feature branch for each change with `git checkout -b feature/your-feature-name`.
- Push the branch once your changes are ready with `git push origin feature/your-feature-name`.
- Open a pull request with a title and description that clearly explain the change — see [Commit Messages](#commit-messages) for the title format.

> 💡 **Tip:** GitHub pre-fills the description from this repository's single pull request template — fill it in as you go.

## Dependencies

Dependencies should be managed carefully to keep the project secure, compatible, and easy to maintain over time.

- Check for outdated dependencies
  - See what's outdated in the current workspace with `pnpm outdated`.
  - Check every workspace at once with `pnpm -r outdated`.
- Add a dependency
  - Add a package to the current workspace with `pnpm add <package-name>`.
  - Target a specific workspace with `pnpm --filter <workspace> add <package-name>`.
  - Add it across every workspace with `pnpm -r add <package-name>`.
- Remove a dependency
  - Remove a package from the current workspace with `pnpm remove <package-name>`.
  - Target a specific workspace with `pnpm --filter <workspace> remove <package-name>`.
  - Remove it across every workspace with `pnpm -r remove <package-name>`.
- Update dependencies
  - Update the current workspace with `pnpm update`.
  - Target a specific workspace with `pnpm --filter <workspace> update`.
  - Update every workspace at once with `pnpm -r update`.
  - Bump a single package to its latest version with `pnpm add <package-name>@latest`.

After any dependency change, confirm compatibility by [building](#building) and [testing](#testing) the project, then update the lockfile with `pnpm install` if needed.

## Testing

Writing tests for new features and modifications helps verify changes behave as expected and reduces the chance of regressions reaching other contributors.

- Run all tests across the monorepo with `pnpm test`.
- Run end-to-end tests with `pnpm e2e`.

Structure test files consistently:

- Mock dependencies and libraries first.
- Define helper functions and constants for mock data.
- Group focused test cases in `describe` blocks.

## Building

Building the project validates that production assets can be generated successfully before changes are submitted.

- Build all projects in the monorepo with `pnpm build`.
- Preview a production build locally with `pnpm preview`.

## Coding Standards

Following shared coding conventions keeps the codebase consistent, readable, and easier for everyone to work with.

- Format code with [Prettier](https://prettier.io/) using `pnpm format`.
- Lint code with [ESLint](https://eslint.org/) using `pnpm lint`.

## Issue Reporting

Clear issue reports make it easier to reproduce problems, discuss improvements, and track future work, so start with the template that matches your issue:

- **Bug Report** — issues or unexpected behaviour
- **Feature Request** — new features or improvements
- **Question** — help or clarification

Search existing issues to avoid duplicates, and check the README and documentation for answers to common questions before opening a new issue.

> 💡 **Tip:** GitHub shows the available templates automatically when you open a new issue — choose the one that fits.

## Commit Messages

Consistent commit messages, written in the [Conventional Commits](https://www.conventionalcommits.org/) format, make project history clear and easy to search. The same format applies to pull request titles, since they become the squash merge commit message.

Use the format `<type>(<scope>): <description>`:

- `feat` — a new feature
- `fix` — a bug fix
- `deps` — a dependency change
- `chore`, `docs`, `refactor`, `test`, `ci` — maintenance, documentation, refactors, tests, and CI changes
- `feat!` or a `BREAKING CHANGE:` footer — a change that breaks backwards compatibility

Scope is the affected workspace under `apps/` or `packages/`, omitted for repo-wide changes.
