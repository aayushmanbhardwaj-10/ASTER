import React from 'react';
import styles from './TypingIndicator.module.css';

interface TypingIndicatorProps {
  show: boolean;
}

const TypingIndicator: React.FC<TypingIndicatorProps> = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.typingIndicator} aria-live="polite">
      <div className={styles.typingText}>
        ASTER is typing
        <div className={styles.typingDots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
