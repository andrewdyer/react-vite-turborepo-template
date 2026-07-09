# Contributing

Thank you for your interest in contributing! Contributions and suggestions that improve the project are always welcome. The guidelines below help ensure a smooth and productive experience for everyone involved.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Working with Workspaces](#working-with-workspaces)
- [Development Setup](#development-setup)
- [Dependency Management](#dependency-management)
- [Building](#building)
- [Testing](#testing)
- [Coding Standards](#coding-standards)
- [Branching](#branching)
- [Commit Messages](#commit-messages)
- [Issue Reporting](#issue-reporting)

## Code of Conduct

We strive to maintain a welcoming, respectful, and inclusive community where everyone can collaborate productively. Please adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) in all interactions.

## Working with Workspaces

Understanding how workspaces are organised helps you run commands efficiently and make changes without affecting unrelated projects.

This repository is a monorepo managed with [Turborepo](https://turbo.build/repo) and [pnpm Workspaces](https://pnpm.io/workspaces). Commands run from the repository root apply across all **apps** and **packages** by default, but you can target a specific workspace with the `--filter <workspace>` flag.

> 📝 **Note:** Unless a section says otherwise, run the commands in this guide from the repository root.

This approach keeps command usage predictable while still allowing contributors to focus work on a single workspace when needed.

## Development Setup

A consistent development environment helps ensure contributors can build, test, and run the project reliably.

Prepare the project for local development after cloning the repository:

1. Clone the repository and navigate to its directory.
2. Install the correct Node.js version and project dependencies — see [Dependency Management](#dependency-management).
3. Build the project so shared packages are available — see [Building](#building).
4. Start the development server with `pnpm dev`.

Turborepo runs these tasks in dependency order, using caching and parallel execution to keep setup fast.

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

## Building

Building the project validates that production assets can be generated successfully before changes are submitted.

Generate and review build output with the following commands:

- Build all projects in the monorepo with `pnpm build`.
- Preview a production build locally with `pnpm preview`.

> 💡 **Note:** A successful build is required before local development, since apps depend on the built output of shared packages.

Successful build output shows the project is ready for local development and production-oriented validation.

## Testing

Writing tests for new features and modifications helps verify changes behave as expected and reduces the chance of regressions reaching other contributors.

Run the test suite before submitting changes:

- Execute all tests across the monorepo with `pnpm test`.
- Check test coverage with `pnpm test:coverage`.
- Check end-to-end behaviour with `pnpm e2e`.

Structure test files consistently for readability and easier maintenance:

- Mock dependencies and libraries first.
- Define helper functions and constants for mock data.
- Group focused test cases in `describe` blocks.

Passing tests confirm changes behave as intended and are ready for review.

## Coding Standards

Following shared coding conventions keeps the codebase consistent, readable, and easier to maintain across every workspace.

Apply consistent formatting and linting before submitting changes:

- Format code using [Prettier](https://prettier.io/) with `pnpm format`.
- Lint code using [ESLint](https://eslint.org/) with `pnpm lint`.

Formatted and linted code passes CI checks without additional review comments on style.

## Branching

Keeping work isolated in focused branches makes reviews easier and reduces the risk of unrelated changes being introduced.

Branch off the appropriate branch into a new feature branch:

- Bug fixes should be sent to the latest stable branch.
- Minor features that are fully backwards compatible with the current release may be sent to the latest stable branch.
- Major features should always be sent to the `main` branch, which contains the upcoming release.

Create and submit a branch for each change in order:

1. Create a feature branch for each change with `git checkout -b feature/your-feature-name`.
2. Commit your changes with a message — see [Commit Messages](#commit-messages).
3. Push the branch once changes are ready with `git push origin feature/your-feature-name`.
4. Open a pull request with a title and description that clearly explain the change — see [Commit Messages](#commit-messages) for the title format.

Focused branches and clear pull requests make changes easier to review, test, and merge safely.

> 💡 **Tip:** GitHub pre-fills the description from the repository's single pull request template, ready to complete before submitting.

The review process continues until the change is ready to merge:

- Review feedback carefully and suggest improvements or alternatives when needed.
- Apply requested changes in follow-up commits instead of overwriting or squashing history; the merge will be squashed later.
- Keep the branch up to date with the target branch if new commits land while review is in progress.
- Re-request review after the requested changes are in place.
- Resolve review conversations once the underlying concern has been addressed.

A clear review process helps keep feedback traceable and makes approval easier.

## Commit Messages

Consistent commit messages, written in a shared format, improve project history and clarify the intent behind each change.

Follow the format `<type>(<scope>): <description>` for every commit, matching `<type>` to the kind of change:

- A new feature uses `feat`.
- A bug fix uses `fix`.
- A dependency change uses `deps`.
- Maintenance, documentation, refactors, tests, and CI changes use `chore`, `docs`, `refactor`, `test`, or `ci`.
- A breaking change uses `feat!` or a `BREAKING CHANGE:` footer.
- Scope is the affected workspace under `apps/` or `packages/`, omitted for repo-wide changes.

> 💡 **Note:** Pull request titles follow the same format, since they become the squash merge commit message.

Following this format keeps release automation predictable and makes project history easier to scan.

## Issue Reporting

Clear issue reports make it easier to reproduce problems, discuss improvements, and track future work.

Select the template that matches the issue before submitting a report:

- Unexpected behaviour or defects use the Bug Report template.
- New features or improvements use the Feature Request template.
- Requests for help or clarification use the Question template.
- Duplicate reports are avoided by searching existing issues and checking the README and documentation first.

> 💡 **Tip:** GitHub shows the matching template automatically once an issue category is selected.

Using the right template and enough detail helps maintainers triage, reproduce, and respond more efficiently.
