
### 3.2 Commit Messages
- Format: `<type>(<scope>): <subject>`
- Types: feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert.
- Scope: optional, indicates module or component (e.g., `auth`, `portfolio`).
- Subject: imperative mood, max 50 characters, no period.
- Body: wrap at 72 characters, explain why and what changed.
- Footer: reference issues (e.g., `Closes #123`) and breaking changes.

Example:
```
feat(auth): add OAuth2 Google login

Adds Google OAuth2 authentication provider for user login.
Includes new API endpoint, frontend component, and update to auth service.
Fixes issue #456.

Closes #456
```

### 3.3 Pull Request Process
- PRs must target `develop` branch (unless hotfix/release).
- Require at least one approval from a team member.
- All checks must pass (CI, tests, linting).
- Squash and merge for feature/branch commits.
- Delete branch after merge.
- PR description must include:
  - Summary of changes
  - Related issue/ticket numbers
  - Testing performed
  - Screenshots (if UI changes)
  - Any breaking changes or deprecations

## 4. Code Review Guidelines

### 4.1 Reviewer Responsibilities
- Check for correctness, completeness, and adherence to standards.
