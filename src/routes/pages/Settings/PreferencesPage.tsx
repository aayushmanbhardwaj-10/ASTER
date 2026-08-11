import React, { useState } from 'react';
import styles from './PreferencesPage.module.css';
import AuthService from '@/modules/auth/services/AuthService';

interface PreferencesPageProps {}

const PreferencesPage: React.FC<PreferencesPageProps> = () => {
  const authService = new AuthService();
  const currentUser = authService.getCurrentUser();
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: true,
    newsletter: false,
    dataSharing: false,
    autoSave: true,
  });
  const [preferencesStatus, setPreferencesStatus] = useState<
    'idle' | 'saving' | 'success' | 'error'
  >('idle');

  // Load preferences from localStorage on mount
  React.useEffect(() => {
    if (!currentUser) {
      return;
    }
    const savedPreferences = localStorage.getItem('aster-preferences');
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (e) {
        console.error('Failed to load preferences', e);
      }
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div className={styles.error}>User not found</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setPreferences(prev => ({ ...prev, [name]: checked }));
  };

  const handleSave = () => {
    setPreferencesStatus('saving');

    // Simulate saving to backend
    setTimeout(() => {
      // Save to localStorage
      localStorage.setItem('aster-preferences', JSON.stringify(preferences));

      setPreferencesStatus('success');
      setTimeout(() => setPreferencesStatus('idle'), 2000);
    }, 1000);
  };

  return (
    <div className={styles.preferencesPage}>
      <div className={styles.pageHeader}>
        <h1>Preferences</h1>
        <p className={styles.pageDescription}>
          Customize your ASTER experience
        </p>
      </div>

      <div className={styles.preferencesCard}>
        <div className={styles.preferencesSection}>
          <h2>Notifications</h2>
          <div className={styles.preferenceItem}>
            <input
              type="checkbox"
              id="emailNotifications"
              name="emailNotifications"
              checked={preferences.emailNotifications}
              onChange={handleChange}
            />
            <label
              htmlFor="emailNotifications"
              className={styles.preferenceLabel}
            >
              Email Notifications
            </label>
            <p className={styles.preferenceDescription}>
              Receive important updates and alerts via email
            </p>
          </div>

          <div className={styles.preferenceItem}>
            <input
              type="checkbox"
              id="pushNotifications"
              name="pushNotifications"
              checked={preferences.pushNotifications}
              onChange={handleChange}
            />
            <label
              htmlFor="pushNotifications"
              className={styles.preferenceLabel}
            >
              Push Notifications
            </label>
            <p className={styles.precisionDescription}>
              Get real-time alerts in your browser
            </p>
          </div>

          <div className={styles.preferenceItem}>
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={preferences.newsletter}
              onChange={handleChange}
            />
            <label htmlFor="newsletter" className={styles.preferenceLabel}>
              Monthly Newsletter
            </label>
            <p className={styles.preferenceDescription}>
              Stay updated with financial insights and platform news
            </p>
          </div>
        </div>

        <div className={styles.preferencesSection}>
          <h2>Privacy & Data</h2>
          <div className={styles.preferenceItem}>
            <input
              type="checkbox"
              id="dataSharing"
              name="dataSharing"
              checked={preferences.dataSharing}
              onChange={handleChange}
            />
            <label htmlFor="dataSharing" className={styles.preferenceLabel}>
              Share Anonymous Usage Data
            </label>
            <p className={styles.preferenceDescription}>
              Help us improve ASTER by sharing anonymized usage statistics
            </p>
          </div>
        </div>

        <div className={styles.preferencesSection}>
          <h2>Workplace</h2>
          <div className={styles.preferencesItem}>
            <input
              type="checkbox"
              id="autoSave"
              name="autoSave"
              checked={preferences.autoSave}
              onChange={handleChange}
            />
            <label htmlFor="autoSave" className={styles.precisionLabel}>
              Auto-save Models and Analyses
            </label>
            <p className={styles.precisionDescription}>
              Automatically save your work to prevent data loss
            </p>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          onClick={handleSave}
          disabled={preferencesStatus === 'saving'}
          className={styles.saveButton}
        >
          {preferencesStatus === 'saving' ? 'Saving...' : 'Save Preferences'}
        </button>
      </div>

      {preferencesStatus !== 'idle' && (
        <div className={styles.statusMessage}>
          {preferencesStatus === 'success' && (
            <span className={styles.statusSuccess}>
              �������������������������������������������� ������������������������������������������ ������������������������������������������ ��������������������������������������✓ Preferences saved
              successfully!
            </span>
          )}
          {preferencesStatus === 'error' && (
            <span className={styles.statusError}>
              �������������������������������������������� ������������������������������������������ ������������������������������������������ ��������������������������������������✗ Failed to save
              preferences. Please try again.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default PreferencesPage;