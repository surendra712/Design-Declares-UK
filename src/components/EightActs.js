import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './EightActs.css';

const EightActs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const acts = [
    {
      number: "1",
      title: "Sound the Alarm",
      description: "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice."
    },
    {
      number: "2", 
      title: "Start the Journey",
      description: "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start."
    },
    {
      number: "3",
      title: "Bring Clients with Us", 
      description: "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress."
    },
    {
      number: "4",
      title: "Measure What We Make",
      description: "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out."
    },
    {
      number: "5",
      title: "Redefine 'Good'",
      description: "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards."
    },
    {
      number: "6",
      title: "Educate, Accelerate",
      description: "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry."
    },
    {
      number: "7",
      title: "Design for Justice",
      description: "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world."
    },
    {
      number: "8",
      title: "Amplify Voices for Change",
      description: "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change."
    }
  ];

  return (
    <section className="eight-acts section-large" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="eight-acts-title"
            variants={itemVariants}
          >
            8 Acts of Emergency
          </motion.h2>
          
          <motion.p 
            className="eight-acts-intro"
            variants={itemVariants}
          >
            What does it take to Declare? It's accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:
          </motion.p>
          
          <div className="acts-grid">
            {acts.map((act, index) => (
              <motion.div 
                key={index}
                className="act-item"
                variants={itemVariants}
              >
                <div className="act-number">{act.number}</div>
                <h3 className="act-title">{act.title}</h3>
                <p className="act-description">{act.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EightActs;