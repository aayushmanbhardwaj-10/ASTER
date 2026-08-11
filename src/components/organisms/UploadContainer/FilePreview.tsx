import React from 'react';
import styles from './FilePreview.module.css';

interface FilePreviewProps {
  file: {
    id: string;
    name: string;
    type: string;
    size: number;
    previewUrl?: string;
  };
}

const getFileIcon = (type: string) => {
  if (type.startsWith('image/')) {
    return <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNDIgMjQiIGZpbGw9IiNGRkZGRkQiPjxwYThIGQ9Ik0xMiAyYy02LjYyIDwtMTIgNS4zOC0xMiAxMiMuNS4zOCAxMiAxMiAxMiA1LjM4IDEyIDEyLTUuMzggMTEtMTItNS4zOC0xMi0xMi0xMnoiIGZpbGw9IiNGRkZGRkQiLz48cGF0aCBkPSJNMTIgNmw0IDdoLTZ6IiBmaWxsPSIjMDAzMzY2Ii8+PC9zdmc+" alt="image" loading="lazy" width="24" height="24" />;
  } else if (type === 'application/pdf') {
    return <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNDIgMjQiIGZpbGw9IiNGRkZGRkQiPjxwYXRoIGQ9Ik0xMi41IDBoLTl2MThoOXptMSAxNGgtM3YtM2gzMnptLTUtM3YtM2gxMnYyLTVIOS41bC0xLjUtMkgxOGEyIDIgMCAwIDAgMiAyaDIuNVptLTkgN2gtMnYtNGgzMnY0eiIgZmlsbD0iIzk5OTk5OSIvPjxwYXRoIGQ9Ik0xNyA4aC0yVjZoMnptMiA0aC0yVjdoMnptLTIgM2gtMnYtNGgzMnY0eiIgZmlsbD0iIzk5OTk5OSIvPjxwYXRoIGQ9Ik0xNS41IDh2LTRoMS41bC0xLjUtMkgxM3YyLTRoMS41bC0xLjUtMkg5LjVsLTEuNS0xaDEuNWwtMS41IDEuNWgtM3YyaC41bC0yLjUtMS41aDIuNWwtMiAxLjVoLTIuNWwtMS4yIDEuNWgxLjVsLTEuNSAxLjVoMS41bDEuNS0xLjVoMS41bC0xLjUtMS4uNSIgZmlsbD0iIzk5OTk5OSIvPjwvc3ZnPg==" alt="pdf" loading="lazy" width="24" height="24" />;
  } else if (type.includes('video')) {
    return <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNDIgMjQiIGZpbGw9IiNGRkZGRkQiPjxwYXRoIGQ9Ik0xMiAyYy02LjYyIDwtMTIgNS4zOC0xMiAxMiMuNS4zOCAxMiAxMiAxMiA1LjM4IDEyIDEyLTUuMzggMTItMTItNS4zOC0xMi0xMi0xMi0xMnoiIGZpbGw9IiNGRkZGRkQiLz48cGF0aCBkPSJNNi41 IDEyaC0yVjdoMnptNiA0aC0yVjdoMnoiIGZpbGw9IiNGRkZGRkQiLz48cGF0aCBkPSJNNy41 IDdoLTJ2LTJoMnptMiAzaC0yVjdoMnptLTIgM2gtMnYtNGgzMnY0eiIgZmlsbD0iIzk5OTk5OSIvPjwvc3ZnPg==" alt="video" loading="lazy" width="24" height="24" />;
  } else if (type.includes('audio')) {
    return <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNDIgMjQiIGZpbGw9IiNGRkZGRkQiPjxwYXRoIGQ9Ik0xMiAyYy02LjYyIDwtMTIgNS4zOC0xMiAxMiMuNS4zOCAxMiAxMiAxMiA1LjM4IDEyIDEyLTUuMzggMTItMTItNS4zOC0xMi0xMi0xMi0xMnoiIGZpbGw9IiNGRkZGRkQiLz48cGF0aCBkPSJNNi41 IDEyaC0yVjdoMnptNiA0aC0yVjdoMnoiIGZpbGw9IiNGRkZGRkQiLz48cGF0aCBkPSJNNy41 IDdoLTJ2LTJoMnptMiAzaC0yVjdoMnptLTIgM2gtMnYtNGgzMnY0eiIgZmlsbD0iIzk5OTk5OSIvPjwvc3ZnPg==" alt="audio" loading="lazy" width="24" height="24" />;
  } else {
    return <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNDIgMjQiIGZpbGw9IiNGRkZGRkQiPjxwYXRoIGQ9Ik0xMiAyYy02LjYyIDwtMTIgNS4zOC0xMiAxMiMuNS4zOCAxMiAxMiAxMiA1LjM4IDEyIDEyLTUuMzggMTItMTItNS4zOC0xMi0xMi0xMi0xMnoiIGZpbGw9IiNGRkZGRkQiLz48cGF0aCBkPSJNNi41 IDEyaC0yVjdoMnptNiA0aC0yVjdoMnoiIGZpbGw9IiNGRkZGRkQiLz48cGF0aCBkPSJNNy41 IDdoLTJ2LTJoMnptMiAzaC0yVjdoMnptLTIgM2gtMnYtNGgzMnY0eiIgZmlsbD0iIzk5OTk5OSIvPjwvc3ZnPg==" alt="file" loading="lazy" width="24" height="24" />;
  }
};

const FilePreview: React.FC<FilePreviewProps> = ({ file }) => {
  return (
    <div className={styles.filePreview}>
      {file.previewUrl ? (
        <img
          src={file.previewUrl}
          alt={file.name}
          className={styles.previewImg}
          loading="lazy"
        />
      ) : (
        <div className={styles.iconContainer}>{getFileIcon(file.type)}</div>
      )}
    </div>
  );
};

export default FilePreview;