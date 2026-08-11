// ASTER Spacing Tokens
// Based on 8px grid system for consistent spacing and layout

export const spacing = {
  // Base unit: 8px
  // All spacing values are multiples of 8px for consistent vertical rhythm
  0: '0px',
  1: '2px',   // 0.25 unit - for fine-tuning
  2: '4px',   // 0.5 unit
  3: '6px',   // 0.75 unit
  4: '8px',   // 1 unit - base
  5: '10px',  // 1.25 unit
  6: '12px',  // 1.5 unit
  7: '14px',  // 1.75 unit
  8: '16px',  // 2 units
  9: '18px',  // 2.25 units
  10: '20px', // 2.5 units
  11: '22px', // 2.75 units
  12: '24px', // 3 units
  14: '28px', // 3.5 units
  16: '32px', // 4 units
  20: '40px', // 5 units
  24: '48px', // 6 units
  28: '56px', // 7 units
  32: '64px', // 8 units
  36: '72px', // 9 units
  40: '80px', // 10 units
  44: '88px', // 11 units
  48: '96px', // 12 units
  52: '104px',// 13 units
  56: '112px',// 14 units
  60: '120px',// 15 units
  64: '128px',// 16 units
  72: '144px',// 18 units
  80: '160px',// 20 units
  88: '176px',// 22 units
  96: '192px',// 24 units
};

// Export as CSS variable map for easy consumption
export const cssVariables = {
  // Spacing values
  '--spacing-0': spacing[0],
  '--spacing-1': spacing[1],
  '--spacing-2': spacing[2],
  '--spacing-3': spacing[3],
  '--spacing-4': spacing[4],
  '--spacing-5': spacing[5],
  '--spacing-6': spacing[6],
  '--spacing-7': spacing[7],
  '--spacing-8': spacing[8],
  '--spacing-9': spacing[9],
  '--spacing-10': spacing[10],
  '--spacing-11': spacing[11],
  '--spacing-12': spacing[12],
  '--spacing-14': spacing[14],
  '--spacing-16': spacing[16],
  '--spacing-20': spacing[20],
  '--spacing-24': spacing[24],
  '--spacing-28': spacing[28],
  '--spacing-32': spacing[32],
  '--spacing-36': spacing[36],
  '--spacing-40': spacing[40],
  '--spacing-44': spacing[44],
  '--spacing-48': spacing[48],
  '--spacing-52': spacing[52],
  '--spacing-56': spacing[56],
  '--spacing-60': spacing[60],
  '--spacing-64': spacing[64],
  '--spacing-72': spacing[72],
  '--spacing-80': spacing[80],
  '--spacing-88': spacing[88],
  '--spacing-96': spacing[96],
};

// Commonly used spacing aliases for semantic usage
export const spacingAliases = {
  // Layout spacing
  pagePadding: spacing[24],      // 48px - page horizontal padding
  sectionPadding: spacing[16],   // 32px - section vertical padding
  componentGap: spacing[8],      // 16px - gap between components
  elementGap: spacing[4],        // 8px - gap between elements

  // Padding
  paddingXS: spacing[2],         // 4px
  paddingS: spacing[4],          // 8px
  paddingM: spacing[8],          // 16px
  paddingL: spacing[12],         // 24px
  paddingXL: spacing[16],        // 32px
  paddingXXL: spacing[20],       // 40px

  // Margin
  marginXS: spacing[2],          // 4px
  marginS: spacing[4],           // 8px
  marginM: spacing[8],           // 16px
  marginL: spacing[12],          // 24px
  marginXL: spacing[16],         // 32px
  marginXXL: spacing[20],        // 40px

  // Gap (for flex/grid gaps)
  gapXS: spacing[2],             // 4px
  gapS: spacing[4],              // 8px
  gapM: spacing[8],              // 16px
  gapL: spacing[12],             // 24px
  gapXL: spacing[16],            // 32px
  gapXXL: spacing[20],           // 40px
};

// Export alias map for easier JS usage
export const tokenMap = {
  spacing: {
    ...spacing,
    ...spacingAliases,
  }
};