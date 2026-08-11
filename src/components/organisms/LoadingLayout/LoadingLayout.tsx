import React from 'react';
import styles from './LoadingLayout.module.css';

interface LoadingLayoutProps {
  variant?: 'skeleton' | 'spinner' | 'progress';
  title?: string;
  subtitle?: string;
  showActions?: boolean;
  actionLabel?: string;
  onActionClick?: () => void;
  skeletonItems?: number;
  height?: number | string;
}

const LoadingLayout: React.FC<LoadingLayoutProps> = ({
  variant = 'skeleton',
  title,
  subtitle,
  showActions = false,
  actionLabel = 'Retry',
  onActionClick,
  skeletonItems = 3,
  height,
}) => {
  // Generate skeleton items based on count
  const skeletonItemsArray = Array.from({ length: skeletonItems }, (_, i) => i);

  return (
    <div
      className={`${styles.loadingLayout} ${styles[variant]}`}
      style={{ height: height }}
    >
      <div className={styles.loadingContent}>
        {variant === 'skeleton' && (
          <>
            {title && (
              <div className={styles.skeletonTitle}>
                {skeletonItemsArray.map((_, index) => (
                  <div key={index} className={styles.skeletonLine} />
                ))}
              </div>
            )}
            {subtitle && (
              <div className={styles.skeletonSubtitle}>
                {skeletonItemsArray.map((_, index) => (
                  <div key={index} className={styles.skeletonLine} />
                ))}
              </div>
            )}
            <div className={styles.skeletonContent}>
              {skeletonItemsArray.map((_, index) => (
                <div key={index} className={styles.skeletonBlock} />
              ))}
            </div>
          </>
        )}
        {variant === 'spinner' && (
          <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
            {title && <h3 className={styles.spinnerTitle}>{title}</h3>}
            {subtitle && <p className={styles.spinnerSubtitle}>{subtitle}</p>}
          </div>
        )}
        {variant === 'progress' && (
          <div className={styles.progressContainer}>
            {title && <h3 className={styles.progressTitle}>{title}</h3>}
            {subtitle && <p className={styles.progressSubtitle}>{subtitle}</p>}
            <div className={styles.progressBar}>
              <div className={styles.progressFill}></div>
            </div>
          </div>
        )}
        {showActions && onActionClick && (
          <button className={styles.actionButton} onClick={onActionClick}>
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default LoadingLayout;