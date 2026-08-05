# Architecture Governance
ASTER’s architecture is stewarded by a lightweight, transparent governance model that balances agility with long‑term integrity.

- **Architecture Owner:** A rotating Principal Architect (or Architecture Chapter Lead) holds overall responsibility for the architectural vision, ensures adherence to the Software Architecture Principles, and serves as the escalation point for cross‑cutting concerns.
- **Architecture Review Board (ARB):** A standing, cross‑functional group (Architecture Owner, Senior Engineers from each domain, Security Lead, Platform Engineer) meets bi‑weekly (or on demand) to review major architectural proposals, technology spikes, and ADRs. Decisions are recorded as Architecture Decision Records (ADRs).
- **Decision‑Making Process:**
  1. **Proposal:** Any engineer can submit an RFC (Request for Comments) outlining the problem, alternatives, trade‑offs, and recommended solution.
  2. **Review:** The ARB evaluates the RFC against architecture principles, non‑functional requirements, and impact on existing bounded contexts.
  3. **Decision:** Consensus is sought; if not reached, the Architecture Owner makes the final call, documenting rationale.
  4. **Communication:** Approved ADRs are published in `/docs/architecture/adr/` and announced in the team’s #architecture channel.
- **Enforcement:**
  - Linters, CI pipelines, and automated dependency scans include checks for prohibited patterns (e.g., direct DB access from UI layer).
  - Architecture Owners perform periodic architecture health reviews (e.g., quarterly) to detect drift and initiate refactoring epics.
- **Evolution:** The architecture is treated as a living document; ADRs can be superseded by new ADRs when justified by new data, technology shifts, or lessons learned.
