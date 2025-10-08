# Contributing

Thank you for your interest in contributing! We welcome improvements and suggestions to make this project even better. Please follow the guidelines below for a smooth experience.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Development Setup](#development-setup)
3. [Upgrading Dependencies](#upgrading-dependencies)
4. [Coding Standards](#coding-standards)
5. [Commit Guidelines](#commit-guidelines)
6. [Testing](#testing)
7. [Building](#building)
8. [Submitting Changes](#submitting-changes)

## Code of Conduct

Please adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) in all interactions. Respectful and inclusive behavior is expected from all contributors.

## Development Setup

To get started with contributing, set up the project by following these steps:

1. Begin by cloning the repository and navigating to its directory.
2. Ensure you have the correct Node.js version installed (check package.json for the required version).
3. Install all project dependencies to ensure a complete setup with `pnpm install`.
4. Build all packages to ensure shared dependencies are available with `pnpm build`.
5. Start the development server using `pnpm dev` to begin working on the project.

## Upgrading Dependencies

Keeping dependencies up-to-date is crucial for maintaining the security and performance of the project. Follow these steps to upgrade dependencies:

1. Check for outdated dependencies with `pnpm outdated`.
2. Update dependencies using `pnpm update` or update a specific package with `pnpm add <package-name>@latest`.
3. Ensure everything works after the upgrade by running the tests with `pnpm test`.
4. Make sure the `pnpm-lock.yaml` file is updated with the latest dependency versions by running `pnpm install`.
5. Rebuild all packages to ensure compatibility with `pnpm build`.
6. Commit the changes to the repository with a clear commit message.
7. Push the changes to your branch and create a pull request for review.

## Coding Standards

To maintain code quality and consistency, please follow these guidelines:

- Format code using Prettier with `pnpm format`.
- Lint code using ESLint with `pnpm lint`.

## Commit Guidelines

Use clear, descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format. Add emojis to quickly convey the type of change if desired, following [Git Commit Emoji](https://dev.andrewdyer.rocks/git-commit-emoji) conventions.

## Testing

Please write tests for any new features or modifications to the project. Follow these steps to ensure your tests are effective and consistent:

- Run all tests across the monorepo with `pnpm test`.
- Execute end-to-end tests with `pnpm e2e`.

For consistency and modularity, organize test code into structured sections:

- Start by mocking dependencies or libraries.
- Create helper functions to streamline repetitive logic.
- Define constants for mock data or configurations.
- Structure the main test suite using `describe` blocks and focused test cases.

Ensure tests are clear, reusable, and easy to maintain before submitting changes.

## Building

Use the following commands as needed to build and preview the project:

- Build all projects in the monorepo using Turborepo with `pnpm build`.
- Preview the production build locally using Vite with `pnpm preview`.

## Submitting Changes

Once you've made your changes, follow these steps to submit them for review:

1. Create a feature branch with `git checkout -b feature/your-feature-name`.
2. Commit your changes following the commit guidelines.
3. Push your branch with `git push origin feature/your-feature-name`.
4. Open a pull request with a title and description that clearly explain your changes.
