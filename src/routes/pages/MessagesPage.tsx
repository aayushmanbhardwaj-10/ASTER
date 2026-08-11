import React, { useState } from 'react';
import styles from './MessagesPage.module.css';
import ConversationSidebar from '@/components/organisms/ConversationSidebar/ConversationSidebar';
import ChatArea from '@/components/organisms/ChatArea/ChatArea';

const MessagesPage: React.FC = () => {
  const [selectedConversationId, setSelectedConversationId] = useState<
    string | null
  >(null);

  const handleConversationSelect = (id: string) => {
    setSelectedConversationId(id);
  };

  return (
    <main className={styles.messagesPage}>
      <ConversationSidebar
        selectedConversationId={selectedConversationId}
        onConversationSelected={handleConversationSelect}
      />
      <ChatArea selectedConversationId={selectedConversationId} />
    </main>
  );
};

export default MessagesPage;
