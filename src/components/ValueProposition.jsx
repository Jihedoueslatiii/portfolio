import React from 'react';
import { motion } from 'framer-motion';
import { FaTachometerAlt, FaGraduationCap, FaCertificate, FaTools } from 'react-icons/fa';

const ValueProposition = () => (
  <motion.div
    className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white p-8 rounded-lg shadow-2xl border-4 border-gray-700 hover:border-yellow-400 transition-transform hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-extrabold mb-6 text-yellow-400 tracking-wide">Why Choose Me?</h2>
    <div className="space-y-8">
      {/* Proven Experience */}
      <motion.div
        className="flex items-start space-x-6"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-5xl text-yellow-500">
          <FaTachometerAlt />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Proven Experience</h3>
          <p className="text-base leading-relaxed text-gray-300">
            With hands-on experience in developing web applications and implementing monitoring solutions, I bring a solid understanding of both frontend and backend technologies.
          </p>
        </div>
      </motion.div>

      {/* Strong Educational Background */}
      <motion.div
        className="flex items-start space-x-6"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-5xl text-yellow-500">
          <FaGraduationCap />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Strong Educational Background</h3>
          <p className="text-base leading-relaxed text-gray-300">
            Currently pursuing a degree in IT Engineering with a solid foundation in Network and Systems Engineering, I am equipped with the knowledge required to tackle complex engineering challenges.
          </p>
        </div>
      </motion.div>

      {/* Relevant Certifications */}
      <motion.div
        className="flex items-start space-x-6"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="text-5xl text-yellow-500">
          <FaCertificate />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Relevant Certifications</h3>
          <p className="text-base leading-relaxed text-gray-300">
            Certified as a Big Data Engineer and with a Huawei Networking and Switching certification, I am well-versed in cutting-edge technologies and methodologies.
          </p>
        </div>
      </motion.div>

      {/* Diverse Skill Set */}
      <motion.div
        className="flex items-start space-x-6"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="text-5xl text-yellow-500">
          <FaTools />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Diverse Skill Set</h3>
          <p className="text-base leading-relaxed text-gray-300">
            My skills span web development, programming, network management, and database administration. I’m proficient in HTML, CSS, JS, Python, Java, and network protocols.
          </p>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default ValueProposition;
