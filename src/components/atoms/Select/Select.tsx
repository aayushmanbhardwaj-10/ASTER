import React, { memo } from 'react';
import styles from './Select.module.css';

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  options: Option[];
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

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  placeholder,
  options,
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

  // Generate ID for the select if not provided
  const selectId = label.toLowerCase().replace(/\s/g, '');

  // Generate ID for the message element
  const messageId = `${selectId}-message`;

  return (
    <div
      className={`${styles.selectGroup} ${fullWidth ? styles.fullWidth : ''}`}
    >
      <label
        htmlFor={selectId}
        className={styles.label}
      >
        {label}
      </label>
      <div className={styles.selectWrapper}>
        {leftIcon && <span className={styles.selectIcon}>{leftIcon}</span>}
        <select
          id={selectId}
          value={value.toString()}
          onChange={onChange}
          className={`${styles.select}
            ${hasError ? styles.error : ''}
            ${hasSuccess ? styles.success : ''}
            ${hasWarning ? styles.warning : ''}
            ${(disabled || loading) ? styles.disabled : ''}`}
          disabled={disabled || loading}
          aria-invalid={hasError || hasWarning ? true : undefined}
          aria-describedby={ariaDescribedBy || (hasError || hasSuccess || hasWarning ? messageId : undefined)}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {(loading || rightIcon) && (
          <span className={styles.selectIcon}>
            {loading ? (
              <span className={styles.spinner}></span>
            ) : (
              <span>{rightIcon}</span>
            )}
          </span>
        )}
        {/* Dropdown indicator */}
        <span className={styles.dropdownIndicator}>
          {/* We can use a simple SVG or an icon; for now, we'll use a caret */}
          {/* In a real design system, we would use an icon from the icon set */}
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
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

export default memo(Select);
