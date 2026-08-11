import React from 'react';
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

interface ChatMessagesProps {
  messages: Message[];
  streamingContent?: string;
  isStreaming?: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  streamingContent = '',
  isStreaming = false,
}) => {
  return (
    <div className={styles.chatMessages}>
      {messages.length === 0 && !isStreaming ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyStateIcon}>
            ����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������� ���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������${"����������������������������������������������������"}����
          </div>
          <h3 className={styles.emptyStateTitle}>No messages yet</h3>
          <p className={styles.emptyStateDescription}>
            Start the conversation by sending a message.
          </p>
        </div>
      ) : (
        <>
          {messages.map(msg => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isStreaming && (
            <div className={`${styles.message} ${styles.ai}`}>
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

export default ChatMessages;