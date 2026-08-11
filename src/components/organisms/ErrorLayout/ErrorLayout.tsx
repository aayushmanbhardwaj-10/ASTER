import React from 'react';
import styles from './ErrorLayout.module.css';

interface ErrorLayoutProps {
  statusCode?: number;
  title: string;
  description: string;
  actionLabel?: string;
  onActionClick?: () => void;
  showHomeAction?: boolean;
}

const ErrorLayout: React.FC<ErrorLayoutProps> = ({
  statusCode,
  title,
  description,
  actionLabel = 'Retry',
  onActionClick,
  showHomeAction = true,
}) => {
  return (
    <div className={styles.errorLayout}>
      <div className={styles.errorContent}>
        {statusCode && <div className={styles.statusCode}>{statusCode}</div>}
        <h1 className={styles.errorTitle}>{title}</h1>
        <p className={styles.errorDescription}>{description}</p>
        <div className={styles.errorActions}>
          {showHomeAction && (
            <button
              className={styles.homeButton}
              onClick={() => {
                // In a real app, this would navigate to home
                window.location.href = '/';
              }}
            >
              Home
            </button>
          )}
          {onActionClick && (
            <button className={styles.actionButton} onClick={onActionClick}>
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorLayout;
