import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import AboutMe from './AboutMe';
import ProfessionalExperience from './ProfessionalExperience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import ValueProposition from './ValueProposition';

const ProfilePage = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showWelcome, setShowWelcome] = useState(true);

  // Handle scroll to track percentage
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrollPercent.toFixed(0));
  };

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    window.addEventListener('scroll', handleScroll);
    const welcomeTimer = setTimeout(() => setShowWelcome(false), 4000); // Show for 4 seconds

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
      clearTimeout(welcomeTimer);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="relative min-h-screen text-gray-100 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient">
      {/* Animated Background */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-gradient {
            background: linear-gradient(270deg, #111111, #333333, #555555, #999999, #777777);
            background-size: 400% 400%;
            animation: gradient 20s ease infinite;
          }
          .shiny-button {
            background: linear-gradient(45deg, #FFD700, #FF8C00);
            border: none;
            color: white;
            padding: 10px 20px;
            font-size: 1.2rem;
            cursor: pointer;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            transition: background 0.5s, box-shadow 0.5s, transform 0.3s;
          }
          .shiny-button:hover {
            background: linear-gradient(45deg, #FF8C00, #FFD700);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
            transform: scale(1.05);
          }

          .clock-style {
            font-family: 'Orbitron', sans-serif;
            font-size: 2.5rem;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
            letter-spacing: 0.1rem;
          }
        `}
      </style>

      <header className="relative p-12 bg-opacity-70 bg-gray-800 rounded-b-xl shadow-lg z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start">
        <motion.img
  src={`${process.env.PUBLIC_URL}/jihed.png`} // Update the path
  alt="Jihed Oueslati"
  className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-gray-400 mb-6 md:mb-0 md:mr-12 transition-transform hover:scale-110"
  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ duration: 1, type: "spring", stiffness: 150 }}
/>

          <div className="text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 transition-transform hover:scale-110"
              initial={{ opacity: 0, y: -50, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 150 }}
            >
              <ReactTypingEffect
                text={["Jihed Oueslati"]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                cursor={"|"}
              />
            </motion.h1>
            <p className="text-2xl md:text-3xl font-bold mb-6 text-gold" style={{ color: '#FFD700' }}>
              Software Engineering Student - Big Data Certified Engineer
            </p>
            <div className="flex justify-center md:justify-start gap-8 mt-6">
              <a href="https://linkedin.com/in/jihed-oueslati-7981b91ba" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaLinkedin className="text-5xl md:text-6xl text-blue-400 hover:text-blue-300 transition" />
              </a>
              <a href="https://github.com/Jihedoueslatiii" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaGithub className="text-5xl md:text-6xl text-gray-400 hover:text-gray-300 transition" />
              </a>
              <a href="mailto:jihedoueslati4@outlook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaEnvelope className="text-5xl md:text-6xl text-green-600 hover:text-green-500 transition" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="top" className="relative p-12 space-y-16 z-10">
        <motion.div className="fade-in" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <AboutMe />
        </motion.div>
        <motion.div className="fade-in" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
          <ValueProposition />
        </motion.div>
        <motion.div className="fade-in" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}>
          <ProfessionalExperience />
        </motion.div>
        <motion.div className="fade-in" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}>
          <Education />
        </motion.div>
        <motion.div className="fade-in" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}>
          <Projects />
        </motion.div>
        <motion.div className="fade-in" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }}>
          <Skills />
        </motion.div>
        <motion.div className="fade-in" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.4 }}>
          <Certifications />
        </motion.div>
      </main>

      {/* Alarm clock style Time & Date */}
      <div className="absolute top-6 right-6 flex flex-col items-end">
        <div className="clock-style text-4xl md:text-6xl">
          {formatTime(currentTime)}
        </div>
        <div className="text-lg md:text-xl text-gray-400">
          {formatDate(currentTime)}
        </div>
      </div>
      <div className="fixed right-6 bottom-8 z-50">
        <a href="/jihed-oueslati.pdf" download="Jihed-oueslati.pdf">
          <button className="shiny-button mt-8">Download CV</button>
        </a>
      </div>
      <footer className="relative p-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-t-xl shadow-lg z-10">
  <div className="container mx-auto text-center space-y-6">
    {/* Social Media Links */}
    <div className="flex justify-center space-x-6">
      <a href="https://linkedin.com/in/jihed-oueslati-7981b91ba" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-3xl md:text-4xl text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-3xl md:text-4xl text-gray-500 hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110" />
      </a>
      <a href="mailto:jihedoueslati4@outlook.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="text-3xl md:text-4xl text-gray-500 hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110" />
      </a>
    </div>

    {/* Copyright & Name */}
    <p className="text-lg md:text-xl font-semibold text-gray-400">
      Created by <span className="text-white font-bold hover:text-indigo-400 transition-colors">Jihed Oueslati</span> &copy; 2024
    </p>

    {/* Animated Border at the Top */}
    <div className="flex justify-center">
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full animate-pulse"></div>
    </div>
  </div>
</footer>

      {/* Scroll Percentage Indicator */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative bg-gray-800 rounded-full shadow-lg">
          <div
            className="h-2 bg-yellow-500 rounded-full"
            style={{ width: `${scrollPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
