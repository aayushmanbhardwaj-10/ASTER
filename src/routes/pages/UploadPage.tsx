import React from 'react';
import styles from './UploadPage.module.css';
import UploadContainer from '@/components/organisms/UploadContainer/UploadContainer';

const UploadPage: React.FC = () => {
  return (
    <div className={styles.uploadPage}>
      <UploadContainer />
    </div>
  );
};

export default UploadPage;
