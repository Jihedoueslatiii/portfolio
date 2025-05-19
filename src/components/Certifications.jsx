import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    title: 'Huawei Certification Networking and Switching',
    description: 'Preparation Huawei Certification.',
    logo: `${process.env.PUBLIC_URL}/huawei.png`
  },
  {
    title: 'Big Data Engineer - Mastery Award 2021',
    description: 'Passed the IBM Proctored Exam for "Big Data Engineer 2021".',
    logo: `${process.env.PUBLIC_URL}/ibmlogo.png`
  },
  {
    title: 'Scrum Fundamentals Certified (SFC™)',
    description: 'Issued by SCRUMstudy.',
    logo: `${process.env.PUBLIC_URL}/SFC.png`
  },
  {
    title: 'Certified Soft Skills Trainer',
    description: 'Agreed by the state by Univers Formation & Consulting.',
    logo: `${process.env.PUBLIC_URL}/univ.jpg`
  }
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };
  
  const certificationVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: i => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5
      } 
    })
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-md shadow-md border-2 border-yellow-500"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="flex items-center text-2xl font-semibold mb-4">
        <FaCertificate className="text-blue-300 text-3xl mr-3" />
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            className="relative flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-3 rounded-md shadow-md hover:scale-105 hover:bg-opacity-30 transition-transform"
            key={cert.title}
            variants={certificationVariants}
            custom={index}
            initial="hidden"
            animate="visible"
          >
            <div
              className="w-14 h-14 bg-white rounded-full shadow-md overflow-hidden flex items-center justify-center"
              style={{ backgroundImage: `url(${cert.logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="ml-3 flex-1">
              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;