import React, { useState } from 'react';

const PrivateChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setSending(true);
    console.log("Sending message:", input);
    const newMessage = { id: Date.now(), text: input };
    setMessages([...messages, newMessage]);
    setInput('');
    setTimeout(() => {
      setSending(false);
    }, 500);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Private Chat</h2>
      <div className="mb-4 max-h-60 overflow-y-auto border p-2">
        {messages.map(msg => (
          <div key={msg.id} className="mb-2">{msg.text}</div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          className="box-border flex-grow p-2 border rounded"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} disabled={sending} className="cursor-pointer bg-green-500 px-4 py-2 rounded">
          {sending ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default PrivateChat;