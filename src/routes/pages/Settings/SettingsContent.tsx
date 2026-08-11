import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './SettingsContent.module.css';

interface SettingsContentProps {}

const SettingsContent: React.FC<SettingsContentProps> = () => {
  return (
    <main className={styles.settingsContent}>
      <Outlet />
    </main>
  );
};

export default SettingsContent;
