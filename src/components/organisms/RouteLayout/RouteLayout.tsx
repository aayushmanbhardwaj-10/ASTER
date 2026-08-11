import React from 'react';
import styles from './RouteLayout.module.css';

interface RouteLayoutProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

const RouteLayout: React.FC<RouteLayoutProps> = ({
  title,
  subtitle,
  actions,
  children,
}) => {
  return (
    <div className={styles.routeLayout}>
      <div className={styles.routeHeader}>
        <div className={styles.routeTitleContainer}>
          <h1 className={styles.routeTitle}>{title}</h1>
          {subtitle && <p className={styles.routeSubtitle}>{subtitle}</p>}
        </div>
        {actions && <div className={styles.routeActions}>{actions}</div>}
      </div>
      <div className={styles.routeContent}>{children}</div>
    </div>
  );
};

export default RouteLayout;
