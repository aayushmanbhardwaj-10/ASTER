import React from 'react';
import styles from './DeleteDialog.module.css';

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  fileName: string;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  open,
  onClose,
  onConfirm,
  fileName,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.dialog} onClick={e => e.stopPropagation()}>
        <div className={styles.dialogHeader}>
          <h3>Delete File</h3>
          <button type="button" onClick={onClose} className={styles.closeBtn}>
            &times;
          </button>
        </div>
        <div className={styles.dialogBody}>
          <p>Are you sure you want to delete "{fileName}"?</p>
          <p>This action cannot be undone.</p>
        </div>
        <div className={styles.dialogFooter}>
          <button type="button" onClick={onClose} className={styles.cancelBtn}>
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={styles.confirmBtn}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
