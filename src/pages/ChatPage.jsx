import React, { useState } from 'react';
import { Send, Menu, User2 } from 'lucide-react';

const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
  { id: 4, name: 'User 4' },
];

const ChatPage = () => {
  const [selectedUserId, setSelectedUserId] = useState(users[0].id);
  const [chatMessages, setChatMessages] = useState({});
  const [input, setInput] = useState('');

  const selectedUser = users.find((u) => u.id === selectedUserId);

  const handleSend = () => {
    if (!input.trim()) return;

    setChatMessages((prev) => {
      const updatedMessages = { ...prev };
      if (!updatedMessages[selectedUserId]) updatedMessages[selectedUserId] = [];
      updatedMessages[selectedUserId] = [
        ...updatedMessages[selectedUserId],
        { sender: 'You', text: input },
      ];
      return updatedMessages;
    });

    setInput('');
  };

  const messages = chatMessages[selectedUserId] || [];

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 mt-20">
      
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 shadow-lg p-4">
        <div className="text-2xl font-bold mb-6">Chats</div>
        <div className="space-y-2 overflow-y-auto">
          {users.map((u) => (
            <div
              key={u.id}
              onClick={() => setSelectedUserId(u.id)}
              className={`flex items-center gap-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg ${
                selectedUserId === u.id ? 'bg-blue-100 dark:bg-blue-800' : ''
              }`}
            >
              <User2 className="w-6 h-6" />
              <span>{u.name}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Chat area */}
      <main className="flex flex-col flex-1">
        
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 shadow">
          <div className="flex items-center gap-2">
            <Menu className="md:hidden block" />
            <span className="text-lg font-semibold">Chat with {selectedUser.name}</span>
          </div>
        </header>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-xs md:max-w-md px-4 py-2 rounded-xl ${
                msg.sender === 'You'
                  ? 'bg-blue-500 text-white ml-auto'
                  : 'bg-gray-300 text-black'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="p-15 border-t bg-white dark:bg-gray-800">
          <div className="flex items-center gap-2 mb-5">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 rounded-full border focus:outline-none bg-gray-100 dark:bg-gray-700"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
            >   
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
