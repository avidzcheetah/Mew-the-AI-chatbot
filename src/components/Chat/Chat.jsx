import { useEffect, useRef } from 'react';
import styles from './Chat.module.css';

export function Chat({ messages, isStreaming }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.Chat}>
      <div className={styles.MessagesContainer}>
        {messages.length === 0 ? (
          <div className={styles.WelcomeMessage}>
            <div className={styles.WelcomeIcon}>🐱</div>
            <h3 className={styles.WelcomeTitle}>Welcome to Mew!</h3>
            <p className={styles.WelcomeText}>
              Hello hooman, How can I help you today?
            </p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.Message} ${styles[message.role]} ${
                index === messages.length - 1 ? styles.latest : ''
              }`}
            >
              <div className={styles.MessageContent}>
                <div className={styles.MessageBubble}>
                  {message.content}
                  {isStreaming && index === messages.length - 1 && (
                    <span className={styles.StreamingIndicator}>▋</span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
