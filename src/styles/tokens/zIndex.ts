// ASTER Z-Index Tokens
// Layering system for financial UI components

export const zIndex = {
  // Base layers
  base: 0,

  // Background and content layers
  background: -1,
  content: 1,

  // Interactive elements that sit above content
  sticky: 10,          // Headers, sidebars that stick
  floating: 20,        // Buttons, FABs that float above content

  // Overlays and dialogs
  dropdown: 30,        // Dropdown menus
  stickyHeader: 40,    // Fixed headers
  banner: 50,          // Banners, notices
  overlay: 60,         // Modal backdrops
  modal: 70,           // Modal dialogs
  popover: 80,         // Popovers, tooltips
  toast: 90,           // Toast notifications

  // System overlays
  tooltip: 100,        // Tool tips (highest normal layer)

  // Special layers that override everything
  dragging: 200,       // Elements being dragged
  dropping: 210,       // Drop targets during drag

  // Debug layers (highest)
  debug: 1000,         // Debug overlays

  // Specific component z-indices
  header: 10,
  sidebar: 15,
  sidebarOverlay: 25,
  dropdownMenu: 30,
  fixedHeader: 40,
  bannerNotification: 50,
  modalBackdrop: 60,
  modalDialog: 70,
  popoverContainer: 80,
  toastContainer: 90,
  tooltipContainer: 100,
  dragGhost: 200,
  dropTarget: 210,
};

// Export as CSS variable map for easy consumption
export const cssVariables = {
  '--z-index-base': zIndex.base,
  '--z-index-background': zIndex.background,
  '--z-index-content': zIndex.content,
  '--z-index-sticky': zIndex.sticky,
  '--z-index-floating': zIndex.floating,
  '--z-index-dropdown': zIndex.dropdown,
  '--z-index-stickyHeader': zIndex.stickyHeader,
  '--z-index-banner': zIndex.banner,
  '--z-index-overlay': zIndex.overlay,
  '--z-index-modal': zIndex.modal,
  '--z-index-popover': zIndex.popover,
  '--z-index-toast': zIndex.toast,
  '--z-index-tooltip': zIndex.tooltip,
  '--z-index-dragging': zIndex.dragging,
  '--z-index-dropping': zIndex.dropping,
  '--z-index-debug': zIndex.debug,

  // Specific components
  '--z-index-header': zIndex.header,
  '--z-index-sidebar': zIndex.sidebar,
  '--z-index-sidebarOverlay': zIndex.sidebarOverlay,
  '--z-index-dropdownMenu': zIndex.dropdownMenu,
  '--z-index-fixedHeader': zIndex.fixedHeader,
  '--z-index-bannerNotification': zIndex.bannerNotification,
  '--z-index-modalBackdrop': zIndex.modalBackdrop,
  '--z-index-modalDialog': zIndex.modalDialog,
  '--z-index-popoverContainer': zIndex.popoverContainer,
  '--z-index-toastContainer': zIndex.toastContainer,
  '--z-index-tooltipContainer': zIndex.tooltipContainer,
  '--z-index-dragGhost': zIndex.dragGhost,
  '--z-index-dropTarget': zIndex.dropTarget,
};

// Commonly used z-index aliases for semantic usage
export const zIndexAliases = {
  // Layout
  header: zIndex.header,
  sidebar: zIndex.sidebar,
  sidebarOverlay: zIndex.sidebarOverlay,
  content: zIndex.content,

  // Navigation
  dropdown: zIndex.dropdownMenu,
  dropdownMenu: zIndex.dropdownMenu,

  // Overlays and feedback
  modalBackdrop: zIndex.modalBackdrop,
  modal: zIndex.modalDialog,
  popover: zIndex.popoverContainer,
  toast: zIndex.toastContainer,
  tooltip: zIndex.tooltipContainer,

  // Special interactions
  dragging: zIndex.dragging,
  dropTarget: zIndex.dropTarget,

  // Debug
  debug: zIndex.debug,
};

// Export alias map for easier JS usage
export const tokenMap = {
  zIndex: {
    ...zIndex,
    ...zIndexAliases,
  }
};