# Release Governance
Release governance ensures that every release is safe, traceable, and aligned with quality and compliance standards.

- **Release Cadence:**
  - **Patch Releases:** As needed for critical bug fixes or security patches (triggered by hotfix branch).
  - **Minor/Feature Releases:** Scheduled every six weeks (approximately three sprints) aligned with the product roadmap.
  - **Major Releases:** Reserved for breaking changes or significant architectural shifts, occurring no more than twice per year.
- **Release Branch Model:**
  - When a release is planned, a `release/vX.Y.Z` branch is cut from `dev` (or `main` if no `dev`).
  - Only bug‑fix commits and version bumps are allowed on the release branch.
  - All fixes are merged back to `dev` (and `main` if applicable) after release.
- **Release Checklist (executed by Release Engineer):**
  1. **Code Freeze:** No new features merged into release branch after the agreed cut‑off time.
  2. **Automated Gate:** CI pipeline runs full test suite (unit, integration, performance, security) on the release branch; must be green.
  3. **Pre‑Deploy Smoke Tests:** Deploy to staging; run end‑to‑end smoke tests and synthetic transaction monitors.
  4. **Compliance Scan:** Run SBOM generation, license check, and vulnerability scan (e.g., Trivy, Snyk) on the final artifact.
  5. **Approval:** Release Engineer obtains sign‑off from Product Owner (feature completeness) and Security Lead (no open critical vulnerabilities).
  6. **Deployment:** Blue/Green or Canary strategy with automated rollback on health‑check failure (error rate >1% or latency SLA breach for 5 min).
  7. **Post‑Deploy Validation:** Run post‑deployment smoke tests, verify monitoring alerts are nominal, and update release notes in `/docs/releases/vX.Y.Z.md`.
  8. **Communication:** Announce release to internal stakeholders and, if applicable, external customers via changelog and release blog.
- **Rollback Procedure:**
  - If health checks fail, traffic is shifted back to the previous stable version within 2 minutes.
  - The release branch is tagged `release/vX.Y.Z-failed` for forensic analysis; a patch release is cut if needed.
- **Versioning:** Follow Semantic Versioning (MAJOR.MINOR.PATCH); MAJOR increments for breaking changes, MINOR for new features, PATCH for bug fixes.
