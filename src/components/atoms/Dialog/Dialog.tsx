import React, { useEffect, useRef, useState } from 'react';
import styles from './Dialog.module.css';
import { createPortal } from 'react-dom';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  size = 'medium',
  title,
  children,
  actions,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
    }

    return () => {
      setMounted(false);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus trap: when dialog opens, focus the first focusable element
  useEffect(() => {
    if (dialogRef.current) {
      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0];
      if (firstFocusable && mounted) {
        firstFocusable.focus();
      }
    }
  }, [dialogRef, mounted]);

  // Handle keydown for escape key and tab trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mounted) {
        onClose();
      }

      // Trap tab key inside dialog
      if (e.key === 'Tab' && mounted && dialogRef.current) {
        const focusableElements =
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
        if (focusableElements.length === 0) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];
        //@ts-ignore
        if (e.shiftKey) {
          // shift + tab
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          // tab
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mounted, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div
        className={`${styles.dialog} ${styles[size]}`}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'dialog-title' : undefined}
      >
        {title && (
          <h2 id="dialog-title" className={styles.dialogTitle}>
            {title}
          </h2>
        )}
        <div className={styles.dialogContent}>{children}</div>
        {actions && <div className={styles.dialogActions}>{actions}</div>}
      </div>
    </div>,
    document.body
  );
};

export default Dialog;
