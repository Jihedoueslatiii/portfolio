import React from 'react';
import { motion } from 'framer-motion';
import { FaPeopleArrows } from 'react-icons/fa';

const Organizations = () => (
  <motion.div
    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-opacity-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="flex items-center text-3xl font-semibold mb-4">
      <FaPeopleArrows className="text-teal-300 text-4xl mr-4" />
      Organizations
    </h2>
    <motion.div
      className="flex items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg transition transform hover:scale-105 hover:bg-opacity-20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-teal-400 text-white rounded-full mr-4">
        <FaPeopleArrows className="text-3xl" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">Junior Chamber International of Hammam Chat</h3>
        <p className="text-sm text-gray-400"><strong>Vice President (present)</strong></p>
      </div>
    </motion.div>
  </motion.div>
);

export default Organizations;
