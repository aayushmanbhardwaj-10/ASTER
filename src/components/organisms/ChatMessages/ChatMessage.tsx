import React, { memo } from 'react';
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

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = memo(({ message }) => {
  return (
    <div
      key={message.id}
      className={`${styles.message} ${styles[message.sender]}`}
    >
      <div className={styles.messageHeader}>
        <span className={styles.senderName}>
          {message.sender === 'user' ? 'You' : 'ASTER'}
        </span>
        <span className={styles.timestamp}>
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
      <div className={styles.messageContent}>
        {/* Render markdown content with GFM support and code highlighting */}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
});

export default ChatMessage;