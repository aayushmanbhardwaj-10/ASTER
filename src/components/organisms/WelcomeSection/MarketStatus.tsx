import React from 'react';
import styles from './WelcomeSection.module.css';

/**
 * Props for the MarketStatus component
 */
interface MarketStatusProps {
  /** Whether the market is currently open */
  isOpen: boolean;
}

/**
 * MarketStatus component displays market status information
 * Shows market open/closed status, next close time, and current session
 */
const MarketStatus: React.FC<MarketStatusProps> = ({ isOpen }) => {
  return (
    <div className={styles.marketStatus}>
      <div className={styles.statusItem}>
        <span className={styles.statusLabel}>Market Status:</span>
        <span className={`${styles.statusValue} ${isOpen ? styles.statusOpen : styles.statusClosed}`}>
          {isOpen ? 'Open' : 'Closed'}
        </span>
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
  );
};

export default MarketStatus;