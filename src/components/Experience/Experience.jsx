import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    role: 'Senior Mobile App Developer',
    company: 'TechVision Solutions',
    period: '2022 - Present',
    description: 'Lead developer for enterprise mobile applications. Mentored junior developers and improved app performance by 40% using modern state management.',
  },
  {
    id: 2,
    role: 'iOS Developer',
    company: 'Creative Studio',
    period: '2020 - 2022',
    description: 'Developed and published 5+ iOS applications to the App Store. Collaborated with UI/UX designers to implement pixel-perfect designs.',
  },
  {
    id: 3,
    role: 'React Native Developer',
    company: 'Startup Inc',
    period: '2018 - 2020',
    description: 'Built cross-platform mobile apps for Android and iOS. Handled API integrations and offline data synchronization.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle">A timeline of my professional mobile app development experience.</p>
        </motion.div>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-content glass-panel">
                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-desc">{item.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
