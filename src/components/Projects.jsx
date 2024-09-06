import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const projects = [
  {
    name: "Collaborative Project Management Solution",
    description: `• Developed and implemented a comprehensive platform for managing collaborative projects between supervisors and students across desktop, web, and mobile environments.\n\n• Facilitated project supervision by allowing supervisors to provide feedback, comments, and reviews, and assign grades based on the progress and quality of work.\n\n• Enabled students to earn 'gems' for successfully completing project milestones, which can be redeemed in a marketplace for educational vouchers and resources, promoting further learning and growth.`,
    technologies: "JavaFX, Symfony 5.4, FlutterFlow",
    screenshots: {
      web: [
        
        "/symfony1.png",
        "/symfony3.png",
        "/symfony6.png",
        "/symfony4.png",
        "/symfony2.png"
      ],
      mobile: [
        "/1.png",
        "/2.png",
        "/3.png",
        "/4.png",
        "/5.png"
      ],
      desktop: [
        "/1.login.PNG",
        "/3.addproject.PNG",
        "/4.teams.PNG",
        "/7.delivrables.PNG"
      ]
    }
  },
  {
    name: 'Banking Client Management',
    description: `• Developed a robust client management system for banking institutions, enabling efficient management of client accounts and profiles.\n\n• Implemented a secure registration process, user authentication, and account management features to ensure safe and personalized access.\n\n• Integrated a comprehensive transaction management system, allowing for real-time processing of transactions and detailed account activity tracking.`,
    technologies: 'PHP, HTML, CSS, JavaScript, jQuery, MySQL',
    screenshots: {
      web: ['/home.png', '/client.png', '/loginbna.png', '/k.png']
    },
  },
  {
    name: 'Advances File Management',
    description: `• Implemented the document and folder management system, allowing users to organize and store files efficiently.\n\n• Developed user roles and permissions, enabling customized access control for different types of users.\n\n• Designed and integrated a dashboard for visualizing folder and document statistics, enhancing user interaction and experience.`,
    technologies: 'PHP, Node.js, MongoDB, Stripe',
    screenshots: {
      web: [
        '/Landing1.png',
        '/Landing2.png',
        '/Landing3.png', 
        '/registration.png',
        '/forget.png',
        '/login_ssc.png',
        '/Plans.png'
      ]
    },
  }
];

const ProjectsAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState('web');
  const [modalImage, setModalImage] = useState(null);

  const handleAccordionClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setSelectedPlatform('web'); // Reset to 'web' by default when opening a project
  };

  const handlePlatformClick = (platform) => {
    setSelectedPlatform(platform);
  };

  const handleImageClick = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <motion.div
      className="p-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="flex items-center text-xl font-semibold mb-6">
        <FaCode className="text-white text-2xl mr-2" />
        Projects
      </h2>
      <div className="space-y-4">
        {projects.map(({ name, description, technologies, screenshots }, index) => (
          <div key={index} className="bg-gradient-to-r from-gray-700 to-gray-900 p-4 rounded-md shadow-md">
            <h3
              onClick={() => handleAccordionClick(index)}
              className="cursor-pointer text-lg font-semibold mb-2 flex justify-between items-center"
            >
              {name}
              <span className={`transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                ▼
              </span>
            </h3>
            {expandedIndex === index && (
              <div>
                <p className="text-sm mb-3 whitespace-pre-line">{description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {technologies.split(',').map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <div className="flex justify-around mb-3">
                  {screenshots && Object.keys(screenshots).map((platform) => (
                    <button
                      key={platform}
                      onClick={() => handlePlatformClick(platform)}
                      className={`text-sm font-semibold py-1 px-2 rounded ${selectedPlatform === platform ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="flex overflow-x-auto gap-2 mb-3">
                  {screenshots[selectedPlatform]?.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`${name} Screenshot ${index + 1}`}
                      className="w-1/4 h-auto object-cover rounded-md shadow-sm cursor-pointer"
                      onClick={() => handleImageClick(src)}
                    />
                  ))}
                </div>
                <div className="mt-3 text-right">
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-xs">
                    View Project
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
          <div className="relative p-4">
            <button onClick={closeModal} className="absolute top-0 right-0 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-2">
              X
            </button>
            <img src={modalImage} alt="Enlarged Screenshot" className="max-w-full max-h-full rounded-md" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectsAccordion;
