import React, { useState, useCallback } from 'react';
import styles from './UploadContainer.module.css';
import UploadArea from './UploadArea';
import FileList from './FileList';
import DeleteDialog from './DeleteDialog';

/**
 * Props for the UploadContainer component
 */
interface UploadContainerProps {}

/**
 * Represents a file item in the upload queue
 */
interface FileItem {
  /** Unique identifier for the file */
  id: string;
  /** Name of the file */
  name: string;
  /** MIME type of the file */
  type: string;
  /** Size of the file in bytes */
  size: number;
  /** URL for previewing the file (if applicable) */
  previewUrl?: string;
  /** Upload progress percentage (0-100) */
  progress: number;
  /** Current status of the file upload */
  status: 'uploading' | 'success' | 'error';
  /** Error message if upload failed */
  error?: string;
}

/**
 * UploadContainer component handles file uploads with drag-and-drop support
 * Features: file preview, progress tracking, retry failed uploads, delete files
 */
const UploadContainer: React.FC<UploadContainerProps> = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [fileToDeleteId, setFileToDeleteId] = useState<string | null>(null);

  /**
   * Handle dropped files during drag-and-drop upload
   * @param acceptedFiles - Array of files accepted by the drop zone
   */
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = Array.from(acceptedFiles).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        size: file.size,
        previewUrl: file.type.startsWith('image/')
          ? URL.createObjectURL(file)
          : undefined,
        progress: 0,
        status: 'uploading' as const,
      }));

      setFiles(prev => {
        const updatedPrev = [...prev, ...newFiles];

        // Simulate upload progress with potential for failure
        newFiles.forEach((_, index) => {
          const fileIndex = prev.length + index;
          const interval = setInterval(() => {
            setFiles(prevState => {
              const updatedFiles = [...prevState];
              if (updatedFiles[fileIndex]) {
                // Simulate random upload failure (20% chance)
                if (
                  Math.random() < 0.2 &&
                  updatedFiles[fileIndex].progress > 30
                ) {
                  updatedFiles[fileIndex].status = 'error' as const;
                  updatedFiles[fileIndex].error =
                    'Upload failed. Please try again.';
                  clearInterval(interval);
                } else {
                  updatedFiles[fileIndex].progress += Math.random() * 30;
                  if (updatedFiles[fileIndex].progress >= 100) {
                    updatedFiles[fileIndex].progress = 100;
                    updatedFiles[fileIndex].status = 'success' as const;
                    clearInterval(interval);
                  }
                }
              }
              return updatedFiles;
            });
          }, 200);
        });

        return updatedPrev;
      });
    },
    [] // Remove files from dependencies to avoid stale closure
  );

  /**
   * Remove a file from the upload list
   * @param id - ID of the file to remove
   */
  const handleRemoveFile = (id: string) => {
    setFiles(prev => {
      const filteredFiles = prev.filter(file => file.id !== id);

      // Revoke object URL if it was created
      const fileToRemove = prev.find(f => f.id === id);
      if (fileToRemove?.previewUrl) {
        URL.revokeObjectURL(fileToRemove.previewUrl);
      }

      return filteredFiles;
    });
  };

  /**
   * Retry uploading a file that previously failed
   * @param id - ID of the file to retry uploading
   */
  const handleRetryUpload = (id: string) => {
    setFiles(prev => {
      return prev.map(file => {
        if (file.id === id) {
          return {
            ...file,
            progress: 0,
            status: 'uploading' as const,
            error: undefined,
          };
        }
        return file;
      });
    });

    // Simulate retry upload with potential for failure
    setTimeout(() => {
      setFiles(prev => {
        return prev.map(file => {
          if (file.id === id) {
            // Simulate random upload failure on retry (10% chance)
            if (Math.random() < 0.1) {
              return {
                ...file,
                progress: 0,
                status: 'error' as const,
                error: 'Upload failed again. Please check your connection.',
              };
            } else {
              return {
                ...file,
                progress: 100,
                status: 'success' as const,
              };
            }
          }
          return file;
        });
      });
    }, 1500);
  };

  /**
   * Open the delete confirmation dialog for a file
   * @param id - ID of the file to delete
   */
  const openDeleteDialog = (id: string) => {
    setFileToDeleteId(id);
    setDeleteDialogOpen(true);
  };

  /**
   * Close the delete confirmation dialog
   */
  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setFileToDeleteId(null);
  };

  const confirmDelete = () => {
    if (fileToDeleteId) {
      handleRemoveFile(fileToDeleteId);
      closeDeleteDialog();
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.header}>
        <h1>Upload Files</h1>
        <p>Drag & drop files here or click to browse</p>
      </div>

      <UploadArea
        onDrop={handleDrop}
      />

      <FileList
        files={files}
        onRetryUpload={handleRetryUpload}
        onOpenDeleteDialog={openDeleteDialog}
      />

      <DeleteDialog
        open={deleteDialogOpen}
        onClose={closeDeleteDialog}
        onConfirm={confirmDelete}
        fileName={
          files.find(f => f.id === fileToDeleteId)?.name || 'Unknown file'
        }
      />
    </div>
  );
};

export default UploadContainer;