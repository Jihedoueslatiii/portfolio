import React from 'react';
import { motion } from 'framer-motion';

// Add paths to your logo images
const logos = {
  ESPRIT: `${process.env.PUBLIC_URL}/esprit.png`,
  'Higher Institute of Information Technologies and Communication': `${process.env.PUBLIC_URL}/istic.png`,
};

const educationData = [
  {
    degree: 'IT Engineering Student',
    institution: 'ESPRIT',
    date: '2023 – present',
  },
  {
    degree: 'Network and Systems Engineering',
    institution: 'Higher Institute of Information Technologies and Communication',
    date: '2020 – 07/2023',
  },
];

const Education = () => (
  <div className="relative border-l-4 border-gray-300 ml-6 mt-12">
    <h2 className="text-3xl font-semibold text-white mb-6">Education</h2>
    {educationData.map((edu, index) => (
      <motion.div
        key={index}
        className="mb-12 ml-6 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        {/* Timeline Marker */}
        <span className="absolute -left-10 top-0 flex items-center justify-center w-14 h-14 bg-gray-700 border-4 border-gray-300 rounded-full shadow-lg">
          <motion.img
            src={logos[edu.institution] || `${process.env.PUBLIC_URL}/images/default-logo.png`} // Fallback logo
            alt={edu.institution}
            className="w-10 h-10 rounded-full object-cover"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </span>

        {/* Timeline Content */}
        <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-bold">{edu.degree}</h3>
          <p className="text-sm text-gray-400">
            <strong>{edu.institution}</strong>
          </p>
          <p className="text-sm text-gray-400">{edu.date}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default Education;
