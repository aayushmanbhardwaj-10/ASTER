import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormValidation } from '@/hooks/useFormValidation';
import type { FormValues } from '@/hooks/useFormValidation';
import { validateEmail, validatePassword } from '@/utils/validation';
import AuthInput from '@/components/molecules/AuthInput/AuthInput';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || '/dashboard';

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const validate = (values: FormValues) => {
    return {
      email: validateEmail(values.email),
      password: validatePassword(values.password),
    };
  };

  const { values, errors, isValid, handleChange, handleBlur, validateForm } =
    useFormValidation(initialValues, validate);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }

    setLoading(true);

    try {
      // In a real app, we would call authService.login
      // For now, we'll just simulate
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Login successful, redirect to the intended page
      navigate(from, { replace: true });
    } catch (error) {
      // In a real app, we would show an error message
      console.error('Login failed', error);
      // For now, we'll just log and stay on the page
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <h1>Login to ASTER</h1>
      <form onSubmit={handleLogin} onBlur={handleBlur}>
        <AuthInput
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter your email"
        />
        <AuthInput
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Enter your password"
        />
        <button type="submit" disabled={loading || !isValid}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
