import React from 'react';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <main className={styles.homePage}>
      <h1>Welcome to ASTER</h1>
      <p>This is the home page.</p>
    </main>
  );
};

export default HomePage;
