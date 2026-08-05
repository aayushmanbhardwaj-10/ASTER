- Use explicit JOIN syntax.
- Avoid `SELECT *`; specify columns.
- Use parameterized queries to prevent SQL injection.
- Comment complex queries.

### 2.2 File Organization
- One class or component per file (when applicable).
- Filenames: kebab-case for non-component files, PascalCase for components (React/Vue).
- Group related functions in a file.
- Separation of concerns: keep business logic separate from presentation and data access.

### 2.3 Commenting and Documentation
- Comment non-obvious code, complex algorithms, or business rules.
- Use JSDoc/Typedoc for JavaScript/TypeScript, docstrings for Python.
- Every public API must have documentation.
- TODO comments: include ticket number or owner (e.g., `// TODO: [JIRA-123] Refactor this`).
- FIXME comments for known issues that need fixing.

## 3. Git Workflow

### 3.1 Branching Model
- Main branch: `main` (production-ready).
- Develop branch: `develop` (integration branch for features).
- Feature branches: `feature/short-description` (from `develop`).
- Bugfix branches: `bugfix/short-description` (from `develop`).
- Release branches: `release/vX.Y.Z` (from `develop`).
- Hotfix branches: `hotfix/description` (from `main`).
