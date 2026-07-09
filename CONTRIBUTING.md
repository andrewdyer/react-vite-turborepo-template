# Contributing

Thank you for your interest in contributing! Contributions and suggestions that improve the project are always welcome. The guidelines below help ensure a smooth and productive experience for everyone involved.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Working with Workspaces](#working-with-workspaces)
- [Development Setup](#development-setup)
- [Development Workflow](#development-workflow)
  - [Branching](#branching)
  - [Coding](#coding)
  - [Building](#building)
  - [Testing](#testing)
  - [Committing](#committing)
- [Dependency Management](#dependency-management)
- [Coding Standards](#coding-standards)
- [Issue Reporting](#issue-reporting)

## Code of Conduct

We strive to maintain a welcoming, respectful, and inclusive community where everyone can collaborate productively. Please adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) in all interactions.

## Working with Workspaces

Understanding how workspaces are organised helps you run commands efficiently and make changes without affecting unrelated projects.

This repository is a monorepo managed with [Turborepo](https://turbo.build/repo) and [pnpm Workspaces](https://pnpm.io/workspaces). Commands run from the repository root apply across all **apps** and **packages** by default, but you can target a specific workspace with the `--filter <workspace>` flag.

> **Note:** Unless a section says otherwise, run the commands in this guide from the repository root.

## Development Setup

A consistent development environment helps ensure contributors can build, test, and run the project reliably.

Prepare the project for local development after cloning the repository:

1. Clone the repository and navigate to its directory.
2. Install the correct Node.js version and project dependencies — see [Dependency Management](#dependency-management).
3. Build the project so shared packages are available — see [Building](#building).
4. Start the development server with `pnpm dev`.

> **Note:** Turborepo runs these tasks in dependency order, using caching and parallel execution to keep setup fast.

A running development server confirms the environment is ready for local changes.

## Development Workflow

Moving from a new branch to a reviewable change follows the same sequence for every contribution.

### Branching

Keeping work isolated in focused branches makes reviews easier and reduces the risk of unrelated changes being introduced.

Choose the appropriate target branch before creating a feature branch:

- Bug fixes should be sent to the latest stable branch.
- Minor features that are fully backwards compatible with the current release may be sent to the latest stable branch.
- Major features should always be sent to the `main` branch, which contains the upcoming release.

Create and submit a branch for each change in order:

1. Create a feature branch for each change with `git checkout -b feature/your-feature-name`.
2. Complete the change, then build, test, and commit it — see [Coding](#coding), [Building](#building), [Testing](#testing), and [Committing](#committing).
3. Push the branch once changes are ready with `git push origin feature/your-feature-name`.
4. Open a pull request with a title and description that clearly explain the change — see [Committing](#committing) for the title format.

An open pull request signals the change is ready for review.

> **Tip:** GitHub pre-fills the description from the repository's single pull request template, ready to complete before submitting.

The review process continues until the change is ready to merge:

- Review feedback carefully and suggest improvements or alternatives when needed.
- Apply requested changes in follow-up commits instead of overwriting or squashing history; the merge will be squashed later.
- Keep the branch up to date with the target branch if new commits land while review is in progress.
- Re-request review after the requested changes are in place.
- Resolve review conversations once the underlying concern has been addressed.

The pull request is ready to merge once review conversations are resolved and required checks pass.

### Coding

Keeping changes focused makes reviews easier and reduces the likelihood of unrelated regressions.

Write the change with the existing codebase in mind:

- Keep changes limited to the branch's purpose, avoiding unrelated edits.
- Match existing patterns and conventions already used nearby in the codebase.
- Apply the formatting and linting expectations described in [Coding Standards](#coding-standards) while writing code.

A focused, convention-following change is faster to review and less likely to introduce regressions.

### Building

Building the project validates that production assets can be generated successfully before changes are submitted.

Generate production assets with the following commands:

- Build all projects in the monorepo with `pnpm build`.
- Preview a production build locally with `pnpm preview`.

A successful build confirms the project is ready for local development and further validation.

### Testing

Writing tests for new features and changes helps verify changes behave as expected and reduces the chance of regressions reaching other contributors.

Run the test suite before submitting changes:

- Execute all tests across the monorepo with `pnpm test`.
- Check test coverage with `pnpm test:coverage`.
- Check end-to-end behaviour with `pnpm e2e`.

Structure test files consistently for readability and easier maintenance:

- Mock dependencies and libraries first.
- Define helper functions and constants for mock data.
- Group focused test cases in `describe` blocks.

Passing tests confirm changes behave as intended and are ready for review.

### Committing

Consistent commit messages, written in a shared format, improve project history and clarify the intent behind each change.

Follow the format `<type>(<scope>): <description>` for every commit.

Choose the commit type that best matches the change:

- A new feature uses `feat`.
- A bug fix uses `fix`.
- A dependency change uses `deps`.
- Maintenance, documentation, refactors, tests, and CI changes use `chore`, `docs`, `refactor`, `test`, or `ci`.
- A breaking change uses `feat!` or a `BREAKING CHANGE:` footer.

Use the scope to identify the affected workspace under `apps/` or `packages/`. Omit the scope for repository-wide changes.

> **Note:** Pull request titles follow the same format, since they become the squash merge commit message.

A well-formatted commit message helps reviewers and future contributors understand why a change was made.

## Dependency Management

Dependencies should be managed carefully to keep the project secure, compatible, and easy to maintain over time.

Install dependencies before running the project locally:

- Install the Node.js version specified in `.nvmrc`, or run `nvm install` and `nvm use` when using [nvm](https://github.com/nvm-sh/nvm).
- Install every dependency across the monorepo with `pnpm install`.

Manage dependencies for a specific workspace with these commands:

- Add a dependency with `pnpm --filter <workspace> add <package-name>`.
- Remove a dependency with `pnpm --filter <workspace> remove <package-name>`.

Check for outdated dependencies before planning an update:

- Check every workspace with `pnpm -r outdated`.

Update dependencies to bring in fixes and improvements:

- Update a specific workspace with `pnpm --filter <workspace> update`.
- Update every workspace with `pnpm -r update`.

After any dependency change, confirm compatibility by [building](#building) and [testing](#testing) the project, then commit the updated lockfile.

## Coding Standards

Following shared coding conventions keeps the codebase consistent, readable, and easier to maintain across every workspace.

Apply consistent formatting and linting before submitting changes:

- Format code using [Prettier](https://prettier.io/) with `pnpm format`.
- Lint code using [ESLint](https://eslint.org/) with `pnpm lint`.

Formatted and linted code passes CI checks without additional review comments on style.

## Issue Reporting

Clear issue reports make it easier to reproduce problems, discuss improvements, and track future work.

Select the template that matches the issue before submitting a report:

- Unexpected behaviour or defects use the Bug Report template.
- New features or improvements use the Feature Request template.
- Requests for help or clarification use the Question template.
- Avoid duplicate reports by searching existing issues and checking the README and documentation first.

> **Tip:** GitHub shows the matching template automatically once an issue category is selected.

A complete, well-templated report helps maintainers triage and respond quickly.
