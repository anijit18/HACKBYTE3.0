// File: LoginPage.jsx

import React, { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add login logic here
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-yellow-100 to-pink-100 transition-all duration-500">
  <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition-all hover:scale-105 border-2 border-yellow-200">
    <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 mb-8 tracking-tight">
       Welcome 
    </h2>

    <form onSubmit={handleLogin} className="space-y-6 animate-fade-up">
      <div className="transition-all duration-300 hover:scale-[1.02]">
        <label htmlFor="email" className="block text-pink-700 font-semibold mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-pink-300 bg-pink-50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      <div className="transition-all duration-300 hover:scale-[1.02]">
        <label htmlFor="password" className="block text-purple-700 font-semibold mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-purple-300 bg-purple-50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 via-yellow-500 to-pink-500 text-white font-bold py-2 rounded-2xl hover:from-pink-400 hover:to-purple-400 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
      >
        🚪 Login
      </button>

      <div className="text-sm text-center mt-4">
        <a href="#" className="text-purple-600 hover:text-pink-600 font-medium transition-colors duration-200 hover:underline">
          Forgot your password?
        </a>
      </div>
    </form>
  </div>
</div>

  );
}
