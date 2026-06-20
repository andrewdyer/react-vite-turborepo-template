# Setup

One-time configuration required before the repository is fully operational. Complete these steps before inviting contributors or merging pull requests.

## Table of Contents

- [Secrets](#secrets)
- [GitHub Actions Permissions](#github-actions-permissions)
- [Branch Protection](#branch-protection)

---

## Secrets

The following secrets must be added to the repository under **Settings → Secrets and variables → Actions**. Each secret corresponds to a specific workflow concern — publishing to npm, pushing Docker images, and authenticating the release process.

### `RELEASE_PLEASE_TOKEN`

A Personal Access Token used by the Release workflow to authenticate as the account that created it. This is required to open version bump pull requests and write back to the repository when updating the release manifest.

1. Navigate to **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Click **Generate new token (classic)**
3. Configure as follows:
   - **Note:** `release-please/<repository-name>`
   - **Expiration:** 1 year — set a calendar reminder to renew before expiry
   - **Scopes:** `repo` only (add `workflow` if release pull requests are expected to modify files under `.github/workflows/`)
4. Copy the token value immediately — it will not be displayed again
5. Add to the repository as `RELEASE_PLEASE_TOKEN`

### `NPM_TOKEN`

An access token used by the Publish workflow to authenticate with npmjs.com when publishing packages. Not required if all packages are private or if publishing to GitHub Packages instead.

1. Log in to [npmjs.com](https://www.npmjs.com) and navigate to **Account → Access Tokens**
2. Click **Generate New Token → Classic Token**
3. Set the type to **Automation** — bypasses 2FA prompts in CI environments
4. Copy the token value immediately
5. Add to the repository as `NPM_TOKEN`

### `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`

Credentials used by the Publish workflow to authenticate with Docker Hub when building and pushing app images. Not required if publishing to the GitHub Container Registry instead.

1. Log in to [Docker Hub](https://hub.docker.com) and navigate to **Account Settings → Personal access tokens**
2. Click **Generate new token**
3. Set the description to `ci/<repository-name>` and access to **Read & Write**
4. Copy the token value immediately
5. Add to the repository as `DOCKERHUB_TOKEN`
6. Add the Docker Hub account username as `DOCKERHUB_USERNAME`

---

## GitHub Actions Permissions

These settings allow the Release workflow to open version bump pull requests and write back to the repository when updating the release manifest. Both must be enabled for the release process to function correctly.

1. Navigate to **Settings → Actions → General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Tick **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

> **Note:** For repositories within a GitHub Organization, the same settings must also be enabled under **Organization Settings → Actions → General**. Organization-level settings take precedence over repository-level settings.

---

## Branch Protection

These rules protect the `main` branch by requiring all Test workflow jobs to pass before a pull request can be merged. This ensures the Release workflow only ever fires on code that has been fully validated — without it, a broken commit merged to `main` would trigger the release and publish chain immediately.

1. Navigate to **Settings → Branches**
2. Click **Add branch protection rule**
3. Set the branch name pattern to `main`
4. Tick **Require status checks to pass before merging**
5. Search for and add the following required status checks:
   - `Build`
   - `Unit Tests`
   - `E2E Tests`
6. Tick **Require branches to be up to date before merging**
7. Click **Save changes**
