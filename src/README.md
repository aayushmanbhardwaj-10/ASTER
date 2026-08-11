# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Design Token System

ASTER implements a comprehensive design token system for consistent styling and theming. The token system is located in `src/styles/tokens/` and includes:

- **Colors**: Financial-semantic color palette with primary, semantic (positive/negative/warning/info), neutral scales
- **Spacing**: 8px-based grid system with semantic aliases
- **Typography**: Optimized for financial data readability with specialized number styles
- **Shadows**: Subtle elevation system for depth and hierarchy
- **Radii**: Consistent border radius scale
- **Transitions**: Purposeful motion and micro-interactions
- **Z-index**: Layering system for component stacking

### Usage

Tokens can be used in two ways:

1. **CSS Variables** (recommended for most usage):
```css
.component {
  color: var(--color-semantic-positive-500);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-1);
}
```

2. **TypeScript/JavaScript Import**:
```typescript
import { tokens } from '@/styles/tokens';

const styles = {
  color: tokens.color.semantic.positive[500],
  padding: tokens.spacing[4],
  borderRadius: tokens.radii.md,
  boxShadow: tokens.shadows[1],
};
```

### Token Files
- `colors.ts` - Color palette and semantic meanings
- `spacing.ts` - 8px-based spacing system
- `typography.ts` - Typography scales and styles
- `shadows.ts` - Elevation and shadow tokens
- `radii.ts` - Border radius tokens
- `transitions.ts` - Duration, easing, and transition combinations
- `zIndex.ts` - Layering system
- `index.ts` - Export barrel for all tokens

## Available Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.