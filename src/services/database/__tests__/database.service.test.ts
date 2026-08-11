// Test for DatabaseService
import { databaseService } from './database.service';

describe('DatabaseService', () => {
  test('should get database config', () => {
    const config = databaseService.getConfig();
    expect(config).toHaveProperty('host');
    expect(config).toHaveProperty('port');
    expect(config).toHaveProperty('username');
    expect(config).toHaveProperty('database');
    expect(config).toHaveProperty('dialect');
    expect(['postgres', 'mysql', 'sqlite']).toContain(config.dialect);
  });

  test('should check if database is configured', () => {
    const isConfigured = databaseService.isConfigured();
    expect(isConfigured).toBe(true);
  });

  test('should validate database config', () => {
    const config = databaseService.getConfig();
    const errors = databaseService.validateConfig(config);
    expect(Array.isArray(errors)).toBe(true);
    // With valid config, there should be no errors
    expect(errors.length).toBe(0);
  });

  test('should get connection string in non-production', () => {
    // Temporarily set NODE_ENV to development
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    try {
      const connectionString = databaseService.getConnectionString();
      expect(typeof connectionString).toBe('string');
      expect(connectionString).toContain('://');
      expect(connectionString).toContain(':*****@'); // Password should be masked
    } finally {
      // Restore original environment
      process.env.NODE_ENV = originalEnv;
    }
  });

  test('should throw error when getting connection string in production', () => {
    // Temporarily set NODE_ENV to production
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    try {
      expect(() => {
        databaseService.getConnectionString();
      }).toThrow(
        'Database connection string not available in frontend for security reasons'
      );
    } finally {
      // Restore original environment
      process.env.NODE_ENV = originalEnv;
    }
  });

  test('should validate invalid database config', () => {
    const invalidConfig = {
      host: '',
      port: 0,
      username: '',
      database: '',
      dialect: 'invalid',
    };

    const errors = databaseService.validateConfig(invalidConfig);
    expect(errors.length).toBeGreaterThan(0);
    expect(errors).toContain('Database host is required');
    expect(errors).toContain(
      'Database port must be a valid port number (1-65535)'
    );
    expect(errors).toContain('Database username is required');
    expect(errors).toContain('Database name is required');
    expect(errors).toContain(
      'Database dialect must be one of: postgres, mysql, sqlite'
    );
  });
});
