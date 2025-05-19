import React, { useState } from 'react';

// Add paths to your logo images (keeping your structure)
const logos = {
  ESPRIT: `${process.env.PUBLIC_URL}/esprit.png`,
  'Higher Institute of Information Technologies and Communication': `${process.env.PUBLIC_URL}/istic.png`,
};

const educationData = [
  {
    degree: 'IT Engineering Student',
    institution: 'ESPRIT',
    date: '2023 – present',
    logoEmoji: '🎓' // Placeholder emoji for when actual logos aren't available
  },
  {
    degree: 'Network and Systems Engineering',
    institution: 'Higher Institute of Information Technologies and Communication',
    date: '2020 – 07/2023',
    logoEmoji: '🖥️' // Placeholder emoji for when actual logos aren't available
  },
];

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative border-l-4 border-yellow-500 ml-6 mt-12">
      <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Education</h2>
      {educationData.map((edu, index) => (
        <div
          key={index}
          className="mb-12 ml-6 relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Timeline Marker */}
          <span className="absolute -left-10 top-0 flex items-center justify-center w-14 h-14 bg-gray-700 border-4 border-yellow-500 rounded-full shadow-lg">
            {/* This image tag will use your actual logos when available */}
            {/* We're using a div with emoji as fallbacks for the preview */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl">
              {edu.logoEmoji}
            </div>
          </span>

          {/* Timeline Content */}
          <div className={`bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-md shadow-md border-2 border-yellow-500 transition-transform ${hoveredIndex === index ? 'scale-105' : ''}`}>
            <h3 className="text-xl font-bold text-yellow-400">{edu.degree}</h3>
            <p className="text-sm text-gray-400">
              <strong>{edu.institution}</strong>
            </p>
            <p className="text-sm text-gray-400">{edu.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;