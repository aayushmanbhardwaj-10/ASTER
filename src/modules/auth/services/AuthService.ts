// Example auth service demonstrating dependency injection pattern with caching

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
  // Cache for login responses to avoid repeated API calls for the same credentials
  // In a real app, you might want to cache the token or user data with a TTL
  private loginCache = new Map<string, { data: User; timestamp: number }>();
  private readonly CACHE_DURATION_MS = 60 * 1000; // 1 minute cache duration

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
    // Check cache first
    const now = Date.now();
    const cached = this.loginCache.get(email);
    if (cached && (now - cached.timestamp) < this.CACHE_DURATION_MS) {
      return cached.data;
    }

    // In real implementation:
    // 1. Validate input
    // 2. Call API service to authenticate
    // 3. Store token via storage service
    // 4. Set current user
    // 5. Log authentication event

    // Simulate API delay for demonstration
    await new Promise(resolve => setTimeout(resolve, 1000));

    const mockUser: User = {
      id: 'user-123',
      email,
      name: 'John Doe',
      role: 'analyst',
    };

    this.currentUser = mockUser;
    // Cache the result
    this.loginCache.set(email, { data: mockUser, timestamp: now });

    return mockUser;
  }

  logout(): void {
    // Clear current user and tokens
    if (this.currentUser) {
      // Remove from cache when logging out
      this.loginCache.delete(this.currentUser.email);
    }
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
