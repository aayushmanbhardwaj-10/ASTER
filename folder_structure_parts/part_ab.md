├── database_parts/           # Database documentation (50 parts)
├── api_spec_parts/           # API specification (20 parts)
├── srs_parts/                # Software Requirements Specification (20 parts)
├── ui_design_parts/          # UI/UX design documentation (20 parts)
└── folder_structure_parts/   # This document (20 parts)
```

## 3. Detailed Directory Breakdown

### 3.1 .github/
GitHub-specific workflows and templates:
- `workflows/` - GitHub Actions CI/CD pipelines
- `ISSUE_TEMPLATE/` - Standard issue templates
- `PULL_REQUEST_TEMPLATE.md` - PR template
- `FUNDING.yml` - GitHub Sponsors configuration

### 3.2 docs/
Legacy documentation structure maintained for backward compatibility:
```
docs/
├── 00-vision/                # Vision, mission, core values
│   ├── mission.md
│   ├── vision.md
│   ├── core-values.md
│   └── product-philosophy.md
├── 01-product/               # Product specifications
│   ├── target-users.md
│   ├── personas.md
│   ├── use-cases.md
│   └── product-identity.md
