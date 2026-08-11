import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormValidation } from '@/hooks/useFormValidation';
import type { FormValues } from '@/hooks/useFormValidation';
import { validatePassword, validateConfirmPassword } from '@/utils/validation';
import AuthInput from '@/components/molecules/AuthInput/AuthInput';
import styles from './ResetPasswordPage.module.css';

const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const initialValues: FormValues = {
    password: '',
    confirmPassword: '',
  };

  const validate = (values: FormValues) => {
    return {
      password: validatePassword(values.password),
      confirmPassword: validateConfirmPassword(
        values.password,
        values.confirmPassword
      ),
    };
  };

  const { values, errors, isValid, handleChange, handleBlur, validateForm } =
    useFormValidation(initialValues, validate);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      // In a real app, we would get the token from URL and call authService.resetPassword
      // For now, we'll just simulate
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMessage('Password has been reset successfully. You can now login.');
    } catch (error) {
      console.error('Reset password failed', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.resetPasswordPage}>
      <h1>Reset Password</h1>
      <p>Enter a new password for your account.</p>
      <form onSubmit={handleSubmit} onBlur={handleBlur}>
        <AuthInput
          label="New Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Enter new password"
        />
        <AuthInput
          label="Confirm Password"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          placeholder="Confirm new password"
        />
        <button type="submit" disabled={loading || !isValid}>
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
      {!loading && message && (
        <p className={styles.loginLink}>
          <a onClick={(e) => {
            e.preventDefault();
            navigate('/login', { replace: true });
          }} href="/login">
            Login
          </a>
        </p>
      )}
    </div>
  );
};

export default ResetPasswordPage;
