// Example auth service demonstrating dependency injection pattern

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin' | 'analyst';
}

export interface AuthServiceInterface {
  login(email: string, password: string): Promise<User>;
  logout(): void;
  getCurrentUser(): User | null;
  isAuthenticated(): boolean;
}

// In a real implementation, this would depend on:
// - API service for making HTTP requests
// - Storage service for token management
// - Encryption service for password handling
// - Logger service for audit trails
export class AuthService implements AuthServiceInterface {
  private currentUser: User | null = null;

  // Dependencies would be injected via constructor in a real DI container
  constructor() {
    // For demonstration purposes, we're using direct instantiation
    // In practice, these would be injected:
    // constructor(
    //   private apiService: ApiService,
    //   private storageService: StorageService,
    //   private encryptionService: EncryptionService,
    //   private loggerService: LoggerService
    // ) {}
  }

  async login(email: string, _password: string): Promise<User> {
    // In real implementation:
    // 1. Validate input
    // 2. Call API service to authenticate
    // 3. Store token via storage service
    // 4. Set current user
    // 5. Log authentication event

    // Mock implementation for demonstration
    const mockUser: User = {
      id: 'user-123',
      email,
      name: 'John Doe',
      role: 'analyst',
    };

    this.currentUser = mockUser;
    return mockUser;
  }

  logout(): void {
    // Clear current user and tokens
    this.currentUser = null;
    // In real implementation: call storage service to clear tokens
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
}

// Register the service with the service locator
import { serviceLocator } from 'utils/serviceLocator';

// Only register if not already registered (to avoid duplicates in HMR)
if (!serviceLocator.hasService('authService')) {
  serviceLocator.registerService('authService', new AuthService());
}

export default AuthService;
