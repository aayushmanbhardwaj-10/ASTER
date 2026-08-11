import React, { useState, useEffect } from 'react';
import styles from './QuickActions.module.css';

interface ActionItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

const getColor = (color: string): string => {
  const colors: Record<string, string> = {
    primary: '#003366',
    success: '#28A745',
    warning: '#FFC107',
    info: '#17A2B8',
    danger: '#DC3545',
    secondary: '#6C757D',
  };
  return colors[color] || colors.primary;
};

const QuickActions: React.FC = () => {
  const [actions, setActions] = useState<ActionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading actions
    const loadActions = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        // Mock data
        const mockActions: ActionItem[] = [
          {
            id: 1,
            title: 'Create Portfolio',
            description: 'Build your first investment portfolio',
            icon: '���������������������������������������������📊',
            color: 'primary',
            href: '/portfolio/create',
          },
          {
            id: 2,
            title: 'Run Screener',
            description: 'Find stocks matching your criteria',
            icon: '���������������������������������������������🔍',
            color: 'success',
            href: '/screeners',
          },
          {
            id: 3,
            title: 'New Trade',
            description: 'Execute a buy or sell order',
            icon: '���������������������������������������������💱',
            color: 'warning',
            href: '/trading/new',
          },
          {
            id: 4,
            title: 'Create Model',
            description: 'Build a financial valuation model',
            icon: '���������������������������������������������📈',
            color: 'info',
            href: '/models/create',
          },
          {
            id: 5,
            title: 'Set Alert',
            description: 'Create price or news alerts',
            icon: '������������������������������🔔',
            color: 'danger',
            href: '/alerts/create',
          },
          {
            id: 6,
            title: 'Research Company',
            description: "Analyze a company's fundamentals",
            icon: '���������������������������������������������🏢',
            color: 'secondary',
            href: '/research',
          },
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
      <section className={styles.quickActions} aria-live="polite">
        <h2 className={styles.sectionTitle}>Quick Actions</h2>
        <div className={styles.actionsGrid}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className={styles.actionCard} aria-hidden="true">
              <div className={styles.actionIcon}>
                <div
                  className={styles.actionIconBg}
                  style={{ backgroundColor: '#003366' }}
                ></div>
                <span className={styles.actionIconPlaceholder} aria-hidden="true"></span>
              </div>
              <div className={styles.actionContent}>
                <div className={styles.actionTitlePlaceholder} aria-hidden="true"></div>
                <div className={styles.actionDescriptionPlaceholder} aria-hidden="true"></div>
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
            aria-label={action.title}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = action.href;
              }
            }}
          >
            <div className={styles.actionIcon}>
              <span aria-hidden="true">{action.icon}</span>
              <div
                className={styles.actionIconBg}
                style={{ backgroundColor: getColor(action.color) }}
              ></div>
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

export default QuickActions;