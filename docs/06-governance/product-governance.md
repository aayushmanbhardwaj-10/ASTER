# Product Governance
Product governance ensures that what we build aligns with the vision, delivers measurable value, and respects stakeholder constraints.

- **Product Council:** A quarterly forum comprising the CTO, VP of Engineering, Head of Product, UX Lead, Data Science Lead, Security Lead, and a rotating engineering representative. The council sets product OKRs, prioritizes epics, and arbitrates scope‑trade‑off discussions.
- **Product Owner (PO) per Domain:** Each bounded context (e.g., Valuation, Portfolio, Company Analysis) has a dedicated PO responsible for maintaining the domain backlog, writing clear user stories with acceptance criteria, and representing user needs in sprint planning.
- **Roadmap Transparency:** The product roadmap (quarterly themes, major capabilities, and success metrics) is published in `/docs/product/roadmap.md` and updated after each Product Council meeting.
- **Metrics‑Driven Prioritization:** Features are scored using a weighted framework (User Impact × Business Value) ÷ (Implementation Effort + Risk). Scores inform the sprint backlog ordering.
- **Feedback Loops:**
  - **Discovery:** Quarterly user interviews, surveys, and usage analytics inform backlog refinement.
  - **Delivery:** Demo‑day reviews and post‑release retrospectives capture stakeholder sentiment.
  - **Operations:** SLO/SLI dashboards and incident post‑mortems feed into improvement backlog.
- **Change Control:** Any change to a committed epic or major feature requires a Product Council review; minor adjustments can be made by the PO with team consensus.
