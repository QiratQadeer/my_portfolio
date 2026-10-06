import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBookOpen, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Ethical Freelance',
    category: 'Freelance Marketplace',
    description: 'Cross-platform freelance marketplace application.',
    images: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop'],
    features: ['Authentication', 'Chat', 'Payments', 'AI Proposal Generator', 'Project Posting', 'Freelancer Dashboard', 'Notifications'],
    tech: ['React Native', 'Node.js', 'MongoDB', 'REST APIs'],
    github: '#',
    demo: '#',
    caseStudy: '#'
  },
  {
    id: 2,
    title: 'Nutra',
    category: 'Health & Nutrition',
    description: 'AI-powered nutrition application.',
    images: ['https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop'],
    features: ['AI Chat', 'Meal Tracking', 'Food Scanner', 'Authentication', 'User Profile', 'Dashboard'],
    tech: ['React Native', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
    caseStudy: '#'
  },
  {
    id: 3,
    title: 'See & Hire',
    category: 'Recruitment Platform',
    description: 'Recruitment platform.',
    images: ['https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop'],
    features: ['Employer Dashboard', 'Candidate Dashboard', 'Video Interview', 'AI Job Recommendation', 'Resume Management'],
    tech: ['React Native', 'Firebase', 'Redux'],
    github: '#',
    demo: 'https://play.google.com/store/apps/details?id=com.seeandhire',
    caseStudy: '#'
  }
];

const ProjectImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="project-image-container">
      {images.length > 1 && (
        <button className="slider-arrow left" onClick={prevImage}>
          <FaChevronLeft />
        </button>
      )}
      <img src={images[currentIndex]} alt={`${title} screenshot ${currentIndex + 1}`} className="project-image" />
      {images.length > 1 && (
        <button className="slider-arrow right" onClick={nextImage}>
          <FaChevronRight />
        </button>
      )}
      {images.length > 1 && (
        <div className="slider-dots">
          {images.map((_, idx) => (
            <div key={idx} className={`slider-dot ${idx === currentIndex ? 'active' : ''}`} />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">A selection of my best projects with in-depth features and case studies.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectImageSlider images={project.images} title={project.title} />
              
              <div className="project-info">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features-container">
                  <h4 className="features-title">Key Features:</h4>
                  <ul className="project-features">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-icon" title="GitHub">
                      <FaGithub size={20} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-icon" title="Live Demo">
                      <FaExternalLinkAlt size={18} /> Live Demo
                    </a>
                  )}
                  {project.caseStudy && (
                    <a href={project.caseStudy} target="_blank" rel="noopener noreferrer" className="btn-icon primary-action" title="Case Study">
                      <FaBookOpen size={18} /> Case Study
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
