import React from 'react';
import styles from './FileList.module.css';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';

interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
  previewUrl?: string;
  progress: number;
  status: 'uploading' | 'success' | 'error';
  error?: string;
}

interface FileListProps {
  files: FileItem[];
  onRetryUpload: (id: string) => void;
  onOpenDeleteDialog: (id: string) => void;
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

const FileList: React.FC<FileListProps> = ({
  files,
  onRetryUpload,
  onOpenDeleteDialog,
}) => {
  if (files.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>�� ������ ���� ���� 📁</div>
        <p>No files uploaded yet</p>
      </div>
    );
  }

  return (
    <div className={styles.fileList}>
      {files.map(file => (
        <div
          key={file.id}
          className={`${styles.fileItem} ${styles[file.status]}`}
        >
          <div className={styles.fileInfo}>
            <FilePreview file={file} />
            <div className={styles.fileDetails}>
              <div className={styles.fileName}>{file.name}</div>
              <div className={styles.fileSize}>{formatFileSize(file.size)}</div>
            </div>
          </div>

          <div className={styles.fileActions}>
            {file.status === 'uploading' && (
              <ProgressBar progress={file.progress} />
            )}
            {file.status === 'success' && (
              <span className={styles.statusSuccess}>��������������✓ Uploaded</span>
            )}
            {file.status === 'error' && (
              <>
                <span className={styles.statusError}>��������������✗ Failed</span>
                <button
                  type="button"
                  onClick={() => onRetryUpload(file.id)}
                  className={styles.retryBtn}
                  aria-label="Retry upload"
                >
                  Retry
                </button>
              </>
            )}
            <button
              type="button"
              onClick={() => onOpenDeleteDialog(file.id)}
              className={styles.deleteBtn}
              title="Delete file"
              aria-label="Delete file"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileList;