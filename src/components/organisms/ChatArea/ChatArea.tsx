import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatArea.module.css';
import ChatMessages from '@/components/organisms/ChatMessages/ChatMessages';
import ChatInput from '@/components/organisms/ChatInput/ChatInput';
import TypingIndicator from '@/components/organisms/TypingIndicator/TypingIndicator';

interface ChatAreaProps {
  selectedConversationId: string | null;
}

const ChatArea: React.FC<ChatAreaProps> = ({ selectedConversationId }) => {
  const [messages, setMessages] = useState<Array<any>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingContent, setStreamingContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages or streaming content changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingContent]);

  // Mock AI responses for streaming simulation
  const mockResponses = [
    'Sure, I can help with that. Let me analyze the data for you.',
    'Based on the latest financial reports, here are the key insights...',
    'I recommend we look at the Q3 earnings call for more details.',
    'The market is showing signs of volatility in the tech sector.',
    'Let me run a quick valuation model for you.',
  ];

  const getMockResponse = () => {
    const randomIndex = Math.floor(Math.random() * mockResponses.length);
    return mockResponses[randomIndex];
  };

  const handleSendMessage = async (content: string) => {
    // Clear any previous error
    setError(null);

    try {
      // Add user message
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          content,
          sender: 'user',
          timestamp: new Date().toISOString(),
        },
      ]);

      // Set typing to true
      setIsTyping(true);

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Start streaming response
      setIsTyping(false);
      setIsStreaming(true);
      setStreamingContent('');

      const fullResponse = getMockResponse();

      // Simulate streaming by revealing text character by character
      for (let i = 0; i <= fullResponse.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 30)); // Adjust speed as needed
        setStreamingContent(fullResponse.substring(0, i));
      }

      // Finish streaming
      setIsStreaming(false);

      // Add the complete AI response to messages
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString() + 'a',
          content: fullResponse,
          sender: 'ai',
          timestamp: new Date().toISOString(),
        },
      ]);
    } catch (err) {
      // Handle error
      setIsTyping(false);
      setIsStreaming(false);
      setError('Failed to send message. Please try again.');
      console.error('Error sending message:', err);
    }
  };

  if (!selectedConversationId) {
    return (
      <div className={styles.chatArea}>
        <div className={styles.emptyState}>
          <h2>Select a conversation to start chatting</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.chatArea}>
      {error && (
        <div className={styles.errorState}>
          <p>{error}</p>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}
      <ChatMessages
        messages={messages}
        streamingContent={streamingContent}
        isStreaming={isStreaming}
      />
      <div ref={messagesEndRef} />
      {isStreaming && <TypingIndicator show={false} />}{' '}
      {/* Hide typing indicator during actual streaming */}
      {!isStreaming && <TypingIndicator show={isTyping} />}
      <ChatInput onSendMessage={handleSendMessage} disabled={!!error} />
    </div>
  );
};

export default ChatArea;
