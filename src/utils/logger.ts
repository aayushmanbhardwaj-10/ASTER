// Logger utility for the ASTER frontend application
// Provides structured logging with support for different environments and transports

import { loggingConfig } from '@configs/logging';

class Logger {
  private config:
    | typeof loggingConfig.development
    | typeof loggingConfig.staging
    | typeof loggingConfig.production;
  private isInitialized: boolean = false;

  constructor() {
    // In a real application, we might fetch the config from a backend or use environment variables
    // For now, we'll use the imported config
    // Note: This is a simplification. In a real app, we might want to determine the environment
    // from process.env.NODE_ENV or a configuration service.
    this.config = loggingConfig.development; // Default to development
    this.detectEnvironment();
  }

  // Detect the environment based on NODE_ENV or other indicators
  private detectEnvironment(): void {
    const env = process.env.NODE_ENV || 'development';
    if (env === 'production') {
      this.config = loggingConfig.production;
    } else if (env === 'staging') {
      this.config = loggingConfig.staging;
    } else {
      this.config = loggingConfig.development;
    }
    this.isInitialized = true;
  }

  // Check if a given log level is enabled based on the current configuration
  private isLevelEnabled(
    level: 'error' | 'warn' | 'info' | 'debug' | 'trace'
  ): boolean {
    const levels: ('trace' | 'debug' | 'info' | 'warn' | 'error')[] = [
      'trace',
      'debug',
      'info',
      'warn',
      'error',
    ];
    const currentLevelIndex = levels.indexOf(
      this.config.level as 'trace' | 'debug' | 'info' | 'warn' | 'error'
    );
    const levelIndex = levels.indexOf(level);
    return levelIndex >= currentLevelIndex;
  }

  // Format a log entry as text for console output
  private formatAsText(entry: {
    level: 'error' | 'warn' | 'info' | 'debug' | 'trace';
    message: string;
    timestamp: string;
  }): string {
    return `[${entry.timestamp}] [${entry.level.toUpperCase()}] ${entry.message}`;
  }

  // Format a log entry as JSON string
  private formatAsJson(entry: {
    level: 'error' | 'warn' | 'info' | 'debug' | 'trace';
    message: string;
    timestamp: string;
  }): string {
    return JSON.stringify(entry);
  }

  // Send log to HTTP endpoint (placeholder for implementation)
  private async sendToHttpEndpoint(entry: {
    level: 'error' | 'warn' | 'info' | 'debug' | 'trace';
    message: string;
    timestamp: string;
  }): Promise<void> {
    // In a real implementation, we would send the log to a backend endpoint
    // For now, we'll just log to console as a fallback if HTTP is enabled
    if (this.config.transports.http) {
      console.log(
        '[LOGGER HTTP] Would send to HTTP endpoint:',
        this.formatAsJson(entry)
      );
      // TODO: Implement actual HTTP send when endpoint is available
    }
  }

  // Log a message with the specified level
  private log(
    level: 'error' | 'warn' | 'info' | 'debug' | 'trace',
    message: string,
    meta: Record<string, any> = {}
  ): void {
    if (!this.isInitialized) {
      this.detectEnvironment();
    }

    if (!this.isLevelEnabled(level)) {
      return;
    }

    const timestamp = new Date().toISOString();
    const entry = {
      level,
      message,
      timestamp,
      ...meta,
    };

    let formatted: string;
    if (this.config.format === 'json') {
      formatted = this.formatAsJson(entry);
    } else {
      formatted = this.formatAsText(entry);
    }

    // Output to console if console transport is enabled
    if (this.config.transports.console) {
      // Use appropriate console method based on level
      switch (level) {
        case 'error':
          console.error(formatted);
          break;
        case 'warn':
          console.warn(formatted);
          break;
        default:
          console.log(formatted);
      }
    }

    // Send to HTTP endpoint if enabled
    if (this.config.transports.http) {
      this.sendToHttpEndpoint(entry);
    }
  }

  // Public methods for each log level
  error(message: string, meta: Record<string, any> = {}): void {
    this.log('error', message, meta);
  }

  warn(message: string, meta: Record<string, any> = {}): void {
    this.log('warn', message, meta);
  }

  info(message: string, meta: Record<string, any> = {}): void {
    this.log('info', message, meta);
  }

  debug(message: string, meta: Record<string, any> = {}): void {
    this.log('debug', message, meta);
  }

  trace(message: string, meta: Record<string, any> = {}): void {
    this.log('trace', message, meta);
  }
}

// Export a singleton instance
export const logger = new Logger();

export default logger;
