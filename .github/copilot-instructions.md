# Copilot Instructions

This file provides repository-specific guidance for GitHub Copilot. Instructions are organised by concern so additional sections can be added as conventions evolve.

---

## Commit Messages

Generate commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format used in this repository. Commit messages directly drive the automated release process — Release Please reads them to determine which workspaces to release and what version bump to apply — so accuracy matters.

Follow the format below for every commit:

```text
<type>(<scope>): <description>

<body>

[optional footer]
```

The subject line summarises the change and must:

**Use a valid commit type.**

| Type       | Description                                 | Version Bump |
| ---------- | ------------------------------------------- | ------------ |
| `feat`     | A new feature                               | Minor        |
| `fix`      | A bug fix                                   | Patch        |
| `deps`     | Dependency updates                          | Patch        |
| `chore`    | Maintenance or tooling changes              | None         |
| `docs`     | Documentation changes only                  | None         |
| `refactor` | Code restructuring without behaviour change | None         |
| `test`     | Adding or updating tests                    | None         |
| `ci`       | Changes to CI/CD workflows or configuration | None         |

**Use the scope to identify the affected workspace under `apps/` or `packages/`.**

Omit the scope for repository-wide changes.

**Have a clear description.**

- Use lowercase text in the description.
- Be written in the imperative style (for example, `add feature` instead of `added feature`).
- Be concise and specific enough to understand the change at a glance.
- Do not end with a full stop.
- Keep the subject line under 72 characters.

The body provides additional context about the change and should:

- Explain what changed and why.
- Include relevant context that helps a reader understand the decision without reading the diff.
- Keep lines under 100 characters.
- Use paragraphs rather than lists or headers.

The footer is optional and is used for additional metadata, such as breaking changes.

- A breaking change should use `!` after the type (for example, `feat!`) or include a `BREAKING CHANGE:` footer, resulting in a major version bump.

### Breaking Changes

Append `!` to the type or include a `BREAKING CHANGE:` footer describing what broke and how consumers should migrate.

```text
feat(shared)!: remove legacy theme provider

BREAKING CHANGE: ThemeProviderV1 has been removed. Replace all uses
with ThemeProvider from the same package, passing a `theme` prop
instead of wrapping children in a Context.Provider directly.
```

### Examples

```text
feat(web): add user profile page

Introduce a new /profile route that displays the authenticated user's
name, avatar, and account details fetched from the user API. The route
is protected by the existing auth guard and falls back to the login
page if no session is present.
```

```text
fix(shared): prevent Button from submitting forms by default

The Button component was missing an explicit type attribute, causing
browsers to default to type="submit" and unintentionally trigger form
submissions when the button was used inside a form element without a
submit handler. Setting type="button" as the default resolves this.
```

```text
chore: update pnpm to 10.0.0

Bump the pnpm version across the repository to align with the latest
stable release. No changes to application code or dependencies.
```

```text
refactor(web): extract API calls into dedicated hooks

Move all data-fetching logic out of page components and into custom
hooks under src/hooks, following the same pattern already used in the
shared package. This keeps components focused on rendering and makes
the fetching logic independently testable.
```

```text
docs(shared): add usage examples to readme

Add code examples to the shared package README covering component
imports, theming, and TypeScript prop types. The existing API reference
was accurate but lacked practical examples that show how pieces fit
together in a real application.
```

```text
ci: add pnpm caching to release workflow

Configure the setup-node action in the release workflow to cache the
pnpm store, reducing install time on repeated runs where dependencies
have not changed.
```

```text
feat(shared)!: replace css modules with css-in-js

Migrate all component styles from CSS modules to a CSS-in-JS approach
using the sx prop pattern, allowing consumers to customise styles
without class name overrides. All existing className-based style
overrides will need to be replaced with sx prop usage.

BREAKING CHANGE: className-based style overrides are no longer
supported. Use the sx prop for one-off style customisation instead.
```
