import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  progress: number; // 0-100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div
      className={styles.progressBar}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-label={`Upload progress, ${progress} percent`}
    >
      <div className={styles.progressFill} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
