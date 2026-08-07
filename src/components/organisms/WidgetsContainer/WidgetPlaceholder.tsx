import React, { useState } from 'react';
import styles from './WidgetPlaceholder.module.css';

interface WidgetPlaceholderProps {
  widget: {
    id: number;
    title: string;
    type: string;
    size: 'small' | 'medium' | 'large';
  };
  onUpdate: (widget: any) => void;
  onRemove: (id: number) => void;
}

const WidgetPlaceholder: React.FC<WidgetPlaceholderProps> = ({ widget, onUpdate, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(widget.title);

  const handleSave = () => {
    onUpdate({ ...widget, title: editTitle });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(widget.title);
    setIsEditing(false);
  };

  const getSizeConfig = (size: string) => {
    const sizes: Record<string, { cols: number }> = {
      small: { cols: 1 },
      medium: { cols: 2 },
      large: { cols: 3 }
    };
    return sizes[size] || { cols: 2 };
  };

  const sizeConfig = getSizeConfig(widget.size);

  // Loading state
  const [loading, setLoading] = useState(false);

  // Simulate loading for demo purposes
  // In real app, this would be based on actual data fetching
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  if (loading) {
    return (
      <div className={`${styles.widget} ${styles[widget.type]} `}>
        <div className={styles.widgetHeader}>
          <div className={styles.widgetTitlePlaceholder}></div>
          <div className={styles.widgetActionsPlaceholder}>
            <div className={styles.widgetActionBtnPlaceholder}></div>
            <div className={styles.widgetActionBtnPlaceholder}></div>
          </div>
        </div>
        <div className={styles.widgetContentPlaceholder}>
          {widget.type === 'market-overview' && (
            <>
              <div className={styles.widgetContentItemPlaceholder}>
                <div className={styles.widgetLabelPlaceholder}></div>
                <div className={styles.widgetValuePlaceholder}></div>
              </div>
              <div className={styles.widgetContentItemPlaceholder}>
                <div className={styles.widgetLabelPlaceholder}></div>
                <div className={styles.widgetValuePlaceholder}></div>
              </div>
            </>
          )}
          {widget.type === 'watchlist' && (
            <>
              <div className={styles.widgetContentItemPlaceholder}>
                <div className={styles.widgetLabelPlaceholder}></div>
                <div className={styles.widgetValuePlaceholder}></div>
              </div>
              <div className={styles.widgetContentItemPlaceholder}>
                <div className={styles.widgetLabelPlaceholder}></div>
                <div className={styles.widgetValuePlaceholder}></div>
              </div>
              <div className={styles.widgetContentItemPlaceholder}>
                <div className={styles.widgetLabelPlaceholder}></div>
                <div className={styles.widgetValuePlaceholder}></div>
              </div>
            </>
          )}
          {widget.type === 'performance' && (
            <div className={styles.widgetChartPlaceholderLoading}>
              <div className={styles.chartBarLoading} style={{ height: '20%' }}></div>
              <div className={styles.chartBarLoading} style={{ height: '35%' }}></div>
              <div className={styles.chartBarLoading} style={{ height: '15%' }}></div>
              <div className={styles.chartBarLoading} style={{ height: '40%' }}></div>
              <div className={styles.chartBarLoading} style={{ height: '25%' }}></div>
              <div className={styles.chartBarLoading} style={{ height: '30%' }}></div>
            </div>
          )}
          {widget.type === 'news' && (
            <>
              <div className={styles.widgetContentItemPlaceholder}>
                <div className={styles.widgetLabelPlaceholder}></div>
                <div className={styles.widgetValuePlaceholder}></div>
              </div>
              <div className={styles.widgetContentItemPlaceholder}>
                <div className={styles.widgetLabelPlaceholder}></div>
                <div className={styles.widgetValuePlaceholder}></div>
              </div>
            </>
          )}
          {widget.type === 'alerts' && (
            <>
              <div className={styles.widgetContentItemPlaceholder}>
                <div className={styles.widgetLabelPlaceholder}></div>
                <div className={styles.widgetValuePlaceholder}></div>
              </div>
              <div className={styles.widgetContentItemPlaceholder}>
                <div className={styles.widgetLabelPlaceholder}></div>
                <div className={styles.widgetValuePlaceholder}></div>
              </div>
            </>
          )}
          {widget.type === 'sector' && (
            <>
              <div className={styles.widgetContentItemPlaceholder}>
                <div className={styles.widgetLabelPlaceholder}></div>
                <div className={styles.widgetValuePlaceholder}></div>
              </div>
              <div className={styles.widgetContentItemPlaceholder}>
                <div className={styles.widgetLabelPlaceholder}></div>
                <div className={styles.widgetValuePlaceholder}></div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.widget} ${styles[widget.type]} `}
      style={{ gridColumnEnd: `span ${sizeConfig.cols}` }}
    >
      <div className={styles.widgetHeader}>
        {isEditing ? (
          <div className={styles.widgetEdit}>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              onBlur={handleSave}
              onKeyPress={(e) => e.key === 'Enter' && handleSave()}
              autoFocus
              className={styles.widgetInput}
            />
            <div className={styles.widgetEditActions}>
              <button onClick={handleSave} className={styles.widgetEditBtn}>Save</button>
              <button onClick={handleCancel} className={styles.widgetEditBtn}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className={styles.widgetTitle}>{widget.title}</h3>
            <div className={styles.widgetActions}>
              <button onClick={() => setIsEditing(true)} className={styles.widgetActionBtn}>
                ������� ����� ����� ���
              </button>
              <button onClick={() => onRemove(widget.id)} className={styles.widgetActionBtn}>
                ×
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.widgetContent}>
        {/* Widget-specific content */}
        {widget.type === 'market-overview' && (
          <div className={styles.widgetContentItem}>
            <div className={styles.widgetLabel}>S&P 500</div>
            <div className={styles.widgetValue}>5,234.56</div>
            <div className={styles.widgetChange positive}>+0.45%</div>
          </div>
        )}
        {widget.type === 'watchlist' && (
          <div className={styles.widgetContentItem}>
            <div className={styles.widgetLabel}>AAPL</div>
            <div className={styles.widgetValue}>$198.45</div>
            <div className={styles.widgetChange positive}>+1.2%</div>
          </div>
          <div className={styles.widgetContentItem}>
            <div className={styles.widgetLabel}>MSFT</div>
            <div className={styles.widgetValue}>$425.67</div>
            <div className={styles.widgetChange positive}>+0.8%</div>
          </div>
          <div className={styles.widgetContentItem}>
            <div className={styles.widgetLabel}>GOOGL</div>
            <div className={styles.widgetValue}>$168.90</div>
            <div className={styles.widgetChange negative}>-0.3%</div>
          </div>
        )}
        {widget.type === 'performance' && (
          <div className={styles.widgetChartPlaceholder}>
            <div className={styles.chartBar} style={{ height: '20%' }}></div>
            <div className={styles.chartBar} style={{ height: '35%' }}></div>
            <div className={styles.chartBar} style={{ height: '15%' }}></div>
            <div className={styles.chartBar} style={{ height: '40%' }}></div>
            <div className={styles.chartBar} style={{ height: '25%' }}></div>
            <div className={styles.chartBar} style={{ height: '30%' }}></div>
          </div>
        )}
        {widget.type === 'news' && (
          <div className={styles.widgetContentItem}>
            <div className={styles.widgetLabel}>Market News</div>
            <div className={styles.widgetValue}>Fed maintains rates</div>
            <div className={styles.widgetTimestamp}>2 min ago</div>
          </div>
          <div className={styles.widgetContentItem}>
            <div className={styles.widgetLabel}>Earnings</div>
            <div className={styles.widgetValue}>AAPL beats estimates</div>
            <div className={styles.widgetTimestamp}>15 min ago</div>
          </div>
        )}
        {widget.type === 'alerts' && (
          <div className={styles.widgetContentItem}>
            <div className={styles.widgetLabel}>Price Alert</div>
            <div className={styles.widgetValue}>TSLA > $250</div>
            <div className={styles.widgetTimestamp}>Active</div>
          </div>
          <div className={styles.widgetContentItem}>
            <div className={styles.widgetLabel}>News Alert</div>
            <div className={styles.widgetValue}>Fed announcement</div>
            <div className={styles.widgetTimestamp}>Today 2:00 PM</div>
          </div>
        )}
        {widget.type === 'sector' && (
          <div className={styles.widgetContentItem}>
            <div className={styles.widgetLabel}>Technology</div>
            <div className={styles.widgetValue}>+2.1%</div>
          </div>
          <div className={styles.widgetContentItem}>
            <div className={styles.widgetLabel}>Healthcare</div>
            <div className={styles.widgetValue}>+0.8%</div>
          </div>
          <div className={styles.widgetContentItem}>
            <div className={styles.widgetLabel}>Financials</div>
            <div className={styles.widgetValue}>-0.3%</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WidgetPlaceholder;