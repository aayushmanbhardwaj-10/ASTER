// Database service for the ASTER frontend application
// Provides access to database configuration and connection utilities
// Note: In a frontend application, direct database access is typically handled via API services
// This service focuses on configuration management and providing database settings to API services

import type { DatabaseConfig } from '@configs/database';
import { configurationService } from '@services/configuration.service';

// Database service interface
export interface DatabaseService {
  // Get database configuration for current environment
  getConfig(): DatabaseConfig;

  // Get connection string for current environment (for API services)
  getConnectionString(): string;

  // Check if database is configured (has required fields)
  isConfigured(): boolean;

  // Validate database configuration
  validateConfig(config: DatabaseConfig): string[]; // Returns array of error messages, empty if valid
}

// Implementation of the database service
export class DatabaseServiceImpl implements DatabaseService {
  constructor() {
    // Constructor can be used for initialization if needed
  }

  // Get database configuration for current environment
  getConfig(): DatabaseConfig {
    return configurationService.getDatabaseConfig();
  }

  // Get connection string for current environment
  // Note: This is primarily for API services; frontend apps typically don't create direct DB connections
  getConnectionString(): string {
    const config = this.getConfig();

    // For security, we don't expose full connection strings with passwords in frontend
    // Instead, we return a configuration object that API services can use
    // This method is provided for completeness and potential use in secure environments

    // In a real implementation, this might be used by a backend service
    // For frontend, we'll return a masked version or throw an error to prevent misuse
    if (process.env.NODE_ENV !== 'production') {
      // Allow in non-production for debugging, but mask password
      return `${config.dialect}://${config.username}:*****@${config.host}:${config.port}/${config.database}`;
    }

    // In production, don't expose connection details
    throw new Error(
      'Database connection string not available in frontend for security reasons'
    );
  }

  // Check if database is configured (has required fields)
  isConfigured(): boolean {
    const config = this.getConfig();

    // Check required fields
    return !!(
      config.host &&
      config.port &&
      config.username &&
      config.database &&
      config.dialect
    );
  }

  // Validate database configuration
  validateConfig(config: DatabaseConfig): string[] {
    const errors: string[] = [];

    // Validate required fields
    if (!config.host) {
      errors.push('Database host is required');
    }

    if (!config.port || config.port <= 0 || config.port > 65535) {
      errors.push('Database port must be a valid port number (1-65535)');
    }

    if (!config.username) {
      errors.push('Database username is required');
    }

    if (!config.database) {
      errors.push('Database name is required');
    }

    if (
      !config.dialect ||
      !['postgres', 'mysql', 'sqlite'].includes(config.dialect)
    ) {
      errors.push('Database dialect must be one of: postgres, mysql, sqlite');
    }

    // Validate pool configuration if present
    if (config.pool) {
      if (config.pool.max !== undefined && config.pool.max < 1) {
        errors.push('Connection pool max must be at least 1');
      }

      if (config.pool.min !== undefined && config.pool.min < 0) {
        errors.push('Connection pool min cannot be negative');
      }

      if (config.pool.acquire !== undefined && config.pool.acquire < 1) {
        errors.push('Connection pool acquire timeout must be positive');
      }

      if (config.pool.idle !== undefined && config.pool.idle < 0) {
        errors.push('Connection pool idle timeout cannot be negative');
      }
    }

    return errors;
  }
}

// Export a singleton instance
export const databaseService = new DatabaseServiceImpl();

// Register the service with the service locator
import { serviceLocator } from 'utils/serviceLocator';

// Only register if not already registered (to avoid duplicates in HMR)
if (!serviceLocator.hasService('databaseService')) {
  serviceLocator.registerService('databaseService', databaseService);
}

export default databaseService;
