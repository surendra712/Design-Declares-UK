import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Donate.css';

const Donate = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="donate section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="donate-title"
            variants={itemVariants}
          >
            Donate to D!
          </motion.h2>
          
          <motion.p 
            className="donate-description"
            variants={itemVariants}
          >
            Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
          </motion.p>
          
          <motion.div 
            className="donate-buttons"
            variants={containerVariants}
          >
            <motion.a 
              href="https://wise.com/pay/r/uZ5h3pxRMmTE_pk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-donate"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate £10
            </motion.a>
            
            <motion.a 
              href="https://wise.com/pay/r/u2IiQNt2ebixruk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-donate"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate £20
            </motion.a>
            
            <motion.a 
              href="https://wise.com/pay/r/2vqUbqPfU9hvVLE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-donate"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate £50
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;