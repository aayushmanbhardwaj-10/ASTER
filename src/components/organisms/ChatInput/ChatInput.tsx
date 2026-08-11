import React, { useState } from 'react';
import styles from './ChatInput.module.css';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [content, setContent] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent newline
      handleSend();
    }
    // If Shift+Enter, we allow newline (default behavior)
  };

  const handleSend = () => {
    const trimmed = content.trim();
    if (trimmed) {
      onSendMessage(trimmed);
      setContent('');
    }
  };

  return (
    <div className={styles.chatInput}>
      <div className={styles.inputWrapper}>
        <textarea
          className={styles.input}
          value={content}
          onChange={e => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          rows={2}
          disabled={disabled}
        />
      </div>
      <button
        className={styles.sendButton}
        onClick={handleSend}
        disabled={disabled || !content.trim()}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;