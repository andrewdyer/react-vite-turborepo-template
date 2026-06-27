# @repo/shared

A shared package for reusable code within the monorepo.

## Installation

To install `@repo/shared` in a specific app within the monorepo, run:

```bash
pnpm add @repo/shared --filter <app-package>
```

Replace `<app-package>` with the name or path of the app that will use this package.

## Publishing

This package is private by default and not published to any registry. It is versioned alongside the rest of the monorepo via Release Please.

To publish this package to GitHub Packages, make the following changes to `package.json`:

1. Update the package name to match your GitHub organisation scope:

```json
{
  "name": "@your-org/shared"
}
```

2. Remove the `private` field or set it to `false`.

3. Add a `publishConfig` block pointing at the GitHub Packages registry:

```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

Once these changes are in place, the publish workflow will automatically publish the package to GitHub Packages when a new version is released.
