# ADR Policy
Architecture Decision Records (ADRs) capture the rationale behind significant architectural choices, enabling transparency and auditability.

- **When to Create an ADR:**
  - Introduction of a new technology, library, or framework that affects multiple bounded contexts.
  - Changes to core architectural patterns (e.g., moving from RPC to event‑driven, adopting CQRS, introducing a service mesh).
  - Decisions that impact non‑functional requirements (scalability, security, compliance, performance).
  - Deprecation or removal of an existing architectural component.
- **ADR Format (Markdown):**
  ```markdown
  # ADR <NN>: <Title>

  ## Status
  Proposed | Accepted | Superseded | Deprecated

  ## Context
  <Description of the problem or motivating forces.>

  ## Decision
  <Chosen solution.>

  ## Consequences
  - **Positive:** <Benefits and opportunities.>
  - **Negative:** <Trade‑offs, drawbacks, and mitigations.>
  - **Neutral:** <Side effects that are neither clearly positive nor negative.>

  ## Related Decisions
  - Links to other ADRs (e.g., See ADR <MM>).  

  ## References
  - <Links to RFCs, design docs, spikes, or external resources.>
  ```
- **Location:** Stored in `/docs/architecture/adr/` with sequential numbering (e.g., `0001-use-event-driven-architecture.md`).
- **Approval Process:**
  1. **Draft:** Engineer creates ADR in a feature branch.
  2. **Review:** Shared in the #architecture channel; feedback collected asynchronously or via ARB meeting.
  3. **Decision:** Architecture Owner (or ARB consensus) marks status as `Accepted` (or `Supersedes` a prior ADR).
  4. **Merge:** ADR is merged to `main` alongside any implementation changes.
- **Visibility:**
  - ADRs are included in the sprint “Definition of Done” for any change that modifies architecture.
  - Architecture Owners run a quarterly ADR health check to ensure records are up‑to‑date, superseded ones are marked, and any gaps are addressed.
- **Tooling:** Optional linting (e.g., `adr-tools`) ensures correct format and that no duplicate IDs exist.
