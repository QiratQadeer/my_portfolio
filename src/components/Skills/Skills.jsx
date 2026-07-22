import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaLaptopCode, FaServer, FaDatabase, FaExchangeAlt, FaLock, FaPlug, FaTools } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    category: 'Mobile',
    icon: <FaMobileAlt className="category-icon" />,
    skills: ['React Native CLI', 'Android', 'iOS']
  },
  {
    category: 'Frontend',
    icon: <FaLaptopCode className="category-icon" />,
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'Backend',
    icon: <FaServer className="category-icon" />,
    skills: ['Node.js', 'Express.js']
  },
  {
    category: 'Database',
    icon: <FaDatabase className="category-icon" />,
    skills: ['MongoDB', 'SQLite', 'Firebase']
  },
  {
    category: 'APIs',
    icon: <FaExchangeAlt className="category-icon" />,
    skills: ['REST APIs', 'Axios']
  },
  {
    category: 'Authentication',
    icon: <FaLock className="category-icon" />,
    skills: ['JWT']
  },
  {
    category: 'Third Party',
    icon: <FaPlug className="category-icon" />,
    skills: ['Stripe', 'Agora', 'Firebase', 'Google Maps', 'Push Notifications']
  },
  {
    category: 'Tools',
    icon: <FaTools className="category-icon" />,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Android Studio', 'Figma']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle">Technologies and tools I use to build premium mobile and web applications.</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <motion.div 
              key={cat.category}
              className="skill-category-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="category-header">
                {cat.icon}
                <h3 className="category-title">{cat.category}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
