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
<div className="flex h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 mt-20 transition-all duration-500">
  
  {/* Sidebar */}
  <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 shadow-2xl rounded-tr-3xl rounded-br-3xl p-5 transition-all duration-300">
    <div className="text-3xl font-extrabold mb-6 text-blue-700 dark:text-blue-300 tracking-tight animate-fade-down">
      💬 Chats
    </div>
    <div className="space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 dark:scrollbar-thumb-blue-600">
      {users.map((u) => (
        <div
          key={u.id}
          onClick={() => setSelectedUserId(u.id)}
          className={`flex items-center gap-3 cursor-pointer transition-all p-3 rounded-xl font-medium hover:scale-[1.02] ${
            selectedUserId === u.id
              ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 text-white shadow-md'
              : 'bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600'
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
    <header className="flex items-center justify-between px-4 py-4 bg-white dark:bg-gray-800 shadow-md border-b dark:border-gray-700">
      <div className="flex items-center gap-3">
        <Menu className="md:hidden block text-gray-600 dark:text-gray-300" />
        <span className="text-xl font-bold text-blue-700 dark:text-white">
          Chat with {selectedUser.name}
        </span>
      </div>
    </header>

    {/* Chat messages */}
    <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-blue-700">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`max-w-[80%] px-5 py-3 rounded-2xl transition-all duration-300 ${
            msg.sender === 'You'
              ? 'bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 text-white ml-auto animate-slide-in-right'
              : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-md animate-slide-in-left'
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>

    {/* Input area */}
    <div className="pb-30 px-6 pb-5 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white p-2 rounded-full shadow-lg transition-all"
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
