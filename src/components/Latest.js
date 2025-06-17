import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Latest.css';

const Latest = () => {
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

  const articles = [
    {
      date: "D! UK 24.04.2025, 10 AM:00",
      category: "Events",
      title: "SD4P Collective: How can Service Design drive meaningful sustainability impact",
      subtitle: "Recap: SD4P Collective working session – 28th March 2025",
      link: "/latest/sd4p-collective-how-can-service-design-drive-meaningful-sustainability-impact"
    },
    {
      date: "D! UK 06.12.2024, 09 AM:00", 
      category: "Events",
      title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
      subtitle: "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
      link: "/latest/designing-tomorrow-speculative-thinking-shapes-our-present"
    }
  ];

  return (
    <section className="latest section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="latest-title"
            variants={itemVariants}
          >
            Latest
          </motion.h2>
          
          <div className="articles-grid">
            {articles.map((article, index) => (
              <motion.article 
                key={index}
                className="article-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="article-meta">
                  <span className="article-category">{article.category}</span>
                  <span className="article-date">{article.date}</span>
                </div>
                
                <h3 className="article-title">{article.title}</h3>
                <p className="article-subtitle">{article.subtitle}</p>
                
                <a 
                  href={article.link}
                  className="article-link"
                >
                  Read story
                </a>
              </motion.article>
            ))}
          </div>
          
          <motion.div 
            className="see-all-container"
            variants={itemVariants}
          >
            <a href="/latest" className="see-all-link">
              See all the latest
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Latest;