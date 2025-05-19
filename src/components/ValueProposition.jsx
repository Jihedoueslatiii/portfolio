import React, { useState } from 'react';

const ValueProposition = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  
  const sections = [
    {
      id: 'experience',
      icon: '⚡',
      title: 'Proven Experience',
      description: 'Real-world experience developing enterprise document management systems and implementing network monitoring solutions.'
    },
    {
      id: 'education',
      icon: '🎓',
      title: 'Strong Educational Background',
      description: 'Software Architecture Engineering student with foundation in Network and Systems Engineering.'
    },
    {
      id: 'certifications',
      icon: '🏆',
      title: 'Valuable Certifications',
      description: 'IBM Big Data Engineer certified professional with additional soft skills training certification.'
    },
    {
      id: 'skills',
      icon: '🛠️',
      title: 'Tech-Stack Versatility',
      description: 'Proficient in modern web development frameworks, multiple programming languages, and diverse database technologies.'
    },
    {
      id: 'approach',
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'Proven ability to deliver creative solutions using microservices architecture and machine learning integration.'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-md shadow-md border-2 border-yellow-500 transition-transform hover:scale-105">
      <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400 border-b-2 border-yellow-500 pb-4">Why Choose ME </h2>
      
      <div className="space-y-6">
        {sections.map((section) => (
          <div 
            key={section.id}
            className={`flex items-start p-4 rounded-lg transition-all duration-300 ${
              hoveredSection === section.id ? 'bg-gray-800 transform scale-105' : 'bg-gray-800/50'
            }`}
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="text-4xl mr-6 text-yellow-500 bg-gray-700 h-16 w-16 flex items-center justify-center rounded-full">
              {section.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{section.title}</h3>
              <p className="text-gray-300 leading-relaxed">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 bg-gray-800 p-6 rounded-lg border-l-4 border-yellow-500">
        <h3 className="text-xl font-semibold text-yellow-400 mb-3">Ready to Collaborate?</h3>
        <p className="text-gray-300">
          Multilingual software engineer combining technical expertise with leadership experience. Always ready to embrace new challenges and innovate with cutting-edge technologies!
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="bg-gray-700 text-yellow-400 px-3 py-1 rounded-full text-sm">Big Data</span>
          <span className="bg-gray-700 text-yellow-400 px-3 py-1 rounded-full text-sm">Web Development</span>
          <span className="bg-gray-700 text-yellow-400 px-3 py-1 rounded-full text-sm">Microservices</span>
          <span className="bg-gray-700 text-yellow-400 px-3 py-1 rounded-full text-sm">MERN Stack</span>
          <span className="bg-gray-700 text-yellow-400 px-3 py-1 rounded-full text-sm">ML Integration</span>
        </div>
      </div>
    </div>
  );
};
export default ValueProposition;