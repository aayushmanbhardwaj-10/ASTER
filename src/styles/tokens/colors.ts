// ASTER Color Tokens
// Based on financial industry standards and premium UI/UX principles

export const colors = {
  // Primary Palette - Trust, stability, professionalism
  primary: {
    // Main brand color - deep blue for trust and stability
    50: '#EFF6FF',   // Lightest - for subtle accents
    100: '#DBEAFE',  // Lighter
    200: '#BFDBFE',  // Light
    300: '#93C5FD',  // Medium-light
    400: '#60A5FA',  // Medium
    500: '#3B82F6',  // Base - primary brand color
    600: '#2563EB',  // Dark - for hover, active states
    700: '#1D4ED8',  // Darker
    800: '#1E40AF',  // Darkest
    900: '#1E3A8A',  // For text on primary backgrounds
    950: '#172554',  // For extra dark backgrounds
  },

  // Semantic Financial Colors - Consistent meaning throughout ASTER
  semantic: {
    // Positive/Growth - Profit, positive returns, growth
    positive: {
      50: '#F0FDF4',   // Background/surface
      100: '#DCFCE7',  // Lighter surface
      200: '#BBF7D0',  // Border/outline
      300: '#86EFAC',  // Medium surface
      400: '#4ADE80',  // Base
      500: '#22C55E',  // Icon, text, primary indicator
      600: '#16A34A',  // Dark - hover, active states
      700: '#15803D',  // Darker
      800: '#166534',  // Darkest
      900: '#14532D',  // For text on positive backgrounds
    },
    // Negative/Loss - Loss, risk, decline
    negative: {
      50: '#FEF2F2',   // Background/surface
      100: '#FEE2E2',  // Lighter surface
      200: '#FECACA',  // Border/outline
      300: '#FCA5A5',  // Medium surface
      400: '#F87171',  // Base
      500: '#EF4444',  // Icon, text, primary indicator
      600: '#DC2626',  // Dark - hover, active states
      700: '#B91C1C',  // Darker
      800: '#991B1B',  // Darkest
      900: '#7F1D1D',  // For text on negative backgrounds
    },
    // Warning/Attention - Uncertainty, risk, attention needed
    warning: {
      50: '#FFFBEB',   // Background/surface
      100: '#FEF3C7',  // Lighter surface
      200: '#FDE68A',  // Border/outline
      300: '#FCD34D',  // Medium surface
      400: '#FBBF24',  // Base
      500: '#F59E0B',  // Icon, text, primary indicator
      600: '#D97706',  // Dark - hover, active states
      700: '#B45309',  // Darker
      800: '#92400E',  // Darkest
      900: '#78350F',  // For text on warning backgrounds
    },
    // Info/Neutral - Information, metadata, neutral data
    info: {
      50: '#ECFEFF',   // Background/surface
      100: '#CFFAFE',  // Lighter surface
      200: '#A5F3FC',  // Border/outline
      300: '#67E8F9',  // Medium surface
      400: '#22D3EE',  // Base
      500: '#06B6D4',  // Icon, text, primary indicator
      600: '#0891B2',  // Dark - hover, active states
      700: '#0E7490',  // Darker
      800: '#155E75',  // Darkest
      900: '#164E63',  // For text on info backgrounds
    },
  },

  // Neutral Scale - For text, backgrounds, borders, dividers
  neutral: {
    // Dark mode background/surface colors
    50: '#F9FAFB',   // Lightest - paper, card backgrounds
    100: '#F3F4F6',  // Lighter
    200: '#E5E7EB',  // Light - dividers, subtle borders
    300: '#D1D5DB',  // Medium-light
    400: '#9CA3AF',  // Medium - disabled text, subtle icons
    500: '#6B7280',  // Base - secondary text, placeholder
    600: '#4B5563',  // Dark - primary text, icons
    700: '#374151',  // Darker - header text
    800: '#2F2F2F',  // Darkest
    900: '#1C1C1C',  // For dark mode surfaces
    950: '#0A0A0A',  // For extra dark mode backgrounds
  },

  // Backgrounds
  background: {
    // Page and app backgrounds
    default: '#FFFFFF',    // Light mode default
    paper: '#FFFFFF',      // Card, modal, popup background
    elevated: '#F8F9FA',   // Slightly elevated surfaces
    // Dark mode variants
    defaultDark: '#121212', // Dark mode default
    paperDark: '#1E1E1E',   // Card, modal, popup background in dark
    elevatedDark: '#2A2A2A', // Slightly elevated surfaces in dark
  },

  // Borders and Dividers
  border: {
    default: '#E5E7EB',  // Light mode default border
    light: '#F3F4F6',    // Lighter border for subtle divisions
    medium: '#D1D5DB',   // Medium border
    dark: '#9CA3AF',     // Darker border for emphasis
    // Dark mode variants
    defaultDark: '#2E303A', // Dark mode default border
    lightDark: '#3A3A3A',   // Lighter border in dark mode
    mediumDark: '#4A4A4A',  // Medium border in dark mode
    darkDark: '#6B6B6B',    // Darker border in dark mode
  },

  // Shadows/Elevation - For depth and hierarchy
  shadow: {
    // Following material design elevation system
    0: 'none',
    1: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    2: '0px 1px 5px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08)',
    3: '0px 2px 6px rgba(0, 0, 0, 0.15), 0px 1px 4px rgba(0, 0, 0, 0.08)',
    4: '0px 3px 8px rgba(0, 0, 0, 0.15), 0px 1px 5px rgba(0, 0, 0, 0.06)',
    5: '0px 4px 10px rgba(0, 0, 0, 0.15), 0px 1px 6px rgba(0, 0, 0, 0.05)',
  },

  // Interactive States
  interactive: {
    // Hover, focus, active states for different element types
    primary: {
      hover: '#2563EB',    // Primary 600
      focus: '#2563EB',    // Primary 600
      active: '#1D4ED8',   // Primary 700
    },
    positive: {
      hover: '#16A34A',    // Positive 600
      focus: '#16A34A',    // Positive 600
      active: '#15803D',   // Positive 700
    },
    negative: {
      hover: '#DC2626',    // Negative 600
      focus: '#DC2626',    // Negative 600
      active: '#B91C1C',   // Negative 700
    },
    warning: {
      hover: '#D97706',    // Warning 600
      focus: '#D97706',    // Warning 600
      active: '#B45309',   // Warning 700
    },
    info: {
      hover: '#0891B2',    // Info 600
      focus: '#0891B2',    // Info 600
      active: '#0E7490',   // Info 700
    },
  },
};

// Export as CSS variable map for easy consumption
export const cssVariables = {
  // Primary colors
  '--color-primary-50': colors.primary[50],
  '--color-primary-100': colors.primary[100],
  '--color-primary-200': colors.primary[200],
  '--color-primary-300': colors.primary[300],
  '--color-primary-400': colors.primary[400],
  '--color-primary-500': colors.primary[500],
  '--color-primary-600': colors.primary[600],
  '--color-primary-700': colors.primary[700],
  '--color-primary-800': colors.primary[800],
  '--color-primary-900': colors.primary[900],
  '--color-primary-950': colors.primary[950],

  // Semantic colors - Positive
  '--color-semantic-positive-50': colors.semantic.positive[50],
  '--color-semantic-positive-100': colors.semantic.positive[100],
  '--color-semantic-positive-200': colors.semantic.positive[200],
  '--color-semantic-positive-300': colors.semantic.positive[300],
  '--color-semantic-positive-400': colors.semantic.positive[400],
  '--color-semantic-positive-500': colors.semantic.positive[500],
  '--color-semantic-positive-600': colors.semantic.positive[600],
  '--color-semantic-positive-700': colors.semantic.positive[700],
  '--color-semantic-positive-800': colors.semantic.positive[800],
  '--color-semantic-positive-900': colors.semantic.positive[900],

  // Semantic colors - Negative
  '--color-semantic-negative-50': colors.semantic.negative[50],
  '--color-semantic-negative-100': colors.semantic.negative[100],
  '--color-semantic-negative-200': colors.semantic.negative[200],
  '--color-semantic-negative-300': colors.semantic.negative[300],
  '--color-semantic-negative-400': colors.semantic.negative[400],
  '--color-semantic-negative-500': colors.semantic.negative[500],
  '--color-semantic-negative-600': colors.semantic.negative[600],
  '--color-semantic-negative-700': colors.semantic.negative[700],
  '--color-semantic-negative-800': colors.semantic.negative[800],
  '--color-semantic-negative-900': colors.semantic.negative[900],

  // Semantic colors - Warning
  '--color-semantic-warning-50': colors.semantic.warning[50],
  '--color-semantic-warning-100': colors.semantic.warning[100],
  '--color-semantic-warning-200': colors.semantic.warning[200],
  '--color-semantic-warning-300': colors.semantic.warning[300],
  '--color-semantic-warning-400': colors.semantic.warning[400],
  '--color-semantic-warning-500': colors.semantic.warning[500],
  '--color-semantic-warning-600': colors.semantic.warning[600],
  '--color-semantic-warning-700': colors.semantic.warning[700],
  '--color-semantic-warning-800': colors.semantic.warning[800],
  '--color-semantic-warning-900': colors.semantic.warning[900],

  // Semantic colors - Info
  '--color-semantic-info-50': colors.semantic.info[50],
  '--color-semantic-info-100': colors.semantic.info[100],
  '--color-semantic-info-200': colors.semantic.info[200],
  '--color-semantic-info-300': colors.semantic.info[300],
  '--color-semantic-info-400': colors.semantic.info[400],
  '--color-semantic-info-500': colors.semantic.info[500],
  '--color-semantic-info-600': colors.semantic.info[600],
  '--color-semantic-info-700': colors.semantic.info[700],
  '--color-semantic-info-800': colors.semantic.info[800],
  '--color-semantic-info-900': colors.semantic.info[900],

  // Neutral colors
  '--color-neutral-50': colors.neutral[50],
  '--color-neutral-100': colors.neutral[100],
  '--color-neutral-200': colors.neutral[200],
  '--color-neutral-300': colors.neutral[300],
  '--color-neutral-400': colors.neutral[400],
  '--color-neutral-500': colors.neutral[500],
  '--color-neutral-600': colors.neutral[600],
  '--color-neutral-700': colors.neutral[700],
  '--color-neutral-800': colors.neutral[800],
  '--color-neutral-900': colors.neutral[900],
  '--color-neutral-950': colors.neutral[950],

  // Background colors
  '--color-background-default': colors.background.default,
  '--color-background-paper': colors.background.paper,
  '--color-background-elevated': colors.background.elevated,
  '--color-background-default-dark': colors.background.defaultDark,
  '--color-background-paper-dark': colors.background.paperDark,
  '--color-background-elevated-dark': colors.background.elevatedDark,

  // Border colors
  '--color-border-default': colors.border.default,
  '--color-border-light': colors.border.light,
  '--color-border-medium': colors.border.medium,
  '--color-border-dark': colors.border.dark,
  '--color-border-default-dark': colors.border.defaultDark,
  '--color-border-light-dark': colors.border.lightDark,
  '--color-border-medium-dark': colors.border.mediumDark,
  '--color-border-dark-dark': colors.border.darkDark,
};

// Export alias map for easier JS usage
export const tokenMap = {
  // Color token mapping for JS consumption
  color: {
    primary: colors.primary,
    semantic: colors.semantic,
    neutral: colors.neutral,
    background: colors.background,
    border: colors.border,
    shadow: colors.shadow,
    interactive: colors.interactive,
  }
};