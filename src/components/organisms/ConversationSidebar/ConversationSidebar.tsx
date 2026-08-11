import React from 'react';
import styles from './ConversationSidebar.module.css';

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
}

interface ConversationSidebarProps {
  selectedConversationId: string | null;
  onConversationSelected: (id: string) => void;
}

const ConversationSidebar: React.FC<ConversationSidebarProps> = ({
  selectedConversationId,
  onConversationSelected,
}) => {
  // Mock data - in a real app, this would come from a service or context
  const conversations: Conversation[] = [
    {
      id: '1',
      name: 'John Doe',
      lastMessage: 'Did you see the latest earnings report?',
      timestamp: '2:30 PM',
      unreadCount: 2,
    },
    {
      id: '2',
      name: 'Jane Smith',
      lastMessage: 'I think we should rebalance the portfolio.',
      timestamp: 'Yesterday',
      unreadCount: 0,
    },
    {
      id: '3',
      name: 'Team Discussion',
      lastMessage: 'Meeting at 3 PM today',
      timestamp: 'Yesterday',
      unreadCount: 5,
    },
  ];

  const handleSelect = (id: string) => {
    onConversationSelected(id);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.sidebarTitle}>Conversations</h2>
        <button
          className={styles.newConversationButton}
          aria-label="New Conversation"
          title="New Conversation"
        >
          <span>+</span> New
        </button>
      </div>
      <nav className={styles.sidebarNav}>
        <ul>
          {conversations.map(conv => (
            <li
              key={conv.id}
              className={`${styles.conversationItem} ${
                selectedConversationId === conv.id ? styles.active : ''
              }`}
              tabIndex={0}
              onClick={() => handleSelect(conv.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(conv.id);
                }
              }}
              aria-selected={selectedConversationId === conv.id}
            >
              <div className={styles.conversationContent}>
                <div className={styles.conversationHeader}>
                  <h3 className={styles.conversationName}>{conv.name}</h3>
                  <span className={styles.timestamp}>{conv.timestamp}</span>
                </div>
                <p className={styles.lastMessage}>{conv.lastMessage}</p>
                {conv.unreadCount > 0 && (
                  <span
                    className={styles.unreadBadge}
                    aria-label={`${conv.unreadCount} unread messages`}
                  >
                    {conv.unreadCount}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default ConversationSidebar;
