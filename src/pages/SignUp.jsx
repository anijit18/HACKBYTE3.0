import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
  });

  const [proficientSkills, setProficientSkills] = useState([]);
  const [learningSkills, setLearningSkills] = useState([]);

  const skills = [
    "Frontend",
    "Backend",
    "AI/ML",
    "Guitar",
    "Flute",
    "UI/UX",
    "Writing",
    "Public Speaking",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allSkills = [...new Set([...proficientSkills, ...learningSkills])];

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        ...formData,
        skills: allSkills,
      });

      console.log("Registered:", response.data);
      alert("User registered successfully!");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  const handleProficientToggle = (skill) => {
    setProficientSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleLearningToggle = (skill) => {
    setLearningSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-200 p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 mt-20 border-2 border-pink-200"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.h2
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 mb-10 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Create Account
        </motion.h2>

        <motion.form
          className="space-y-6"
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {["name", "email", "password", "bio"].map((field, index) => {
            const labels = {
              name: "Full Name",
              email: "Email",
              password: "Password",
              bio: "Bio",
            };

            const placeholders = {
              name: "John Doe",
              email: "you@example.com",
              password: "••••••••",
              bio: "Write your bio here...",
            };

            const colors = {
              name: "purple",
              email: "pink",
              password: "yellow",
              bio: "purple",
            };

            return (
              <motion.div
                key={field}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <label
                  className={`block text-${colors[field]}-700 font-semibold mb-1`}
                  htmlFor={field}
                >
                  {labels[field]}
                </label>
                <input
                  id={field}
                  type={field === "password" ? "password" : "text"}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border border-${colors[field]}-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-${colors[field]}-400 bg-${field === "email" ? "pink" : field === "bio" ? "yellow" : field === "password" ? "purple" : "yellow"}-50`}
                  placeholder={placeholders[field]}
                  required
                />
              </motion.div>
            );
          })}

          {/* Skills Proficient */}
          <motion.div
            className="transition-opacity duration-300"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <label className="block text-fuchsia-700 font-bold mb-2">
              🌟 Skills you're Proficient In
            </label>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <label
                  key={`proficient-${skill}`}
                  className="flex items-center space-x-2 bg-pink-100 px-3 py-2 rounded-xl hover:bg-pink-200 transition-all"
                >
                  <input
                    type="checkbox"
                    value={skill}
                    checked={proficientSkills.includes(skill)}
                    onChange={() => handleProficientToggle(skill)}
                    className="form-checkbox text-pink-600"
                  />
                  <span className="text-gray-800">{skill}</span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Skills Learning */}
          <motion.div
            className="transition-opacity duration-300"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          >
            <label className="block text-green-700 font-bold mb-2">
              🎯 Skills You Want to Learn
            </label>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <label
                  key={`learning-${skill}`}
                  className="flex items-center space-x-2 bg-green-100 px-3 py-2 rounded-xl hover:bg-green-200 transition-all"
                >
                  <input
                    type="checkbox"
                    value={skill}
                    checked={learningSkills.includes(skill)}
                    onChange={() => handleLearningToggle(skill)}
                    className="form-checkbox text-green-600"
                  />
                  <span className="text-gray-800">{skill}</span>
                </label>
              ))}
            </div>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-2 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
          >
            🚀 Sign Up
          </motion.button>
        </motion.form>

        <motion.p
          className="text-center text-sm text-gray-600 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Already have an account?{" "}
          <a
            href="/login"
            className="text-purple-600 font-medium hover:underline hover:text-pink-500 transition-colors"
          >
            Log in here
          </a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
