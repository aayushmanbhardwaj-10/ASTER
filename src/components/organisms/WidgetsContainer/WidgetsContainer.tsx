import React, { useState, useEffect } from 'react';
import styles from './WidgetsContainer.module.css';
import WidgetPlaceholder from './WidgetPlaceholder';

const WidgetsContainer: React.FC = () => {
  const [widgets, setWidgets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading widgets
    const loadWidgets = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        // Mock data
        const mockWidgets = [
          { id: 1, title: 'Market Overview', type: 'market-overview', size: 'medium' },
          { id: 2, title: 'Watchlist', type: 'watchlist', size: 'medium' },
          { id: 3, title: 'Performance Chart', type: 'performance', size: 'large' },
          { id: 4, title: 'News Feed', type: 'news', size: 'small' },
          { id: 5, title: 'Alerts', type: 'alerts', size: 'small' },
          { id: 6, title: 'Sector Performance', type: 'sector', size: 'medium' }
        ];
        setWidgets(mockWidgets);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load widgets:', error);
        setLoading(false);
      }
    };

    loadWidgets();
  }, []);

  if (loading) {
    return (
      <section className={styles.widgetsContainer}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Dashboard Widgets</h2>
          <div className={styles.widgetControls}>
            <button className={styles.addWidgetBtn} onClick={() => alert('Add widget functionality coming soon')}>
              + Add Widget
            </button>
            <button className={styles.layoutBtn} onClick={() => alert('Layout save functionality coming soon')}>
              Save Layout
            </button>
          </div>
        </div>
        <div className={styles.widgetsGrid}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className={styles.widget}>
              <div className={styles.widgetHeader}>
                <h3 className={styles.widgetTitlePlaceholder}></h3>
                <div className={styles.widgetActionsPlaceholder}>
                  <div className={styles.widgetActionBtnPlaceholder}></div>
                  <div className={styles.widgetActionBtnPlaceholder}></div>
                </div>
              </div>
              <div className={styles.widgetContentPlaceholder}>
                <div className={styles.widgetContentItemPlaceholder}>
                  <div className={styles.widgetLabelPlaceholder}></div>
                  <div className={styles.widgetValuePlaceholder}></div>
                </div>
                <div className={styles.widgetContentItemPlaceholder}>
                  <div className={styles.widgetLabelPlaceholder}></div>
                  <div className={styles.widgetValuePlaceholder}></div>
                </div>
              </div>
            </div>
          ))}
          {/* Add widget placeholder */}
          <div className={styles.addWidgetPlaceholder} onClick={() => alert('Click to add widget')}>
            <div className={styles.addWidgetIcon}>+</div>
            <div className={styles.addWidgetText}>Add Widget</div>
          </div>
        </div>
      </section>
    );
  }

  const handleWidgetUpdate = (updatedWidget: any) => {
    setWidgets(prev => prev.map(w => w.id === updatedWidget.id ? updatedWidget : w));
  };

  const handleWidgetRemove = (widgetId: number) => {
    setWidgets(prev => prev.filter(w => w.id !== widgetId));
  };

  return (
    <section className={styles.widgetsContainer}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Dashboard Widgets</h2>
        <div className={styles.widgetControls}>
          <button className={styles.addWidgetBtn} onClick={() => alert('Add widget functionality coming soon')}>
            + Add Widget
          </button>
          <button className={styles.layoutBtn} onClick={() => alert('Layout save functionality coming soon')}>
            Save Layout
          </button>
        </div>
      </div>
      <div className={styles.widgetsGrid}>
        {widgets.map(widget => (
          <WidgetPlaceholder
            key={widget.id}
            widget={widget}
            onUpdate={handleWidgetUpdate}
            onRemove={handleWidgetRemove}
          />
        ))}
        {/* Add widget placeholder */}
        <div className={styles.addWidgetPlaceholder} onClick={() => alert('Click to add widget')}>
          <div className={styles.addWidgetIcon}>+</div>
          <div className={styles.addWidgetText}>Add Widget</div>
        </div>
      </div>
    </section>
  );
};

export default WidgetsContainer;