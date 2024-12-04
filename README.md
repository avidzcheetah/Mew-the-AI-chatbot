# Mew - The Real-time AI Chatbot

![Mew Chatbot](https://github.com/avidzcheetah/Mew-the-AI-chatbot/blob/main/Trials/Mew_header.png)

## Overview  
*Mew* is a real-time AI chatbot application built using React, OpenAI's ChatGPT, and Google's Gemini AI. Designed for seamless and engaging interactions, Mew is packed with powerful features to deliver a modern chatbot experience.  

## Features  
- **Real-time Conversations**: Provides smooth and immediate AI responses for dynamic interactions.  
- **Multi-AI Integration**: Combines OpenAI's ChatGPT and Google's Gemini AI for intelligent and versatile responses.  
- **Auto-Resizable Text Fields**: Enhances user convenience by dynamically resizing input fields.  
- **Markdown Support**: Enables rich text formatting for clear and engaging message displays.  
- **Dark Mode**: Offers a sleek and adaptable interface for various environments.  
- **Auto-Scrolling**: Keeps the latest conversation visible at all times.  
- **Loading Indicators**: Keeps users informed during AI response processing.  
- **Scalable Architecture**: Modular design supports future features and easy maintenance.  

## Screenshots  
### Does Mew has emotions?  
![Does Mew has emotions?](https://github.com/avidzcheetah/Mew-the-AI-chatbot/blob/main/Trials/Does%20Mew%20has%20emotions.png)  

### Asking Mew "what can you do?" 
![Asking Mew "what can you do?"](https://github.com/avidzcheetah/Mew-the-AI-chatbot/blob/main/Trials/Asking%20Mew%20what%20can%20u%20do.png)  

## Technologies Used  
- **Frontend**: React.js  
- **AI APIs**:  
  - OpenAI (ChatGPT)  
  - Google Gemini AI  
- **Styling**: CSS with dark mode support  
- **Backend Integration**: API calls for AI response handling  

## Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/avidzcheetah/Mew-the-AI-chatbot.git
   cd Mew-the-AI-chatbot
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
   npm create vite@latest  
   ```

2. Install dependencies:  
   ```bash
   npm install
   npm i @google/generative-ai --save  
   npm i openai --save 
   npm i react-markdown --save   
   npm i react-textarea-autosize --save
   ```

3. Add your API keys:  
   - Create a `.env` file in the project root.  
   - Add your OpenAI and Google Gemini API keys:
     ```env
     VITE_OPEN_AI_API_KEY=your_openai_api_key
     VITE_GOOGLE_AI_API_KEY=your_google_gemini_api_key
     ```

4. Start the development server:  
   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser to view the app.  

## Usage  
- Enter a message in the input field and hit "Send" to interact with the AI chatbot.  
- Toggle dark mode using the theme switcher for a personalized experience.  

## Contributing  
Contributions are welcome! If you’d like to improve Mew, please fork the repository, make your changes, and submit a pull request.  

## License  
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.  

## Contact  
For questions or feedback, feel free to connect with me:  
- LinkedIn: [Avidz](https://www.linkedin.com/in/avidz/)  
- Email: avidu@pm.me  
