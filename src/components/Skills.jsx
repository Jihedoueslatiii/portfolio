import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaSymfony, FaPython, FaJava, FaNetworkWired, FaDatabase, FaCogs, FaLinux, FaWindows } from 'react-icons/fa'; 
import { DiMongodb, DiReact, DiNodejs, DiUbuntu } from 'react-icons/di'; 
import { SiC, SiMysql, SiPostgresql } from 'react-icons/si'; 

const skills = {
  Programming: [
    { name: 'HTML5', icon: <FaHtml5 className="text-red-500 text-4xl" />, description: 'Markup language for web pages.' },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-4xl" />, description: 'Style sheet language for web design.' },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-4xl" />, description: 'Programming language for web development.' },
    { name: 'Python', icon: <FaPython className="text-blue-600 text-4xl" />, description: 'High-level programming language for various applications.' },
    { name: 'Java', icon: <FaJava className="text-red-900 text-4xl" />, description: 'Object-oriented programming language for web and enterprise applications.' },
    { name: 'C', icon: <SiC className="text-blue-600 text-4xl" />, description: 'General-purpose programming language with low-level access.' }
  ],
  Frameworks: [
    { name: 'React', icon: <DiReact className="text-blue-400 text-4xl" />, description: 'JavaScript library for building user interfaces.' },
    { name: 'Symfony', icon: <FaSymfony className="text-gray-800 text-4xl" />, description: 'PHP framework for web applications.' },
    { name: 'Node.js', icon: <DiNodejs className="text-green-600 text-4xl" />, description: 'JavaScript runtime built on Chrome\'s V8 engine.' },
    { name: 'Express.js', icon: <FaJs className="text-gray-600 text-4xl" />, description: 'Web application framework for Node.js.' }
  ],
  Databases: [
    { name: 'MongoDB', icon: <DiMongodb className="text-green-600 text-4xl" />, description: 'NoSQL database for modern applications.' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-4xl" />, description: 'Relational database management system.' },
    { name: 'PL/SQL', icon: <SiPostgresql className="text-blue-600 text-4xl" />, description: 'Procedural extension for SQL used in Oracle databases.' },
    { name: 'NoSQL', icon: <DiMongodb className="text-green-600 text-4xl" />, description: 'Database system for non-relational data models.' }
  ],
  Networking: [
    { name: 'IPv4', icon: <FaNetworkWired className="text-blue-300 text-4xl" />, description: 'Internet Protocol version 4 for identifying devices on a network.' },
    { name: 'IPv6', icon: <FaNetworkWired className="text-blue-300 text-4xl" />, description: 'Internet Protocol version 6 for addressing and routing.' },
    { name: 'TCP/IP', icon: <FaNetworkWired className="text-blue-300 text-4xl" />, description: 'Suite of communication protocols used for inter-networking.' },
    { name: 'UDP', icon: <FaNetworkWired className="text-blue-300 text-4xl" />, description: 'User Datagram Protocol for fast, connectionless communication.' },
    { name: 'HTTP/HTTPS', icon: <FaNetworkWired className="text-blue-300 text-4xl" />, description: 'Hypertext Transfer Protocol for web communication; HTTPS for secure communication.' },
    { name: 'DNS', icon: <FaNetworkWired className="text-blue-300 text-4xl" />, description: 'Domain Name System for translating domain names into IP addresses.' },
    { name: 'DHCP', icon: <FaNetworkWired className="text-blue-300 text-4xl" />, description: 'Dynamic Host Configuration Protocol for assigning IP addresses.' }
  ],
  SystemAdmin: [
    { name: 'System Admin', icon: <FaCogs className="text-gray-600 text-4xl" />, description: 'System administration and configuration skills.' },
    { name: 'Linux', icon: <FaLinux className="text-black text-4xl" />, description: 'Operating system for various types of computers.' },
    { name: 'Ubuntu', icon: <DiUbuntu className="text-orange-500 text-4xl" />, description: 'Popular Linux distribution based on Debian.' },
    { name: 'Windows Server', icon: <FaWindows className="text-blue-600 text-4xl" />, description: 'Server operating system from Microsoft for managing network resources.' },
    { name: 'CentOS', icon: <DiUbuntu className="text-red-600 text-4xl" />, description: 'Community-driven Linux distribution derived from Red Hat Enterprise Linux (RHEL).' }
  ]
};

const Skills = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 rounded-md shadow-md border-2 border-blue-300 transition-transform hover:scale-105"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.keys(skills).map((category) => (
          <div key={category} className="flex flex-col">
            <h3 className="text-xl font-semibold mb-3 text-center">{category}</h3>
            <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills[category].map(({ name, icon, description }) => (
                <div key={name} className="relative flex flex-col items-center justify-center p-4 rounded-md bg-gray-800 shadow-md group">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-md mb-2">
                    {icon}
                  </div>
                  <p className="text-sm font-medium text-center">{name}</p>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-gray-800"></div>
                    {description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
