import React, { useState } from "react";
import axios from 'axios';

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
    const allSkills = [
      ...new Set([...proficientSkills, ...learningSkills]),
    ]; // merge skills uniquely

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
   // No structural changes, only styling and transitions added
// You can copy-paste directly

<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-200 p-4 transition-all duration-500 ease-in-out">
  <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 mt-20 transform transition-all duration-500 hover:scale-105 border-2 border-pink-200">
    <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 mb-10 tracking-tight">
    Create Account
    </h2>

    <form className="space-y-6 animate-fade-up" onSubmit={handleSubmit}>
      <div className="transition-all duration-300 hover:scale-[1.02]">
        <label className="block text-purple-700 font-semibold mb-1" htmlFor="name">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-yellow-50"
          placeholder="John Doe"
          required
        />
      </div>

      <div className="transition-all duration-300 hover:scale-[1.02]">
        <label className="block text-pink-700 font-semibold mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-yellow-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-pink-50"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="transition-all duration-300 hover:scale-[1.02]">
        <label className="block text-yellow-700 font-semibold mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 bg-purple-50"
          placeholder="••••••••"
          required
        />
      </div>

      <div className="transition-all duration-300 hover:scale-[1.02]">
        <label className="block text-purple-700 font-semibold mb-1" htmlFor="bio">
          Bio
        </label>
        <input
          id="bio"
          type="message"
          value={formData.bio}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-yellow-50"
          placeholder="Write your bio here..."
          required
        />
      </div>

      {/* Skills - Proficient */}
      <div className="transition-opacity duration-300">
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
      </div>

      {/* Skills - Want to Learn */}
      <div className="transition-opacity duration-300">
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
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold py-2 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
      >
        🚀 Sign Up
      </button>
    </form>

    <p className="text-center text-sm text-gray-600 mt-6">
      Already have an account?{" "}
      <a
        href="/login"
        className="text-purple-600 font-medium hover:underline hover:text-pink-500 transition-colors"
      >
        Log in here
      </a>
    </p>
  </div>
</div>


  );
}
