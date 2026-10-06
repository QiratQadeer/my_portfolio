import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace the placeholders with your actual EmailJS credentials
    emailjs.sendForm(
      'service_j6cnatr',
      'template_unwpttt',
      form.current,
      'mTRSRWLFESUDm9lgb'
    )
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        e.target.reset(); // Clear form
        setTimeout(() => setStatus(''), 5000); // Clear success message after 5 seconds
      }, (error) => {
        console.log(error.text);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Have a mobile app idea? Let's bring it to life.</p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's talk about your next big project.</h3>
            <p className="contact-desc">
              I'm currently available for freelance projects and full-time opportunities.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><FaEnvelope /></div>
                <div className="method-details">
                  <h4>Email</h4>
                  <p>qiratqadeer29802@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon"><FaMapMarkerAlt /></div>
                <div className="method-details">
                  <h4>Location</h4>
                  <p>Remote / Worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input type="text" name="user_name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="user_email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>

              {status === 'success' && (
                <div className="form-message success" style={{ color: '#4ade80', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaCheckCircle /> Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="form-message error" style={{ color: '#f87171', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaExclamationCircle /> Failed to send message. Please try again.
                </div>
              )}

              <button type="submit" className="btn-primary form-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
