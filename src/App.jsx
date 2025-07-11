import { useState } from "react";
import { Assistant } from "./assistants/googleai";
// import { Assistant } from "./assistants/openai";
import { Loader } from "./components/Loader/Loader";
import { Chat } from "./components/Chat/Chat";
import { Controls } from "./components/Controls/Controls";
import styles from "./App.module.css";

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function updateLastMessageContent(content) {
    setMessages((prevMessages) =>
      prevMessages.map((message, index) =>
        index === prevMessages.length - 1
          ? { ...message, content: `${message.content}${content}` }
          : message
      )
    );
  }

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setIsLoading(true);
    try {
      const result = await assistant.chatStream(content);
      let isFirstChunk = false;

      for await (const chunk of result) {
        if (!isFirstChunk) {
          isFirstChunk = true;
          addMessage({ content: "", role: "assistant" });
          setIsLoading(false);
          setIsStreaming(true);
        }

        updateLastMessageContent(chunk);
      }

      setIsStreaming(false);
    } catch (error) {
      addMessage({
        content: "Meow... I tried, but it didn't work. Maybe try again, human? Purrhaps it'll work next time! 🐾",
        role: "system",
      });
      setIsLoading(false);
      setIsStreaming(false);
    }
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${styles.App} ${isDarkMode ? styles.dark : ''}`}>
      {isLoading && <Loader />}
      
      <header className={styles.Header}>
        <div className={styles.HeaderContent}>
          <div className={styles.LogoSection}>
            <img className={styles.Logo} src="/work-from-home.png" alt="Mew Logo" />
            <div className={styles.TitleGroup}>
              <h1 className={styles.Title}>Mew</h1>
              <h6 className={styles.Subtitle}>The AI Chatbot - by Avidu</h6>
            </div>
          </div>
          
          <button 
            className={styles.DarkModeToggle}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            <div className={`${styles.ToggleSlider} ${isDarkMode ? styles.active : ''}`}>
              <span className={styles.ToggleIcon}>
                {isDarkMode ? '🌙' : '☀️'}
              </span>
            </div>
          </button>
        </div>
      </header>

      <main className={styles.MainContent}>
        <div className={styles.ChatContainer}>
          <Chat messages={messages} isStreaming={isStreaming} />
        </div>
        
        <div className={styles.ControlsContainer}>
          <Controls
            isDisabled={isLoading || isStreaming}
            onSend={handleContentSend}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
