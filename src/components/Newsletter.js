import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Newsletter.css';

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', { email, newsletter });
    alert('Thank you for subscribing! (This is a demo)');
    setEmail('');
    setNewsletter(false);
  };

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

  return (
    <section className="newsletter section-large" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="newsletter-header" variants={itemVariants}>
            <h2 className="newsletter-title">
              The Design Declares Newsletter and Toolkit
            </h2>
          </motion.div>
          
          <motion.div 
            className="newsletter-content"
            variants={itemVariants}
          >
            <div className="newsletter-image">
              <div className="newsletter-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Design Declares Newsletter - Sustainable design resources and climate action updates"
                  className="newsletter-img"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3 className="overlay-title">D! Newsletter</h3>
                    <p className="overlay-subtitle">Monthly insights & toolkit access</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="newsletter-text">
              <div className="newsletter-intro">
                <p className="newsletter-description">
                  Subscribe to the <strong>Design Declares UK newsletter</strong> to receive the latest news and updates. 
                  By signing up you will also gain access to <strong>The Design Declares Toolkit</strong>, a live and 
                  evolving Notion site co-created with our community.
                </p>
                
                <p className="newsletter-highlight">
                  It is filled with the latest resources and methods to help you on your journey to 
                  <strong> climate-positive design</strong>.
                </p>
              </div>
              
              <form className="simple-newsletter-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="email"
                    className="simple-email-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="simple-submit-btn">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;