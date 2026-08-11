import React, { useState, useEffect } from 'react';
import styles from './SecurityPage.module.css';
import AuthService from '@/modules/auth/services/AuthService';

interface SecurityPageProps {}

const SecurityPage: React.FC<SecurityPageProps> = () => {
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
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [twoFactorStatus, setTwoFactorStatus] = useState<
    'idle' | 'enabling' | 'disabling' | 'success' | 'error'
  >('idle');
  const [activeSessions, setActiveSessions] = useState<
    Array<{
      id: string;
      device: string;
      location: string;
      ip: string;
      lastActive: string;
      isCurrent: boolean;
    }>
  >([]);

  // Load active sessions from localStorage (simulated)
  useEffect(() => {
    if (!currentUser) {
      return;
    }
    const savedSessions = localStorage.getItem('aster-active-sessions');
    if (savedSessions) {
      try {
        const parsed = JSON.parse(savedSessions);
        setActiveSessions(parsed);
      } catch (e) {
        console.error('Failed to load active sessions', e);
        // Default mock data
        setActiveSessions([
          {
            id: 'sess-1',
            device: 'MacBook Pro (Safari)',
            location: 'New York, US',
            ip: '192.168.1.100',
            lastActive: 'Just now',
            isCurrent: true,
          },
          {
            id: 'sess-2',
            device: 'iPhone 13 (Chrome)',
            location: 'Boston, US',
            ip: '192.168.1.101',
            lastActive: '2 hours ago',
            isCurrent: false,
          },
        ]);
      }
    } else {
      // Default mock data
      setActiveSessions([
        {
          id: 'sess-1',
          device: 'MacBook Pro (Safari)',
          location: 'New York, US',
          ip: '192.168.1.100',
          lastActive: 'Just now',
          isCurrent: true,
        },
        {
          id: 'sess-2',
          device: 'iPhone 13 (Chrome)',
          location: 'Boston, US',
          ip: '192.168.1.101',
          lastActive: '2 hours ago',
          isCurrent: false,
        },
      ]);
      localStorage.setItem(
        'aster-active-sessions',
        JSON.stringify([
          {
            id: 'sess-1',
            device: 'MacBook Pro (Safari)',
            location: 'New York, US',
            ip: '192.168.1.100',
            lastActive: 'Just now',
            isCurrent: true,
          },
          {
            id: 'sess-2',
            device: 'iPhone 13 (Chrome)',
            location: 'Boston, US',
            ip: '192.168.1.101',
            lastActive: '2 hours ago',
            isCurrent: false,
          },
        ])
      );
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div className={styles.error}>User not found</div>;
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordValues(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
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

  const handle2FAToggle = async () => {
    setTwoFactorStatus(is2FAEnabled ? 'disabling' : 'enabling');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Toggle 2FA state
      setIs2FAEnabled(!is2FAEnabled);
      setTwoFactorStatus('success');
      setTimeout(() => setTwoFactorStatus('idle'), 2000);
    } catch (_error) {
      console.error(_error);
      setTwoFactorStatus('error');
      setTimeout(() => setTwoFactorStatus('idle'), 2000);
    }
  };

  const handleTerminateSession = (sessionId: string) => {
    // In a real app, this would call an API to terminate the session
    setActiveSessions(prev => prev.filter(session => session.id !== sessionId));
    localStorage.setItem(
      'aster-active-sessions',
      JSON.stringify(activeSessions.filter(session => session.id !== sessionId))
    );
  };

  return (
    <div className={styles.securityPage}>
      <div className={styles.pageHeader}>
        <h1>Security Settings</h1>
        <p className={styles.pageDescription}>
          Protect your account with advanced security features
        </p>
      </div>

      <div className={styles.securityCard}>
        <div className={styles.securitySection}>
          <h2>Password Security</h2>
          <p className={styles.sectionDescription}>
            Change your password regularly to keep your account secure
          </p>

          <form onSubmit={handlePasswordSubmit} className={styles.passwordForm}>
            <div className={styles.formGroup}>
              <label htmlFor="currentPassword" className={styles.formLabel}>
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwordValues.currentPassword}
                onChange={handlePasswordChange}
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
                onChange={handlePasswordChange}
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
                onChange={handlePasswordChange}
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

        {changePasswordStatus !== 'idle' && (
          <div className={styles.passwordStatus}>
            {changePasswordStatus === 'success' && (
              <span className={styles.statusSuccess}>
                ��������������✓ Password changed successfully!
              </span>
            )}
            {changePasswordStatus === 'error' && (
              <span className={styles.statusError}>
                ������������������✗ Failed to change password. Please try again.
              </span>
            )}
          </div>
        )}

        <div className={styles.securitySection}>
          <h2>Two-Factor Authentication</h2>
          <p className={styles.sectionDescription}>
            Add an extra layer of security to your account
          </p>

          <div className={styles.twoFaContainer}>
            <div className={styles.twoFaInfo}>
              <h3>Two-Factor Authentication</h3>
              <p>
                Currently {is2FAEnabled ? 'enabled' : 'disabled'}. When enabled,
                you'll need to provide a verification code from your
                authenticator app in addition to your password when signing in.
              </p>
            </div>

            <button
              onClick={handle2FAToggle}
              disabled={
                twoFactorStatus === 'enabling' ||
                twoFactorStatus === 'disabling'
              }
              className={`${styles.twoFaButton} ${is2FAEnabled ? styles.twoFaEnabled : styles.twoFaDisabled}`}
            >
              {twoFactorStatus === 'enabling'
                ? 'Enabling...'
                : twoFactorStatus === 'disabling'
                  ? 'Disabling...'
                  : is2FAEnabled
                    ? 'Disable 2FA'
                    : 'Enable 2FA'}
            </button>
          </div>

          {twoFactorStatus !== 'idle' && (
            <div className={styles.twoFaStatus}>
              {twoFactorStatus === 'success' && (
                <span className={styles.statusSuccess}>
                  ��������������✓ Two-factor authentication{' '}
                  {is2FAEnabled ? 'enabled' : 'disabled'} successfully!
                </span>
              )}
              {twoFactorStatus === 'error' && (
                <span className={styles.statusError}>
                  ������������������✗ Failed to{' '}
                  {is2FAEnabled ? 'disable' : 'enable'} two-factor
                  authentication. Please try again.
                </span>
              )}
            </div>
          )}
        </div>

        <div className={styles.securitySection}>
          <h2>Active Sessions</h2>
          <p className={styles.sectionDescription}>
            Review and manage devices currently signed into your account
          </p>

          <div className={styles.sessionsList}>
            {activeSessions.map(session => (
              <div key={session.id} className={styles.sessionItem}>
                <div className={styles.sessionInfo}>
                  <div className={styles.sessionDevice}>
                    <span className={styles.sessionDeviceIcon}>
                      ��������������������������
                    </span>
                    <span>{session.device}</span>
                  </div>
                  <div className={styles.sessionLocation}>
                    <span className={styles.sessionLocationIcon}>
                      ����������
                    </span>
                    <span>{session.location}</span>
                  </div>
                </div>
                <div className={styles.sessionDetails}>
                  <div className={styles.sessionDetail}>
                    <span className={styles.sessionDetailLabel}>
                      IP Address:
                    </span>
                    <span className={styles.sessionDetailValue}>
                      {session.ip}
                    </span>
                  </div>
                  <div className={styles.sessionDetail}>
                    <span className={styles.sessionDetailLabel}>
                      Last Active:
                    </span>
                    <span className={styles.sessionDetailValue}>
                      {session.lastActive}
                    </span>
                  </div>
                </div>
                {session.isCurrent ? (
                  <span className={styles.sessionCurrent}>Current Session</span>
                ) : (
                  <button
                    onClick={() => handleTerminateSession(session.id)}
                    className={styles.terminateButton}
                  >
                    Sign Out
                  </button>
                )}
              </div>
            ))}
          </div>

          {activeSessions.length === 0 && (
            <div className={styles.noSessions}>
              <p>No active sessions found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
