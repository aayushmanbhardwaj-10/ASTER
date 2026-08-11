import React, { memo, useCallback } from 'react';
import styles from './Tabs.module.css';

interface Tab {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface TabsProps {
  value: string | number;
  onChange: (value: string | number) => void;
  tabs: Tab[];
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'standard' | 'boxed';
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  value,
  onChange,
  tabs,
  orientation = 'horizontal',
  size = 'md',
  variant = 'standard',
  className = '',
}) => {
  const handleChange = useCallback((newValue: string | number) => {
    onChange(newValue);
  }, [onChange]);

  return (
    <div
      className={`${styles.tabsRoot} ${styles[orientation]} ${styles[size]} ${styles[variant]} ${className}`}
      role="tablist"
      aria-orientation={orientation}
    >
      {tabs.map(tab => {
        const isSelected = tab.value === value;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={isSelected}
            tabIndex={isSelected ? 0 : -1}
            disabled={tab.disabled}
            onClick={() => handleChange(tab.value)}
            className={`${styles.tab} ${isSelected ? styles.selected : ''} ${tab.disabled ? styles.disabled : ''}`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default memo(Tabs);
