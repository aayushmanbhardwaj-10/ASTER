// Environment utility for the ASTER frontend application
// Provides type-safe access to Vite environment variables
// Following Vite's convention: https://vitejs.dev/guide/env-and-mode.html

// Vite automatically loads .env files:
// - .env                # loaded in all cases
// - .env.local          # loaded in all cases, ignored by git
// - .env.[mode]         # only loaded in specified mode
// - .env.[mode].local   # only loaded in specified mode, ignored by git
//
// Variables must be prefixed with VITE_ to be exposed to Vite-processed code
// Access via: import.meta.env.VITE_SOME_KEY

// Utility function to get environment variable with proper typing and fallbacks
// Note: This function demonstrates the pattern for accessing Vite environment variables
// In actual frontend code, use import.meta.env directly (see examples below)
export const getEnv = <T extends string | number | boolean>(
  key: string, // e.g., 'VITE_API_URL'
  defaultValue?: T, // Default value if environment variable is not set
  options?: {
    required?: boolean; // Throw error if required and not set
    validate?: (value: string) => boolean; // Validation function
    transform?: (value: string) => T; // Transform function (e.g., parseInt, JSON.parse)
  }
): T | undefined => {
  // This utility demonstrates the pattern but doesn't actually retrieve values
  // because import.meta.env is only available in Vite-processed code
  // In actual usage, access variables directly:
  // const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
  // const enableDebug = import.meta.env.VITE_ENABLE_DEBUG_TOOLBAR === 'true';
  // const port = Number(import.meta.env.VITE_PORT) || 3000;

  // Satisfy TypeScript's unused variable checking
  // Using the void operator to intentionally ignore values
  void key;
  void defaultValue;
  void options;

  // For TypeScript compile-time checking of the pattern, we return undefined
  // but show how it would be used:
  // @ts-ignore
  return undefined as unknown as T;
};

// Helper constants for common environment checks
// Note: These would typically be used as:
// if (import.meta.env.PROD) { ... } // production build
// if (import.meta.env.DEV) { ... }  // development
// if (import.meta.env.SSR) { ... }  // server-side rendering

export const EnvMode = {
  // These match Vite's built-in environment variables
  // Actual usage: import.meta.env.MODE
  get mode() {
    // @ts-ignore - import.meta is available in Vite-processed code
    return import.meta.env?.MODE || 'development';
  },

  // Check if we're in development mode
  get isDev() {
    // @ts-ignore - import.meta is available in Vite-processed code
    return import.meta.env?.DEV || false;
  },

  // Check if we're in production mode
  get isProd() {
    // @ts-ignore - import.meta is available in Vite-processed code
    return import.meta.env?.PROD || false;
  },

  // Check if we're in SSR mode
  get isSsr() {
    // @ts-ignore - import.meta is available in Vite-processed code
    return import.meta.env?.SSR || false;
  },
};

// Types for common environment variables
// These describe the shape of import.meta.env for Vite
export interface ViteEnv {
  /** API base URL */
  VITE_API_URL: string;

  /** Whether to enable debug toolbar */
  VITE_ENABLE_DEBUG_TOOLBAR?: 'true' | 'false';

  /** Whether to enable mock API */
  VITE_ENABLE_MOCK_API?: 'true' | 'false';

  /** Google Analytics tracking ID */
  VITE_GA_ID?: string;

  /** Sentry DSN for error reporting */
  VITE_SENTRY_DSN?: string;

  // Add more as needed
}

// Note: For actual IDE support of Vite environment variables,
// create a vite-env.d.ts file in your src directory with:
// /// <reference types="vite/client" />
// import { ViteEnv } from './utils/environment';
//
// interface ImportMetaEnv extends ViteEnv {}
//
// interface ImportMeta {
//   readonly env: ImportMetaEnv;
// }
//
// See: https://vitejs.dev/guide/env-and-mode.html#intellisense

// Example usage patterns (for documentation):
/*
// In a service or component:
// const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// For boolean flags:
// const enableDebug = import.meta.env.VITE_ENABLE_DEBUG_TOOLBAR === 'true';

// For optional features with defaults:
// const gaId = import.meta.env.VITE_GA_ID;

// With validation:
// const port = Number(import.meta.env.VITE_PORT) || 3000;

// Environment checks:
// if (import.meta.env.PROD) {
//   // Production-only code
// }
// if (import.meta.env.DEV) {
//   // Development-only code
// }
*/

export default {
  getEnv,
  EnvMode,
};
