import React from 'react';
import styles from './Header.module.css';
import AuthService from '@/modules/auth/services/AuthService';

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  const userService = new AuthService();
  const currentUser = userService.getCurrentUser();

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button className={styles.sidebarToggle} onClick={onSidebarToggle}>
          Menu
        </button>
        <div className={styles.logo}>
          <span className={styles.logoText}>ASTER</span>
        </div>
      </div>
      <div className={styles.centerSection}>
        {/* Contextual navigation (breadcrumb or dashboard selector) */}
        <nav className={styles.contextualNav}>
          <span className={styles.breadcrumb}>Dashboard</span>
        </nav>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.userProfile}>
          <img
            src="/default-avatar.png"
            alt="User avatar"
            className={styles.avatar}
            loading="lazy"
            width="32"
            height="32"
          />
          <span className={styles.userName}>
            {currentUser ? currentUser.name : 'Guest'}
          </span>
        </div>
        <div className={styles.actions}>
          <button className={styles.iconButton} title="Notifications">
            Notifications
          </button>
          <button className={styles.iconButton} title="Settings">
            Settings
          </button>
          <button className={styles.iconButton} title="Help">
            Help
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;