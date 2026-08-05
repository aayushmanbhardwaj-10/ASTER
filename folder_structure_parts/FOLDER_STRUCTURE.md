# FOLDER_STRUCTURE.md - ASTER AI Financial Intelligence Platform Project Structure

## 1. Project Overview
ASTER is a financial intelligence platform built with a modular architecture. This document outlines the official folder structure and organization standards for the repository. All code, documentation, and assets should follow this structure to maintain consistency and scalability.

## 2. Root Directory Structure
```
ASTER/
├── .github/                  # GitHub-specific configurations
├── docs/                     # Main documentation (legacy structure)
├── src/                      # Source code root
├── tests/                    # Test suites
├── configs/                  # Configuration files
├── scripts/                  # Utility and automation scripts
├── assets/                   # Static assets (images, icons, etc.)
├── requirements/             # Dependency specifications
├── plans/                    # Planning documents (used during development)
├── architecture_parts/       # Architecture documentation (50 parts)
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
├── 02-finance/               # Financial domain specifics
│   ├── financial-intelligence.md
│   ├── valuation.md
│   ├── portfolio-analysis.md
│   └── company-analysis.md
├── 03-engineering/           # Engineering practices
│   ├── engineering-principles.md
│   ├── architecture-principles.md
│   └── coding-standards.md
├── 04-security/              # Security guidelines
│   ├── authentication.md
│   ├── authorization.md
│   ├── encryption.md
│   ├── privacy.md
│   ├── zero-trust.md
│   ├── secret-management.md
│   └── audit-logs.md
├── 05-ux/                    # User experience guidelines
│   ├── design-language.md
│   ├── typography.md
│   ├── color-system.md
│   ├── motion.md
│   ├── accessibility.md
│   ├── mobile-experience.md
│   └── desktop-experience.md
└── 06-governance/            # Governance and processes
    ├── architecture-governance.md
    ├── product-governance.md
    ├── sprint-governance.md
    ├── release-governance.md
    └── adr-policy.md
```

### 3.3 src/
Main source code directory following domain-driven design:
```
src/
├── components/               # Shared UI components
│   ├── atoms/                # Basic building blocks (buttons, inputs)
│   ├── molecules/            # Groups of atoms (form fields, cards)
│   ├── organisms/            # Complex UI sections (headers, dashboards)
│   └── templates/            # Page layouts
├── modules/                  # Feature-specific modules
│   ├── auth/                 # Authentication and authorization
│   ├── market-data/          # Financial market data handling
│   ├── fundamentals/         # Company financials and ratios
│   ├── valuation/            # Valuation models and calculations
│   ├── portfolio/            # Portfolio management
│   ├── company-research/     # Company analysis tools
│   ├── collaboration/        # Real-time collaboration features
│   ├── ai-ml/               # Artificial intelligence and machine learning
│   ├── notifications/        # Alerting and notification system
│   └── admin/               # Administrative interfaces
├── services/                 # Business logic and API services
│   ├── api/                  # API route handlers
│   ├── auth/                 # Authentication services
│   ├── data/                 # Data access and manipulation
│   ├── external/             # Third-party API integrations
│   └── utils/               # Shared utility functions
├── styles/                   # Global styles and theming
│   ├── base/                 # Reset, typography, base styles
│   ├── components/           # Component-specific styling
│   ├── themes/               # Light/dark/high-contrast themes
│   └── utils/               # Mixins, functions, variables
├── assets/                   # Module-specific assets
│   ├── icons/                # SVG icons
│   ├── images/               # Illustrations and photos
│   └── animations/           # Lottie files, CSS animations
├── utils/                    # Cross-cutting utilities
│   ├── formatters/           # Date, currency, number formatting
│   ├── validators/           # Input validation logic
│   ├── helpers/              # General helper functions
│   └── constants/            # Application-wide constants
├── hooks/                    # Custom React hooks (if applicable)
├── contexts/                 # React context providers
├── routes/                   # Application routing configuration
└── App.js/tsx                # Root application component
```

### 3.4 tests/
Testing infrastructure organized by test type:
```
tests/
├── unit/                     # Unit tests for individual functions
│   ├── components/
│   ├── services/
│   └── utils/
├── integration/              # Integration tests
│   ├── api/
│   └── database/
├── e2e/                      # End-to-end tests (Cypress/Playwright)
│   ├── flows/
│   └── specifications/
├── performance/              # Load and stress testing
│   ├── scenarios/
│   └── benchmarks/
├── visual/                   # Visual regression testing
│   ├── baselines/
│   └── diffs/
├── fixtures/                 # Test data and mocks
│   ├── api/
│   └── database/
├── helpers/                  # Test utilities and setup
└── config/                   # Test configuration files
```

### 3.5 configs/
Environment and application configurations:
```
configs/
├── environments/             # Environment-specific configs
│   ├── development.js
│   ├── staging.js
│   └── production.js
├── database/                 # Database connection configs
├── logging/                  # Logging framework configuration
├── feature-flags/            # Feature toggle definitions
├── third-party/              # External service configurations
│   ├── api-keys.json.example
│   └── webhooks/
├── webpack/                  # Webpack configuration (if used)
├── jest/                     # Jest testing configuration
└── eslint/                   # ESLint configuration
```

### 3.6 scripts/
Automation and utility scripts:
```
scripts/
├── build/                    # Build and compilation scripts
│   ├── dev.sh
│   ├── prod.sh
│   └── docker-build.sh
├── deploy/                   # Deployment scripts
│   ├── staging.sh
│   └── production.sh
├── test/                     # Test execution scripts
│   ├── unit.sh
│   ├── integration.sh
│   └── e2e.sh
├── db/                       # Database management scripts
│   ├── migrate.sh
│   ├── seed.sh
│   └── backup.sh
├── utils/                    # General utility scripts
│   ├── code-format.sh
│   ├── license-check.sh
│   └── security-scan.sh
├── setup/                    # Environment setup scripts
│   ├── dev-env.sh
│   └── ci-env.sh
└── cron/                     # Scheduled tasks (cron jobs)
    ├── daily-report.sh
    └── cleanup.sh
```

### 3.7 assets/
Static assets used across the application:
```
assets/
├── images/                   # Raster images (optimized web formats)
│   ├── logos/
│   ├── illustrations/
│   ├── screenshots/
│   └── icons/                # PNG fallbacks for SVG
├── icons/                    # SVG icons (primary format)
│   ├── menu/
│   ├── actions/
│   ├── status/
│   └── social/
├── animations/               # Lottie JSON, CSS animations
├── sounds/                   # Audio feedback (minimal use)
├── fonts/                    # Custom font files
│   ├── inter/
│   └── roboto-mono/
└── styles/                   # Global CSS/Sass files (legacy)
```

### 3.8 requirements/
Dependency specifications for different environments:
```
requirements/
├── base.txt                  # Core dependencies
├── development.txt           # Dev-only dependencies
├── testing.txt               # Testing frameworks and tools
├── production.txt            # Production-optimized dependencies
├── docker.txt                # Docker-specific dependencies
└── overrides/                # Version pinning and overrides
    ├── security-patches.txt
    └── compatibility-fixes.txt
```

### 3.9 plans/
Planning documents used during development (not shipped):
```
plans/
├── sprints/                  # Sprint planning documents
│   ├── sprint-01-planning.md
│   ├── sprint-02-review.md
│   └── ...
├── features/                 # Feature specifications
│   ├── user-authentication.md
│   ├── real-time-collaboration.md
│   └── ai-predictions.md
├── technical/                # Technical spikes and research
│   ├── database-selection.md
│   ├── frontend-framework.md
│   └── cloud-provider.md
└── retrospectives/           # Team retrospectives
    ├── sprint-01-retro.md
    └── sprint-02-retro.md
```

## 4. Naming Conventions

### 4.1 Directory Naming
- Use lowercase letters, numbers, and hyphens
- Be descriptive but concise
- Use plural nouns for collections (components, services)
- Use singular for specific entities (auth, payment)
- Avoid abbreviations unless universally understood (img, config)

### 4.2 File Naming
- Use kebab-case for all files (`file-name.js`)
- Use descriptive names that indicate purpose
- Test files: `[name].test.js` or `[name].spec.js`
- Style files: `[name].styles.css` or `[name].module.scss`
- Component files: `[ComponentName].jsx` or `[ComponentName].tsx`
- Constants: `[name].constants.js`
- Hooks: `use[HookName].js`

### 4.3 Image and Asset Naming
- Use descriptive names: `logo-primary.svg`, `icon-user-settings.svg`
- Include states where relevant: `button-primary-hover.svg`
- Use suffixes for variations: `-active`, `-disabled`, `-hover`
- For multilingual: include language code when needed: `button-es.svg`

## 5. Import and Export Guidelines

### 5.1 Absolute Imports
Configured via jsconfig/tsconfig for cleaner imports:
```javascript
// Instead of:
// import Button from '../../../../components/Button';
// Use:
import Button from 'components/Button';

// Instead of:
// import { formatCurrency } from '../../../utils/formatters';
// Use:
import { formatCurrency } from 'utils/formatters';
```

### 5.2 Barrel Exports
Avoid deep barrel exports that hurt tree-shaking:
```javascript
// ❌ Avoid: export * from './components';
// ✅ Prefer: Export specific items when possible
export { Button } from './components/Button';
export { Input } from './components/Input';
```

### 5.3 Relative Imports for Local Files
Only use relative imports within the same directory:
```javascript
// Within components/Button/
import styles from './Button.styles.css';
import icon from './icon.svg';
```

## 6. Code Organization Principles

### 6.1 Separation of Concerns
- **Presentation Layer**: UI components, styling, layout
- **Application Layer**: Business logic, use cases, service orchestration
- **Domain Layer**: Entities, value objects, domain services
- **Infrastructure Layer**: Database, external APIs, file system

### 6.2 Layer Dependencies
- Dependencies point inward: UI → Application → Domain ← Infrastructure
- No circular dependencies between modules
- Share only through well-defined interfaces

### 6.3 Module Cohesion
- Each module should have a single responsibility
- Related functionality grouped together
- Low coupling between modules
- High cohesion within modules

## 7. Documentation Standards

### 7.1 README Files
Each major directory should contain a README.md:
- Explaining the purpose of the directory
- Describing subdirectory structure
- Listing key files and their roles
- Providing usage examples where relevant

### 7.2 Code Comments
- Use JSDoc/Typedoc for public APIs
- Explain why, not what (unless complex logic)
- Keep comments updated with code changes
- Remove commented-out code (use version control)

### 7.3 Architecture Decision Records (ADRs)
Stored in `docs/06-governance/adr/`:
```
001-use-postgres-for-primary-storage.md
002-choose-react-over-vue.md
003-adopt-typescript.md
...
```

## 8. Development Workflow Directories

### 8.1 Temporary and Generated Directories
These should be in `.gitignore`:
```
node_modules/                 # JavaScript dependencies
dist/                         # Production build output
build/                        # Intermediate build files
.coverage/                    # Test coverage reports
.env*                        # Environment variables
.DS_Store                    # macOS metadata
Thumbs.db                     # Windows metadata
```

### 8.2 IDE and Editor Settings
```
.vscode/                      # VS Code settings
.idea/                        # IntelliJ/Idea settings
*.sublime-workspace          # Salsa Text workspace
```

### 8.3 Logs and Runtime Data
```
logs/                         # Application logs
tmp/                          # Temporary files
cache/                        # Application cache
uploads/                      # User-uploaded files (if applicable)
```

## 9. Deployment and Infrastructure

### 9.1 Docker Configuration
```
docker/
├── Dockerfile                # Multi-stage build
├── docker-compose.yml        # Local development
├── docker-compose.prod.yml   # Production override
├── nginx/                    # Nginx configuration
└── scripts/                  # Docker helper scripts
```

### 9.2 Kubernetes Manifests
```
k8s/
├── bases/                    # Base manifests (kustomize)
├── overlays/                 # Environment-specific overlays
│   ├── development/
│   ├── staging/
│   └── production/
└── templates/                # Helm chart templates (if using Helm)
```

### 9.3 Infrastructure as Code
```
terraform/                    # or pulumi/, cdk/
├── main.tf
├── variables.tf
├── outputs.tf
└── modules/                  # Reusable modules
    ├── vpc/
    ├── eks/
    └── rds/
```

## 10. Version Control Guidelines

### 10.1 Branch Naming
- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/` - New feature development
- `bugfix/` - Bug fixes
- `release/` - Release preparation
- `hotfix/` - Urgent production fixes
- `docs/` - Documentation-only changes

### 10.2 Commit Messages
Follow Conventional Commits:
```
feat(auth): add OAuth2 login
fix(api): correct timestamp handling
docs(router): update API documentation
refactor(service): simplify data transformation
test(service): add unit cases for validation
chore(deps): update lodash to 4.17.21
```

### 10.3 Tagging
- Semantic Versioning: `v1.2.3`
- Release candidates: `v1.2.0-rc.1`
- Hotfixes: `v1.1.1-hf.2`

## 11. Data and Storage Organization

### 11.1 Database Migrations
```
migrations/                   # Schema change scripts
├── V1__init_schema.sql
├── V2__add_user_indexes.sql
├── V3__create_audit_table.sql
└── ...
```

### 11.2 Seed Data
```
seeds/                        # Initial data population
├── 01_roles_and_permissions.js
├── 02_sample_companies.js
├── 03_sample_portfolios.js
└── ...
```

### 11.3 Backup and Archive Structure
```
backups/                      # Database and file backups
├── daily/
├── weekly/
└── monthly/
```

## 12. Third-Party Integration Points

### 12.1 External APIs
```
integrations/
├── market-data/              # External market data providers
│   ├── bloomberg/
│   ├── reuters/
│   └── alpha-vantage/
├── accounting/               # Accounting software
│   ├── quickbooks/
│   ├── sap/
│   └── oracle/
├── crm/                      # CRM systems
│   ├── salesforce/
│   └── hubspot/
└── communication/            # Messaging and notification
    ├── twilio/
    ├── sendgrid/
    └── slack/
```

### 12.2 Webhooks
```
webhooks/                     # Incoming webhook handlers
├── github/
├── gitlab/
├── stripe/
└── paypal/
```

## 13. Environment-Specific Variations

### 13.1 Development vs Production
Development includes:
- Source maps
- Verbose logging
- Debug tools
- Hot reloading
- Mock services

Production excludes:
- Development dependencies
- Debug statements
- Test files
- Documentation files (in container)

### 13.2 Feature Flags Directory
```
feature-flags/
├── flags.json                # Master feature flag definitions
├── environments/
│   ├── development.json
│   ├── staging.json
│   └── production.json
└── handlers/                 # Feature flag evaluation logic
```

## 14. Monitoring and Observability

### 14.1 Logging Structure
```
logs/
├── application/              # Application logs
├── access/                   # HTTP access logs
├── error/                    # Error logs
├── audit/                    # Security audit trails
└── performance/              # Performance metrics
```

### 14.2 Metrics Collection
```
metrics/                      # Custom business metrics
├── definitions.json          # Metric definitions
├── collectors/               # Metric collection scripts
└── dashboards/               # Grafana dashboard JSONs
```

## 15. Backup and Disaster Recovery

### 15.1 Backup Procedures
```
backups/
├── database/                 # Database backups
│   ├── full/                 # Full database dumps
│   ├── incremental/          # Incremental backups
│   └── logs/                 # Transaction logs
├── files/                    # User-uploaded file backups
└── config/                   # Configuration backups
```

### 15.2 Disaster Recovery
```
dr/                           # Disaster recovery assets
├── runbooks/
├── scripts/
└── configurations/
```

## 16. Remote Work and Collaboration
```
.templates/                   # Repository templates
├── pull_request_template.md
├── issue_template/
└── code_review_checklist.md
```

## 17. Compliance and Legal
```
compliance/                   # Regulatory compliance artifacts
├── gdpr/                     # GDPR documentation
├── soc2/                     # SOC 2 reports and evidence
├── iso27001/                 # ISO 27001 documentation
├── licensing/                # Software licenses and attributions
└── audit-reports/            # Third-party audit reports
```

## 18. Research and Exploration
```
sandbox/                      # Experimental features and prototypes
├── feature-x-prototype/
├── ml-model-experiment/
└── ui-concept-study/
```

## 19. Scripts for Maintaining Structure
```
scripts/structure/
├── validate-structure.py     # Validates against this document
├── generate-tree.sh          # Creates visual tree representation
├── find-duplicates.sh        # Finds duplicate files
└── empty-dirs.sh             # Finds empty directories needing .gitkeep
```

## 20. Conclusion
This folder structure provides a scalable, maintainable foundation for the ASTER platform. It separates concerns clearly, follows industry best practices, and supports both individual contributor productivity and team collaboration at scale.

**Key Principles:**
1. **Consistency**: All teams follow the same structure
2. **Discoverability**: New team members can quickly locate files
3. **Scalability**: Structure accommodates growth without reorganization
4. **Separation of Concerns**: Clear boundaries between layers
5. **Maintainability**: Easy to locate, update, and test components
6. **Standards Compliance**: Aligns with common industry practices

*Structure Version: 1.0*
*Last Updated: $(date)*
*Maintained by: Architecture Team*
*Review Cycle: Quarterly*
