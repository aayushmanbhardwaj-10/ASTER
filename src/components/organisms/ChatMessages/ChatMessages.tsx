import React from 'react';
import VirtualizedChatList from './VirtualizedChatList';
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
            �� 💬
          </div>
          <h3 className={styles.emptyStateTitle}>No messages yet</h3>
          <p className={styles.emptyStateDescription}>
            Start the conversation by sending a message.
          </p>
        </div>
      ) : (
        <>
          <VirtualizedChatList
            messages={messages}
            streamingContent={streamingContent}
            isStreaming={isStreaming}
          />
        </>
      )}
    </div>
  );
};

export default ChatMessages;