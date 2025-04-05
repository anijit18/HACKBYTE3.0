import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook
import FeaturedProfiles from "../components/FeaturedProfiles";
// import Services from "../components/Services";
// import TopProfiles from "../components/TopProfiles";

export default function HomePage() {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/007/064/600/original/blue-technology-future-big-data-server-glow-triangular-abstract-technology-digital-big-data-social-blue-triangles-poster-geometric-wallpaper-technology-texture-free-vector.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            WELCOME TO  SKILL BRIDGE
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8">
            Teach What You Know, Learn What You Love
          </p>
          <button
            className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-red-700 transform transition duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </div>
      </div>

      <FeaturedProfiles />
      {/* <Services /> */}
      {/* <TopProfiles /> */}
    </>
  );
}
