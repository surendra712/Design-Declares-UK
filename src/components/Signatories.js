import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Signatories.css';

const Signatories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const countVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Sample signatories - in a real app, this would come from an API
  const signatories = [
    "21–87", "216 Signs", "31% Wool", "400", "A–Side.", "Aalia Ahamed", "Abbie Williams", 
    "ACRE – A Creative Endeavour Ltd", "Active Matter", "ACX", "Adele Kelly", "AdesignStorie",
    "Advocate Design Agency", "Aetha Design", "Aileron Design Ltd", "Alan Pitchforth", 
    "Alex Kimber Design", "Alexander Miller", "Alexandra Lunn Studio", "Alexie Sommer",
    "Alexis Bardini", "Ali Adair", "Andrew Carr", "ANdy Parker", "Andy Thornton", "Anja Klüver",
    "Annabelle Vuille", "Apfel", "Applied Works", "Archetype Accessories", "Arif Yusop",
    "Arrival", "Avery & Brown", "BA (Hons) Design for Sustainable Futures", "Badfish Labs",
    "Baines Design LTD", "Barbara Chandler", "Barry Bloye", "Batch.Works", "Baxter & Bailey",
    "Be The Future", "Beco", "Beehive Green", "Ben Clarke", "Ben Jessop", "Bencium Limited",
    "Benedict Povey", "Beta Design Office", "BIB Design", "big fish", "Big Motive", "Bill Searle"
  ];

  const globalSupporters = [
    { 
      country: "Argentina", 
      supporters: ["Celina Hilbert", "Estudio Trineo", "Mariana Lange", "Pablo Alfieri", "Silvana Avila"] 
    },
    { 
      country: "Australia", 
      supporters: ["Alena Smith Interior Design", "Andrew Sloan", "Andrew Vaughan", "Andy Marks", "Frost* Design", "Interbrand Sydney", "Landor Sydney", "The Monkeys", "Clemenger BBDO", "Ogilvy Australia"] 
    },
    { 
      country: "Brazil", 
      supporters: ["AlmapBBDO", "DM9DDB", "Africa", "Wunderman Thompson", "Ogilvy Brasil", "Leo Burnett Brasil", "FCB Brasil", "Publicis Brasil"] 
    },
    { 
      country: "Canada", 
      supporters: ["Pentagram", "Sid Lee", "Rethink", "john st.", "Taxi", "DDB Canada", "Leo Burnett Canada", "Ogilvy Canada", "BBDO Canada"] 
    },
    { 
      country: "France", 
      supporters: ["Carré Noir", "Dragon Rouge", "Publicis", "BETC", "Marcel", "TBWA Paris", "DDB Paris", "Havas Paris", "Ogilvy Paris"] 
    },
    { 
      country: "Germany", 
      supporters: ["Pentagram Berlin", "Studio Mut", "Hort", "Cyan", "Edenspiekermann", "KMS Team", "Scholz & Friends", "Jung von Matt", "Peter Schmidt Group"] 
    },
    { 
      country: "Japan", 
      supporters: ["Dentsu", "Hakuhodo", "ADK", "Beacon Communications", "Tugboat", "Draft", "Asatsu-DK", "JR East Planning"] 
    },
    { 
      country: "Netherlands", 
      supporters: ["Studio Dumbar", "Experimental Jetset", "Mevis & van Deursen", "Lust", "Studio Moniker", "Metahaven", "Koeweiden Postma", "Thonik", "Fabrique"] 
    },
    { 
      country: "Sweden", 
      supporters: ["Forsman & Bodenfors", "King", "Åkestam Holst", "DDB Stockholm", "Ogilvy Stockholm", "TBWA Stockholm", "Grey Stockholm"] 
    },
    { 
      country: "United States", 
      supporters: ["IDEO", "Pentagram New York", "Ammunition Group", "Method", "Huge", "R/GA", "Sagmeister & Walsh", "Paula Scher", "Stefan Sagmeister", "Jessica Hische", "Frog Design", "Continuum", "Smart Design"] 
    }
  ];

  return (
    <section className="signatories section-large" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            className="signatories-count"
            variants={countVariants}
          >
            <span className="count-number">500+</span>
            <span className="count-text">Signatories and counting in D! UK</span>
          </motion.div>
          
          <div className="signatories-grid">
            {signatories.map((signatory, index) => (
              <motion.div
                key={index}
                className="signatory-item"
                variants={itemVariants}
              >
                {signatory}
              </motion.div>
            ))}
          </div>
          
          <motion.h3 
            className="global-title"
            variants={itemVariants}
          >
            Global Supporters
          </motion.h3>
          
          <div className="global-supporters">
            {globalSupporters.map((country, index) => (
              <motion.div 
                key={index}
                className="country-section"
                variants={itemVariants}
              >
                <h4 className="country-name">{country.country}</h4>
                <div className="country-supporters">
                  {country.supporters.map((supporter, supporterIndex) => (
                    <span key={supporterIndex} className="supporter-item">
                      {supporter}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Signatories;