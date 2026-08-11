import React, { useState, useEffect } from 'react';
import styles from './ResponsiveSettingsPage.module.css';
import AuthService from '@/modules/auth/services/AuthService';

interface ResponsiveSettingsPageProps {}

const ResponsiveSettingsPage: React.FC<ResponsiveSettingsPageProps> = () => {
  const authService = new AuthService();
  const currentUser = authService.getCurrentUser();
  const [settings, setSettings] = useState({
    compactMode: false,
    reduceMotion: false,
    highContrast: false,
  });
  const [settingsStatus, setSettingsStatus] = useState<
    'idle' | 'saving' | 'success' | 'error'
  >('idle');

  // Load settings from localStorage on mount
  useEffect(() => {
    if (!currentUser) {
      return;
    }
    const savedSettings = localStorage.getItem('aster-responsive-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
        applySettings(parsed);
      } catch (e) {
        console.error('Failed to load responsive settings', e);
      }
    } else {
      // Apply default settings based on system preferences
      const defaultSettings = {
        compactMode: false,
        reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)')
          .matches,
        highContrast: false,
      };
      setSettings(defaultSettings);
      applySettings(defaultSettings);
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div className={styles.error}>User not found</div>;
  }

  const applySettings = (settingsToApply: typeof settings) => {
    // Apply compact mode
    if (settingsToApply.compactMode) {
      document.documentElement.setAttribute('data-compact', 'true');
    } else {
      document.documentElement.removeAttribute('data-compact');
    }

    // Apply reduce motion
    if (settingsToApply.reduceMotion) {
      document.documentElement.setAttribute('data-reduce-motion', 'true');
    } else {
      document.documentElement.removeAttribute('data-reduce-motion');
    }

    // Apply high contrast (placeholder - would need CSS updates)
    if (settingsToApply.highContrast) {
      document.documentElement.setAttribute('data-high-contrast', 'true');
    } else {
      document.documentElement.removeAttribute('data-high-contrast');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSettings(prev => ({ ...prev, [name]: checked }));
  };

  const handleSave = () => {
    setSettingsStatus('saving');

    // Simulate saving to backend
    setTimeout(() => {
      // Apply settings immediately
      applySettings(settings);

      // Save to localStorage
      localStorage.setItem(
        'aster-responsive-settings',
        JSON.stringify(settings)
      );

      setSettingsStatus('success');
      setTimeout(() => setSettingsStatus('idle'), 2000);
    }, 1000);
  };

  return (
    <div className={styles.responsiveSettingsPage}>
      <div className={styles.pageHeader}>
        <h1>Responsive Settings</h1>
        <p className={styles.pageDescription}>
          Customize how ASTER adapts to your device and preferences
        </p>
      </div>

      <div className={styles.settingsCard}>
        <div className={styles.settingsSection}>
          <h2>Layout & Density</h2>
          <p className={styles.sectionDescription}>
            Adjust the spacing and density of the interface
          </p>

          <div className={styles.settingItem}>
            <input
              type="checkbox"
              id="compactMode"
              name="compactMode"
              checked={settings.compactMode}
              onChange={handleChange}
            />
            <label htmlFor="compactMode" className={styles.settingLabel}>
              Compact Mode
            </label>
            <p className={styles.settingDescription}>
              Reduce spacing for more information density on screen
            </p>
          </div>
        </div>

        <div className={styles.settingsSection}>
          <h2>Motion & Animation</h2>
          <p className={styles.sectionDescription}>
            Control animations and motion effects
          </p>

          <div className={styles.settingItem}>
            <input
              type="checkbox"
              id="reduceMotion"
              name="reduceMotion"
              checked={settings.reduceMotion}
              onChange={handleChange}
            />
            <label htmlFor="reduceMotion" className={styles.settingLabel}>
              Reduce Motion
            </label>
            <p className={styles.settingDescription}>
              Minimize non-essential animations and motion effects
            </p>
          </div>
        </div>

        <div className={styles.settingsSection}>
          <h2>Accessibility</h2>
          <p className={styles.sectionDescription}>
            Enhance visibility and accessibility
          </p>

          <div className={styles.settingItem}>
            <input
              type="checkbox"
              id="highContrast"
              name="highContrast"
              checked={settings.highContrast}
              onChange={handleChange}
            />
            <label htmlFor="highContrast" className={styles.settingLabel}>
              High Contrast Mode
            </label>
            <p className={styles.settingDescription}>
              Increase color contrast for better visibility
            </p>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          onClick={handleSave}
          disabled={settingsStatus === 'saving'}
          className={styles.saveButton}
        >
          {settingsStatus === 'saving'
            ? 'Saving...'
            : 'Save Responsive Settings'}
        </button>
      </div>

      {settingsStatus !== 'idle' && (
        <div className={styles.statusMessage}>
          {settingsStatus === 'success' && (
            <span className={styles.statusSuccess}>
              ����������������������✓ Responsive settings saved successfully!
            </span>
          )}
          {settingsStatus === 'error' && (
            <span className={styles.statusError}>
              ����������������������✗ Failed to save responsive settings. Please
              try again.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ResponsiveSettingsPage;
