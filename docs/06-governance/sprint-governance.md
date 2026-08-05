# Sprint Governance
Sprint governance provides the rhythm for predictable delivery while maintaining flexibility for emergent work.

- **Sprint Length:** Fixed two‑week sprints (Monday‑to‑Friday) to enable regular feedback and planning cadence.
- **Sprint Planning:**
  - **Input:** Refined backlog (ready stories with clear acceptance criteria, story points, and dependencies).
  - **Capacity Planning:** Team velocity (average completed points over last 3 sprints) adjusted for known leave, holidays, and buffer for unplanned work (~15%).
  - **Commitment:** The team selects stories whose total points fit within capacity, aiming for a stretch goal of 10‑20% overcommitment that can be pulled if capacity permits.
- **Daily Stand‑up:** 15‑minute time‑boxed meeting focusing on what was done, what will be done, and blockers. Blockers are escalated immediately to the Scrum Master or relevant domain lead.
- **Definition of Done (DoD):** A story is considered done only when:
  - Code passes all unit, integration, and security tests.
  - Code review approvals (≥1 for tiny changes, ≥2 for features) are obtained.
  - Documentation (API, user guide, ADR if applicable) is updated.
  - Changes are merged to `main` via squash‑and‑merge.
  - Feature is deployed to a preview environment and smoke‑tested.
  - Any required feature flags are configured and monitored.
- **Sprint Review:** Demo of completed work to stakeholders; feedback captured as new backlog items or adjustments.
- **Sprint Retrospective:** Team reflects on process, identifies one improvement action, and assigns an owner.
- **Interrupt Handling:** High‑priority production incidents or security alerts take precedence; the impacted engineer(s) rotate off sprint commitments for the duration of the incident, with work re‑planned in the next sprint.
