import React from 'react'
import { Link } from 'react-router-dom'; // ✅ Import Link

const profiles = [
  {
    image: "https://c.pxhere.com/photos/da/49/face_facial_hair_fine_looking_guy_man_model_person_portrait-1563283.jpg!d",
    title: "John Doe",
    description: "Backend",
    teach: "Frontend"
  },
  {
    image: "https://th.bing.com/th/id/OIP.os7uM5TJXlUufJbHt9t7UAHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    title: "Lily Smith",
    description: "Singing",
    teach: "Chess"
  },
  {
    image: "https://th.bing.com/th/id/OIP.FPDZmsB9Nb6mFDH0kkKcMAHaJl?w=138&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    title: "Jane Smith",
    description: "AI/ML",
    teach: "Piano"
  },
  {
    image: "https://th.bing.com/th/id/OIP.NqY3rNMnx2NXYo3KJfg43gHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    title: "Alice Johnson",
    description: "Flute",
    teach: "App Dev"
  }
];

const FeaturedProfiles = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
          🌟 Featured Profiles 🌟
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 flex flex-col"
            >
              {/* 👉 Image wrapped in Link */}
              <Link to="/profile">
                <img
                  src={profile.image}
                  alt={profile.title}
                  className="w-full h-56 object-cover rounded-t-3xl cursor-pointer hover:opacity-90"
                />
              </Link>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-2xl font-semibold text-blue-700 mb-1">
                    {profile.title}
                  </h4>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium text-purple-600">Want to learn:</span>{" "}
                    {profile.description}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium text-green-600">Want to teach:</span>{" "}
                    {profile.teach}
                  </p>
                </div>
                <div className="mt-4">
                  <a href="/ChatPage" className="block">
                    <button
                      type="button"
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-400 text-white font-bold py-2 rounded-xl hover:from-orange-400 hover:to-yellow-400 transition duration-300 cursor-pointer"
                    >
                      💬 Chat
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProfiles;
