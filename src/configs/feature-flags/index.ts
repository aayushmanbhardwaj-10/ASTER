// Feature flags configuration
export interface FeatureFlags {
  [key: string]: boolean;
}

export const featureFlags = {
  development: {
    enableExperimentalFeatures: true,
    enableDebugTools: true,
    enableMockData: true,
    enableTelemetry: false,
    enableNewValuationEngine: true,
  },
  staging: {
    enableExperimentalFeatures: false,
    enableDebugTools: false,
    enableMockData: false,
    enableTelemetry: true,
    enableNewValuationEngine: true,
  },
  production: {
    enableExperimentalFeatures: false,
    enableDebugTools: false,
    enableMockData: false,
    enableTelemetry: true,
    enableNewValuationEngine: false, // Rolled out gradually
  },
} as const;

// Helper function to get feature flag for current environment
export const getFeatureFlag = (
  flag: keyof typeof featureFlags.development
): boolean => {
  // In a real app, this would read from process.env or a config service
  const env = process.env.NODE_ENV || 'development';
  return featureFlags[env as keyof typeof featureFlags][flag];
};

export default featureFlags;
