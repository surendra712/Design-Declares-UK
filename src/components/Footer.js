import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email || !acceptPrivacy) {
      alert('Please fill in your email and accept the privacy policy.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for subscribing to D! Newsletter!');
      setEmail('');
      setAcceptPrivacy(false);
      setIsSubmitting(false);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Sign up to D! Newsletter</h3>
            <p className="newsletter-description">
              Stay updated with the latest news, events, and resources from Design Declares. 
              Join our community of designers committed to climate action.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="form-row">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                />
                <button 
                  type="submit" 
                  className="subscribe-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              
              <div className="privacy-checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={acceptPrivacy}
                    onChange={(e) => setAcceptPrivacy(e.target.checked)}
                    required
                  />
                  <span className="checkmark"></span>
                  I accept the <a href="#privacy" className="privacy-link">Privacy Policy</a> and 
                  agree to receive newsletters from Design Declares.
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <h2 className="footer-logo">Design Declares</h2>
              <p className="footer-tagline">
                Designers united for climate action. Declaring a climate and ecological emergency 
                to drive meaningful change through design.
              </p>
              
              <div className="social-links">
                <a href="https://instagram.com/designdeclares" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">📷</span>
                  Instagram
                </a>
                <a href="https://linkedin.com/company/design-declares" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">💼</span>
                  LinkedIn
                </a>
                <a href="https://twitter.com/designdeclares" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">🐦</span>
                  Twitter
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#declaration">Make Declaration</a></li>
                <li><a href="#eight-acts">8 Acts of Emergency</a></li>
                <li><a href="#latest">Latest News</a></li>
                <li><a href="#signatories">Signatories</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li><a href="#toolkit">Design Toolkit</a></li>
                <li><a href="#guides">Climate Guides</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#research">Research</a></li>
              </ul>
            </div>

            {/* Contact & Legal */}
            <div className="footer-section">
              <h4 className="footer-heading">Contact & Legal</h4>
              <ul className="footer-links">
                <li><a href="mailto:hello@designdeclares.com">Contact Us</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
                <li><a href="#accessibility">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Design Declares. All rights reserved. 
              <span className="separator">•</span>
              Made with care for our planet.
            </p>
            
            <div className="footer-badges">
              <span className="badge">Climate Emergency</span>
              <span className="badge">Carbon Neutral</span>
              <span className="badge">Sustainable Design</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;