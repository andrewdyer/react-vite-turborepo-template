## Description

<!-- Explain what this PR does and why. On squash merge, this becomes the commit body, so write it as one clear prose paragraph rather than bullet points. -->

## Type of Change

<!-- Select the commit type that applies. For specialized templates with more guidance, use the query parameter on PR creation:
- Feature: ?template=feature.md
- Bug fix: ?template=bugfix.md
- Dependencies: ?template=deps.md
-->

- [ ] `feat` — new feature (minor version bump)
- [ ] `fix` — bug fix (patch version bump)
- [ ] `deps` — dependency update (patch version bump when releasable)
- [ ] `chore` / `docs` / `refactor` / `test` / `ci` / `build` — no version bump
- [ ] `feat!` or `BREAKING CHANGE:` — breaking change (major version bump)

## Checklist

- [ ] PR title follows Conventional Commits format: `<type>(<scope>): <description>`
  - Scope should be a workspace name from `apps/` or `packages/` (or omit for repo-wide changes)
- [ ] Description is a single paragraph suitable for squash-merge commit body
- [ ] Code has been formatted with `pnpm format`
- [ ] Code has been linted with `pnpm lint`
- [ ] Tests have been added or updated where appropriate
- [ ] All tests pass with `pnpm test`
