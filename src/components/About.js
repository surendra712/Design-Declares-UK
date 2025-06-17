import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="about-title"
            variants={itemVariants}
          >
            About Design Declares
          </motion.h2>
          
          <div className="about-content">
            <motion.div 
              className="about-text"
              variants={itemVariants}
            >
              <p className="about-description">
                Design Declares is a growing group of designers, design studios, agencies and institutions 
                here to declare a climate and ecological emergency. We believe that design has a crucial 
                role to play in addressing the climate crisis.
              </p>
              
              <p className="about-description">
                As part of the global declaration movement, we commit to harnessing the tools of our 
                industry to reimagine, rebuild and heal our world. We're calling on the design community 
                to acknowledge the climate emergency and take meaningful action.
              </p>
              
              <p className="about-description">
                Through collaboration, education, and advocacy, we're working to transform how design 
                approaches sustainability and environmental responsibility. Join us in declaring a 
                climate emergency and committing to positive change.
              </p>
            </motion.div>
            
            <motion.div 
              className="about-stats"
              variants={itemVariants}
            >
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">UK Signatories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Global Supporters</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;