import React, { useState } from 'react';
import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import Header from '@/components/organisms/Header/Header';
import Footer from '@/components/organisms/Footer/Footer';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showSidebar = true,
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={styles.mainLayout}>
      {showSidebar && (
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}
      <div className={styles.contentWrapper}>
        <Header
          onSidebarToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <main id="main-content" className={styles.mainContent}>{children}</main>
        <Footer id="footer" />
      </div>
    </div>
  );
};

export default MainLayout;
