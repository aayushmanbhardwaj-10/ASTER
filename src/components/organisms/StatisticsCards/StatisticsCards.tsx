import React, { useState, useEffect } from 'react';
import styles from './StatisticsCards.module.css';

const StatisticsCards: React.FC = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading statistics
    const loadStats = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 600));
        // Mock data - empty array for empty state demo
        // In real app, this would come from API
        const mockStats = []; // Empty for demo
        setStats(mockStats);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load statistics:', error);
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) {
    return (
      <div className={styles.statsGrid}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} className={styles.skeletonCard}>
            <div className={styles.skeletonIcon}></div>
            <div className={styles.skeletonContent}>
              <div className={styles.skeletonLine} style={{ width: '60%' }}></div>
              <div className={styles.skeletonLine} style={{ width: '40%' }}></div>
              <div className={styles.skeletonLine} style={{ width: '80%' }}></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (stats.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyStateIcon}>���������📊</div>
        <h3 className={styles.emptyStateTitle}>No statistics available</h3>
        <p className={styles.emptyStateDescription}>
          Statistics will appear here once you have active portfolios or investments.
        </p>
        <a href="/portfolio/create" className={styles.emptyStateAction}>
          Create Portfolio
        </a>
      </div>
    );
  }

  return (
    <section className={styles.statisticsCards}>
      <h2 className={styles.sectionTitle}>Key Statistics</h2>
      <div className={styles.statsGrid}>
        {stats.map(stat => (
          <div key={stat.id} className={styles.statCard}>
            <div className={styles.statIcon}>
              {stat.icon}
              <div className={styles.statIconBg} style={{ backgroundColor: getStatColor(stat.changeType) }}></div>
            </div>
            <div className={styles.statContent}>
              <h3 className={styles.statTitle}>{stat.title}</h3>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statChange}>
                <span className={styles.changeValue}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const getStatColor = (type: string): string => {
  const colors: Record<string, string> = {
    positive: 'rgba(40, 167, 69, 0.1)',    // Green
    negative: 'rgba(220, 53, 69, 0.1)',    // Red
    neutral: 'rgba(108, 117, 125, 0.1)'    // Gray
  };
  return colors[type] || colors.neutral;
};

export default StatisticsCards;