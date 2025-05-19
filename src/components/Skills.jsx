import React, { useState } from 'react';

const skills = {
  Programming: [
    { name: 'HTML5', icon: '🌐', description: 'Markup language for web pages.' },
    { name: 'CSS3', icon: '🎨', description: 'Style sheet language for web design.' },
    { name: 'JavaScript', icon: '📜', description: 'Programming language for web development.' },
    { name: 'Python', icon: '🐍', description: 'High-level programming language for various applications.' },
    { name: 'Java', icon: '☕', description: 'Object-oriented programming language for web and enterprise applications.' },
    { name: 'C', icon: '⚙️', description: 'General-purpose programming language with low-level access.' }
  ],
  Frameworks: [
    { name: 'React', icon: '⚛️', description: 'JavaScript library for building user interfaces.' },
    { name: 'Symfony', icon: '🔄', description: 'PHP framework for web applications.' },
    { name: 'Node.js', icon: '📦', description: 'JavaScript runtime built on Chrome\'s V8 engine.' },
    { name: 'Express.js', icon: '🚀', description: 'Web application framework for Node.js.' },
    { name: 'Spring Boot', icon: '🍃', description: 'Framework for building Java-based web applications and microservices.' },
    { name: 'Angular', icon: '🅰️', description: 'Framework for building dynamic single-page web applications.' },
    { name: '.NET', icon: '🔷', description: 'Software development framework for Windows applications.' },
  ],
  Databases: [
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database for modern applications.' },
    { name: 'MySQL', icon: '🐬', description: 'Relational database management system.' },
    { name: 'PL/SQL', icon: '📊', description: 'Procedural extension for SQL used in Oracle databases.' },
    { name: 'NoSQL', icon: '📓', description: 'Database system for non-relational data models.' },
  ],
  Architecture: [
    { name: 'SOA', icon: '🔌', description: 'Service-Oriented Architecture for software design.' },
    { name: 'Microservices', icon: '🧩', description: 'Architectural style for building modular applications.' },
    { name: 'GraphQL API', icon: '📈', description: 'Efficient API architecture for fetching data.' },
  ],
  SystemAdmin: [
    { name: 'System Admin', icon: '⚙️', description: 'System administration and configuration skills.' },
    { name: 'Linux', icon: '🐧', description: 'Operating system for various types of computers.' },
    { name: 'Ubuntu', icon: '🟠', description: 'Popular Linux distribution based on Debian.' },
    { name: 'Windows Server', icon: '🪟', description: 'Server operating system from Microsoft for managing network resources.' },
    { name: 'CentOS', icon: '🔴', description: 'Community-driven Linux distribution derived from Red Hat Enterprise Linux (RHEL).' }
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Programming');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="relative mt-12">
      <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Skills</h2>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap mb-6 gap-2">
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeCategory === category 
                ? 'bg-yellow-500 text-gray-900' 
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Skills Display */}
      <div className="border-l-4 border-yellow-500 ml-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-6">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="mb-6 relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Marker */}
              <span className="absolute -left-10 top-0 flex items-center justify-center w-14 h-14 bg-gray-700 border-4 border-yellow-500 rounded-full shadow-lg">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-2xl">
                  {skill.icon}
                </div>
              </span>

              {/* Skill Content */}
              <div className={`bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-md shadow-md border-2 border-yellow-500 transition-transform ${
                hoveredSkill === skill.name ? 'scale-105' : ''
              }`}>
                <h3 className="text-xl font-bold text-yellow-400">{skill.name}</h3>
                <p className="text-sm text-gray-300">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;