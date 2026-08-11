// Database configuration
export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  dialect: 'postgres' | 'mysql' | 'sqlite';
  pool?: {
    max: number;
    min: number;
    acquire: number;
    idle: number;
  };
}

export default {
  development: {
    host: 'localhost',
    port: 5432,
    username: 'dev_user',
    password: 'dev_password',
    database: 'aster_dev',
    dialect: 'postgres',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  staging: {
    host: process.env.DB_STAGING_HOST || 'staging-db.example.com',
    port: parseInt(process.env.DB_STAGING_PORT || '5432', 10),
    username: process.env.DB_STAGING_USERNAME || 'staging_user',
    password: process.env.DB_STAGING_PASSWORD || '',
    database: process.env.DB_STAGING_NAME || 'aster_staging',
    dialect: 'postgres',
    pool: {
      max: 20,
      min: 5,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    host: process.env.DB_PRODUCTION_HOST || '',
    port: parseInt(process.env.DB_PRODUCTION_PORT || '5432', 10),
    username: process.env.DB_PRODUCTION_USERNAME || '',
    password: process.env.DB_PRODUCTION_PASSWORD || '',
    database: process.env.DB_PRODUCTION_NAME || '',
    dialect: 'postgres',
    pool: {
      max: 50,
      min: 10,
      acquire: 60000,
      idle: 20000,
    },
  },
} as const;
