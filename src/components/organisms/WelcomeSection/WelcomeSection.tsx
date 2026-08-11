import React from 'react';
import styles from './WelcomeSection.module.css';
import MarketStatus from './MarketStatus';

/**
 * Props for the WelcomeSection component
 */
interface WelcomeSectionProps {
  /** Current user object or null if not authenticated */
  user: {
    name: string;
    email: string;
    role: string;
  } | null;
}

/**
 * WelcomeSection component displays the welcome message and market status
 * Shows different content for authenticated vs non-authenticated users
 * @param props - The component props containing user information
 */
const WelcomeSection: React.FC<WelcomeSectionProps> = ({ user }) => {
  if (!user) {
    return (
      <section className={styles.welcomeSection} aria-label="Welcome section">
        <div className={styles.welcomeContent}>
          <div className={styles.emptyStateIcon}>������������������������������������</div>
          <h1 className={styles.welcomeTitle}>Welcome to ASTER</h1>
          <p className={styles.welcomeSubtitle}>
            Please log in to access your personalized dashboard and financial
            insights.
          </p>
          <MarketStatus isOpen={true} />
          <div className={styles.loginPrompt}>
            <p>Sign in to continue</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.welcomeSection} aria-label="Welcome section">
      <div className={styles.welcomeContent}>
        <h1 className={styles.welcomeTitle}>
          Welcome back, {user.name.split(' ')[0]}!
        </h1>
        <p className={styles.welcomeSubtitle}>
          Ready to make informed financial decisions today?
        </p>
        <MarketStatus isOpen={true} />
      </div>
    </section>
  );
};

export default React.memo(WelcomeSection);