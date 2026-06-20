# Publishing Privately

By default, the Publish workflow pushes npm packages to [npmjs.com](https://www.npmjs.com) and Docker images to [Docker Hub](https://hub.docker.com). Both targets can be switched to GitHub-hosted alternatives with targeted changes to `publish.yml` and, for npm packages, each package's `package.json`.

---

## GitHub Packages (npm)

### Package configuration

Each package requires two things before GitHub Packages will accept it.

The package name must be scoped to a GitHub user or organisation — GitHub Packages rejects unscoped names entirely:

```json
{
  "name": "@your-org/package-name"
}
```

A `publishConfig` block must also be present in the package's `package.json` pointing at the GitHub Packages registry. Without it, pnpm falls back to the default registry regardless of what the workflow specifies:

```json
{
  "name": "@your-org/package-name",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### Workflow changes

**In `publish.yml` — Setup Node.js step**

Replace the `registry-url` value:

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 22
    cache: pnpm
    registry-url: https://npm.pkg.github.com
```

**In `publish.yml` — Publish packages to npm step**

Replace `NPM_TOKEN` with `RELEASE_PLEASE_TOKEN`. The token already has the `repo` scope required to publish to GitHub Packages — no additional secret is needed:

```yaml
- name: Publish packages to npm
  if: ${{ steps.release.outputs.releases_created }}
  env:
    NODE_AUTH_TOKEN: ${{ secrets.RELEASE_PLEASE_TOKEN }}
```

---

## GitHub Container Registry (Docker)

### Workflow changes

**In `publish.yml` — top-level permissions block**

Add `packages: write`:

```yaml
permissions:
  contents: read
  packages: write
```

**In `publish.yml` — Login to Docker Hub step**

Replace with a GitHub Container Registry login:

```yaml
- name: Login to GitHub Container Registry
  if: ${{ steps.release.outputs.releases_created }}
  uses: docker/login-action@v3
  with:
    registry: ghcr.io
    username: ${{ github.actor }}
    password: ${{ secrets.RELEASE_PLEASE_TOKEN }}
```

**In `publish.yml` — Build and push Docker images step**

Replace the image name variable:

```yaml
IMAGE="ghcr.io/${{ github.repository_owner }}/${APP_NAME}"
```

No additional secrets are required — `RELEASE_PLEASE_TOKEN` already has the permissions needed to push to the GitHub Container Registry.
