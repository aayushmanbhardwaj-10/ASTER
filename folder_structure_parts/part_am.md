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
