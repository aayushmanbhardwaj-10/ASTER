import * as React from 'react';
import LoadingFallback from './LoadingFallback';
import styles from './LoadingErrorBoundary.module.css';

interface LoadingErrorBoundaryProps {
  children: React.ReactNode;
}

interface LoadingErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error boundary for Suspense lazy loading boundaries.
 * Catches loading errors and provides a fallback UI.
 */
class LoadingErrorBoundary extends React.Component<LoadingErrorBoundaryProps, LoadingErrorBoundaryState> {
  public state: LoadingErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): LoadingErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Lazy loading boundary caught an error:', error, errorInfo);
    // You could also report the error to an error monitoring service here
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className={styles.loadingErrorBoundary}>
          <LoadingFallback
            variant="skeleton"
            skeletonTitle="ASTER"
            skeletonSubtitle="Something went wrong loading this page"
            skeletonItems={3}
            message="Unable to load this section"
            tip="Please try refreshing the page or contact support if the issue persists"
          />
          <button
            className={styles.retryButton}
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default LoadingErrorBoundary;