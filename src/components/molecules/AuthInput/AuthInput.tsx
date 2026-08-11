import React from 'react';
import styles from './AuthInput.module.css';

interface AuthInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  placeholder?: string;
  disabled?: boolean;
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  type,
  value,
  onChange,
  error,
  placeholder,
  disabled = false,
}) => {
  return (
    <div className={styles.inputGroup}>
      <label
        htmlFor={label.toLowerCase().replace(/\s/g, '')}
        className={styles.label}
      >
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(/\s/g, '')}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.error : ''}`}
        disabled={disabled}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default AuthInput;
