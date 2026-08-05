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
