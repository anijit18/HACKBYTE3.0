import React, { useState } from "react";

export default function SignUp() {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          {/* <div>
            <label className="block text-gray-700 mb-1" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about yourself..."
            ></textarea>
          </div> */}

          {/* Skills - Proficient */}
          <div>
            <label className="block text-gray-700 mb-2">
              Skills you are proficient in
            </label>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <label key={`proficient-${skill}`} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={skill}
                    checked={proficientSkills.includes(skill)}
                    onChange={() => handleProficientToggle(skill)}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="text-gray-700">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Skills - Want to Learn */}
          <div>
            <label className="block text-gray-700 mb-2">
              Skills you want to learn
            </label>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <label key={`learning-${skill}`} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={skill}
                    checked={learningSkills.includes(skill)}
                    onChange={() => handleLearningToggle(skill)}
                    className="form-checkbox text-green-600"
                  />
                  <span className="text-gray-700">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-orange-300 text-white font-semibold py-2 rounded-xl transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
