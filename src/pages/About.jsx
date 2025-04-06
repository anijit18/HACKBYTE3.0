import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 flex items-center justify-center px-6 py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.div
        className="max-w-3xl bg-white shadow-2xl rounded-3xl p-10 border-2 border-purple-200"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.h1
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 mb-8 text-center tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About SkillBridge
        </motion.h1>

        <motion.p
          className="text-gray-800 text-lg mb-5 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ color: '#9333EA' }} // purple-700
        >
          <strong className="font-semibold text-pink-600">SkillBridge</strong> is an <span className="text-purple-600 font-semibold">AI-powered</span> peer-to-peer skill barter platform
          designed to connect learners and sharers in a unique and collaborative way.
          Instead of paying with money, users can exchange skills—for example, trading
          coding lessons for guitar tutoring.
        </motion.p>

        <motion.p
          className="text-gray-800 text-lg mb-5 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ color: '#CA8A04' }} // yellow-700
        >
          Our platform uses an advanced <span className="font-semibold text-purple-500">AI matching algorithm</span> that considers each user's
          learning goals, schedule availability, and even geographic location.
          Whether you're looking for local in-person sessions or prefer virtual video
          chats, SkillBridge makes it easy to find your ideal learning partner.
        </motion.p>

        <motion.p
          className="text-gray-800 text-lg mb-5 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ color: '#DB2777' }} // pink-700
        >
          The goal is to <span className="font-semibold text-yellow-600">democratize learning</span> by making it more accessible, personalized,
          and community-driven. We believe everyone has something valuable to teach—and
          something new to learn.
        </motion.p>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-md font-medium text-gray-600 hover:text-purple-500 transition-all duration-300">
            🌱 Let’s grow together, one skill at a time.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
