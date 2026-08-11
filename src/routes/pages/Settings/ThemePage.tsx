import React, { useState } from 'react';
import styles from './ThemePage.module.css';
import AuthService from '@/modules/auth/services/AuthService';

interface ThemePageProps {}

const ThemePage: React.FC<ThemePageProps> = () => {
  const authService = new AuthService();
  const currentUser = authService.getCurrentUser();
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [themeStatus, setThemeStatus] = useState<
    'idle' | 'saving' | 'success' | 'error'
  >('idle');

  // Initialize theme from localStorage or system preference
  React.useEffect(() => {
    if (!currentUser) {
      return;
    }
    const savedTheme = localStorage.getItem('aster-theme') as
      'light' | 'dark' | 'system' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      // Apply the actual theme (handle 'system' by checking preference)
      if (savedTheme === 'system') {
        const prefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        applyTheme(prefersDark ? 'dark' : 'light');
      } else {
        applyTheme(savedTheme);
      }
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setTheme(prefersDark ? 'dark' : 'light');
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div className={styles.error}>User not found</div>;
  }

  const applyTheme = (themeToApply: 'light' | 'dark') => {
    if (themeToApply === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.value as 'light' | 'dark' | 'system';
    setTheme(newTheme);

    setThemeStatus('saving');

    // Simulate saving to backend
    setTimeout(() => {
      if (newTheme === 'system') {
        const prefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        applyTheme(prefersDark ? 'dark' : 'light');
      } else {
        applyTheme(newTheme);
      }

      // Save to localStorage
      localStorage.setItem('aster-theme', newTheme);

      setThemeStatus('success');
      setTimeout(() => setThemeStatus('idle'), 2000);
    }, 1000);
  };

  return (
    <div className={styles.themePage}>
      <div className={styles.pageHeader}>
        <h1>Theme Settings</h1>
        <p className={styles.pageDescription}>
          customize your visual experience
        </p>
      </div>

      <div className={styles.themeCard}>
        <div className={styles.themeOptions}>
          <div className={styles.themeOption}>
            <input
              type="radio"
              id="themeSystem"
              name="theme"
              value="system"
              checked={theme === 'system'}
              onChange={handleThemeChange}
            />
            <label htmlFor="themeSystem" className={styles.themeLabel}>
              System Default
            </label>
            <p className={styles.themeDescription}>
              Follow your system's light/dark mode setting
            </p>
          </div>

          <div className={styles.themeOption}>
            <input
              type="radio"
              id="themeLight"
              name="theme"
              value="light"
              checked={theme === 'light'}
              onChange={handleThemeChange}
            />
            <label htmlFor="themeLight" className={styles.themeLabel}>
              Light Mode
            </label>
            <p className={styles.themeDescription}>
              Clean, bright interface for daytime use
            </p>
          </div>

          <div className={styles.themeOption}>
            <input
              type="radio"
              id="themeDark"
              name="theme"
              value="dark"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
            />
            <label htmlFor="themeDark" className={styles.themeLabel}>
              Dark Mode
            </label>
            <p className={styles.themeDescription}>
              Easy-on-the-eyes interface for nighttime use
            </p>
          </div>
        </div>

        <div className={styles.themePreview}>
          <h3>Preview</h3>
          <div className={styles.previewContainer}>
            <div className={styles.previewItem}>
              <div className={styles.previewHeader}>
                <h4>Dashboard</h4>
              </div>
              <div className={styles.previewContent}>
                <div className={styles.previewMetric}>
                  <span className={styles.metricLabel}>Portfolio Value</span>
                  <span className={styles.metricValue}>$125,430.50</span>
                </div>
                <div className={styles.previewMetric}>
                  <span className={styles.metricLabel}>Daily Change</span>
                  <span
                    className={`${styles.metricValue} ${styles.changePositive}`}
                  >
                    +2.4%
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.previewItem}>
              <div className={styles.previewHeader}>
                <h4>Analysis View</h4>
              </div>
              <div className={styles.previewContent}>
                <div className={styles.previewChartPlaceholder}>
                  Chart visualization will appear here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {themeStatus !== 'idle' && (
        <div className={styles.statusMessage}>
          {themeStatus === 'success' && (
            <span className={styles.statusSuccess}>
              ������������ ��������✓ Theme saved successfully!
            </span>
          )}
          {themeStatus === 'error' && (
            <span className={styles.statusError}>
              ������������ ��������✗ Failed to save theme. Please try again.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ThemePage;