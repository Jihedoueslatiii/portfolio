import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

// Add logos if you have logos for specific projects, or keep as emojis
const projectLogos = {
 
};

const projects = [
  {
    name: "CRM Sales Dashboard with Power BI",
    description: `• Developed a powerful data visualization and analytics dashboard for a CRM sales management system using Power BI.\n\n• Transformed raw sales data into insightful dashboards, KPIs, and trend analyses to support business decision-making.\n\n• Integrated with CRM databases (MySQL and MongoDB) for real-time data updates, ensuring accurate and actionable insights for sales teams and managers.`,
    technologies: "Power BI, MySQL, MongoDB, DAX, Data Modeling, ETL",
    screenshots: {
      web: [
        `${process.env.PUBLIC_URL}/Capture d'écran 2025-05-18 215601.png`,
        `${process.env.PUBLIC_URL}/Capture d'écran 2025-05-18 215635.png`,
        `${process.env.PUBLIC_URL}/Capture d'écran 2025-05-18 215612.png`,
        `${process.env.PUBLIC_URL}/Capture d'écran 2025-05-18 215622.png`
      ]
    }
  },
  {
    name: "Trip Agency  management System",
    description: `• Developed a comprehensive trip management system for a travel agency, enabling users to plan and manage their trips efficiently.\n• Built with Spring Boot (backend) and Angular (frontend) using a microservices architecture.\n• Ensures scalability, flexibility, and secure communication, with MySQL for efficient data storage.`,
    technologies: "Angular, Spring Boot, MySQL, MongoDB, Tailwind",
    screenshots: {
      web: [
        `${process.env.PUBLIC_URL}/mellouli.jpeg`,
        `${process.env.PUBLIC_URL}/yassine.jpeg`
      ]
    }
  },
  {
    name: "Construction Project Management",
    description: `• A comprehensive, modular web-based solution designed to streamline construction project workflows.\n• Built with Spring Boot (backend) and Angular (frontend) using a microservices architecture.\n• Ensures scalability, flexibility, and secure communication, with MySQL for efficient data storage.`,
    technologies: "Spring Boot, Angular, Microservices, MySQL",
    screenshots: {
      web: [
        `${process.env.PUBLIC_URL}/list.png`,
        `${process.env.PUBLIC_URL}/496623651_1000479918928003_4945885882118240342_n.png`,
        `${process.env.PUBLIC_URL}/mellouli.jpeg`,
        `${process.env.PUBLIC_URL}/yassine.jpeg`,
        `${process.env.PUBLIC_URL}/teams.jpeg`,
        `${process.env.PUBLIC_URL}/kanban.png`
      ]
    }
  },
  {
    name: 'Advanced File Management',
    description: `• Implemented the document and folder management system, allowing users to organize and store files efficiently.\n\n• Developed user roles and permissions, enabling customized access control for different types of users.\n\n• Designed and integrated a dashboard for visualizing folder and document statistics, enhancing user interaction and experience.`,
    technologies: 'PHP, Node.js, MongoDB, Stripe',
    screenshots: {
      web: [
        `${process.env.PUBLIC_URL}/Landing1.png`,
        `${process.env.PUBLIC_URL}/Landing2.png`,
        `${process.env.PUBLIC_URL}/Landing3.png`,
        `${process.env.PUBLIC_URL}/registration.png`,
        `${process.env.PUBLIC_URL}/login_ssc.png`,
        `${process.env.PUBLIC_URL}/Plans.png`
      ]
    }
  },
  {
    name: "Collaborative Project Management Solution",
    description: `• Developed and implemented a comprehensive platform for managing collaborative projects between supervisors and students across desktop, web, and mobile environments.\n\n• Facilitated project supervision by allowing supervisors to provide feedback, comments, and reviews, and assign grades based on the progress and quality of work.\n\n• Enabled students to earn 'gems' for successfully completing project milestones, which can be redeemed in a marketplace for educational vouchers and resources, promoting further learning and growth.`,
    technologies: "JavaFX, Symfony 5.4, FlutterFlow",
    screenshots: {
      web: [
        `${process.env.PUBLIC_URL}/symfony1.png`,
        `${process.env.PUBLIC_URL}/symfony3.png`,
        `${process.env.PUBLIC_URL}/symfony6.png`,
        `${process.env.PUBLIC_URL}/symfony4.png`,
        `${process.env.PUBLIC_URL}/symfony2.png`
      ],
      mobile: [
        `${process.env.PUBLIC_URL}/1.png`,
        `${process.env.PUBLIC_URL}/2.png`,
        `${process.env.PUBLIC_URL}/3.png`,
        `${process.env.PUBLIC_URL}/4.png`,
        `${process.env.PUBLIC_URL}/5.png`
      ],
      desktop: [
        `${process.env.PUBLIC_URL}/1.login.PNG`,
        `${process.env.PUBLIC_URL}/3.addproject.PNG`,
        `${process.env.PUBLIC_URL}/4.teams.PNG`,
        `${process.env.PUBLIC_URL}/7.delivrables.PNG`
      ]
    }
  },
  {
    name: 'Banking Client Management',
    description: `• Developed a robust client management system for banking institutions, enabling efficient management of client accounts and profiles.\n\n• Implemented a secure registration process, user authentication, and account management features to ensure safe and personalized access.\n\n• Integrated a comprehensive transaction management system, allowing for real-time processing of transactions and detailed account activity tracking.`,
    technologies: 'PHP, HTML, CSS, JavaScript, jQuery, MySQL',
    screenshots: {
      web: [
        `${process.env.PUBLIC_URL}/home.png`,
        `${process.env.PUBLIC_URL}/client.png`,
        `${process.env.PUBLIC_URL}/loginbna.png`,
        `${process.env.PUBLIC_URL}/k.png`
      ]
    }
  }
];

const ProjectsAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState('web');
  const [modalImage, setModalImage] = useState(null);

  const handleAccordionClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setSelectedPlatform('web');
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
      className="p-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="flex items-center text-2xl font-bold mb-6">
        <FaCode className="text-indigo-500 text-3xl mr-2" />
        Projects
      </h2>
      <div className="space-y-5">
        {projects.map(({ name, description, technologies, screenshots }, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg border border-gray-700"
          >
            <div
              onClick={() => handleAccordionClick(index)}
              className="cursor-pointer flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <img
                  src={projectLogos[name] || 'https://img.icons8.com/emoji/48/laptop-emoji.png'}
                  alt={name}
                  className="w-10 h-10 object-contain rounded-full"
                />
                <h3 className="text-lg font-semibold">{name}</h3>
              </div>
              <span className={`transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                ▼
              </span>
            </div>

            {expandedIndex === index && (
              <div className="mt-4">
                <p className="text-sm mb-4 whitespace-pre-line">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.split(',').map((tech) => (
                    <span key={tech} className="bg-indigo-200 text-indigo-900 text-xs px-2 py-1 rounded-md font-medium">
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {screenshots && Object.keys(screenshots).length > 1 && (
                  <div className="flex gap-2 mb-4">
                    {Object.keys(screenshots).map((platform) => (
                      <button
                        key={platform}
                        onClick={() => handlePlatformClick(platform)}
                        className={`text-sm px-3 py-1 rounded-full ${
                          selectedPlatform === platform
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-300 text-black'
                        }`}
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex overflow-x-auto gap-3">
                  {screenshots[selectedPlatform]?.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${name} Screenshot ${i + 1}`}
                      className="w-40 h-24 object-cover rounded-md shadow-md cursor-pointer"
                      onClick={() => handleImageClick(src)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full px-3 py-1"
              onClick={closeModal}
            >
              ✕
            </button>
            <img src={modalImage} alt="Zoomed Screenshot" className="max-w-[90vw] max-h-[80vh] rounded-lg" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectsAccordion;
