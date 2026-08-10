import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer id={id} className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <a href="#" className={styles.footerLink}>
            Documentation
          </a>
          <a href="#" className={styles.footerLink}>
            Support
          </a>
          <a href="#" className={styles.footerLink}>
            Legal
          </a>
          <a href="#" className={styles.footerLink}>
            Version 1.0.0
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
