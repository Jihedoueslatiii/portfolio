import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaHome } from 'react-icons/fa';

const ContactInfo = () => (
  <motion.div
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {[
      { 
        icon: <FaEnvelope className="text-gold-500 text-xl" />, 
        title: 'Email', 
        content: 'Jihedoueslati4@gmail.com', 
        link: 'mailto:Jihedoueslati4@gmail.com' 
      },
      { 
        icon: <FaPhone className="text-gold-500 text-xl" />, 
        title: 'Phone', 
        content: '52927962' 
      },
      { 
        icon: <FaHome className="text-gold-500 text-xl" />, 
        title: 'Location', 
        content: 'Hammam Chatt-Ben Arous' 
      }
    ].map(({ icon, title, content, link }) => (
      <motion.div
        className="flex items-center bg-gradient-to-r from-black via-gray-800 to-gold-500 text-white p-4 rounded-lg shadow-lg border-2 border-navy-800 transition-transform transform hover:scale-105"
        key={title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-shrink-0 bg-white bg-opacity-20 p-2 rounded-full">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-base">
            {link ? (
              <a href={link} className="text-white hover:text-gray-300 transition-colors duration-200">
                {content}
              </a>
            ) : (
              content
            )}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default ContactInfo;
