# Coding Standards

## Git Standards
- **Commit Messages**  
  - Use the conventional‑commit format: `<type>(<scope>): <description>`  
    - `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`  
  - Keep the subject line ≤ 72 characters; wrap the body at 72 chars.  
  - Include a motivation and any side‑effects in the body if needed.  
  - Sign commits with GPG (`-S`) to verify authorship.  
- **History**  
  - Prefer a linear, rebased history on `main`. Use `git pull --rebase` when updating.  
  - Squash‑and‑merge feature branches into `main` after review.  
- **Tags**  
  - Use semantic versioning (`vMAJOR.MINOR.PATCH`) for releases.  
  - Create lightweight tags for internal milestones; annotated tags for public releases.  
- **Security**  
  - Never commit secrets, keys, or credentials. Use pre‑commit hooks to scan for patterns.  
  - Require signed pushes to protected branches (`main`, `release/*`).  

## Branch Strategy
- **Main Branch (`main`)**  
  - Represents the production‑ready state.  
  - Only fast‑forward or merge‑commit from approved PRs.  
- **Development Branch (`dev`)** *(optional)*  
  - If used, integrates features before they hit `main`.  
  - Must be protected; merges to `main` via release branches.  
- **Feature Branches**  
  - Branch from `dev` (or `main` if no `dev`).  
  - Naming: `feature/<ticket-id>-short-description` (e.g., `feature/123-add-login`).  
  - Live only as long as the feature is in progress; delete after merge.  
- **Release Branches**  
  - Created from `dev` when preparing a release: `release/vX.Y.Z`.  
  - Allow bug fixes and version bumps; merge back to `dev` and `main` after release.  
- **Hotfix Branches**  
  - Branch from `main` for critical production fixes: `hotfix/<ticket-id>-description`.  
  - Merge to both `main` and `dev` (or the latest release branch).  
- **General Rules**  
  - Delete remote branches after merging (`git push origin --delete <branch>`).  
  - Keep branch lifetimes short (< 2 weeks) to reduce merge conflicts.  
  - Require an open PR and at least one approval before merging.  

## Naming Conventions
- **Files & Directories**  
  - Use `kebab-case` for files and folders (`user-profile.component.ts`).  
  - Use `PascalCase` for components/classes (`UserProfileComponent`).  
  - Constants: `UPPER_SNAKE_CASE` (`MAX_PAGE_SIZE`).  
  - Private members (if language supports): `_privateVar` or trailing underscore (`privateVar_`).  
- **Variables & Functions**  
  - `camelCase` for variables, parameters, and functions (`calculateTotalPrice`).  
  - Boolean predicates: start with `is`, `has`, `should`, `can` (`isValid`).  
- **Constants & Enums**  
  - `UPPER_SNAKE_CASE` for enum members (`USER_STATUS_ACTIVE`).  
  - Enum types: `PascalCase` (`UserStatus`).  
- **CSS/SCSS**  
  - Use BEM: `.block__element--modifier`.  
  - Utility classes: `u-` prefix (`u-text-center`).  
- **Tests**  
  - Test file naming: `<name>.spec.ts` (Jest/Mocha) or `<name>Test.java` (JUnit).  
  - Test suite description: `describe('ComponentName', ...)`.  
  - Test case: `it('should do X when Y', ...)`.  
- **API Endpoints**  
  - Use kebab-case in URLs (`/api/v1/users/profile`).  
  - Resource nouns plural, verbs avoided (`GET /users/123`).  

## Folder Organization
```
src/
├─ assets/               # Static assets (icons, images, fonts)
│   ├─ icons/
│   └─ images/
├─ components/           # Reusable UI components (framework‑specific)
│   ├─ atoms/
│   ├─ molecules/
│   └─ organisms/
├─ containers/           # Page‑level or route‑level components
├─ modules/              # Feature‑wise bundles (domain‑driven)
│   ├─ auth/
│   │   ├─ services/
│   │   ├─ components/
│   │   ├─ guards/
│   │   └─ store/
│   └─ portfolio/
├─ services/             # Business‑logic, API clients, utilities
│   ├─ api/
│   ├─ auth/
│   └─ utils/
├─ store/                # State management (Redux, Vuex, etc.)
│   ├─ actions/
│   ├─ reducers/
│   └─ selectors/
├─ utils/                # Pure helper functions (date, math, validation)
├─ hooks/                # Custom React hooks or equivalent
├─ styles/               # Global styles, themes, design tokens
│   ├─ base/
│   ├─ components/
│   └─ themes/
├─ tests/                # Test utilities, mocks, fixtures
│   ├─ unit/
│   ├─ integration/
│   └─ e2e/
├─ docs/                 # Documentation (architecture, API specs)
└─ configs/              # Webpack, Babel, ESLint, Jest, etc.

tests/ (parallel to src) – alternative layout if preferred:
tests/
   unit/
   integration/
   e2e/
```

## Code Review Rules
1. **Prerequisites**  
   - Code must compile without errors.  
   - All unit tests pass locally (`npm test`/`mvn test`).  
   - Linter runs with zero errors (ESLint/Checkstyle).  
2. **Reviewer Checklist**  
   - **Correctness** – Does the code solve the stated problem? Edge cases covered?  
   - **Security** – No hard‑coded secrets, input validation, proper authz/authentication.  
   - **Performance** – No obvious N+1 queries, heavy loops in hot paths, unchecked recursion.  
   - **Readability** – Clear naming, small functions (< 30 lines), adequate comments only where intent isn’t obvious.  
   - **Testing** – New/changed logic has accompanying unit tests; mocks/stubs are appropriate.  
   - **Documentation** – Public APIs updated; architecture docs if needed.  
   - **Style** – Conforms to project’s formatter (Prettier, Black, gofmt).  
3. **Approval**  
   - Minimum of **1 approving review** for trivial changes; **2 approvals** for feature‑size changes.  
   - Authors cannot approve their own changes.  
   - Required checks (CI, security scan) must pass before merge.  
4. **Comments**  
   - Use concise, actionable language.  
   - Prefer suggestions over demands; ask questions when uncertain.  
   - Resolve all conversations before merging.  
5. **Post‑Merge**  
   - Delete the feature branch.  
   - Update any related documentation or changelog entries.  

## Logging Standards
- **Log Levels** (ordered by severity)  
  - `ERROR` – System‑affecting failures requiring immediate attention.  
  - `WARN` – Unexpected but recoverable conditions.  
  - `INFO` – Operational milestones (startup, shutdown, request boundaries).  
  - `DEBUG` – Diagnostic detail for development/troubleshooting.  
  - `TRACE` – Fine‑grained tracing (only in dev or with explicit enable).  
- **Format** (JSON preferred for machine parsing)  
  ```json
  {
    "timestamp": "2025-09-16T14:32:10.123Z",
    "level": "INFO",
    "logger": "com.aster.service.PortfolioService",
    "traceId": "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8",
    "spanId": "b2c3d4e5-f6g7-8901-h2i3-j4k5l6m7n8o9",
    "userId": "u_12345",
    "requestId": "req_9876",
    "message": "Portfolio valuation completed",
    "fields": {
      "portfolioId": "p_987",
      "valuationAmount": 123456.78,
      "durationMs": 342
    }
  }
  ```
- **Fields**  
  - `timestamp` – ISO‑8601 UTC.  
  - `traceId` & `spanId` – propagated via OpenTelemetry/W3C TraceContext.  
  - `userId` / `requestId` – when applicable for correlation.  
  - `message` – human‑readable, concise, no PII.  
  - `fields` – structured key/value pairs for querying; avoid large objects.  
- **Guidelines**  
  - Never log secrets, passwords, tokens, or raw PII.  
  - Use structured fields instead of concatenated strings for queryability.  
  - Rate‑limit high‑frequency logs (e.g., per‑request) in production to avoid log explosion.  
  - Configure log rotation/retention per compliance (≥ 7 years for financial audit logs).  
  - Ensure logs are shipped to a centralized, immutable store (e.g., S3 Object‑Lock, Azure Immutable Blob).  

## Testing Standards
- **Unit Tests**  
  - Target ≥ 80 % line coverage for core business logic; ≥ 90 % for security‑critical paths.  
  - Use pure functions where possible; mock external collaborators (DB, HTTP, filesystem).  
  - Name tests descriptively: `shouldReturnErrorWhenInputIsNull`.  
- **Integration Tests**  
  - Verify interactions between services, databases, and message queues.  
  - Run against ephemeral test containers (Testcontainers, Docker Compose).  
  - Keep suite fast (< 5 min) for CI; run full suite nightly.  
- **End‑to‑End (E2E) Tests**  
  - Cover critical user journeys (login, portfolio creation, trade execution).  
  - Use headless browsers (Playwright, Cypress) with data‑test attributes.  
  - Execute on PRs for critical paths; nightly for full suite.  
- **Performance Tests**  
  - Benchmark latency‑sensitive endpoints (valuation API) under load.  
  - Define SLAs (e.g., 95th percentile < 200 ms) and fail CI if exceeded.  
- **Security Tests**  
  - Run static analysis (SonarQube, Bandit, Brakeman) and dependency scanners (Snyk, OWASP DC) on every PR.  
  - Periodic dynamic scans (OWASP ZAP) on staging.  
- **Test Data**  
  - Use synthetic or anonymized data; never production PII.  
  - Seed databases with deterministic fixtures for repeatability.  
- **Test Execution**  
  - All tests must pass on `main` before merge.  
  - Flaky tests are quarantined and fixed within one sprint.  

## CI/CD Standards
- **Continuous Integration**  
  - Trigger on every push to any branch and on PR creation/update.  
  - Pipeline stages:  
    1. **Checkout** – fetch code, verify GPG signatures.  
    2. **Lint/Format** – run ESLint/Prettier/flake8; fail on warnings.  
    3. **Unit Tests** – execute with coverage collection; enforce thresholds.  
    4. **Static Analysis** – security scanners, dependency checks, code quality.  
    5. **Build** – compile, bundle, containerize (Docker).  
    6. **Integration Tests** – spin up service containers, run contract/API tests.  
    7. **Artifact Storage** – push Docker image to registry with git‑sha tag.  
  - Notify Slack/Teams on failure; block merge until green.  
- **Continuous Delivery / Deployment**  
  - **Trunk‑Based Deployments**  
    - `main` → **Staging** (auto‑deploy on green CI).  
    - Manual approval gate for **Production** (via ChatOps or approved PR).  
  - **Release Process**  
    - Tag release (`vX.Y.Z`) on `main` after successful smoke tests in staging.  
    - Build immutable artifact (image, tarball) and store in immutable registry.  
    - Deploy using blue/green or canary strategy with automated rollback on health‑check failure.  
  - **Environment Parity**  
    - Dev, Staging, Prod share the same IaC (Terraform/Pulumi) definitions; only variables (size, endpoints) differ.  
  - **Rollback**  
    - Keep last 3 known‑good releases; automated rollback if health checks fail for 5 min.  
  - **Secrets Management**  
    - Inject secrets at runtime via Vault/EKS IAM roles/AWS Secrets Manager – never baked into images.  
  - **Monitoring & Feedback**  
    - Deploy emits deployment markers to monitoring systems (Datadog, New Relic).  
    - Post‑deploy smoke tests run automatically; alerts on SLA breach.  
- **Governance**  
  - All pipeline definitions version‑controlled (`.gitlab-ci.yml`, `Jenkinsfile`, `github/workflows/*`).  
  - Require signed approvals for changes to production‑deploy workflows.  
  - Maintain audit logs of pipeline runs (who triggered, commit SHA, outcome).  
