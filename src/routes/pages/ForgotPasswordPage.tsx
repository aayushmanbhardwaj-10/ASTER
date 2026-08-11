import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormValidation } from '@/hooks/useFormValidation';
import type { FormValues } from '@/hooks/useFormValidation';
import { validateEmail } from '@/utils/validation';
import AuthInput from '@/components/molecules/AuthInput/AuthInput';
import styles from './ForgotPasswordPage.module.css';

const ForgotPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const initialValues: FormValues = {
    email: '',
  };

  const validate = (values: FormValues) => {
    return {
      email: validateEmail(values.email),
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
      // In a real app, we would call authService.forgotPassword
      // For now, we'll just simulate
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage(
        'If an account exists with that email, you will receive a reset link.'
      );
    } catch (error) {
      console.error('Forgot password failed', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.forgotPasswordPage}>
      <h1>Forgot Password</h1>
      <p>Enter your email to receive a password reset link.</p>
      <form onSubmit={handleSubmit} onBlur={handleBlur}>
        <AuthInput
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your email"
        />
        <button type="submit" disabled={loading || !isValid}>
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
      <p className={styles.loginLink}>
        Remember your password?{' '}
        <span onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;
