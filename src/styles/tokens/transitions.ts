// ASTER Transition Tokens
// Purposeful motion and micro-interactions for financial UI

export const transitions = {
  // Duration
  duration: {
    // Ultra fast - for instant feedback
    fastest: '50ms',
    // Very fast - for hover states
    faster: '100ms',
    // Fast - for interactive elements
    fast: '150ms',
    // Base - for most transitions
    base: '200ms',
    // Slow - for noticeable motions
    slow: '250ms',
    // Slower - for entrance/exit animations
    slower: '300ms',
    // Much slower - for complex animations
    muchSlower: '350ms',
  },

  // Easing functions
  easing: {
    // Linear - for consistent speed
    linear: 'linear',

    // Standard easing curves
    // In - starts slow, ends fast
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    // Out - starts fast, ends slow
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    // InOut - starts slow, fastest in middle, ends slow
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    // Financial UI specific easings
    // Smooth out - for natural easing out
    smoothOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Smooth in - for natural easing in
    smoothIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // Smooth inOut - for natural motion
    smoothInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    // Spring-like motions
    spring: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    // Bouncing finish
    bounceOut: 'cubic-bezier(0.4, 0, 0.6, 1)',
    // Gentle start
    easeInSoft: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    // Gentle end
    easeOutSoft: 'cubic-bezier(0.19, 1, 0.22, 1)',
  },

  // Pre-defined transition combinations for common use cases
  // Format: "property duration easing"
  common: {
    // For hover states on buttons, links, cards
    hover: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    // For focus states
    focus: 'all 100ms cubic-bezier(0.4, 0, 0.2, 1)',
    // For pressed/active states
    press: 'all 50ms cubic-bezier(0.4, 0, 0.2, 1)',
    // For input focus
    input: 'border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    // For card elevation on hover
    cardHover: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    // For dropdown/menu animations
    menu: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    // For tooltip animations
    tooltip: 'opacity 100ms cubic-bezier(0.4, 0, 0.2, 1), transform 100ms cubic-bezier(0.4, 0, 0.2, 1)',
    // For sidebar animations
    sidebar: 'width 220ms cubic-bezier(0.4, 0, 0.2, 1)',
    // For modal animations
    modal: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0’em, 0.2, 1)',
    // For toast/snackbar animations
    toast: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1), transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    // For tab transitions
    tab: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    // For financial chart animations
    chart: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)',
    // For loading skeleton animations
    skeleton: 'background-position 1.5s ease-in-out infinite',
  },

  // Specific transition properties
  properties: {
    // Commonly transitioned properties
    all: 'all',
    color: 'color',
    backgroundColor: 'background-color',
    borderColor: 'border-color',
    opacity: 'opacity',
    transform: 'transform',
    boxShadow: 'box-shadow',
    width: 'width',
    height: 'height',
    margin: 'margin',
    padding: 'padding',
  },
};

// Export as CSS variable map for easy consumption
export const cssVariables = {
  // Duration variables
  '--transition-duration-fastest': transitions.duration.fastest,
  '--transition-duration-faster': transitions.duration.faster,
  '--transition-duration-fast': transitions.duration.fast,
  '--transition-duration-base': transitions.duration.base,
  '--transition-duration-slow': transitions.duration.slow,
  '--transition-duration-slower': transitions.duration.slower,
  '--transition-duration-muchSlower': transitions.duration.muchSlower,

  // Easing variables
  '--transition-easing-linear': transitions.easing.linear,
  '--transition-easing-in': transitions.easing.in,
  '--transition-easing-out': transitions.easing.out,
  '--transition-easing-inOut': transitions.easing.inOut,
  '--transition-easing-smoothOut': transitions.easing.smoothOut,
  '--transition-easing-smoothIn': transitions.easing.smoothIn,
  '--transition-easing-smoothInOut': transitions.easing.smoothInOut,
  '--transition-easing-spring': transitions.easing.spring,
  '--transition-easing-bounceOut': transitions.easing.bounceOut,
  '--transition-easing-easeInSoft': transitions.easing.easeInSoft,
  '--transition-easing-easeOutSoft': transitions.easing.easeOutSoft,

  // Common transition combinations
  '--transition-hover': transitions.common.hover,
  '--transition-focus': transitions.common.focus,
  '--transition-press': transitions.common.press,
  '--transition-input': transitions.common.input,
  '--transition-cardHover': transitions.common.cardHover,
  '--transition-menu': transitions.common.menu,
  '--transition-tooltip': transitions.common.tooltip,
  '--transition-sidebar': transitions.common.sidebar,
  '--transition-modal': transitions.common.modal,
  '--transition-toast': transitions.common.toast,
  '--transition-tab': transitions.common.tab,
  '--transition-chart': transitions.common.chart,
  '--transition-skeleton': transitions.common.skeleton,
};

// Commonly used transition aliases for semantic usage
export const transitionAliases = {
  // Interactive elements
  button: transitions.common.hover,
  buttonFocus: transitions.common.focus,
  buttonActive: transitions.common.press,
  link: transitions.common.hover,
  linkFocus: transitions.common.focus,

  // Form elements
  input: transitions.common.input,
  textarea: transitions.common.input,
  select: transitions.common.input,

  // Cards and containers
  card: transitions.common.cardHover,
  cardHover: transitions.common.cardHover,
  modal: transitions.common.modal,
  dropdown: transitions.common.menu,
  tooltip: transitions.common.tooltip,

  // Navigation
  sidebar: transitions.common.sidebar,
  tab: transitions.common.tab,

  // Feedback elements
  toast: transitions.common.toast,
  progress: 'width 100ms linear',

  // Data visualization
  chart: transitions.common.chart,
  skeleton: transitions.common.skeleton,
};

// Export alias map for easier JS usage
export const tokenMap = {
  transitions: {
    ...transitions,
    ...transitionAliases,
  }
};