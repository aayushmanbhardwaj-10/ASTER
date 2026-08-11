import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'contained' | 'outline' | 'text';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  size = 'md',
  children,
  onClick,
  disabled = false,
  type = 'button',
  iconLeft,
  iconRight,
  loading = false,
  fullWidth = false,
  ariaLabel,
}) => {
  // Determine if we need aria-label (when there's no visible text content)
  const hasVisibleContent = children && (
    typeof children === 'string' ? children.trim() !== '' : !!children
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''} ${loading ? styles.loading : ''} ${fullWidth ? styles.fullWidth : ''}`}
      aria-label={!hasVisibleContent && ariaLabel ? ariaLabel : undefined}
    >
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      {loading ? <span className={styles.spinner}></span> : children}
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  );
};

export default React.memo(Button);
