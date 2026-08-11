// Configuration service for the ASTER frontend application
// Provides centralized access to all configuration settings

import { loggingConfig } from '@configs/logging';
import type { DatabaseConfig } from '@configs/database';
import type { FeatureFlags } from '@configs/feature-flags';
// Import environment-specific configs
import developmentEnv from '@configs/environments/development';
import stagingEnv from '@configs/environments/staging';
import productionEnv from '@configs/environments/production';

// Configuration service interface
export interface ConfigurationService {
  // Get current environment
  getEnvironment(): string;

  // Get environment-specific configuration
  getEnvConfig(): Record<string, any>;

  // Get database configuration for current environment
  getDatabaseConfig(): DatabaseConfig;

  // Get feature flags for current environment
  getFeatureFlags(): FeatureFlags;

  // Get logging configuration for current environment
  getLoggingConfig():
    | typeof loggingConfig.development
    | typeof loggingConfig.staging
    | typeof loggingConfig.production;

  // Get a specific configuration value by path (e.g., 'apiUrl', 'database.host')
  get<T>(path: string): T | undefined;

  // Check if a feature flag is enabled
  isFeatureEnabled(flag: keyof FeatureFlags): boolean;

  // Get API URL for current environment
  getApiUrl(): string;

  // Check if we're in development mode
  isDevelopment(): boolean;

  // Check if we're in production mode
  isProduction(): boolean;

  // Check if we're in staging mode
  isStaging(): boolean;
}

// Implementation of the configuration service
export class ConfigurationServiceImpl implements ConfigurationService {
  private currentEnv: string;
  private envConfig: Record<string, any>;
  private dbConfig: DatabaseConfig;
  private featureFlagConfig: FeatureFlags;
  private loggingConfig:
    | typeof loggingConfig.development
    | typeof loggingConfig.staging
    | typeof loggingConfig.production;

  constructor() {
    // Determine current environment
    this.currentEnv = this.determineEnvironment();

    // Initialize properties
    this.envConfig = {};
    this.dbConfig = {} as DatabaseConfig;
    this.featureFlagConfig = {} as FeatureFlags;
    this.loggingConfig = loggingConfig.development;

    // Load configurations based on environment
    this.loadConfigurations();
  }

  // Determine the current environment from process.env.NODE_ENV or Vite mode
  private determineEnvironment(): string {
    // In a frontend Vite app, we can use import.meta.env.MODE
    // For now, we'll use process.env.NODE_ENV as a fallback
    // Note: In actual Vite-processed code, import.meta.env.MODE would be used
    const env = process.env.NODE_ENV || import.meta.env?.MODE || 'development';
    return env.toLowerCase();
  }

  // Load all configurations for the current environment
  private loadConfigurations(): void {
    // Load environment-specific config
    switch (this.currentEnv) {
      case 'production':
        this.envConfig = productionEnv;
        break;
      case 'staging':
        this.envConfig = stagingEnv;
        break;
      case 'development':
      default:
        this.envConfig = developmentEnv;
        break;
    }

    // Load database config
    const dbConfigModule = require('@configs/database').default;
    this.dbConfig =
      dbConfigModule[this.currentEnv as keyof typeof dbConfigModule] ||
      dbConfigModule.development;

    // Load feature flags
    const featureFlagsModule = require('@configs/feature-flags').default;
    this.featureFlagConfig =
      featureFlagsModule[this.currentEnv as keyof typeof featureFlagsModule] ||
      featureFlagsModule.development;

    // Load logging config
    this.loggingConfig =
      loggingConfig[this.currentEnv as keyof typeof loggingConfig] ||
      loggingConfig.development;
  }

  // Get current environment
  getEnvironment(): string {
    return this.currentEnv;
  }

  // Get environment-specific configuration
  getEnvConfig(): Record<string, any> {
    return { ...this.envConfig };
  }

  // Get database configuration for current environment
  getDatabaseConfig(): DatabaseConfig {
    return { ...this.dbConfig };
  }

  // Get feature flags for current environment
  getFeatureFlags(): FeatureFlags {
    return { ...this.featureFlagConfig };
  }

  // Get logging configuration for current environment
  getLoggingConfig():
    | typeof loggingConfig.development
    | typeof loggingConfig.staging
    | typeof loggingConfig.production {
    return this.loggingConfig;
  }

  // Get a specific configuration value by path (e.g., 'apiUrl', 'database.host')
  get<T>(path: string): T | undefined {
    const paths = path.split('.');
    let current: any = this.envConfig;

    for (const p of paths) {
      if (current === undefined || current === null) {
        return undefined;
      }
      current = current[p];
    }

    return current;
  }

  // Check if a feature flag is enabled
  isFeatureEnabled(flag: keyof FeatureFlags): boolean {
    return !!this.featureFlagConfig[flag];
  }

  // Get API URL for current environment
  getApiUrl(): string {
    // Try to get from env config first
    const apiUrl = this.get<string>('apiUrl');
    if (apiUrl) {
      return apiUrl;
    }

    // Fallback to Vite environment variable
    // Note: This would only work in Vite-processed code
    // @ts-ignore
    return import.meta.env?.VITE_API_URL || 'http://localhost:3000/api';
  }

  // Check if we're in development mode
  isDevelopment(): boolean {
    return this.currentEnv === 'development';
  }

  // Check if we're in production mode
  isProduction(): boolean {
    return this.currentEnv === 'production';
  }

  // Check if we're in staging mode
  isStaging(): boolean {
    return this.currentEnv === 'staging';
  }
}

// Export a singleton instance
export const configurationService = new ConfigurationServiceImpl();

// Register the service with the service locator
import { serviceLocator } from 'utils/serviceLocator';

// Only register if not already registered (to avoid duplicates in HMR)
if (!serviceLocator.hasService('configurationService')) {
  serviceLocator.registerService('configurationService', configurationService);
}

export default configurationService;

// Note: In a real application with a DI container, this would be registered as a singleton
// and instances would be obtained from the container rather than using a global singleton.
// For demonstration purposes, we're using a singleton pattern here.
