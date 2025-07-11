import { useEffect, useRef } from 'react';
import styles from './Chat.module.css';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export function Chat({ messages, isStreaming }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function renderMarkdown(content) {
    // Parse markdown to HTML, then sanitize
    const rawHtml = marked.parse(content ?? '', { breaks: true });
    const safeHtml = DOMPurify.sanitize(rawHtml);
    return { __html: safeHtml };
  }

  return (
    <div className={styles.Chat}>
      <div className={styles.MessagesContainer}>
        {messages.length === 0 ? (
          <div className={styles.WelcomeMessage}>
            <div className={styles.WelcomeIcon}>🐱</div>
            <h3 className={styles.WelcomeTitle}>Welcome to Mew!</h3>
            <p className={styles.WelcomeText}>
              I'm your friendly AI assistant. Ask me anything and I'll do my best to help!
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
                  {/* Render Markdown as HTML */}
                  <span
                    className={styles.Markdown}
                    dangerouslySetInnerHTML={renderMarkdown(message.content)}
                  />
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
