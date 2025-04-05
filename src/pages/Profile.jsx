import React from "react";

const avatarOptions = [
  "/avatars/avatar1.png",
  "/avatars/avatar2.png",
  "/avatars/avatar3.png",
  "/avatars/avatar4.png",
  "/avatars/avatar5.png",
];

// Simulated user data (replace with actual fetched/prop data)
const user = {
  name: "John Doe",
  email: "john@example.com",
  bio: "Web developer with a passion for UI/UX and frontend technologies.",
  proficientSkills: ["Frontend", "UI/UX", "Public Speaking"],
  learningSkills: ["Backend", "AI/ML"],
  avatarIndex: 2, // User selected 3rd avatar (0-based index)
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <img
          src={avatarOptions[user.avatarIndex]}
          alt="User Avatar"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 object-cover"
        />
        <h2 className="text-2xl font-bold mt-4 text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.email}</p>

        <p className="mt-4 text-gray-700">{user.bio}</p>

        <div className="mt-6 text-left">
          <h3 className="font-semibold text-gray-800 mb-1">Proficient Skills:</h3>
          <ul className="flex flex-wrap gap-2">
            {user.proficientSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 text-left">
          <h3 className="font-semibold text-gray-800 mb-1">Learning Skills:</h3>
          <ul className="flex flex-wrap gap-2">
            {user.learningSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
