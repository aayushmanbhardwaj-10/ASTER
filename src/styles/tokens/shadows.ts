// ASTER Shadow/Elevation Tokens
// Subtle, purposeful elevation for financial UI components

export const shadows = {
  // Following material design elevation system with financial UI refinements
  // Each shadow is designed to be subtle yet distinct for financial dashboards
  0: 'none',
  1: '0px 1px 3px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.04)',
  2: '0px 1px 5px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.06)',
  3: '0px 2px 6px rgba(0, 0, 0, 0.10), 0px 1px 4px rgba(0, 0, 0, 0.06)',
  4: '0px 3px 8px rgba(0, 0, 0, 0.10), 0px 1px 5px rgba(0, 0, 0, 0.04)',
  5: '0px 4px 10px rgba(0, 0, 0, 0.10), 0px 1px 6px rgba(0, 0, 0, 0.03)',

  // Additional shadows for specific financial UI needs
  // For cards that need slightly more emphasis
  card: '0px 2px 8px rgba(0, 0, 0, 0.06)',
  // For elevated containers like modals and drawers
  elevated: '0px 4px 12px rgba(0, 0, 0, 0.08)',
  // For floating action buttons and prominent actions
  floating: '0px 6px 16px rgba(0, 0, 0, 0.12)',
  // For dropdowns and popovers
  dropdown: '0px 8px 24px rgba(0, 0, 0, 0.10)',
  // For tooltips
  tooltip: '0px 4px 8px rgba(0, 0, 0, 0.12)',

  // Inner shadows for pressed states
  inset: {
    1: 'inset 0px 1px 2px rgba(0, 0, 0, 0.04)',
    2: 'inset 0px 1px 3px rgba(0, 0, 0, 0.06)',
  },

  // Dark mode shadows - adjusted for dark backgrounds
  dark: {
    0: 'none',
    1: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.14)',
    2: '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    3: '0px 2px 6px rgba(0, 0, 0, 0.22), 0px 1px 4px rgba(0, 0, 0, 0.12)',
    4: '0px 3px 8px rgba(0, 0, 0, 0.22), 0px 1px 5px rgba(0, 0, 0, 0.10)',
    5: '0px 4px 10px rgba(0, 0, 0, 0.22), 0px 1px 6px rgba(0, 0, 0, 0.08)',

    card: '0px 2px 8px rgba(0, 0, 0, 0.16)',
    elevated: '0px 4px 12px rgba(0, 0, 0, 0.18)',
    floating: '0px 6px 16px rgba(0, 0, 0, 0.22)',
    dropdown: '0px 8px 24px rgba(0, 0, 0, 0.20)',
    tooltip: '0px 4px 8px rgba(0, 0, 0, 0.22)',

    inset: {
      1: 'inset 0px 1px 2px rgba(0, 0, 0, 0.1)',
      2: 'inset 0px 1px 3px rgba(0, 0, 0, 0.12)',
    },
  },
};

// Export as CSS variable map for easy consumption
export const cssVariables = {
  // Light mode shadows
  '--shadow-0': shadows[0],
  '--shadow-1': shadows[1],
  '--shadow-2': shadows[2],
  '--shadow-3': shadows[3],
  '--shadow-4': shadows[4],
  '--shadow-5': shadows[5],
  '--shadow-card': shadows.card,
  '--shadow-elevated': shadows.elevated,
  '--shadow-floating': shadows.floating,
  '--shadow-dropdown': shadows.dropdown,
  '--shadow-tooltip': shadows.tooltip,
  '--shadow-inset-1': shadows.inset[1],
  '--shadow-inset-2': shadows.inset[2],

  // Dark mode shadows
  '--shadow-dark-0': shadows.dark[0],
  '--shadow-dark-1': shadows.dark[1],
  '--shadow-dark-2': shadows.dark[2],
  '--shadow-dark-3': shadows.dark[3],
  '--shadow-dark-4': shadows.dark[4],
  '--shadow-dark-5': shadows.dark[5],
  '--shadow-dark-card': shadows.dark.card,
  '--shadow-dark-elevated': shadows.dark.elevated,
  '--shadow-dark-floating': shadows.dark.floating,
  '--shadow-dark-dropdown': shadows.dark.dropdown,
  '--shadow-dark-tooltip': shadows.dark.tooltip,
  '--shadow-dark-inset-1': shadows.dark.inset[1],
  '--shadow-dark-inset-2': shadows.dark.inset[2],
};

// Commonly used shadow aliases for semantic usage
export const shadowAliases = {
  // Component-specific shadows
  button: shadows[1],
  buttonHover: shadows[2],
  buttonPressed: shadows.inset[1],
  input: shadows[1],
  inputFocus: shadows[2],
  card: shadows.card,
  cardHover: shadows.elevated,
  modal: shadows.dropdown,
  dropdown: shadows.dropdown,
  tooltip: shadows.tooltip,
  floatingActionButton: shadows.floating,
  navbar: shadows[2],
  sidebar: shadows[3],
};

// Export alias map for easier JS usage
export const tokenMap = {
  shadows: {
    ...shadows,
    ...shadowAliases,
  }
};