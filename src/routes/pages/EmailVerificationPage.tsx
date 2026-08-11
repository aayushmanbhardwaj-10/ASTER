import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EmailVerificationPage.module.css';

const EmailVerificationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.emailVerificationPage}>
      <h1>Verify Your Email</h1>
      <p>
        We've sent a verification email to your address. Please check your inbox
        and click the link to verify your account.
      </p>
      <p className={styles.note}>
        Note: This is a simulation. In a real app, you would receive an actual
        email.
      </p>
      <button onClick={() => navigate('/login', { replace: true })}>
        Go to Login
      </button>
    </div>
  );
};

export default EmailVerificationPage;
