import React from "react";
import { motion } from "framer-motion";

// Simulated user data
const user = {
  name: "John Doe",
  email: "john@example.com",
  bio: "Web developer with a passion for UI/UX and frontend technologies.",
  proficientSkills: ["Frontend", "UI/UX", "Public Speaking"],
  learningSkills: ["Backend", "AI/ML"],
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-6">
    <motion.div
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 max-w-md w-full text-center transition-all duration-300"
    >
        {/* Avatar in circular gradient frame */}
        <motion.div
          className="relative w-36 h-36 mx-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 p-1 shadow-lg">
            <img
              src="https://c.pxhere.com/photos/da/49/face_facial_hair_fine_looking_guy_man_model_person_portrait-1563283.jpg!d"
              alt="User Avatar"
              className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
            />
          </div>
        </motion.div>

        {/* Name & Email */}
        <motion.h2
          className="text-2xl font-extrabold mt-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {user.name}
        </motion.h2>
        <motion.p
          className="text-sm text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {user.email}
        </motion.p>

        {/* Bio */}
        <motion.p
          className="mt-4 text-gray-700 dark:text-gray-200 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {user.bio}
        </motion.p>

        {/* Proficient Skills */}
        <motion.div
          className="mt-6 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
            💪 Proficient Skills
          </h3>
          <motion.ul
            className="flex flex-wrap gap-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {user.proficientSkills.map((skill, index) => (
              <motion.li
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Learning Skills */}
        <motion.div
          className="mt-4 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
            📚 Learning Skills
          </h3>
          <motion.ul
            className="flex flex-wrap gap-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {user.learningSkills.map((skill, index) => (
              <motion.li
                key={index}
                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
