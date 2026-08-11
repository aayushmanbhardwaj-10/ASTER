import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import RequireAuth from '@/components/organisms/RequireAuth';
import MainLayout from '@/containers/MainLayout';
import LoadingFallback from '@/components/organisms/LoadingFallback';

// Lazy load pages
const LoginPage = lazy(() => import('@/routes/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/routes/pages/RegisterPage'));
const ForgotPasswordPage = lazy(
  () => import('@/routes/pages/ForgotPasswordPage')
);
const ResetPasswordPage = lazy(
  () => import('@/routes/pages/ResetPasswordPage')
);
const EmailVerificationPage = lazy(
  () => import('@/routes/pages/EmailVerificationPage')
);
const DashboardPage = lazy(() => import('@/routes/pages/DashboardPage'));
const AnalysisPage = lazy(() => import('@/routes/pages/AnalysisPage'));
const PortfolioPage = lazy(() => import('@/routes/pages/PortfolioPage'));
const MessagesPage = lazy(() => import('@/routes/pages/MessagesPage'));
const UploadPage = lazy(() => import('@/routes/pages/UploadPage'));
const NotFoundPage = lazy(() => import('@/routes/pages/NotFoundPage'));

// Lazy load settings pages
const ProfilePage = lazy(() => import('@/routes/pages/Settings/ProfilePage'));
const AccountPage = lazy(() => import('@/routes/pages/Settings/AccountPage'));
const ThemePage = lazy(() => import('@/routes/pages/Settings/ThemePage'));
const PreferencesPage = lazy(() => import('@/routes/pages/Settings/PreferencesPage'));
const NotificationsPage = lazy(() => import('@/routes/pages/Settings/NotificationsPage'));
const ResponsiveSettingsPage = lazy(() => import('@/routes/pages/Settings/ResponsiveSettingsPage'));
const SecurityPage = lazy(() => import('@/routes/pages/Settings/SecurityPage'));

// Fallback UI while lazy loading with skeleton screens for better UX
const LoadingFallbackComponent = () => {
  return (
    <LoadingFallback
      variant="skeleton"
      skeletonTitle="ASTER Dashboard"
      skeletonSubtitle="Loading your financial intelligence..."
      skeletonItems={4}
      message="Loading application..."
      tip="ASTER is preparing your financial intelligence dashboard"
    />
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/email-verification" element={<EmailVerificationPage />} />

      {/* Protected routes */}
      <Route
        element={
          <RequireAuth>
            <MainLayout showSidebar={true}>
              <Suspense fallback={<LoadingFallbackComponent />}>
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route path="analysis" element={<AnalysisPage />} />
                  <Route path="portfolio" element={<PortfolioPage />} />
                  <Route path="messages" element={<MessagesPage />} />
                  <Route path="upload" element={<UploadPage />} />
                  <Route
                    path="settings"
                    element={
                      <RequireAuth>
                        <MainLayout showSidebar={true}>
                          <Suspense fallback={<LoadingFallbackComponent />}>
                            <Routes>
                              <Route path="profile" element={<ProfilePage />} />
                              <Route path="account" element={<AccountPage />} />
                              <Route path="theme" element={<ThemePage />} />
                              <Route path="preferences" element={<PreferencesPage />} />
                              <Route path="notifications" element={<NotificationsPage />} />
                              <Route path="responsive" element={<ResponsiveSettingsPage />} />
                              <Route path="security" element={<SecurityPage />} />
                              <Route path="*" element={<Navigate to="/settings/profile" replace />} />
                            </Routes>
                          </Suspense>
                        </MainLayout>
                      </RequireAuth>
                    }
                  />
                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </Suspense>
            </MainLayout>
          </RequireAuth>
        }
      />

      {/* Not found route - must be last */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;