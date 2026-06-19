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

> **Note:** For repositories within a GitHub Organisation, the same two settings must also be enabled at the organisation level under **Organisation Settings → Actions → General**. The organisation-level setting takes precedence over the repository-level one.

### Personal Access Token

The release workflow uses a Personal Access Token (PAT) rather than the default `GITHUB_TOKEN`. `GITHUB_TOKEN` is blocked from opening pull requests in certain GitHub configurations — a PAT authenticates as the repository owner and sidesteps this restriction.

**Generating the token:**

1. Navigate to **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**
2. Click **Generate new token (classic)**
3. Set the following:
   - **Note:** `release-please/<repository-name>` — a consistent naming pattern keeps tokens identifiable across repositories
   - **Expiration:** 1 year — limits exposure if the token is ever compromised without requiring frequent rotation. Set a calendar reminder to renew it before expiry
   - **Scopes:** `repo` and `workflow`
4. Click **Generate token** and copy the value immediately — it will not be shown again

**Adding the token to the repository:**

1. Navigate to **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Set the name to `RELEASE_PLEASE_TOKEN` and paste the token value
4. Click **Add secret**

The release workflow is configured to use this secret — no changes to the workflow file are required.

### Confirming the Release Workflow

Push any commit to `main` and check the **Actions** tab. The Release workflow should complete without error and, if the commit contains a `feat` or `fix` type, open a version bump pull request within a few seconds.

If the workflow fails with a permissions error, the most likely causes are:

- The repository secret name does not match `RELEASE_PLEASE_TOKEN` exactly
- An organisation-level permissions setting is overriding the repository-level one
