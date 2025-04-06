import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add login logic here
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-yellow-100 to-pink-100 p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border-2 border-yellow-200"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 mb-8 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome
        </motion.h2>

        <motion.form
          onSubmit={handleLogin}
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Email Field */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="transition-all duration-300 hover:scale-[1.02]"
          >
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
          </motion.div>

          {/* Password Field */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="transition-all duration-300 hover:scale-[1.02]"
          >
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
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-yellow-500 to-pink-500 text-white font-bold py-2 rounded-2xl hover:from-pink-400 hover:to-purple-400 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
          >
            🚪 Login
          </motion.button>

          {/* Forgot Password Link */}
          <motion.div
            className="text-sm text-center mt-4"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#"
              className="text-purple-600 hover:text-pink-600 font-medium transition-colors duration-200 hover:underline"
            >
              Forgot your password?
            </a>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
