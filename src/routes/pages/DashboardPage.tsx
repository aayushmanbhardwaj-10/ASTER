import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '@/modules/auth/services/AuthService';
import WelcomeSection from '@/components/organisms/WelcomeSection/WelcomeSection';
import QuickActions from '@/components/organisms/QuickActions/QuickActions';
import RecentConversations from '@/components/organisms/RecentConversations/RecentConversations';
import StatisticsCards from '@/components/organisms/StatisticsCards/StatisticsCards';
import WidgetsContainer from '@/components/organisms/WidgetsContainer/WidgetsContainer';
import styles from './DashboardPage.module.css';
import LoadingLayout from '@/components/organisms/LoadingLayout/LoadingLayout';

const DashboardPage: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading user data
    const loadUserData = async () => {
      try {
        const authService = new AuthService();
        const user = authService.getCurrentUser();
        setCurrentUser(user);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load user data:', error);
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  if (loading) {
    return (
      <div className={styles.dashboardPage}>
        <LoadingLayout variant="skeleton" height={400} />
      </div>
    );
  }

  return (
    <div className={styles.dashboardPage}>
      <WelcomeSection user={currentUser} />
      <div className={styles.dashboardGrid}>
        <div className={styles.dashboardLeft}>
          <StatisticsCards />
          <RecentConversations />
        </div>
        <div className={styles.dashboardRight}>
          <QuickActions />
          <WidgetsContainer />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;