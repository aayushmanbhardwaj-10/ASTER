import React, { useState, useEffect } from 'react';
import styles from './RecentConversations.module.css';

interface Participant {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
}

interface Conversation {
  id: string;
  participant: Participant;
  message: string;
  time: string;
  unread?: boolean;
}

const getStatusColor = (status: 'online' | 'offline' | 'away'): string => {
  switch (status) {
    case 'online': return '#28A745';
    case 'offline': return '#6C757D';
    case 'away': return '#FFC107';
    default: return '#6C757D';
  }
};

const RecentConversations: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading conversations
    const loadConversations = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        // Mock data - empty array for empty state demo
        // In real app, this would come from API
        const mockConversations: Conversation[] = []; // Empty for demo
        setConversations(mockConversations);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load conversations:', error);
        setLoading(false);
      }
    };

    loadConversations();
  }, []);

  if (loading) {
    return (
      <div className={styles.recentConversations}>
        <div className={styles.loadingPlaceholder} aria-hidden="true">
          <div className={styles.conversationItem}>
            <div className={styles.avatarPlaceholder}></div>
            <div className={styles.messagePlaceholder}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
          <div className={styles.conversationItem}>
            <div className={styles.avatarPlaceholder}></div>
            <div className={styles.messagePlaceholder}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.recentConversations}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Recent Conversations</h2>
        <a href="/messages" className={styles.viewAll}>
          View All
          <span className={styles.arrow}>→</span>
        </a>
      </div>
      {conversations.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.emptyStateIcon}>���������������������������������������������💬</div>
          <h3 className={styles.emptyStateTitle}>No recent conversations</h3>
          <p className={styles.emptyStateDescription}>
            Start a conversation with teammates or advisors to collaborate on
            investment ideas.
          </p>
          <a href="/research" className={styles.emptyStateAction}>
            Start Collaboration
          </a>
        </div>
      ) : (
        <div className={styles.conversationsList}>
          {conversations.map(conv => (
            <div key={conv.id} className={styles.conversationItem}>
              <div className={styles.avatarGroup}>
                <img
                  src={conv.participant.avatar}
                  alt={conv.participant.name}
                  className={styles.avatar}
                  loading="lazy"
                  width="40"
                  height="40"
                />
                <div
                  className={styles.statusIndicator}
                  style={{ backgroundColor: getStatusColor(conv.participant.status) }}
                  aria-label={
                    conv.participant.status === 'online'
                      ? 'Online'
                      : conv.participant.status === 'offline'
                        ? 'Offline'
                        : 'Away'
                  }
                ></div>
              </div>
              <div className={styles.messageContent}>
                <div className={styles.messageHeader}>
                  <h3 className={styles.participantName}>
                    {conv.participant.name}
                  </h3>
                  <span className={styles.timestamp}>{conv.time}</span>
                </div>
                <p className={styles.messageText}>{conv.message}</p>
                {conv.unread && (
                  <div
                    className={styles.unreadBadge}
                    aria-label="Unread messages"
                    role="img"
                  >
                    ●
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentConversations;