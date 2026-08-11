// ASTER Border Radius Tokens
// Consistent corner rounding for financial UI components

export const radii = {
  // None - sharp corners
  none: '0px',

  // Extra small - for subtle rounding
  xs: '2px',

  // Small - for inputs, buttons, cards
  sm: '4px',

  // Medium - standard radius
  md: '6px',

  // Large - for prominent components
  lg: '8px',

  // Extra large - for special containers
  xl: '12px',

  // Full circle/pill
  full: '9999px',

  // Specific use cases
  button: '4px',          // Standard button radius
  input: '4px',           // Input field radius
  card: '6px',            // Card container radius
  modal: '8px',           // Modal popup radius
  avatar: '50%',          // Avatar/circular images
  chip: '12px',           // Chip/tag radius
  dropdown: '6px',        // Dropdown menu radius
  tooltip: '4px',         // Tooltip radius
};

// Export as CSS variable map for easy consumption
export const cssVariables = {
  '--radius-none': radii.none,
  '--radius-xs': radii.xs,
  '--radius-sm': radii.sm,
  '--radius-md': radii.md,
  '--radius-lg': radii.lg,
  '--radius-xl': radii.xl,
  '--radius-full': radii.full,
  '--radius-button': radii.button,
  '--radius-input': radii.input,
  '--radius-card': radii.card,
  '--radius-modal': radii.modal,
  '--radius-avatar': radii.avatar,
  '--radius-chip': radii.chip,
  '--radius-dropdown': radii.dropdown,
  '--radius-tooltip': radii.tooltip,
};

// Commonly used radius aliases for semantic usage
export const radiusAliases = {
  // Form elements
  input: radii.input,
  textarea: radii.input,
  select: radii.input,

  // Buttons
  button: radii.button,
  buttonIcon: radii.none,
  buttonCircle: radii.full,

  // Cards and containers
  card: radii.card,
  cardHeader: radii.card,
  cardFooter: radii.card,
  modal: radii.modal,
  dropdown: radii.dropdown,
  tooltip: radii.tooltip,

  // Navigation
  sidebar: radii.none,
  header: radii.none,

  // Avatars and images
  avatar: radii.avatar,
  image: radii.sm,

  // Chips and tags
  chip: radii.chip,
  badge: radii.full,

  // Specialized
  pill: radii.full,
  circle: radii.full,
};

// Export alias map for easier JS usage
export const tokenMap = {
  radii: {
    ...radii,
    ...radiusAliases,
  }
};