import React, { useState, useEffect, useRef, useCallback } from 'react';
import ChatMessage from './ChatMessage';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import styles from './ChatMessages.module.css';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

interface VirtualizedChatListProps {
  messages: Message[];
  streamingContent?: string;
  isStreaming?: boolean;
  itemHeight?: number; // Height of each chat message item in pixels
  visibleItemCount?: number; // Number of items to render beyond visible area for smooth scrolling
}

const VirtualizedChatList: React.FC<VirtualizedChatListProps> = ({
  messages,
  streamingContent = '',
  isStreaming = false,
  itemHeight = 80, // Default height for chat messages
  visibleItemCount = 5, // Render 5 extra items above and below visible area
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  // Calculate visible range based on scroll position
  const updateVisibleRange = useCallback(() => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const viewHeight = containerRef.current.clientHeight;

    // Calculate which items are visible
    const start = Math.max(0, Math.floor(scrollTop / itemHeight) - visibleItemCount);
    const end = Math.min(
      messages.length,
      Math.ceil((scrollTop + viewHeight) / itemHeight) + visibleItemCount
    );

    setStartIndex(start);
    setEndIndex(end);
  }, [itemHeight, messages.length, visibleItemCount]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Update visible range on scroll
    container.addEventListener('scroll', updateVisibleRange);

    // Initial update
    updateVisibleRange();

    return () => {
      container.removeEventListener('scroll', updateVisibleRange);
    };
  }, [updateVisibleRange]);

  // Recalculate when messages length changes significantly
  useEffect(() => {
    updateVisibleRange();
  }, [messages.length, updateVisibleRange]);

  // Handle scrolling to bottom for new messages
  useEffect(() => {
    if (isStreaming && containerRef.current) {
      // Scroll to bottom when new messages arrive
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [isStreaming]);

  // Calculate total height for scrollbar
  const totalHeight = messages.length * itemHeight;

  return (
    <div
      ref={containerRef}
      className={styles.chatMessages}
      style={{ height: '100%', overflowY: 'auto', position: 'relative' }}
    >
      {/* Placeholder for scroll height */}
      <div
        style={{
          height: `${totalHeight}px`,
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }}
      />

      {messages.length === 0 && !isStreaming ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyStateIcon}>
            ������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������� �����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������
          </div>
          <h3 className={styles.emptyStateTitle}>No messages yet</h3>
          <p className={styles.emptyStateDescription}>
            Start the conversation by sending a message.
          </p>
        </div>
      ) : (
        <>
          {/* Render only visible messages */}
          {messages.slice(startIndex, endIndex).map((msg, index) => (
            <div
              key={msg.id}
              style={{
                position: 'absolute',
                top: `${(startIndex + index) * itemHeight}px`,
                left: 0,
                width: '100%',
                height: `${itemHeight}px`,
                boxSizing: 'border-box',
              }}
            >
              <ChatMessage message={msg} />
            </div>
          ))}

          {/* Streaming message at the bottom */}
          {isStreaming && (
            <div
              className={`${styles.message} ${styles.ai}`}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
              }}
            >
              <div className={styles.messageHeader}>
                <span className={styles.senderName}>ASTER</span>
                <span className={styles.timestamp}>
                  {new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
              <div className={styles.messageContent}>
                {/* Render streaming markdown content */}
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {streamingContent}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VirtualizedChatList;