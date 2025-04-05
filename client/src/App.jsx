import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [theme, setTheme] = useState('light');

  // Apply the theme class to <html>
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-[#1e1e1e] dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="bg-[#f5f5f5] dark:bg-[#2e2e2e] px-6 py-4 flex flex-wrap justify-between items-center">
        <div className="text-2xl font-bold">SkillBridge</div>

        <nav className="flex flex-wrap gap-4 mt-4 sm:mt-0">
          <img src="" alt="" className="hidden" />
          <a href="#" className="px-3 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition">Home</a>
          <a href="#" className="px-3 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition">About</a>
          <a href="#" className="px-3 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition">Contact</a>
          <a href="#" className="px-3 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition">Login</a>
          <a href="#" className="px-3 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition">Signup</a>
        </nav>

        <button
          onClick={toggleTheme}
          className="text-2xl ml-auto sm:ml-4 mt-4 sm:mt-0 text-black dark:text-white"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 px-6 py-10">
        <section className="hero text-center mt-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Responsive Homepage</h1>
          <p className="text-lg">
            This page adjusts based on your screen size and supports theme switching.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f5f5f5] dark:bg-[#2e2e2e] text-center py-4">
        <p>© 2025 SkillBridge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
