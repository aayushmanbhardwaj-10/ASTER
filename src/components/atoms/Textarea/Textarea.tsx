import React from 'react';
import styles from './Textarea.module.css';

interface TextareaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string | null;
  success?: boolean;
  warning?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rows?: number;
  loading?: boolean;
  ariaDescribedBy?: string;
}

const Textarea: React.FC<TextareaProps> = ({
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
  rows = 3,
  loading = false,
  ariaDescribedBy,
}) => {
  // Determine the validation state
  const hasError = !!error;
  const hasSuccess = success && !hasError;
  const hasWarning = warning && !hasError && !hasSuccess;

  // Generate ID for the textarea if not provided
  const textareaId = label.toLowerCase().replace(/\s/g, '');

  // Generate ID for the message element
  const messageId = `${textareaId}-message`;

  return (
    <div
      className={`${styles.textareaGroup} ${fullWidth ? styles.fullWidth : ''}`}
    >
      <label
        htmlFor={textareaId}
        className={styles.label}
      >
        {label}
      </label>
      <div className={styles.textareaWrapper}>
        {leftIcon && <span className={styles.textareaIcon}>{leftIcon}</span>}
        <textarea
          id={textareaId}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${styles.textarea}
            ${hasError ? styles.error : ''}
            ${hasSuccess ? styles.success : ''}
            ${hasWarning ? styles.warning : ''}
            ${(disabled || loading) ? styles.disabled : ''}`}
          disabled={disabled || loading}
          rows={rows}
          style={{ resize: 'vertical' }}
          aria-invalid={hasError || hasWarning ? true : undefined}
          aria-describedby={ariaDescribedBy || (hasError || hasSuccess || hasWarning ? messageId : undefined)}
        />
        {loading ? (
          <span className={styles.textareaIcon}>
            <span className={styles.spinner}></span>
          </span>
        ) : rightIcon && (
          <span className={styles.textareaIcon}>{rightIcon}</span>
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

export default React.memo(Textarea);
