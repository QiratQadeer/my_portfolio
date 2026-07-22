import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay, FaGithub, FaLinkedin } from 'react-icons/fa';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hi, I'm Qirat Qadeer
          </motion.p>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Mobile App & <br />
            <span className="gradient-text">Full Stack Web Developer</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            I build fast, scalable, and user-friendly mobile and web applications using React Native, React.js, Node.js, Express.js, and MongoDB.
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download Resume</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p>Available on</p>
            <div className="social-icons">
              <a href="https://apps.apple.com/pk/app/see-and-hire/id6760097685" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaApple size={24} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.seeandhire" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGooglePlay size={22} />
              </a>
              <div className="divider"></div>
              <a href="https://github.com/QiratQadeer" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/qirat-qadeer/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="visual-circle glass-panel">
            <motion.div 
              className="floating-element float-1"
              animate={{ y: [0, -20, 0], z: [60, 80, 60] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <FaApple size={40} color="#fff" />
            </motion.div>
            <motion.div 
              className="floating-element float-2"
              animate={{ y: [0, 20, 0], z: [40, 60, 40] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <FaGooglePlay size={36} color="#FFD166" />
            </motion.div>
            
            <div className="profile-image-container">
              <img src="/profile.jpg" alt="Profile" className="profile-image" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
