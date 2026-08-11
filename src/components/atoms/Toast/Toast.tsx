import React, { useEffect, useRef, useMemo, memo } from 'react';
import styles from './Toast.module.css';

interface ToastProps {
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  onClose?: () => void;
  autoDismiss?: boolean;
  delay?: number;
}

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  onClose,
  autoDismiss = true,
  delay = 5000,
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoDismiss) {
      timeoutRef.current = setTimeout(() => {
        onClose?.();
      }, delay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [autoDismiss, delay, onClose]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoDismiss) {
      timeoutRef.current = setTimeout(() => {
        onClose?.();
      }, delay);
    }
  };

  // Get the color based on type - memoized to prevent recalculation
  const color = useMemo(() => {
    switch (type) {
      case 'info':
        return '#17A2B8';
      case 'success':
        return '#28A745';
      case 'warning':
        return '#FFC107';
      case 'error':
        return '#DC3545';
      default:
        return '#6C757D';
    }
  }, [type]);

  return (
    <div
      className={`${styles.toast} ${styles[type]}`}
      ref={toastRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="alert"
      aria-live="polite"
    >
      <div className={styles.toastIcon}>
        {/* We'll use a simple colored circle for the icon */}
        <span
          className={styles.toastIconDot}
          style={{ backgroundColor: color }}
        />
      </div>
      <div className={styles.toastMessage}>{message}</div>
      <button
        className={styles.toastClose}
        onClick={() => onClose?.()}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
};

export default memo(Toast);
