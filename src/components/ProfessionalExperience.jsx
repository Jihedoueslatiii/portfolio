import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaDatabase, FaNetworkWired } from 'react-icons/fa'; // Import icons

const experiences = [
  {
    title: 'Summer Internship at Secure Shield Consulting',
    date: '01/07/2024 – 15/08/2024',
    location: 'Menzah 5',
    description: 'Developed a comprehensive web application for file management. Implemented user authentication and file upload features. Utilized React, Node.js, Express, and MongoDB for a scalable solution.',
    keywords: ['React', 'NodeJs', 'Express JS', 'MongoDB'],
    logo: `${process.env.PUBLIC_URL}/aaa.png`, // Update path here
  },
  {
    title: 'End of Studies Internship at BNA',
    date: '02/2023 – 06/2023',
    location: 'Tunis',
    description: 'Implemented a sophisticated monitoring solution using Zabbix. Configured SNMP for efficient network management. Conducted extensive security tests and attack simulations to enhance system resilience.',
    keywords: ['Zabbix', 'Network Administration', 'SNMP', 'Security', 'Attacks Test'],
    logo: `${process.env.PUBLIC_URL}/Logo_BNA.png`, // Update path here
  },
  {
    title: 'End of Year Internship at BNA',
    date: '07/2022 – 08/2022',
    location: 'Tunis',
    description: 'Developed a web application for managing customer information. Created functionalities for profile management and transaction tracking. Employed HTML, CSS, JavaScript, and PHP for a responsive design.',
    keywords: ['HTML', 'CSS', 'JS', 'PHP'],
    logo: `${process.env.PUBLIC_URL}/Logo_BNA.png`, // Update path here
  },
];


const keywordIcons = {
  React: <FaReact className="text-blue-600" />,
  NodeJs: <FaNodeJs className="text-green-600" />,
  'Express JS': <FaNodeJs className="text-gray-600" />, // Assuming similar icon for Express JS
  MongoDB: <FaDatabase className="text-green-600" />,
  HTML: <FaHtml5 className="text-orange-600" />,
  CSS: <FaCss3Alt className="text-blue-600" />,
  JS: <FaHtml5 className="text-yellow-600" />, // Assuming HTML icon for JS
  PHP: <FaPhp className="text-purple-600" />,
  Zabbix: <FaNetworkWired className="text-gray-600" />, // Assuming similar icon for Zabbix
  'Network Administration': <FaNetworkWired className="text-gray-600" />,
  SNMP: <FaNetworkWired className="text-gray-600" />,
  Security: <FaNetworkWired className="text-red-600" />, // Added icon for Security
  'Attacks Test': <FaNetworkWired className="text-red-600" />, // Added icon for Attacks Test
};

const VerticalTimeline = () => (
  <div className="relative border-l-4 border-gray-300 ml-6 mt-12">
    {experiences.map((exp, index) => (
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
            src={exp.logo}
            alt={exp.title}
            className="w-10 h-10 rounded-full object-cover"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </span>

        {/* Timeline Content */}
        <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl font-bold">{exp.title}</h3>
          <p className="text-sm text-gray-400">
            <strong>{exp.date} | {exp.location}</strong>
          </p>
          <p className="mt-2 text-sm">{exp.description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {exp.keywords.map((keyword, idx) => (
              <div key={idx} className="flex items-center text-sm text-gray-400">
                {keywordIcons[keyword] || <span className="text-gray-600">{keyword}</span>}
                <span className="ml-1">{keyword}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default VerticalTimeline;
