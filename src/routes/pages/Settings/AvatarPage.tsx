import React, { useState } from 'react';
import styles from './AvatarPage.module.css';
import AuthService from '@/modules/auth/services/AuthService';

interface AvatarPageProps {}

const AvatarPage: React.FC<AvatarPageProps> = () => {
  const authService = new AuthService();
  const currentUser = authService.getCurrentUser();
  const [avatarUrl, setAvatarUrl] = useState<string>('/default-avatar.png');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<
    'idle' | 'uploading' | 'success' | 'error'
  >('idle');

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setUploadStatus('error');
        setTimeout(() => setUploadStatus('idle'), 3000);
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setUploadStatus('error');
        setTimeout(() => setUploadStatus('idle'), 3000);
        return;
      }

      // Preview the image
      const previewUrl = URL.createObjectURL(file);
      setAvatarUrl(previewUrl);

      // Simulate upload
      setIsUploading(true);
      setUploadStatus('uploading');

      setTimeout(() => {
        // In a real app, this would upload to a storage service
        // For now, we'll just keep the preview URL
        setIsUploading(false);
        setUploadStatus('success');
        setTimeout(() => setUploadStatus('idle'), 3000);

        // Clean up object URL
        URL.revokeObjectURL(previewUrl);
      }, 1500);
    }
  };

  if (!currentUser) {
    return <div className={styles.error}>User not found</div>;
  }

  return (
    <div className={styles.avatarPage}>
      <div className={styles.pageHeader}>
        <h1>Avatar</h1>
        <p className={styles.pageDescription}>Update your profile picture</p>
      </div>

      <div className={styles.avatarCard}>
        <div className={styles.avatarPreview}>
          <img
            src={avatarUrl}
            alt="Avatar"
            className={styles.avatarImg}
            loading="lazy"
            width="200"
            height="200"
          />
          {!isUploading && (
            <div className={styles.avatarOverlay}>
              <div className={styles.avatarOverlayContent}>
                <div className={styles.avatarIcon}>��������������������������������������������������������������������������������������������������</div>
                <p>Click to change avatar</p>
              </div>
            </div>
          )}
          {isUploading && (
            <div className={styles.avatarOverlay}>
              <div className={styles.avatarOverlayContent}>
                <div className={styles.spinner}></div>
                <p>Uploading...</p>
              </div>
            </div>
          )}
        </div>

        <label htmlFor="avatarUpload" className={styles.uploadButton}>
          <input
            type="file"
            id="avatarUpload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleAvatarChange}
          />
          Change Avatar
        </label>

        <div className={styles.avatarNotes}>
          <p>Supported formats: JPG, PNG, GIF</p>
          <p>Maximum file size: 5 MB</p>
          <p>Recommended dimensions: 400x400 pixels</p>
        </div>
      </div>

      {uploadStatus !== 'idle' && (
        <div className={styles.uploadStatus}>
          {uploadStatus === 'success' && (
            <span className={styles.statusSuccess}>
              �������� ������ ������ ��✓ Avatar updated successfully!
            </span>
          )}
          {uploadStatus === 'error' && (
            <span className={styles.statusError}>
              �������� ������ ������ ��✗ Failed to update avatar. Please try again.
            </span>
          )}
          {uploadStatus === 'uploading' && (
            <span className={styles.statusUploading}>
              �������� ������ ������ ��⏳ Uploading avatar...
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default AvatarPage;