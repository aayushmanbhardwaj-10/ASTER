import React, { useEffect, useRef, useState, useCallback, memo } from 'react';
import styles from './Tooltip.module.css';
import { createPortal } from 'react-dom';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  variant?: 'light' | 'dark';
  pointerEvents?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = 'top',
  delay = 100,
  variant = 'dark',
  pointerEvents = false,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Position the tooltip - wrapped in useCallback to prevent recreation
  const positionTooltip = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    let top = 0;
    let left = 0;

    // Calculate position based on placement
    if (placement === 'top') {
      top = triggerRect.top - tooltipRect.height - 8; // 8px gap
      left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
    } else if (placement === 'bottom') {
      top = triggerRect.bottom + 8;
      left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
    } else if (placement === 'left') {
      top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
      left = triggerRect.left - tooltipRect.width - 8;
    } else if (placement === 'right') {
      top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
      left = triggerRect.right + 8;
    }

    // Adjust to stay within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (left < 0) {
      left = 8;
    } else if (left + tooltipRect.width > viewportWidth) {
      left = viewportWidth - tooltipRect.width - 8;
    }

    if (top < 0) {
      top = 8;
    } else if (top + tooltipRect.height > viewportHeight) {
      top = viewportHeight - tooltipRect.height - 8;
    }

    tooltipRef.current.style.top = `${top}px`;
    tooltipRef.current.style.left = `${left}px`;

    // Set arrow position
    const arrow = tooltipRef.current.querySelector('.tooltip-arrow');
    if (arrow) {
      const arrowElement = arrow as HTMLElement;
      let arrowLeft = 0;
      let arrowTop = 0;

      if (placement === 'top' || placement === 'bottom') {
        arrowLeft = Math.min(
          Math.max(triggerRect.left + triggerRect.width / 2 - left - 8, 8),
          tooltipRect.width - 16
        );
        arrowElement.style.left = `${arrowLeft}px`;
        arrowElement.style.top = '';
      } else {
        arrowTop = Math.min(
          Math.max(triggerRect.top + triggerRect.height / 2 - top - 8, 8),
          tooltipRect.height - 16
        );
        arrowElement.style.top = `${arrowTop}px`;
        arrowElement.style.left = '';
      }
    }
  }, [placement]); // Added placement as dependency

  // Update tooltip position on scroll/resize
  useEffect(() => {
    const updatePosition = () => {
      if (showTooltip && triggerRef.current && tooltipRef.current) {
        positionTooltip();
      }
    };

    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [showTooltip, positionTooltip]); // positionTooltip is stable now (except placement changes)

  // Show tooltip with delay
  const showTooltipDelay = () => {
    timeoutRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, delay);
  };

  // Hide tooltip
  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowTooltip(false);
  };

  // Event handlers
  const handleMouseEnter = () => {
    showTooltipDelay();
  };
  const handleMouseLeave = () => {
    hideTooltip();
  };
  const handleFocus = () => {
    showTooltipDelay();
  };
  const handleBlur = () => {
    hideTooltip();
  };
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (showTooltip) {
      hideTooltip();
    } else {
      showTooltipDelay();
    }
  };

  return (
    <>
      {/* Trigger element */}
      <span
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
      >
        {children}
      </span>

      {/* Tooltip portal */}
      {showTooltip && createPortal(
        <div
          ref={tooltipRef}
          className={`${styles.tooltip} ${styles[placement]} ${styles[variant]}`}
          role="tooltip"
          pointer-events={pointerEvents ? 'auto' : 'none'}
        >
          <div className={styles.tooltipContent}>{content}</div>
          {/* Arrow */}
          <div className={styles.tooltipArrow} />
        </div>,
        document.body
      )}
    </>
  );
};

export default memo(Tooltip);