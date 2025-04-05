import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle sending message (API call or email service)
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 flex items-center justify-center p-6 transition-all duration-500">
    <div className="bg-white shadow-2xl rounded-3xl border-2 border-pink-200 p-10 max-w-xl w-full transform transition-all hover:scale-105">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 mb-8 tracking-tight animate-fade-up">
         Contact Us
      </h2>
  
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="transition-all duration-300 hover:scale-[1.02]">
          <label className="block text-sm font-semibold text-purple-700 mb-1">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            required
            className="w-full px-4 py-2 border border-purple-300 bg-purple-50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
  
        <div className="transition-all duration-300 hover:scale-[1.02]">
          <label className="block text-sm font-semibold text-pink-700 mb-1">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
            className="w-full px-4 py-2 border border-pink-300 bg-pink-50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
  
        <div className="transition-all duration-300 hover:scale-[1.02]">
          <label className="block text-sm font-semibold text-yellow-700 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="w-full px-4 py-2 border border-yellow-300 bg-yellow-50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 text-white font-bold py-2 rounded-2xl hover:from-purple-500 hover:to-pink-400 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
        >
          🚀 Send Message
        </button>
      </form>
    </div>
  </div>
  
  );
}
