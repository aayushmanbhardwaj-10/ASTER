import React from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggleCollapse }) => {
  const sidebarItems = [
    { id: 1, name: 'Dashboard' },
    { id: 2, name: 'Analysis' },
    { id: 3, name: 'Portfolio' },
    { id: 4, name: 'Company Research' },
    { id: 5, name: 'Tools' },
    { id: 6, name: 'Collaboration' },
    { id: 7, name: 'Settings' },
  ];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.sidebarHeader}>
        <button
          className={styles.toggleButton}
          onClick={onToggleCollapse}
          title="Toggle navigation"
        >
          {collapsed ? '��>' : '��<'}
        </button>
        <div className={styles.logo}>
          <span className={styles.logoText}>ASTER</span>
        </div>
      </div>
      <nav className={styles.sidebarNav}>
        <ul>
          {sidebarItems.map(item => (
            <li key={item.id} className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                {!collapsed ? (
                  <>
                    <span className={styles.icon} aria-hidden="true">
                      {/* We'll use the first letter of the name as a simple icon */}
                      {item.name.charAt(0)}
                    </span>
                    <span className={styles.text}>{item.name}</span>
                  </>
                ) : (
                  <span className={styles.text}>{item.name.charAt(0)}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
