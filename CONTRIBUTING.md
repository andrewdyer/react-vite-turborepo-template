# Contributing

Thank you for your interest in contributing! We welcome improvements and suggestions to make this project even better. Please follow the guidelines below for a smooth experience.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Repository Overview](#repository-overview)
- [Development Setup](#development-setup)
- [Testing](#testing)
- [Building](#building)
- [Coding Standards](#coding-standards)
- [Upgrading Dependencies](#upgrading-dependencies)
- [Template Syncing](#template-syncing)
- [Commit Messages](#commit-messages)
- [Branches](#branches)
- [Issue Reporting](#issue-reporting)

## Code of Conduct

Please adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) in all interactions. Respectful and inclusive behaviour is expected from all contributors.

## Repository Overview

This repository is structured as a monorepo powered by [Turborepo](https://turbo.build/repo) and [pnpm Workspaces](https://pnpm.io/workspaces). Most commands are executed from the **repository root** and are automatically applied across all apps and packages. Turborepo manages task orchestration, caching, and dependency ordering to ensure efficient builds and testing.

You can also target a specific workspace when needed using the `--filter <workspace>` flag, for example `pnpm --filter <workspace> <command>`. This approach runs a command only for that workspace while preserving dependency awareness.

> 💡 **Tip:** Common tasks like `pnpm build`, `pnpm dev`, `pnpm lint`, and `pnpm test` can be run globally or scoped to a single workspace using filters — no configuration changes required.

## Development Setup

To get started with contributing, set up the project by following these steps:

1. Begin by cloning the repository and navigating to its directory.
2. Ensure you have the correct Node.js version installed (check `.nvmrc` for the required version).
3. Install all project dependencies with `pnpm install`.
4. Build all packages to ensure shared dependencies are available with `pnpm build`.
5. Start the development server using `pnpm dev` to begin working on the project.

> 💡 **Note:** Turborepo automatically runs tasks in the correct order based on workspace dependencies, using smart caching and parallel execution for optimal performance.

## Testing

Please write tests for any new features or modifications to the project. Follow these steps to ensure your tests are effective and consistent:

- Run all tests across the monorepo with `pnpm test`.
- Execute end-to-end tests with `pnpm e2e`.

For consistency and modularity, organise test code into structured sections:

- Start by mocking dependencies or libraries.
- Create helper functions to streamline repetitive logic.
- Define constants for mock data or configurations.
- Structure the main test suite using `describe` blocks and focused test cases.

Ensure tests are clear, reusable, and easy to maintain before submitting changes.

> 💡 **Tip:** You can scope testing to a specific workspace using `pnpm --filter <workspace> test` or `pnpm --filter <workspace> e2e`.

## Building

Use the following commands as needed to build and preview the project:

- Build all projects in the monorepo with `pnpm build`.
- Preview the production build locally with `pnpm preview`.

## Coding Standards

To maintain code quality and consistency, please follow these guidelines:

- Format code using [Prettier](https://prettier.io/) with `pnpm format`.
- Lint code using [ESLint](https://eslint.org/) with `pnpm lint`.

## Upgrading Dependencies

Keeping dependencies up-to-date is crucial for maintaining the security and performance of the project. Follow these steps to upgrade dependencies:

1. Check for outdated dependencies:
   - Run `pnpm outdated` to see outdated dependencies in the current workspace.
   - Run `pnpm -r outdated` to check outdated dependencies across all workspaces.
2. Update dependencies:
   - Update all dependencies in every workspace with `pnpm -r update`.
   - Update a specific package in all workspaces with `pnpm -r add <package-name>@latest`.
   - Update dependencies in a single workspace using `pnpm --filter <workspace> update` or `pnpm --filter <workspace> add <package-name>@latest`.
3. Rebuild all packages with `pnpm build` and run tests with `pnpm test` to ensure compatibility.
4. Update the lockfile with `pnpm install` if needed.
5. Commit your changes with a clear message and open a pull request for review.

## Template Syncing

When the base template is updated (dependency changes, linting updates, or config improvements), sync those changes into projects generated from it. Follow these steps:

1. Create a sync branch following the process in [Branches](#branches), using the naming convention `chore/sync-template-vX.Y.Z`.
2. Copy the updated files from [react-vite-turborepo-template](https://github.com/andrewdyer/react-vite-turborepo-template) into your project, then resolve any project-specific differences manually.
3. Review what changed with `git diff` to verify only intended template updates were introduced.
4. Commit all template changes together as a single atomic commit, following [Commit Messages](#commit-messages).
5. Run `pnpm install` to apply the updated files, then `pnpm build` and `pnpm test` to confirm the project still builds and passes.
6. Submit the sync branch via pull request following the process in [Branches](#branches).

## Commit Messages

When contributing changes, use descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format. This is not just a style convention — commit messages directly drive the automated release process, so getting them right matters.

The format is:

```
<type>(<scope>): <description>
```

Common types and how they affect versioning:

- `feat`: a new feature — triggers a minor version bump
- `fix`: a bug fix — triggers a patch version bump
- `deps`: dependency updates — can trigger a patch release
- `chore`, `docs`, `refactor`, `test`, `ci`: no version bump
- `feat!` or any type with `BREAKING CHANGE:` in the footer — triggers a major version bump

The scope should reflect the affected workspace. Omit the scope for changes that span the whole repo.

> 💡 **Tip:** Pull request titles follow the same Conventional Commits format, as they become the squash merge commit message on `main`.

## Branches

All changes should be made on a dedicated branch and submitted via pull request. Branch names should follow the same type prefix as the commit message.

1. Create a feature branch with `git checkout -b feat/your-feature-name`.
2. Commit your changes following [Commit Messages](#commit-messages).
3. Push your branch with `git push origin feat/your-feature-name`.
4. Open a pull request with a title and description that clearly explain your changes.

## Issue Reporting

We welcome bug reports, feature requests, and questions about the project. To ensure we can help you effectively, please use the appropriate issue template when creating a new issue:

- **🐛 Bug Report**: Report issues or unexpected behaviour
- **✨ Feature Request**: Suggest new features or improvements
- **❓ Question**: Ask for help or clarification

Before creating an issue, please complete these steps:

- **Search existing issues** to avoid duplicates
- **Check the [documentation](https://docs.dyerlabs.co.uk/templates/react-vite-turborepo-template/)** for answers to common questions
- **Use GitHub Discussions** for general questions and community support

> 💡 **Tip:** When you create a new issue, GitHub will automatically show you the available templates. Choose the one that best fits your situation for a guided experience.
