# Copilot Instructions

This file provides repository-specific guidance for GitHub Copilot. Instructions are organised by concern so additional sections can be added as conventions evolve.

---

## Commit Messages

Generate commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format used in this repository. Commit messages directly drive the automated release process — Release Please reads them to determine which workspaces to release and what version bump to apply — so accuracy matters.

### Format

```
<type>(<scope>): <description>

<body paragraph>

[optional footer]
```

The subject line is a short, focused summary. The body is a single prose paragraph — no bullet points, no lists — that explains what changed, why it changed, and any relevant context a reader would need to understand the commit without reading the diff. Always include a body unless the change is genuinely trivial (e.g. a one-line dependency version bump).

### Types

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
| `build`    | Changes to the build system or dependencies | None         |

For breaking changes, append `!` to the type (e.g. `feat!`) and include a `BREAKING CHANGE:` footer. This triggers a major version bump.

### Scope

The scope should reflect the affected workspace. Use the folder name under `apps/` or `packages/`:

- `feat(<workspace>): add new feature`
- `fix(<workspace>): correct bug or issue`
- `chore(<workspace>): update configuration or tooling`
- `docs(<workspace>): update documentation`

Omit the scope only when the change genuinely spans the entire repository, such as root-level config or tooling updates.

### Rules

- Use the imperative mood in the subject line: "add feature" not "added feature"
- Keep the subject line (type, scope, and description combined) under 72 characters
- Do not end the subject line with a full stop
- Keep the subject line specific enough to understand the change at a glance
- Always follow the subject line with a blank line and then a body paragraph
- Write the body as a single prose paragraph — no bullet points, no lists, no headers
- The body should explain what changed, why it changed, and any context that helps a reader understand the decision without reading the diff
- Wrap body lines at 72 characters

### Breaking Changes

Append `!` to the type and include a `BREAKING CHANGE:` footer describing what broke and how consumers should migrate:

```
feat(shared)!: remove legacy theme provider

BREAKING CHANGE: ThemeProviderV1 has been removed. Replace all uses
with ThemeProvider from the same package, passing a `theme` prop
instead of wrapping children in a Context.Provider directly.
```

### Examples

```
feat(web): add user profile page

Introduce a new /profile route that displays the authenticated user's
name, avatar, and account details fetched from the user API. The route
is protected by the existing auth guard and falls back to the login
page if no session is present.
```

```
fix(shared): prevent Button from submitting forms by default

The Button component was missing an explicit type attribute, causing
browsers to default to type="submit" and unintentionally trigger form
submissions when the button was used inside a form element without a
submit handler. Setting type="button" as the default resolves this.
```

```
chore: update pnpm to 10.0.0

Bump the pnpm version across the repository to align with the latest
stable release. No changes to application code or dependencies.
```

```
refactor(web): extract API calls into dedicated hooks

Move all data-fetching logic out of page components and into custom
hooks under src/hooks, following the same pattern already used in the
shared package. This keeps components focused on rendering and makes
the fetching logic independently testable.
```

```
docs(shared): add usage examples to README

Add code examples to the shared package README covering component
imports, theming, and TypeScript prop types. The existing API reference
was accurate but lacked practical examples that show how pieces fit
together in a real application.
```

```
ci: add pnpm caching to release workflow

Configure the setup-node action in the release workflow to cache the
pnpm store, reducing install time on repeated runs where dependencies
have not changed.
```

```
feat(shared)!: replace CSS modules with CSS-in-JS

Migrate all component styles from CSS modules to a CSS-in-JS approach
using the sx prop pattern, allowing consumers to customise styles
without class name overrides. All existing className-based style
overrides will need to be replaced with sx prop usage.

BREAKING CHANGE: className-based style overrides are no longer
supported. Use the sx prop for one-off style customisation instead.
```
