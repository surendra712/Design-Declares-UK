import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FloatingActions.css';

const FloatingActions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToDeclaration = () => {
    const element = document.getElementById('declaration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: '8 Acts', href: '#eight-acts' },
    { label: 'News', href: '#latest' },
    { label: 'Signatories', href: '#signatories' },
    { label: 'Newsletter', href: '#newsletter' }
  ];

  return (
    <div className="floating-actions">
      <div className="floating-buttons">
        <motion.button
          className="floating-btn menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="btn-text">Menu</span>
          <motion.span 
            className="btn-icon"
            animate={{ rotate: isMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            +
          </motion.span>
        </motion.button>

        <motion.button
          className="floating-btn declare-btn"
          onClick={scrollToDeclaration}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Declare Now
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="floating-menu"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="menu-items">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="menu-item"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActions;