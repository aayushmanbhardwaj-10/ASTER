import React from 'react';
import LoadingLayout from './LoadingLayout/LoadingLayout';
import styles from './LoadingFallback.module.css';

interface LoadingFallbackProps {
  /** Optional message to display during loading */
  message?: string;
  /** Optional tip to display during loading */
  tip?: string;
  /** Variant of loading layout: skeleton, spinner, or progress */
  variant?: 'skeleton' | 'spinner' | 'progress';
  /** Title for skeleton loader */
  skeletonTitle?: string;
  /** Subtitle for skeleton loader */
  skeletonSubtitle?: string;
  /** Number of skeleton items */
  skeletonItems?: number;
}

/**
 * LoadingFallback component provides a consistent loading experience
 * with configurable variants for different loading states
 */
const LoadingFallback: React.FC<LoadingFallbackProps> = ({
  message = 'Loading...',
  tip,
  variant = 'skeleton',
  skeletonTitle,
  skeletonSubtitle,
  skeletonItems = 3,
}) => {
  return (
    <div className={styles.loadingFallback}>
      <LoadingLayout
        variant={variant}
        title={variant === 'spinner' ? 'ASTER' : skeletonTitle}
        subtitle={
          variant === 'spinner'
            ? message
            : variant === 'progress'
              ? message
              : skeletonSubtitle
        }
        showActions={false}
        skeletonItems={skeletonItems}
      />
      {tip && (
        <div className={styles.loadingTip}>
          <span role="img" aria-label="tip">���������💡</span>
          <span>{tip}</span>
        </div>
      )}
    </div>
  );
};

export default LoadingFallback;