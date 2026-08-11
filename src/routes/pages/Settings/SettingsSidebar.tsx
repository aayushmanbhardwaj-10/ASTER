import React from 'react';
import styles from './SettingsSidebar.module.css';
import { NavLink } from 'react-router-dom';

interface SettingsSidebarProps {}

const SettingsSidebar: React.FC<SettingsSidebarProps> = () => {
  const settingsItems = [
    {
      id: 'profile',
      label: 'Profile',
      icon: '���������👤',
      to: '/settings/profile',
    },
    {
      id: 'account',
      label: 'Account Settings',
      icon: '������⚙������️',
      to: '/settings/account',
    },
    {
      id: 'theme',
      label: 'Theme Settings',
      icon: '���������🎨',
      to: '/settings/theme',
    },
    {
      id: 'preferences',
      label: 'Preferences',
      icon: '���������📋',
      to: '/settings/preferences',
    },
    {
      id: 'notifications',
      label: 'Notification Settings',
      icon: '������🔔',
      to: '/settings/notifications',
    },
    {
      id: 'responsive',
      label: 'Responsive Settings',
      icon: '���������📱���💻',
      to: '/settings/responsive',
    },
    {
      id: 'security',
      label: 'Security Settings',
      icon: '���������🔒',
      to: '/settings/security',
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2>Settings</h2>
      </div>
      <nav className={styles.sidebarNav}>
        {settingsItems.map(item => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) =>
              `${styles.sidebarNavItem} ${isActive ? styles.active : ''}`
            }
            end
          >
            <div className={styles.sidebarNavItemIcon}>{item.icon}</div>
            <span className={styles.sidebarNavItemLabel}>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SettingsSidebar;
