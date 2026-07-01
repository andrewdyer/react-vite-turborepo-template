![React + Vite + Turborepo Template](https://public-assets.andrewdyer.rocks/images/covers/react-vite-turborepo-template.png)

# React + Vite + Turborepo Template

A template for building modern web platforms using the [React](https://react.dev/) framework, [Vite](https://vitejs.dev/) build tool, managed in a [Turborepo](https://turborepo.com/) monorepo, and written in [TypeScript](https://www.typescriptlang.org/).

## License

Licensed under the [MIT license](https://opensource.org/licenses/MIT) and is free for private or commercial projects.

## Introduction

This template provides a scalable, modular foundation for web platforms built as a monorepo of applications and shared packages. It is designed to support consistent tooling, efficient builds, and smooth collaboration across teams. It can also evolve toward micro frontend-style architectures, with independently deployable applications that share libraries and development workflows, while maintaining consistency across the repository.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **[Node.js](https://nodejs.org/)**: Version 22.20 or higher is required (as specified in [.nvmrc](.nvmrc)).
- **[pnpm](https://pnpm.io/)**: Dependency management tool for Node.js.
- **[Docker](https://www.docker.com/)** (optional): For containerising the application.

## Workspace

The monorepo follows a clear structure with dedicated apps for frontend applications and packages for shared libraries and configurations.

```plaintext
repo/
├── apps/
│   ├── web/                   # React application (Vite + TypeScript)
│   └── web-e2e/               # E2E testing suite (Playwright)
│
├── packages/
│   ├── eslint-config/         # Shared ESLint configurations
│   ├── shared/                # Shared React library (components + utilities)
│   └── typescript-config/     # Shared TypeScript configurations
│
├── package.json               # Root workspace configuration
├── turbo.json                 # Turborepo configuration
└── pnpm-workspace.yaml        # PNPM workspace definition
```

All applications and packages utilise shared [ESLint](./packages/eslint-config/README.md) and [TypeScript](./packages/typescript-config/README.md) configurations to ensure consistency across the monorepo, with each workspace designed for specific functionality and seamless integration:

### [apps/web](./apps/web/README.md)

A modern React application built with Vite and TypeScript, providing a fast development experience and optimised production builds. Key features include:

- [SWC (Speedy Web Compiler)](https://swc.rs/) for faster builds and development.
- [Vitest](https://vitest.dev/) for unit and component testing, along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components, [Vitest UI](https://vitest.dev/guide/ui.html), and [V8 coverage reports](https://vitest.dev/guide/coverage.html).
- Pre-commit checks with [lint-staged](https://github.com/lint-staged/lint-staged) to maintain code quality.

### [apps/web-e2e](./apps/web-e2e/README.md)

A comprehensive end-to-end testing suite built with Playwright and TypeScript, ensuring reliable cross-browser testing for the web application. Key features include:

- [Playwright](https://playwright.dev/) for cross-browser end-to-end testing with automated CI/CD support.
- Pre-commit checks with [lint-staged](https://github.com/lint-staged/lint-staged) to maintain code quality.
- Direct integration with the main web app for seamless testing workflows.

### [packages/shared](./packages/shared/README.md)

A shared React component library built with Vite and TypeScript, providing reusable components and utilities across the monorepo. Key features include:

- [SWC (Speedy Web Compiler)](https://swc.rs/) for faster builds and development.
- TypeScript declaration generation with [vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts).
- [Vitest](https://vitest.dev/) for unit testing, along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components, [Vitest UI](https://vitest.dev/guide/ui.html), [jsdom](https://github.com/jsdom/jsdom) environment, and [coverage reports](https://vitest.dev/guide/coverage.html).
- Pre-commit checks with [lint-staged](https://github.com/lint-staged/lint-staged) to maintain code quality.

## Tooling

Essential development tools configured at the root for consistency and automation across all workspaces, including:

- [Turborepo](https://turbo.build/repo) for managing builds, caching, and running tasks in parallel across the monorepo.
- [Husky](https://typicode.github.io/husky) for Git hooks to enforce pre-commit checks and automate quality controls.
- [Prettier](https://prettier.io/) for maintaining consistent code formatting across the entire codebase.
- [Docker](https://www.docker.com/) for containerising apps via a shared root Dockerfile and Nginx config.
- [GitHub Actions](https://github.com/features/actions) for CI/CD, covering testing on pull requests, automated releasing, publishing packages and images, and deploy/rollback workflow templates that require project-specific configuration.

Together, these tools create a fast, reliable, and maintainable developer experience across every workspace.

## Getting Started

If you like what you've seen so far and think this setup fits your needs, you can quickly get started by clicking the **Use this template** button at the top of the repository on GitHub.
