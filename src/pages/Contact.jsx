import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 flex items-center justify-center p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="bg-white shadow-2xl rounded-3xl border-2 border-pink-200 p-10 max-w-xl w-full"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 mb-8 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
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
          {['name', 'email', 'message'].map((field, index) => (
            <motion.div
              key={field}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="transition-all duration-300 hover:scale-[1.02]"
            >
              <label
                className={`block text-sm font-semibold ${
                  field === 'name'
                    ? 'text-purple-700'
                    : field === 'email'
                    ? 'text-pink-700'
                    : 'text-yellow-700'
                } mb-1`}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field !== 'message' ? (
                <input
                  name={field}
                  type={field === 'email' ? 'email' : 'text'}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border ${
                    field === 'name'
                      ? 'border-purple-300 bg-purple-50 focus:ring-purple-400'
                      : 'border-pink-300 bg-pink-50 focus:ring-pink-400'
                  } rounded-xl shadow-sm focus:outline-none focus:ring-2`}
                />
              ) : (
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-yellow-300 bg-yellow-50 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 text-white font-bold py-2 rounded-2xl hover:from-purple-500 hover:to-pink-400 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
          >
            🚀 Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
