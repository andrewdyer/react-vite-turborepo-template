# Setup

One-time configuration required before the repository is fully operational. These steps should be completed before contributors are invited or pull requests are merged.

---

## GitHub Actions

### Workflow Permissions

The release workflow requires GitHub Actions to have write access to the repository and permission to open pull requests.

1. Navigate to **Settings → Actions → General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Tick **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

> **Note:** For repositories within a GitHub Organisation, the same settings must also be enabled at the organisation level under **Organisation Settings → Actions → General**. Organisation-level settings take precedence over repository-level settings.

### Personal Access Token

The release workflow uses a Personal Access Token (PAT) to authenticate as the account that created it. This is required to create pull requests in certain GitHub configurations.

**Generating the token:**

1. Navigate to **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Click **Generate new token (classic)**
3. Configure the token as follows:
   - **Note:** `release-please/<repository-name>` — a consistent naming convention helps keep tokens identifiable across repositories
   - **Expiration:** 1 year — limits exposure if a token is compromised whilst avoiding frequent rotation. Set a calendar reminder to renew the token before expiry
   - **Scopes:** `repo` only — sufficient for Release Please to read repository contents and create pull requests. Add `workflow` only if release pull requests are expected to modify files under `.github/workflows/`
4. Click **Generate token** and copy the value immediately, as it will not be displayed again

**Adding the token to the repository:**

1. Navigate to **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Set the name to `RELEASE_PLEASE_TOKEN`
4. Paste the token value
5. Click **Add secret**

The release workflow is configured to use this secret and requires no further changes.

### Confirming the Release Workflow

Push a commit to `main` and check the **Actions** tab. The Release workflow should complete successfully and, if the commit contains a version-bumping type (`feat`, `fix`, `perf`, or a breaking change), create a version bump pull request within a few seconds.

If the workflow fails with a permissions error, the most likely causes are:

- The repository secret name does not exactly match `RELEASE_PLEASE_TOKEN`
- An organisation-level permissions setting is overriding the repository-level configuration
