import React, { useState, useEffect, lazy, Suspense } from 'react';
import AuthService from '@/modules/auth/services/AuthService';
import WelcomeSection from '@/components/organisms/WelcomeSection/WelcomeSection';
import styles from './DashboardPage.module.css';

const QuickActionsLazy = lazy(() => import('@/components/organisms/QuickActions/QuickActions'));
const RecentConversationsLazy = lazy(() => import('@/components/organisms/RecentConversations/RecentConversations'));
const StatisticsCardsLazy = lazy(() => import('@/components/organisms/StatisticsCards/StatisticsCards'));
const WidgetsContainerLazy = lazy(() => import('@/components/organisms/WidgetsContainer/WidgetsContainer'));

const DashboardPage: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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
        <div className={styles.dashboardLoading}>
          <div className={styles.dashboardLoadingTitle}>ASTER</div>
          <div className={styles.dashboardLoadingSubtitle}>
            Loading your financial intelligence dashboard...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboardPage}>
      <WelcomeSection user={currentUser} />
      <div className={styles.dashboardGrid}>
        <div className={styles.dashboardLeft}>
          <div className={styles.dashboardSectionHeader}>
            <h2 className={styles.dashboardSectionTitle}>Overview</h2>
          </div>
          <Suspense
            fallback={
              <div className={styles.dashboardLoading}>
                <div className={styles.dashboardLoadingTitle}>Loading Statistics...</div>
                <div className={styles.dashboardLoadingSubtitle}>
                  Fetching your key financial metrics
                </div>
              </div>
            }
          >
            <StatisticsCardsLazy />
          </Suspense>

          <div className={styles.dashboardSectionHeader}>
            <h2 className={styles.dashboardSectionTitle}>Recent Activity</h2>
          </div>
          <Suspense
            fallback={
              <div className={styles.dashboardLoading}>
                <div className={styles.dashboardLoadingTitle}>Loading Activity...</div>
                <div className={styles.dashboardLoadingSubtitle}>
                  Fetching your recent conversations and updates
                </div>
              </div>
            }
          >
            <RecentConversationsLazy />
          </Suspense>
        </div>

        <div className={styles.dashboardRight}>
          <div className={styles.dashboardSectionHeader}>
            <h2 className={styles.dashboardSectionTitle}>Quick Actions</h2>
          </div>
          <Suspense
            fallback={
              <div className={styles.dashboardLoading}>
                <div className={styles.dashboardLoadingTitle}>Loading Actions...</div>
                <div className={styles.dashboardLoadingSubtitle}>
                  Preparing your quick access tools
                </div>
              </div>
            }
          >
            <QuickActionsLazy />
          </Suspense>

          <div className={styles.dashboardSectionHeader}>
            <h2 className={styles.dashboardSectionTitle}>Workspace</h2>
          </div>
          <Suspense
            fallback={
              <div className={styles.dashboardLoading}>
                <div className={styles.dashboardLoadingTitle}>Loading Widgets...</div>
                <div className={styles.dashboardLoadingSubtitle}>
                  Setting up your customizable workspace
                </div>
              </div>
            }
          >
            <WidgetsContainerLazy />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;