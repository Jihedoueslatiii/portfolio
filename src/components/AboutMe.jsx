import React from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

const AboutMe = () => (
  <motion.div
    className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 rounded-lg shadow-lg border-2 border-gray-600 transition-transform hover:scale-105"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="flex items-center">
      <div className="flex-shrink-0 p-3 rounded-full bg-gray-800 shadow-lg">
        <FaUser className="text-3xl text-gray-300" />
      </div>
      <div className="ml-6">
        <h2 className="text-3xl font-bold mb-3">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m Jihed Oueslati, a passionate software engineering student dedicated to exploring the realms of cloud computing and cybersecurity. My journey involves solving intricate problems and embracing new technological advancements. I’m eager to leverage my skills to contribute to innovative solutions and impactful projects.
        </p>
      </div>
    </div>
  </motion.div>
);

export default AboutMe;
