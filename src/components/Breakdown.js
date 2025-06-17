import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Breakdown.css';

const Breakdown = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const largeTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="breakdown section-large" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="breakdown-title"
            variants={itemVariants}
          >
            This is Breakdown
          </motion.h2>
          
          <motion.p 
            className="breakdown-large-text"
            variants={largeTextVariants}
          >
            The science is settled. We are in an emergency of climate and nature. The world is past breaking point; the breakdown has begun...
          </motion.p>
          
          <div className="breakdown-grid">
            <motion.div 
              className="breakdown-item"
              variants={itemVariants}
            >
              <div className="breakdown-header" onClick={() => toggleSection('design')}>
                <h3>The Role of Design</h3>
                <motion.button 
                  className="expand-btn"
                  animate={{ rotate: expandedSection === 'design' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.button>
              </div>
              <AnimatePresence>
                {expandedSection === 'design' && (
                  <motion.div
                    className="breakdown-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Design shapes our world. From the products we use to the systems we navigate, design influences behavior and consumption patterns. As designers, we have the power and responsibility to create solutions that prioritize environmental sustainability and social equity.</p>
                    <p>We must move beyond aesthetics and embrace regenerative design principles that heal rather than harm our planet.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="breakdown-item"
              variants={itemVariants}
            >
              <div className="breakdown-header" onClick={() => toggleSection('change')}>
                <h3>Time for Change</h3>
                <motion.button 
                  className="expand-btn"
                  animate={{ rotate: expandedSection === 'change' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.button>
              </div>
              <AnimatePresence>
                {expandedSection === 'change' && (
                  <motion.div
                    className="breakdown-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>The climate crisis demands immediate action. We can no longer afford to design for a linear economy that extracts, produces, and disposes. The time for incremental change has passed.</p>
                    <p>We must fundamentally reimagine how we work, what we create, and who we serve. This is our moment to lead the transformation toward a sustainable future.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            <motion.div 
              className="breakdown-item"
              variants={itemVariants}
            >
              <div className="breakdown-header" onClick={() => toggleSection('urgency')}>
                <h3>Act with Urgency</h3>
                <motion.button 
                  className="expand-btn"
                  animate={{ rotate: expandedSection === 'urgency' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.button>
              </div>
              <AnimatePresence>
                {expandedSection === 'urgency' && (
                  <motion.div
                    className="breakdown-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Every project is an opportunity to make a positive impact. We must act with the urgency this crisis demands, making bold decisions that prioritize planetary health over profit.</p>
                    <p>Join us in declaring a climate emergency and committing to use design as a force for regeneration and justice.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
          
          <motion.div 
            className="video-link-container"
            variants={itemVariants}
          >
            <a 
              href="https://youtu.be/XpnOe94eXdM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-link"
            >
              View our D! Intro Video
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Breakdown;