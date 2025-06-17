import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Declaration.css';

const Declaration = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    type: 'business',
    website: '',
    country: 'United Kingdom',
    discipline: '',
    email: '',
    reason: '',
    consent: false,
    newsletter: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your declaration! (This is a demo)');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="declaration section-large" id="declaration" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="declaration-title"
            variants={itemVariants}
          >
            Declare Emergency Now
          </motion.h2>
          
          <motion.p 
            className="declaration-intro"
            variants={itemVariants}
          >
            Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.
          </motion.p>
          
          <motion.h3 
            className="form-title"
            variants={itemVariants}
          >
            I am Declaring Emergency
          </motion.h3>
          
          <motion.form 
            className="declaration-form"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-group radio-group">
              <label>
                <input
                  type="radio"
                  name="type"
                  value="business"
                  checked={formData.type === 'business'}
                  onChange={handleInputChange}
                />
                As a business
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="individual"
                  checked={formData.type === 'individual'}
                  onChange={handleInputChange}
                />
                As an individual
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="institution"
                  checked={formData.type === 'institution'}
                  onChange={handleInputChange}
                />
                As a public institution
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="team"
                  checked={formData.type === 'team'}
                  onChange={handleInputChange}
                />
                As a team or department
              </label>
            </div>
            
            <div className="form-group">
              <label htmlFor="website">Website:*</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="country">Country:*</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="United Kingdom">United Kingdom</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="discipline">Discipline:*</label>
              <input
                type="text"
                id="discipline"
                name="discipline"
                value={formData.discipline}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="reason">Why are you declaring? In a sentence or two, tell us why you're joining Design Declares.</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
            
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                />
                I consent for my data to be used for the purpose of the Declaration, and for my name and reason for joining to be used in the promotion of the Declaration on this site and across our social channels.
              </label>
              
              <label>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                />
                I would like to be added to the Design Declares! newsletter and receive further updates.
              </label>
            </div>
            
            <p className="privacy-link">
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                View our Privacy Policy
              </a>
            </p>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Declare Emergency Now
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Declaration;