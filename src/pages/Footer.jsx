import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Gravitons</h1>
          <p className="text-sm">Connecting ideas, building the future. <br/>All rights reserved © 2025</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Quick Links</h2>
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/about" className="hover:text-blue-500">About</a>
          <a href="/contact" className="hover:text-blue-500">Contact</a>
          <a href="/login" className="hover:text-blue-500">Login</a>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm mt-10 border-t pt-5 border-gray-300 dark:border-gray-700">
        © 2025 Gravitons.
      </div>
    </footer>
  );
};

export default Footer;
