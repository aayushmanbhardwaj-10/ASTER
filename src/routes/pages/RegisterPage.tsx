import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormValidation } from '@/hooks/useFormValidation';
import type { FormValues } from '@/hooks/useFormValidation';
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '@/utils/validation';
import AuthInput from '@/components/molecules/AuthInput/AuthInput';
import styles from './RegisterPage.module.css';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues: FormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validate = (values: FormValues) => {
    return {
      email: validateEmail(values.email),
      password: validatePassword(values.password),
      confirmPassword: validateConfirmPassword(
        values.password,
        values.confirmPassword
      ),
    };
  };

  const { values, errors, isValid, handleChange, handleBlur, validateForm } =
    useFormValidation(initialValues, validate);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }

    setLoading(true);

    try {
      // In a real app, we would call authService.register
      // For now, we'll just simulate a successful registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Redirect to email verification after successful registration
      navigate('/email-verification', { replace: true });
    } catch (error) {
      console.error('Registration failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerPage}>
      <h1>Create Account</h1>
      <p>Sign up for ASTER</p>
      <form onSubmit={handleRegister} onBlur={handleBlur}>
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
          placeholder="Create a password"
        />
        <AuthInput
          label="Confirm Password"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          placeholder="Confirm your password"
        />
        <button type="submit" disabled={loading || !isValid}>
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
      <p className={styles.loginLink}>
        Already have an account?{' '}
        <a onClick={(e) => {
          e.preventDefault();
          navigate('/login');
        }} href="/login">
          Login
        </a>
      </p>
    </div>
  );
};

export default RegisterPage;
