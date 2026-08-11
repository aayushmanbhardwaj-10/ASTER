// Logging configuration
export interface LoggingConfig {
  level: 'error' | 'warn' | 'info' | 'debug' | 'trace';
  format: 'json' | 'text';
  transports: {
    console: boolean;
    http: boolean; // For sending logs to an HTTP endpoint (e.g., log aggregation service)
  };
}

// Use as const assertion to preserve literal types
export const loggingConfig = {
  development: {
    level: 'debug' as const,
    format: 'text' as const,
    transports: {
      console: true,
      http: false,
    },
  },
  staging: {
    level: 'info' as const,
    format: 'json' as const,
    transports: {
      console: true,
      http: true,
    },
  },
  production: {
    level: 'warn' as const,
    format: 'json' as const,
    transports: {
      console: true,
      http: true,
    },
  },
} as const;

// Default export for backward compatibility
export default loggingConfig;
