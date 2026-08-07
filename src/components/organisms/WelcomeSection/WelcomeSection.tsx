import React from 'react';
import styles from './WelcomeSection.module.css';

interface WelcomeSectionProps {
  user: {
    name: string;
    email: string;
    role: string;
  } | null;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ user }) => {
  if (!user) {
    return (
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeContent}>
          <div className={styles.emptyStateIcon}>������������������</div>
          <h1 className={styles.welcomeTitle}>Welcome to ASTER</h1>
          <p className={styles.welcomeSubtitle}>
            Please log in to access your personalized dashboard and financial insights.
          </p>
          <div className={styles.marketStatus}>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Market Status:</span>
              <span className={styles.statusValue statusOpen}>Open</span>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Next Close:</span>
              <span className={styles.statusValue}>4:00 PM EST</span>
            </div>
          </div>
          <div className={styles.loginPrompt}>
            <p>Sign in to continue</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.welcomeSection}>
      <div className={styles.welcomeContent}>
        <h1 className={styles.welcomeTitle}>
          Welcome back, {user.name.split(' ')[0]}!
        </h1>
        <p className={styles.welcomeSubtitle}>
          Ready to make informed financial decisions today?
        </p>
        <div className={styles.marketStatus}>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Market Status:</span>
            <span className={styles.statusValue statusOpen}>Open</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Next Close:</span>
            <span className={styles.statusValue}>4:00 PM EST</span>
          </div>
          <div className={styles.statusItem}>
            <span className={styles.statusLabel}>Session:</span>
            <span className={styles.statusValue}>Regular Trading</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;