import React, { useState } from 'react';

export default function AboutUs() {
  return (
    // Full-height section with background and padding
<div className="min-h-screen bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 flex items-center justify-center px-6 py-12 transition-all duration-500">
  {/* Inner card container */}
  <div className="max-w-3xl bg-white shadow-2xl rounded-3xl p-10 border-2 border-purple-200 transform transition-all hover:scale-105">
    
    {/* Page heading */}
    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 mb-8 text-center tracking-tight animate-fade-up">
       About SkillBridge
    </h1>

    {/* Paragraph 1: Introduction */}
    <p className="text-gray-800 text-lg mb-5 leading-relaxed transition-all duration-300 hover:text-purple-700">
      <strong className="font-semibold text-pink-600">SkillBridge</strong> is an <span className="text-purple-600 font-semibold">AI-powered</span> peer-to-peer skill barter platform
      designed to connect learners and sharers in a unique and collaborative way.
      Instead of paying with money, users can exchange skills—for example, trading
      coding lessons for guitar tutoring.
    </p>

    {/* Paragraph 2: AI matching system */}
    <p className="text-gray-800 text-lg mb-5 leading-relaxed transition-all duration-300 hover:text-yellow-700">
      Our platform uses an advanced <span className="font-semibold text-purple-500">AI matching algorithm</span> that considers each user's
      learning goals, schedule availability, and even geographic location.
      Whether you're looking for local in-person sessions or prefer virtual video
      chats, SkillBridge makes it easy to find your ideal learning partner.
    </p>

    {/* Paragraph 3: Purpose */}
    <p className="text-gray-800 text-lg mb-5 leading-relaxed transition-all duration-300 hover:text-pink-700">
      The goal is to <span className="font-semibold text-yellow-600">democratize learning</span> by making it more accessible, personalized,
      and community-driven. We believe everyone has something valuable to teach—and
      something new to learn.
    </p>

    {/* Closing tagline */}
    <div className="mt-10 text-center">
      <p className="text-md font-medium text-gray-600 hover:text-purple-500 transition-all duration-300">
        🌱 Let’s grow together, one skill at a time.
      </p>
    </div>
  </div>
</div>

  );
}
