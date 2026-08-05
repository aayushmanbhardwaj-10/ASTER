  - Colors: Cultural connotations researched (e.g., white for mourning in some cultures)
  - Imagery: Diverse representation in illustrations/photos
  - Examples: Locally relevant financial instruments/scenarios
- **Legal and Regulatory**:
  - Privacy notices: Localized per jurisdiction (GDPR, CCPA, etc.)
  - Terms of service: Jurisdiction-specific versions
  - Accessibility statements: Per region requirements met
  - Tax/VAT: Correct calculation and display per locale

## 9. Design Tokens and Theming System

### 9.1 Design Tokens Architecture
- **Tokens Definition**: Named entities storing visual design attributes
- **Taxonomy**:
  - **Global**: Foundation values (colors, spacing, typography)
  - **Alias**: Context-specific names mapping to globals
  - **Component-specific**: Scoped to UI elements (button, input, card)
- **Storage Format**: JSON for easy consumption by design/dev tools
- **Structure**:
  ```json
  {
    "color": {
      "primary": {"base": "#003366"},
      "semantic": {
        "success": {"base": "#28A745", "hover": "#218838"}
      }
    },
    "spacing": {
      "none": "0px",
      "xs": "4px",
      "sm": "8px",
      "md": "16px",
      "lg": "24px",
      "xl": "32px"
    },
    "typography": {
      "fontFamily": {
        "base": "'Inter', sans-serif",
        "mono": "'Roboto Mono', monospace"
      },
      "fontSize": {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5rem"
      }
    }
  }
  ```
- **Usage**:
  - Design tools: Figma variables/plugin integration
  - Development: CSS variables, Sass maps, JS objects
  - Documentation: Auto-generated token reference

### 9.2 Theming Capabilities
- **Light/Dark Mode**:
  - Automatic: Based on system preference (prefers-color-scheme)
  - Manual toggle: User preference stored in profile/settings
  - Palette mapping: 
    - Background: #FFFFFF → #121212
    - Surface: #F8F9FA → #1E1E1E
    - Text primary: #212529 → #E9ECEF
    - Text secondary: #6C757D → #ADB5BD
    - Primary: #003366 → #4DABF7 (lighter for dark bg)
- **High Contrast Mode**:
  - WCAG AAA compliance target
  - Enhanced outlines: 2px+ borders on interactive elements
  - Solid fills: No gradients, transparent elements
  - Text alternatives: Patterns where color indicates meaning
- **Brand Customization** (Enterprise):
  - Primary color substitution
  - Logo replacement
  - Custom font selection (from approved list)
  - Limited to preserve usability/accessibility
- **Seasonal/Thematic Variants**:
  - Optional: Holiday themes, awareness colors (with accessibility review)
  - User-selectable: Temporary opt-in via profile settings
  - Automatic: Date-based triggering (opt-in)

### 9.3 Implementation Guidelines
- **CSS Variables Approach**:
  ```css
  :root {
    --color-primary-base: #003366;
    --color-primary-hover: #002855;
    --spacing-md: 16px;
    --font-size-base: 1rem;
    --radius-sm: 4px;
  }
  
  .button {
    background: var(--color-primary-base);
    padding: var(--spacing-md);
    font-size: var(--font-size-base);
    border-radius: var(--radius-sm);
    transition: background 0.2s;
  }
  
  .button:hover {
    background: var(--color-primary-hover);
  }
  ```
- **JavaScript/Framework Usage**:
  ```javascript
  // CSS Variables
  const primaryColor = getComputedStyle(document.body)
    .getPropertyValue('--color-primary-base').trim();
  
  // Design Token Object (imported)
  import { tokens } from '@/design-tokens';
  const Button = ({ children }) => (
    <button style={{
      background: tokens.color.primary.base,
      padding: tokens.spacing.md,
      fontSize: tokens.typography.fontSize.base,
      borderRadius: tokens.radius.sm
    }}>
      {children}
    </button>
  );
  ```
- **Tooling Integration**:
  - Figma: Variables plugin, token sync via REST API
  - Storybook: Addon for documenting/previewing tokens
  - Style Dictionary: Build JS/CSS/JSON/platform-specific assets
  - Linting: Custom rules to enforce token usage over hardcoded values

## 10. Mobile and Responsive Design

### 10.1 Breakpoint Strategy
- **Mobile**: < 640px (portrait phones)
- **Tablet**: 640px - 1023px (portrait tablets, small laptops)
- **Desktop**: ≥ 1024px (standard monitors)
