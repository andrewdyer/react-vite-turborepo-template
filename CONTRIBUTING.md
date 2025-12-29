# Contributing

Thank you for your interest in contributing! We welcome improvements and suggestions to make this project even better. Please follow the guidelines below for a smooth experience.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Repository Overview](#repository-overview)
- [Development Setup](#development-setup)
- [Turborepo Tasks](#turborepo-tasks)
- [Upgrading Dependencies](#upgrading-dependencies)
- [Testing](#testing)
- [Building](#building)
- [Docker](#docker)
- [Coding Standards](#coding-standards)
- [Issue Reporting](#issue-reporting)
- [Commit Guidelines](#commit-guidelines)

## Code of Conduct

Please adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) in all interactions. Respectful and inclusive behavior is expected from all contributors.

## Repository Overview

This repository is structured as a monorepo powered by [Turborepo](https://turbo.build/repo) and [PNPM Workspaces](https://pnpm.io/workspaces). Most commands are executed from the **repository root** and are automatically applied across all apps and packages. Turborepo manages task orchestration, caching, and dependency ordering to ensure efficient builds and testing.

You can also target a specific workspace when needed using the `--filter <workspace>` flag, for example `pnpm --filter <workspace> <command>`. This approach runs a command only for that workspace while preserving dependency awareness.

> 💡 **Tip:** Common tasks like `pnpm build`, `pnpm dev`, `pnpm lint`, and `pnpm test` can be run globally or scoped to a single workspace using filters — no configuration changes required.

## Development Setup

To get started with contributing, set up the project by following these steps:

1. Begin by cloning the repository and navigating to its directory.
2. Ensure you have the correct Node.js version installed (check package.json for the required version).
3. Install all project dependencies with `pnpm install`.
4. Build all packages to ensure shared dependencies are available with `pnpm build`.
5. Start the development server using `pnpm dev` to begin working on the project.

> 💡 **Note:** Turborepo automatically runs tasks in the correct order based on workspace dependencies, using smart caching and parallel execution for optimal performance.

## Turborepo Tasks

Turborepo tasks are defined in `turbo.json` at the root of the repository. Each task (such as `build`, `test`, `lint`, or `dev`) can specify dependencies (`dependsOn`) and output paths to enable smart caching and efficient rebuilds.

To add or extend shared tasks:

- Define the task configuration in `turbo.json`.
- Add or update the corresponding script in each relevant workspace’s `package.json`.

> 💡 **Tip:** Turborepo’s dependency graph ensures that changes in one workspace only trigger necessary rebuilds and tests in dependent workspaces, streamlining both local development and CI pipelines.

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

> 💡 **Tip:** You can scope testing to a specific workspace using `pnpm --filter <workspace> test` or `pnpm --filter <workspace> e2e`.

## Building

Use the following commands as needed to build and preview the project:

- Build all projects in the monorepo with `pnpm build`.
- Preview the production build locally with `pnpm preview`.

## Docker

This repository includes a single, parameterized Dockerfile capable of building any web application located under `apps/*`. It is intended for HTTP-based applications that can be served from a container runtime.

To build an app, run `docker build --build-arg APP_NAME=<workspace> -t <workspace>:local .` from the repository root, where `<workspace>` matches the name of a folder under `apps/`.

Alternatively, you can use `docker buildx bake` to run builds from a declarative plan defined in `docker-bake.hcl`. This is useful for defining per-workspace build targets with shared defaults such as build arguments, tags, and caching. For example, running `docker buildx bake <workspace>` will build the image for the specified app.

Once built, start the container with `docker run --name <workspace>-app -p 8080:80 -d <workspace>:local`, which maps port 8080 on your machine to port 80 inside the container.

> 💡 **Tip:** The Dockerfile uses `turbo prune` to minimize the build context before installing and building dependencies, resulting in faster builds and smaller images.

## Coding Standards

To maintain code quality and consistency, please follow these guidelines:

- Format code using Prettier with `pnpm format`.
- Lint code using ESLint with `pnpm lint`.

## Issue Reporting

We welcome bug reports, feature requests, and questions about the project. To ensure we can help you effectively, please use the appropriate issue template when creating a new issue, including:

- **🐛 Bug Report**: Report issues or unexpected behavior
- **✨ Feature Request**: Suggest new features or improvements
- **❓ Question**: Ask for help or clarification

Before creating an issue, please complete these steps, including:

- **Search existing issues** to avoid duplicates
- **Check the documentation** and README for answers to common questions
- **Use GitHub Discussions** for general questions and community support

> 💡 **Tip:** When you create a new issue, GitHub will automatically show you the available templates. Choose the one that best fits your situation for a guided experience.

## Commit Guidelines

When contributing changes, it's important to follow clear commit practices that help maintain project history and make collaboration easier. Use descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format, and feel free to add emojis to quickly convey the type of change using [Git Commit Emoji](https://dev.andrewdyer.rocks/git-commit-emoji) conventions.

Once you've made your changes, follow these steps to submit them for review:

1. Create a feature branch with `git checkout -b feature/your-feature-name`.
2. Commit your changes following the commit guidelines.
3. Push your branch with `git push origin feature/your-feature-name`.
4. Open a pull request with a title and description that clearly explain your changes.
