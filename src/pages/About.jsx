import React, { useState } from 'react';

export default function AboutUs() {
  return (
    // Full-height section with background and padding
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      {/* Inner card container */}
      <div className="max-w-3xl bg-white shadow-xl rounded-2xl p-10">
        {/* Page heading */}
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          About SkillBridge
        </h1>

        {/* Paragraph 1: Introduction */}
        <p className="text-gray-700 text-lg mb-4">
          <strong>SkillBridge</strong> is an AI-powered peer-to-peer skill barter platform
          designed to connect learners and sharers in a unique and collaborative way.
          Instead of paying with money, users can exchange skills—for example, trading
          coding lessons for guitar tutoring.
        </p>

        {/* Paragraph 2: AI matching system */}
        <p className="text-gray-700 text-lg mb-4">
          Our platform uses an advanced AI matching algorithm that considers each user's
          learning goals, schedule availability, and even geographic location.
          Whether you're looking for local in-person sessions or prefer virtual video
          chats, SkillBridge makes it easy to find your ideal learning partner.
        </p>

        {/* Paragraph 3: Purpose */}
        <p className="text-gray-700 text-lg mb-4">
          The goal is to democratize learning by making it more accessible, personalized,
          and community-driven. We believe everyone has something valuable to teach—and
          something new to learn.
        </p>

        {/* Closing tagline */}
        <div className="mt-8 text-center">
          <p className="text-md text-gray-600">
            Let’s grow together, one skill at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
