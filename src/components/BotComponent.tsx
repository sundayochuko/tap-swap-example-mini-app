// src/components/BotComponent.tsx
import React, { useState } from "react";

const BotComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const sendMessage = async () => {
    // Replace with your actual Telegram bot API call
    const botResponse = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    }).then((res) => res.json());

    setResponse(botResponse.reply);
  };

  return (
    <div>
      <h1>Telegram Bot MiniApp</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={sendMessage}>Send</button>
      <p>Bot Response: {response}</p>
    </div>
  );
};

export default BotComponent;
