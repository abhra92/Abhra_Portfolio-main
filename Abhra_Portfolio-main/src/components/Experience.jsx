import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2, once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5, once: false }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            My professional journey and achievements
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Vertical line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/40 via-blue-500/30 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeInOut" }}
          ></motion.div>
          
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className={`group relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } md:w-1/2`}
            >
              {/* Branch line */}
              <motion.div 
                className={`hidden md:block absolute top-1/2 w-8 h-0.5 bg-gradient-to-r ${
                  index % 2 === 0 ? 'left-0 from-blue-500/40 to-transparent' : 'right-0 from-transparent to-blue-500/40'
                }`}
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex flex-col gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <h4 className="text-blue-300 font-medium">{exp.company}</h4>
                    <span className="text-gray-400">•</span>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <span className="text-sm text-blue-400">{exp.yearRange}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
