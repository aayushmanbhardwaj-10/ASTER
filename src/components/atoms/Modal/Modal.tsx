import React, { useEffect, useRef, useState } from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  size = 'medium',
  title,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Unconditionally run the effect and handle mounting/unmounting inside
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Save the previously focused element
      //@ts-ignore
      modalRef.current?.previousElementSibling?.focus?.();
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
      // Optionally return focus to the trigger
    }

    return () => {
      setMounted(false);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus trap: when modal opens, focus the first focusable element
  useEffect(() => {
    if (modalRef.current && mounted) {
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0];
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }
  }, [modalRef, mounted]);

  // Handle keydown for escape key and tab trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mounted && e.key === 'Escape') {
        onClose();
      }

      // Trap tab key inside modal
      if (mounted && modalRef.current && e.key === 'Tab') {
        const focusableElements =
          modalRef.current?.querySelectorAll<HTMLElement>(
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

  if (!mounted) {
    return null;
  }

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div
        className={`${styles.modal} ${styles[size]}`}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {title && (
          <h2 id="modal-title" className={styles.modalTitle}>
            {title}
          </h2>
        )}
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;