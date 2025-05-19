import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaRobot, FaFlask, FaDatabase } from 'react-icons/fa';

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: i => ({
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: 'spring',
        stiffness: 200,
        damping: 10
      }
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 rounded-md shadow-md border-2 border-yellow-500"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <div className="relative">
            <motion.div
              className="w-24 h-24 rounded-full bg-gray-800 shadow-lg border-2 border-blue-300 flex items-center justify-center"
              variants={iconVariants}
              custom={0}
              initial="hidden"
              animate="visible"
            >
              <FaUser className="text-4xl text-blue-300" />
            </motion.div>

            {/* Floating skill icons */}
            <motion.div
              className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gray-800 shadow-md border-2 border-green-400 flex items-center justify-center"
              variants={iconVariants}
              custom={1}
              initial="hidden"
              animate="visible"
            >
              <FaDatabase className="text-lg text-green-400" />
            </motion.div>

            <motion.div
              className="absolute bottom-0 -right-4 w-10 h-10 rounded-full bg-gray-800 shadow-md border-2 border-yellow-500 flex items-center justify-center"
              variants={iconVariants}
              custom={2}
              initial="hidden"
              animate="visible"
            >
              <FaFlask className="text-lg text-yellow-500" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 left-2 w-10 h-10 rounded-full bg-gray-800 shadow-md border-2 border-purple-400 flex items-center justify-center"
              variants={iconVariants}
              custom={3}
              initial="hidden"
              animate="visible"
            >
              <FaRobot className="text-lg text-purple-400" />
            </motion.div>
          </div>
        </div>

        <div className="md:ml-8 flex-1">
          <motion.h2
            className="text-3xl font-bold mb-4 text-yellow-400 border-b-2 border-yellow-500 pb-2 inline-block"
            variants={textVariants}
          >
            About Me
          </motion.h2>

          <motion.div className="space-y-4" variants={textVariants}>
            <p className="text-lg leading-relaxed bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-md">
              I'm <span className="text-blue-300 font-semibold">Jihed Oueslati</span>, a software engineering student with a deep interest in <span className="text-green-400 font-semibold">data engineering</span>, <span className="text-yellow-400 font-semibold">automated testing</span>, and <span className="text-purple-400 font-semibold">AI innovation</span>.
            </p>

            <p className="text-lg leading-relaxed bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-md">
              My focus is on building <span className="text-yellow-500 font-semibold">efficient web solutions</span>, implementing robust testing strategies, and working with <span className="text-green-400 font-semibold">structured and unstructured data</span> to deliver intelligent, scalable systems.
            </p>

            <p className="text-lg leading-relaxed bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-md">
              I’m passionate about exploring the power of <span className="text-purple-400 font-semibold">AI-driven applications</span> and <span className="text-blue-300 font-semibold">cloud-native architectures</span> to accelerate digital transformation.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
