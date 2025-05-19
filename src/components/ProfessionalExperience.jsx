import React from 'react';
import { useState } from 'react';

const experiences = [
  {
    title: 'Summer Internship at Secure Shield Consulting',
    date: '01/07/2024 – 15/08/2024',
    location: 'Menzah 5',
    description: 'Developed a comprehensive web application for file management. Implemented user authentication and file upload features. Utilized React, Node.js, Express, and MongoDB for a scalable solution.',
    keywords: ['React', 'NodeJs', 'Express JS', 'MongoDB'],
    logo: '📄', // Using emoji as placeholder
  },
  {
    title: 'End of Studies Internship at BNA',
    date: '02/2023 – 06/2023',
    location: 'Tunis',
    description: 'Implemented a sophisticated monitoring solution using Zabbix. Configured SNMP for efficient network management. Conducted extensive security tests and attack simulations to enhance system resilience.',
    keywords: ['Zabbix', 'Network Administration', 'SNMP', 'Security', 'Attacks Test'],
    logo: '🏦', // Using emoji as placeholder
  },
  {
    title: 'End of Year Internship at BNA',
    date: '07/2022 – 08/2022',
    location: 'Tunis',
    description: 'Developed a web application for managing customer information. Created functionalities for profile management and transaction tracking. Employed HTML, CSS, JavaScript, and PHP for a responsive design.',
    keywords: ['HTML', 'CSS', 'JS', 'PHP'],
    logo: '🏦', // Using emoji as placeholder
  },
];

// Simplified icon representation using emojis 
const keywordIcons = {
  React: '⚛️',
  NodeJs: '📦',
  'Express JS': '🚂', 
  MongoDB: '🍃',
  HTML: '📝',
  CSS: '🎨',
  JS: '⚡', 
  PHP: '🐘',
  Zabbix: '📊',
  'Network Administration': '🌐',
  SNMP: '📡',
  Security: '🔒', 
  'Attacks Test': '🛡️',
};

const VerticalTimeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative border-l-4 border-yellow-500 ml-6 mt-12">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-12 ml-6 relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Timeline Marker */}
          <span className="absolute -left-10 top-0 flex items-center justify-center w-14 h-14 bg-gray-700 border-4 border-yellow-500 rounded-full shadow-lg">
            <div className="text-2xl">
              {exp.logo}
            </div>
          </span>

          {/* Timeline Content */}
          <div className={`bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-md shadow-md border-2 border-yellow-500 transition-transform ${hoveredIndex === index ? 'scale-105' : ''}`}>
            <h3 className="text-xl font-bold text-yellow-400">{exp.title}</h3>
            <p className="text-sm text-gray-400">
              <strong>{exp.date} | {exp.location}</strong>
            </p>
            <p className="mt-2 text-sm text-gray-300">{exp.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.keywords.map((keyword, idx) => (
                <div key={idx} className="flex items-center bg-gray-800 px-2 py-1 rounded-md text-sm text-yellow-400">
                  <span className="mr-1">{keywordIcons[keyword]}</span>
                  <span>{keyword}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;