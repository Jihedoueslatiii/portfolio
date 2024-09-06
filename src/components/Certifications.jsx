import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => (
  <motion.div
    className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-md shadow-md border-2 border-yellow-500 transition-transform hover:scale-105"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="flex items-center text-2xl font-semibold mb-4">
      <FaCertificate className="text-blue-300 text-3xl mr-3" />
      Certifications
    </h2>
    {[
      {
        title: 'Huawei Certification Networking and Switching',
        description: 'Preparation Huawei Certification.',
        logo: '/huawei.png'
      },
      {
        title: 'Big Data Engineer - Mastery Award 2021',
        description: 'Passed the IBM Proctored Exam for "Big Data Engineer 2021".',
        logo: '/ibmlogo.png'
      },
      {
        title: 'Scrum Fundamentals Certified (SFC™)',
        description: 'Issued by SCRUMstudy.',
        logo: '/SFC.png' // Make sure you have this logo file in your public directory
      }
    ].map(({ title, description, logo }) => (
      <motion.div
        className="relative mb-4 flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-3 rounded-md shadow-md transition-transform hover:scale-105 hover:bg-opacity-30"
        key={title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="w-14 h-14 bg-white rounded-full shadow-md overflow-hidden flex items-center justify-center"
          style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="ml-3 flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </motion.div>
    ))}
    
    {/* New Section for Soft Skills Trainer */}
    <motion.div
      className="relative mb-4 flex items-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-3 rounded-md shadow-md transition-transform hover:scale-105 hover:bg-opacity-30"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="w-14 h-14 bg-white rounded-full shadow-md overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url('/univ.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} // Placeholder for logo
      />
      <div className="ml-3 flex-1">
        <h3 className="text-lg font-semibold mb-1">Certified Soft Skills Trainer</h3>
        <p className="text-sm">Agreed by the state by Univers Formation & Consulting.</p>
      </div>
    </motion.div>
  </motion.div>
);

export default Certifications;
