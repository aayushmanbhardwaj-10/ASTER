import React, { useState, useCallback } from 'react';
import styles from './UploadArea.module.css';

interface UploadAreaProps {
  onDrop: (files: File[]) => void;
}

const UploadArea: React.FC<UploadAreaProps> = ({
  onDrop,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }, []);

  const handleDragEnd = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setIsDragActive(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      setIsDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onDrop(Array.from(e.dataTransfer.files));
      }
    },
    [onDrop]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        onDrop(Array.from(e.target.files));
      }
      e.target.value = '';
    },
    [onDrop]
  );

  const handleFileSelectClick = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.type === 'click') {
      // This is a MouseEvent
      const mouseEvent = e as React.MouseEvent<HTMLButtonElement>;
      mouseEvent.preventDefault();
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput instanceof HTMLInputElement) {
        fileInput.click();
      }
    } else if (e.type === 'keydown') {
      // This is a KeyboardEvent
      const keyboardEvent = e as React.KeyboardEvent<HTMLButtonElement>;
      if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
        keyboardEvent.preventDefault();
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput instanceof HTMLInputElement) {
          fileInput.click();
        }
      }
    }
  };

  return (
    <div
      className={`${styles.uploadArea} ${isDragging ? styles.dragging : ''} ${isDragActive ? styles.dragActive : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
    >
      <input
        type="file"
        multiple
        onChange={handleFileSelect}
        className={styles.fileInput}
      />
      <div className={styles.uploadContent}>
        {!isDragging && (
          <>
            <div className={styles.uploadIcon}>
              {/* Using a simple SVG icon for upload */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V13M12 4L7 9M12 4L17 9"
                  stroke="#003366"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#003366"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h3>Drag & drop files here</h3>
            <p>or click to browse</p>
            <button
              type="button"
              onClick={handleFileSelectClick}
              onKeyDown={handleFileSelectClick}
              className={styles.browseBtn}
            >
              Browse Files
            </button>
          </>
        )}
        {isDragging && (
          <div className={styles.dragOverlay}>
            <div className={styles.uploadIcon}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4V13M12 4L7 9M12 4L17 9"
                  stroke="#003366"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#003366"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <h3>Release to upload</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadArea;