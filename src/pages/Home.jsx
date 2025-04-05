import React from "react";
import { useNavigate } from "react-router-dom";
import FeaturedProfiles from "../components/FeaturedProfiles";
import ParticleTransition from "../components/ParticleTransition";
import { motion } from "framer-motion";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="relative h-screen overflow-hidden">
        {/* Particle background */}
        <div className="absolute inset-0 z-0">
          <ParticleTransition />
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400 drop-shadow-lg animate-fade-down mb-4">
            WELCOME TO SKILL BRIDGE
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8 animate-fade-up">
            Teach What You Know, Learn What You Love
          </p>

          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer animate-fade-up"
          >
            Get Started
          </button>
        </div>
      </div>

      <FeaturedProfiles />
      {/* <Services /> */}
      {/* <TopProfiles /> */}
    </motion.div>
  );
}
