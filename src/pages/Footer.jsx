import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-300 py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      
      {/* Logo & Description */}
      <div>
        <h1 className="text-3xl font-extrabold text-blue-700 dark:text-white mb-3">🚀 Gravitons</h1>
        <p className="text-sm leading-relaxed">
          Connecting ideas, building the future. <br />
          All rights reserved © 2025
        </p>
      </div>
  
      {/* Navigation Links */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🔗 Quick Links</h2>
        <ul className="space-y-2">
          <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="/about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
          <li><a href="/login" className="hover:text-blue-600 transition">Login</a></li>
        </ul>
      </div>
  
      {/* Social Media */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">📱 Follow Us</h2>
        <div className="flex space-x-5 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 transition"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  
    {/* Bottom Line */}
    <div className="mt-10 border-t pt-6 text-center text-sm text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700">
      © 2025 Gravitons. 
    </div>
  </footer>
  
  );
};

export default Footer;
