import React, { useState } from 'react';
import styles from './AccountPage.module.css';
import AuthService from '@/modules/auth/services/AuthService';

interface AccountPageProps {}

const AccountPage: React.FC<AccountPageProps> = () => {
  const authService = new AuthService();
  const currentUser = authService.getCurrentUser();
  const [passwordValues, setPasswordValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [changePasswordStatus, setChangePasswordStatus] = useState<
    'idle' | 'changing' | 'success' | 'error'
  >('idle');

  if (!currentUser) {
    return <div className={styles.error}>User not found</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !passwordValues.currentPassword ||
      !passwordValues.newPassword ||
      !passwordValues.confirmNewPassword
    ) {
      setChangePasswordStatus('error');
      setTimeout(() => setChangePasswordStatus('idle'), 3000);
      return;
    }

    if (passwordValues.newPassword !== passwordValues.confirmNewPassword) {
      setChangePasswordStatus('error');
      setTimeout(() => setChangePasswordStatus('idle'), 3000);
      return;
    }

    if (passwordValues.newPassword.length < 8) {
      setChangePasswordStatus('error');
      setTimeout(() => setChangePasswordStatus('idle'), 3000);
      return;
    }

    setChangePasswordStatus('changing');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In a real app, this would call the authentication service
      // For now, we'll just reset the form
      setPasswordValues({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      });

      setChangePasswordStatus('success');
      setTimeout(() => setChangePasswordStatus('idle'), 3000);
    } catch (_error) {
      console.error(_error);
      setChangePasswordStatus('error');
      setTimeout(() => setChangePasswordStatus('idle'), 3000);
    }
  };

  return (
    <div className={styles.accountPage}>
      <div className={styles.pageHeader}>
        <h1>Account Settings</h1>
        <p className={styles.pageDescription}>
          Manage your account information and security settings
        </p>
      </div>

      <div className={styles.accountCard}>
        <div className={styles.accountInfo}>
          <h2>Account Information</h2>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Username:</span>
            <span className={styles.infoValue}>
              {currentUser.email.split('@')[0]}
            </span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Email:</span>
            <span className={styles.infoValue}>{currentUser.email}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Role:</span>
            <span className={styles.infoValue}>{currentUser.role}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Account Created:</span>
            <span className={styles.infoValue}>Jan 15, 2024</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Last Login:</span>
            <span className={styles.infoValue}>Today, 2:30 PM</span>
          </div>
        </div>

        <div className={styles.changePasswordSection}>
          <h2>Change Password</h2>
          <p className={styles.sectionDescription}>
            Update your password to keep your account secure
          </p>

          <form onSubmit={handleSubmit} className={styles.passwordForm}>
            <div className={styles.formGroup}>
              <label htmlFor="currentPassword" className={styles.formLabel}>
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwordValues.currentPassword}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="newPassword" className={styles.formLabel}>
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwordValues.newPassword}
                onChange={handleChange}
                className={styles.formInput}
                required
                minLength={8}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmNewPassword" className={styles.formLabel}>
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                value={passwordValues.confirmNewPassword}
                onChange={handleChange}
                className={styles.formInput}
                required
                minLength={8}
              />
            </div>

            <button
              type="submit"
              disabled={changePasswordStatus === 'changing'}
              className={styles.changePasswordButton}
            >
              {changePasswordStatus === 'changing'
                ? 'Changing...'
                : 'Change Password'}
            </button>
          </form>
        </div>
      </div>

      {changePasswordStatus !== 'idle' && (
        <div className={styles.statusMessage}>
          {changePasswordStatus === 'success' && (
            <span className={styles.statusSuccess}>
              ������✓ Password changed successfully!
            </span>
          )}
          {changePasswordStatus === 'error' && (
            <span className={styles.statusError}>
              ��������✗ Failed to change password. Please try again.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountPage;
