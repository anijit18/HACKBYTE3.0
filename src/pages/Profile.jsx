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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 max-w-md w-full text-center transition-all duration-300">
        
        {/* Avatar in circular gradient frame */}
        <div className="relative w-36 h-36 mx-auto">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 p-1 shadow-lg">
            <img
              src="https://c.pxhere.com/photos/da/49/face_facial_hair_fine_looking_guy_man_model_person_portrait-1563283.jpg!d"
              alt="User Avatar"
              className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 transition duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Name & Email */}
        <h2 className="text-2xl font-extrabold mt-6 text-gray-800 dark:text-white">
          {user.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>

        {/* Bio */}
        <p className="mt-4 text-gray-700 dark:text-gray-200 italic">{user.bio}</p>

        {/* Proficient Skills */}
        <div className="mt-6 text-left">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
            💪 Proficient Skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {user.proficientSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Learning Skills */}
        <div className="mt-4 text-left">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
            📚 Learning Skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {user.learningSkills.map((skill, index) => (
              <li
                key={index}
                className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm"
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
