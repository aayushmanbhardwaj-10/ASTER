import React, { useState } from 'react';
import styles from './NotificationsPage.module.css';
import AuthService from '@/modules/auth/services/AuthService';

interface NotificationsPageProps {}

const NotificationsPage: React.FC<NotificationsPageProps> = () => {
  const authService = new AuthService();
  const currentUser = authService.getCurrentUser();
  const [notifications, setNotifications] = useState({
    marketAlerts: true,
    priceAlerts: true,
    newsAlerts: true,
    folkActivities: true,
    weeklySummary: true,
    promotional: false,
  });
  const [notificationsStatus, setNotificationsStatus] = useState<
    'idle' | 'saving' | 'success' | 'error'
  >('idle');

  // Load notifications from localStorage on mount
  React.useEffect(() => {
    if (!currentUser) {
      return;
    }
    const savedNotifications = localStorage.getItem('aster-notifications');
    if (savedNotifications) {
      try {
        const parsed = JSON.parse(savedNotifications);
        setNotifications(parsed);
      } catch (e) {
        console.error('Failed to load notifications', e);
      }
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div className={styles.error}>User not found</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotifications(prev => ({ ...prev, [name]: checked }));
  };

  const handleSave = () => {
    setNotificationsStatus('saving');

    // Simulate saving to backend
    setTimeout(() => {
      // Save to localStorage
      localStorage.setItem(
        'aster-notifications',
        JSON.stringify(notifications)
      );

      setNotificationsStatus('success');
      setTimeout(() => setNotificationsStatus('idle'), 2000);
    }, 1000);
  };

  return (
    <div className={styles.notificationsPage}>
      <div className={styles.pageHeader}>
        <h1>Notification Settings</h1>
        <p className={styles.pageDescription}>
          Control when and how you receive notifications
        </p>
      </div>

      <div className={styles.notificationsCard}>
        <div className={styles.notificationsSection}>
          <h2>Market Alerts</h2>
          <div className={styles.notificationItem}>
            <input
              type="checkbox"
              id="marketAlerts"
              name="marketAlerts"
              checked={notifications.marketAlerts}
              onChange={handleChange}
            />
            <label htmlFor="marketAlerts" className={styles.notificationLabel}>
              Market Opening/Closing Alerts
            </label>
            <p className={styles.notificationDescription}>
              Get notified when markets open or close
            </p>
          </div>

          <div className={styles.notificationItem}>
            <input
              type="checkbox"
              id="priceAlerts"
              name="priceAlerts"
              checked={notifications.priceAlerts}
              onChange={handleChange}
            />
            <label htmlFor="priceAlerts" className={styles.notificationLabel}>
              Price Movement Alerts
            </label>
            <p className={styles.notificationDescription}>
              Alerts for significant price changes in your watchlist
            </p>
          </div>

          <div className={styles.notificationItem}>
            <input
              type="checkbox"
              id="newsAlerts"
              name="newsAlerts"
              checked={notifications.newsAlerts}
              onChange={handleChange}
            />
            <label htmlFor="newsAlerts" className={styles.notificationLabel}>
              Financial News Alerts
            </label>
            <p className={styles.notificationDescription}>
              Breaking news and important financial updates
            </p>
          </div>
        </div>

        <div className={styles.notificationsSection}>
          <h2>Activity & Updates</h2>
          <div className={styles.notificationItem}>
            <input
              type="checkbox"
              id="folkActivities"
              name="folkActivities"
              checked={notifications.folkActivities}
              onChange={handleChange}
            />
            <label
              htmlFor="folkActivities"
              className={styles.notificationLabel}
            >
              Platform Activities
            </label>
            <p className={styles.notificationDescription}>
              Updates on your saved models, analyses, and portfolio changes
            </p>
          </div>

          <div className={styles.notificationItem}>
            <input
              type="checkbox"
              id="weeklySummary"
              name="weeklySummary"
              checked={notifications.weeklySummary}
              onChange={handleChange}
            />
            <label htmlFor="weeklySummary" className={styles.notificationLabel}>
              Weekly Performance Summary
            </label>
            <p className={styles.notificationDescription}>
              Weekly digest of your portfolio performance and market insights
            </p>
          </div>
        </div>

        <div className={styles.notificationsSection}>
          <h2>Communications</h2>
          <div className={styles.notificationItem}>
            <input
              type="checkbox"
              id="promotional"
              name="promotional"
              checked={notifications.promotional}
              onChange={handleChange}
            />
            <label htmlFor="promotional" className={styles.notificationLabel}>
              Promotional Offers & Updates
            </label>
            <p className={styles.notificationDescription}>
              Information about new features, webinars, and special offers
            </p>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          onClick={handleSave}
          disabled={notificationsStatus === 'saving'}
          className={styles.saveButton}
        >
          {notificationsStatus === 'saving'
            ? 'Saving...'
            : 'Save Notification Settings'}
        </button>
      </div>

      {notificationsStatus !== 'idle' && (
        <div className={styles.statusMessage}>
          {notificationsStatus === 'success' && (
            <span className={styles.statusSuccess}>
              ���������� ������🔔������✓ Notification settings saved successfully!
            </span>
          )}
          {notificationsStatus === 'error' && (
            <span className={styles.statusError}>
              ���������� ������🔔������✗ Failed to save notification settings. Please try
                again.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;