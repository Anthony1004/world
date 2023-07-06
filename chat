import React, { useState, useRef } from 'react';

const App = () => {
  const [userMessage, setUserMessage] = useState('');
  const API_KEY = "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";

  const createChatLi = (message, className) => {
    return (
      <li className={`chat ${className}`}>
        {className === "outgoing" ? <p>{message}</p> : <><span className="material-symbols-outlined">smart_toy</span><p>{message}</p></>}
      </li>
    );
  }

  const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }]
      })
    }

    fetch(API_URL, requestOptions)
      .then(res => res.json())
      .then(data => {
        messageElement.textContent = data.choices[0].message.content;
        console.log("hello");
      })
      .catch((error) => {
        console.log("oops");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
      })
      .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
  }

  const chatboxRef = useRef(null);
  const chatbox = chatboxRef.current;

  const handleChat = () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    setUserMessage('');
    chatbox.appendChild(createChatLi(trimmedMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
      const incomingChatLi = createChatLi("Thinking...", "incoming");
      chatbox.appendChild(incomingChatLi);
      chatbox.scrollTo(0, chatbox.scrollHeight);

      generateResponse(incomingChatLi);
    }, 600);
  }

  return (
    <div>
      <button className="chatbot-toggler">
        <span className="material-symbols-outlined">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot">
        <header>
          <h2>Chatbot</h2>
          <span className="close-btn material-symbols-outlined">close</span>
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          <li className="chat incoming">
            <span className="material-symbols-outlined">smart_toy</span>
            <p>Hi there <br /> How can I help you today?</p>
          </li>
        </ul>
        <div className="chat-input">
          <textarea
            placeholder="Enter a message..."
            value={userMessage}
            onChange={e => setUserMessage(e.target.value)}
            required
          ></textarea>
          <span id="send-btn" className="material-symbols-outlined" onClick={handleChat}>send</span>
        </div>
      </div>
    </div>
  );
}

export default App;
