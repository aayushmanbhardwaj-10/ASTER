import React from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
  variant?: 'text' | 'avatar' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  className = '',
}) => {
  // Default sizes based on variant
  let computedWidth: string | undefined;
  let computedHeight: string | undefined;

  if (variant === 'text') {
    computedWidth =
      width !== undefined
        ? typeof width === 'number'
          ? `${width}px`
          : width
        : '100%';
    computedHeight =
      height !== undefined
        ? typeof height === 'number'
          ? `${height}px`
          : height
        : '16px';
  } else if (variant === 'avatar') {
    const size =
      width !== undefined
        ? typeof width === 'number'
          ? `${width}px`
          : width
        : height !== undefined
          ? typeof height === 'number'
            ? `${height}px`
            : height
          : '40px';
    computedWidth = size;
    computedHeight = size;
  } else if (variant === 'rectangular') {
    computedWidth =
      width !== undefined
        ? typeof width === 'number'
          ? `${width}px`
          : width
        : '100%';
    computedHeight =
      height !== undefined
        ? typeof height === 'number'
          ? `${height}px`
          : height
        : '100%';
  }

  const style: React.CSSProperties = {};
  if (computedWidth) style.width = computedWidth;
  if (computedHeight) style.height = computedHeight;

  return (
    <div
      className={`${styles.skeleton} ${styles[variant]} ${className}`}
      style={style}
      aria-label="placeholder"
    />
  );
};

export default Skeleton;
