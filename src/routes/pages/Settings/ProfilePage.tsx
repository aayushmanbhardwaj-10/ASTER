import React, { useState } from 'react';
import styles from './ProfilePage.module.css';
import AuthService from '@/modules/auth/services/AuthService';

interface SettingsPageProps {}

const ProfilePage: React.FC<SettingsPageProps> = () => {
  const authService = new AuthService();
  const currentUser = authService.getCurrentUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
  });
  const [saveStatus, setSaveStatus] = useState<
    'idle' | 'saving' | 'success' | 'error'
  >('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSaveStatus('saving');
    try {
      // In a real implementation, this would call an API to update the user profile
      // For now, we'll simulate the update
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Since AuthService is a mock, we'll just update our local state
      // In reality, you'd update the current user in the auth service
      setIsEditing(false);
      setSaveStatus('success');

      // Reset status after 3 seconds
      setTimeout(() => {
        setSaveStatus('idle');
      }, 3000);
    } catch (_error) {
      console.error(_error);
      setSaveStatus('error');
      setTimeout(() => {
        setSaveStatus('idle');
      }, 3000);
    }
  };

  if (!currentUser) {
    return <div className={styles.error}>User not found</div>;
  }

  return (
    <div className={styles.profilePage}>
      <div className={styles.pageHeader}>
        <h1>Profile</h1>
        <p className={styles.pageDescription}>
          Manage your personal information and profile details
        </p>
      </div>

      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <div className={styles.avatarWrapper}>
            <img
              src="/default-avatar.png"
              alt="Avatar"
              className={styles.avatar}
              loading="lazy"
              width="80"
              height="80"
            />
          </div>
          <div className={styles.profileInfo}>
            <h2>{currentUser.name}</h2>
            <p className={styles.userEmail}>{currentUser.email}</p>
            <p className={styles.userRole}>{currentUser.role}</p>
          </div>
        </div>

        {isEditing ? (
          <form
            className={styles.editForm}
            onSubmit={e => {
              e.preventDefault();
              handleSave();
            }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
            </div>

            <div className={styles.formActions}>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className={styles.cancelButton}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saveStatus === 'saving'}
                className={styles.saveButton}
              >
                {saveStatus === 'saving' ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        ) : (
          <div className={styles.profileDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Full Name:</span>
              <span className={styles.detailValue}>{currentUser.name}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Email Address:</span>
              <span className={styles.detailValue}>{currentUser.email}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Role:</span>
              <span className={styles.detailValue}>{currentUser.role}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Member Since:</span>
              <span className={styles.detailValue}>Jan 2024</span>
            </div>
          </div>
        )}

        <div className={styles.profileActions}>
          <button
            onClick={() => setIsEditing(true)}
            className={styles.editButton}
          >
            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
          </button>
        </div>
      </div>

      {saveStatus !== 'idle' && (
        <div className={styles.saveStatus}>
          {saveStatus === 'success' && (
            <span className={styles.statusSuccess}>
              ������ ��✓ Profile updated successfully!
            </span>
          )}
          {saveStatus === 'error' && (
            <span className={styles.statusError}>
              ������ ��✗ Failed to update profile. Please try again.
            </span>
          )}
          {saveStatus === 'saving' && (
            <span className={styles.statusSaving}>
              ������������������ ��������������⏳ Saving changes...
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;