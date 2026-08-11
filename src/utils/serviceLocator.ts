// Simple service locator for dependency injection
// This allows registering and resolving dependencies across the application

interface ServiceLocator {
  getService: <U>(token: string) => U | undefined;
  registerService: <U>(token: string, service: U) => void;
  hasService: (token: string) => boolean;
}

class Container implements ServiceLocator {
  private services: Map<string, any> = new Map();

  getService<U>(token: string): U | undefined {
    return this.services.get(token);
  }

  registerService<U>(token: string, service: U): void {
    this.services.set(token, service);
  }

  hasService(token: string): boolean {
    return this.services.has(token);
  }
}

// Export a singleton instance
export const serviceLocator = new Container();

// Export type for convenience
export type { ServiceLocator };
