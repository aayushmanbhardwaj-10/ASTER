// Test for ConfigurationService
import { configurationService } from './configuration.service';

describe('ConfigurationService', () => {
  beforeEach(() => {
    // Reset environment for each test
    delete process.env.NODE_ENV;
  });

  test('should return development as default environment', () => {
    expect(configurationService.getEnvironment()).toBe('development');
  });

  test('should return correct environment when NODE_ENV is set', () => {
    process.env.NODE_ENV = 'production';
    // Note: In a real Vite app, we'd also test with import.meta.env.MODE
    // For this test, we're simulating the behavior
    const service =
      new (require('./configuration.service').ConfigurationServiceImpl)();
    expect(service.getEnvironment()).toBe('production');
  });

  test('should get database config', () => {
    const dbConfig = configurationService.getDatabaseConfig();
    expect(dbConfig).toHaveProperty('host');
    expect(dbConfig).toHaveProperty('port');
    expect(dbConfig).toHaveProperty('username');
    expect(dbConfig).toHaveProperty('database');
    expect(dbConfig).toHaveProperty('dialect');
  });

  test('should get feature flags', () => {
    const featureFlags = configurationService.getFeatureFlags();
    expect(typeof featureFlags).toBe('object');
  });

  test('should get logging config', () => {
    const loggingConfig = configurationService.getLoggingConfig();
    expect(loggingConfig).toHaveProperty('level');
    expect(loggingConfig).toHaveProperty('format');
    expect(loggingConfig).toHaveProperty('transports');
  });

  test('should get API URL', () => {
    const apiUrl = configurationService.getApiUrl();
    expect(typeof apiUrl).toBe('string');
    expect(apiUrl.length).toBeGreaterThan(0);
  });

  test('should check environment modes', () => {
    expect(configurationService.isDevelopment()).toBe(true);
    expect(configurationService.isProduction()).toBe(false);
    expect(configurationService.isStaging()).toBe(false);
  });
});
