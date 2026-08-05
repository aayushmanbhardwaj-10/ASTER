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
