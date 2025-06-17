import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.95]
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: "easeOut"
      }
    }
  };

  const title = "Design Declares UK";
  
  return (
    <section className="hero">
      {/* Floating decorative elements */}
      <div className="hero-floating-element"></div>
      <div className="hero-floating-element"></div>
      <div className="hero-floating-element"></div>
      
      <div className="container">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={char === ' ' ? 'space' : ''}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            We are a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
          </motion.p>
          
          {/* Hero action buttons removed to match original website */}
        </div>
      </div>
    </section>
  );
};

export default Hero;