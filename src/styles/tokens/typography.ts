// ASTER Typography Tokens
// Optimized for financial data readability and information hierarchy

export const typography = {
  // Font Families
  fontFamily: {
    // Primary font - Inter for excellent readability, especially numbers
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    // Monospace for code, financial data displays
    mono: "'IBM Plex Mono', 'SF Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    // Heading font - can be same as primary or a complementary serif for financial gravitas
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },

  // Font Sizes (based on px values, but will be converted to rem in CSS)
  fontSize: {
    // Text sizes - optimized for financial data reading
    '2xs': '10px',   // 0.625rem
    xs: '11px',      // 0.688rem
    sm: '12px',      // 0.75rem
    md: '13px',      // 0.813rem
    base: '14px',    // 0.875rem - body text
    lg: '15px',      // 0.938rem
    xl: '16px',      // 1rem
    '2xl': '18px',   // 1.125rem
    '3xl': '20px',   // 1.25rem
    '4xl': '22px',   // 1.375rem
    '5xl': '24px',   // 1.5rem
    '6xl': '28px',   // 1.75rem
    '7xl': '32px',   // 2rem
    '8xl': '36px',   // 2.25rem
    '9xl': '40px',   // 2.5rem
  },

  // Font Weights
  fontWeight: {
    // Thin, Extra-light, Light, Normal, Medium, Semi-bold, Bold, Extra-bold, Black
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Line Heights
  lineHeight: {
    // Tighter for headings, looser for body text
    none: '1',
    tight: '1.25',   // For headings and compact text
    snug: '1.375',   // For UI elements
    normal: '1.5',   // For body text
    relaxed: '1.625', // For long-form reading
    loose: '2',      // For special emphasis
  },

  // Letter Spacing
  letterSpacing: {
    // Tighter for headings, wider for uppercase
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em', // For uppercase and financial codes
  },

  // Font Styles
  fontStyle: {
    normal: 'normal',
    italic: 'italic',
  },

  // Text Transform
  textTransform: {
    none: 'none',
    capitalize: 'capitalize',
    uppercase: 'uppercase',
    lowercase: 'lowercase',
  },

  // Text Decoration
  textDecoration: {
    none: 'none',
    underline: 'underline',
    overline: 'overline',
    lineThrough: 'line-through',
  },
};

// Export as CSS variable map for easy consumption
export const cssVariables = {
  // Font families
  '--font-family-primary': typography.fontFamily.primary,
  '--font-family-mono': typography.fontFamily.mono,
  '--font-family-heading': typography.fontFamily.heading,

  // Font sizes (converted to rem for scalability)
  '--font-size-2xs': '0.625rem', // 10px
  '--font-size-xs': '0.688rem',  // 11px
  '--font-size-sm': '0.75rem',   // 12px
  '--font-size-md': '0.813rem',  // 13px
  '--font-size-base': '0.875rem', // 14px
  '--font-size-lg': '0.938rem',  // 15px
  '--font-size-xl': '1rem',      // 16px
  '--font-size-2xl': '1.125rem', // 18px
  '--font-size-3xl': '1.25rem',  // 20px
  '--font-size-4xl': '1.375rem', // 22px
  '--font-size-5xl': '1.5rem',   // 24px
  '--font-size-6xl': '1.75rem',  // 28px
  '--font-size-7xl': '2rem',     // 32px
  '--font-size-8xl': '2.25rem',  // 36px
  '--font-size-9xl': '2.5rem',   // 40px

  // Font weights
  '--font-weight-thin': typography.fontWeight.thin,
  '--font-weight-extralight': typography.fontWeight.extralight,
  '--font-weight-light': typography.fontWeight.light,
  '--font-weight-normal': typography.fontWeight.normal,
  '--font-weight-medium': typography.fontWeight.medium,
  '--font-weight-semibold': typography.fontWeight.semibold,
  '--font-weight-bold': typography.fontWeight.bold,
  '--font-weight-extrabold': typography.fontWeight.extrabold,
  '--font-weight-black': typography.fontWeight.black,

  // Line heights
  '--line-height-none': typography.lineHeight.none,
  '--line-height-tight': typography.lineHeight.tight,
  '--line-height-snug': typography.lineHeight.snug,
  '--line-height-normal': typography.lineHeight.normal,
  '--line-height-relaxed': typography.lineHeight.relaxed,
  '--line-height-loose': typography.lineHeight.loose,

  // Letter spacing
  '--letter-spacing-tighter': typography.letterSpacing.tighter,
  '--letter-spacing-tight': typography.letterSpacing.tight,
  '--letter-spacing-normal': typography.letterSpacing.normal,
  '--letter-spacing-wide': typography.letterSpacing.wide,
  '--letter-spacing-wider': typography.letterSpacing.wider,
  '--letter-spacing-widest': typography.letterSpacing.widest,
};

// Commonly used typography aliases for semantic usage
export const typographyAliases = {
  // Text styles for financial UI
  caption: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.normal,
  },
  body: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.relaxed,
    letterSpacing: typography.letterSpacing.normal,
  },
  bodyStrong: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.relaxed,
    letterSpacing: typography.letterSpacing.normal,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.normal,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.normal,
  },
  titleStrong: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.normal,
  },
  heading: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tighter,
  },
  headingStrong: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.extrabold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tighter,
  },
  display: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tighter,
  },
  displayStrong: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.black,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tighter,
  },

  // Financial data specific styles
  financialNumber: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.widest, // Wider spacing for number readability
    fontFamily: typography.fontFamily.mono, // Monospace for numbers
  },
  financialNumberLarge: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.widest,
    fontFamily: typography.fontFamily.mono,
  },
  financialNumberSmall: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.wider,
    fontFamily: typography.fontFamily.mono,
  },
  financialLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.normal,
    textTransform: typography.textTransform.uppercase,
  },
  financialMetric: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.normal,
  },
};

// Export alias map for easier JS usage
export const tokenMap = {
  typography: {
    ...typography,
    ...typographyAliases,
  }
};