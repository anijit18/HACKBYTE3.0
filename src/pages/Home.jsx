import React from "react";
import { useNavigate } from "react-router-dom";
import FeaturedProfiles from "../components/FeaturedProfiles";
import ParticleTransition from "../components/ParticleTransition";
import { motion } from "framer-motion";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="relative h-screen overflow-hidden">
        {/* Particle background */}
        <div className="absolute inset-0 z-0">
          <ParticleTransition />
        </div>

        {/* Overlay content */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-70 z-10 flex flex-col items-center justify-center text-center px-4"
        >
          {/* Heading with floating effect */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400 drop-shadow-lg mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            WELCOME TO SKILL BRIDGE
          </motion.h1>

          {/* Paragraph with subtle pulse */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-8"
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Teach What You Know, Learn What You Love
          </motion.p>

          {/* Button with glowing pulse */}
          <motion.button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>

      {/* Featured Profiles with fade-up effect */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 1 }}
      >
        <FeaturedProfiles />
      </motion.div>
    </motion.div>
  );
}
