import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  type?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string | null;
  success?: boolean;
  warning?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  ariaDescribedBy?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  value,
  onChange,
  placeholder,
  error,
  success = false,
  warning = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  loading = false,
  ariaDescribedBy,
}) => {
  // Determine the validation state
  const hasError = !!error;
  const hasSuccess = success && !hasError;
  const hasWarning = warning && !hasError && !hasSuccess;

  // Generate ID for the input if not provided
  const inputId = label.toLowerCase().replace(/\s/g, '');

  // Generate ID for the message element
  const messageId = `${inputId}-message`;

  return (
    <div
      className={`${styles.inputGroup} ${fullWidth ? styles.fullWidth : ''}`}
    >
      <label
        htmlFor={inputId}
        className={styles.label}
      >
        {label}
      </label>
      <div className={styles.inputWrapper}>
        {leftIcon && <span className={styles.inputIcon}>{leftIcon}</span>}
        <input
          type={type}
          id={inputId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles.input}
            ${hasError ? styles.error : ''}
            ${hasSuccess ? styles.success : ''}
            ${hasWarning ? styles.warning : ''}
            ${(disabled || loading) ? styles.disabled : ''}`}
          disabled={disabled || loading}
          aria-invalid={hasError || hasWarning ? true : undefined}
          aria-describedby={ariaDescribedBy || (hasError || hasSuccess || hasWarning ? messageId : undefined)}
        />
        {loading ? (
          <span className={styles.inputIcon}>
            <span className={styles.spinner}></span>
          </span>
        ) : rightIcon && (
          <span className={styles.inputIcon}>{rightIcon}</span>
        )}
      </div>
      {(error || success || warning) && (
        <p
          id={messageId}
          className={`
            ${styles.errorMessage}
            ${hasSuccess && !hasError ? styles.success : ''}
            ${hasWarning && !hasError && !hasSuccess ? styles.warning : ''}
          `}
          role="alert"
        >
          {error || (hasSuccess ? 'Success!' : '') || (hasWarning ? 'Warning!' : '')}
        </p>
      )}
    </div>
  );
};

export default React.memo(Input);
