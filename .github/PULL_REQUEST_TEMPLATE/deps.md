## Description

<!-- List the dependencies being updated and explain why (security update, new feature, compatibility, etc.). On squash merge, this becomes the commit body, so write it as one clear prose paragraph. -->

## Dependencies Updated

<!-- List packages and versions:
- package-a: 1.0.0 → 1.1.0
- package-b: 2.0.0 → 2.1.0
-->

## Checklist

- [ ] PR title follows `deps: <description>` format (no scope for dependency updates)
- [ ] Description explains the reason for updates and any compatibility concerns in a single paragraph
- [ ] `pnpm install` has been run to update lockfile
- [ ] Code has been formatted with `pnpm format`
- [ ] Code has been linted with `pnpm lint`
- [ ] All tests pass with `pnpm test`
- [ ] Breaking changes in updated dependencies have been assessed and handled if needed
