import React, { useState, useEffect } from 'react';
import styles from './QuickActions.module.css';

const QuickActions: React.FC = () => {
  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading actions
    const loadActions = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        // Mock data
        const mockActions = [
          {
            id: 1,
            title: 'Create Portfolio',
            description: 'Build your first investment portfolio',
            icon: '���������📊',
            color: 'primary',
            href: '/portfolio/create'
          },
          {
            id: 2,
            title: 'Run Screener',
            description: 'Find stocks matching your criteria',
            icon: '���������🔍',
            color: 'success',
            href: '/screeners'
          },
          {
            id: 3,
            title: 'New Trade',
            description: 'Execute a buy or sell order',
            icon: '���������💱',
            color: 'warning',
            href: '/trading/new'
          },
          {
            id: 4,
            title: 'Create Model',
            description: 'Build a financial valuation model',
            icon: '���������📈',
            color: 'info',
            href: '/models/create'
          },
          {
            id: 5,
            title: 'Set Alert',
            description: 'Create price or news alerts',
            icon: '������🔔',
            color: 'danger',
            href: '/alerts/create'
          },
          {
            id: 6,
            title: 'Research Company',
            description: 'Analyze a company\'s fundamentals',
            icon: '���������🏢',
            color: 'secondary',
            href: '/research'
          }
        ];
        setActions(mockActions);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load actions:', error);
        setLoading(false);
      }
    };

    loadActions();
  }, []);

  if (loading) {
    return (
      <section className={styles.quickActions}>
        <h2 className={styles.sectionTitle}>Quick Actions</h2>
        <div className={styles.actionsGrid}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className={styles.actionCard}>
              <div className={styles.actionIcon}>
                <div className={styles.actionIconBg} style={{ backgroundColor: '#003366' }}></div>
                <span className={styles.actionIconPlaceholder}></span>
              </div>
              <div className={styles.actionContent}>
                <div className={styles.actionTitlePlaceholder}></div>
                <div className={styles.actionDescriptionPlaceholder}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={styles.quickActions}>
      <h2 className={styles.sectionTitle}>Quick Actions</h2>
      <div className={styles.actionsGrid}>
        {actions.map(action => (
          <a
            key={action.id}
            href={action.href}
            className={styles.actionCard}
          >
            <div className={styles.actionIcon}>
              {action.icon}
              <div className={styles.actionIconBg} style={{ backgroundColor: getColor(action.color) }}></div>
            </div>
            <div className={styles.actionContent}>
              <h3 className={styles.actionTitle}>{action.title}</h3>
              <p className={styles.actionDescription}>{action.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const getColor = (color: string): string => {
  const colors: Record<string, string> = {
    primary: '#003366',
    success: '#28A745',
    warning: '#FFC107',
    info: '#17A2B8',
    danger: '#DC3545',
    secondary: '#6C757D'
  };
  return colors[color] || colors.primary;
};

export default QuickActions;