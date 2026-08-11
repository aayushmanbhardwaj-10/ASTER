import React from 'react';
import styles from './SettingsPage.module.css';
import SettingsSidebar from './SettingsSidebar';
import SettingsContent from './SettingsContent';

interface SettingsPageProps {}

const SettingsPage: React.FC<SettingsPageProps> = () => {
  return (
    <div className={styles.settingsPage}>
      <div className={styles.settingsContainer}>
        <SettingsSidebar />
        <SettingsContent />
      </div>
    </div>
  );
};

export default SettingsPage;
