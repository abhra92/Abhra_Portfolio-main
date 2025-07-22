import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaGoogle, FaCode } from 'react-icons/fa';
import { PiXLogoBold } from 'react-icons/pi';

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/abhratech_nexus/', color: 'hover:text-pink-500' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/abhra92/', color: 'hover:text-blue-600' },
  { name: 'X', icon: PiXLogoBold, url: 'https://x.com/_abHra_', color: 'hover:text-blue-400' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/abhra92', color: 'hover:text-gray-400' },
  { name: 'LeetCode', icon: FaCode, url: 'https://leetcode.com/u/abhratech/', color: 'hover:text-yellow-500' },
  { name: 'HackerRank', icon: FaCode, url: 'https://www.hackerrank.com/profile/abhrajoytidhara2', color: 'hover:text-green-500' },
  { name: 'Gmail', icon: FaGoogle, url: 'mailto:abhrajoytidhara2@gmail.com', color: 'hover:text-red-500' },
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const ContactItem = ({ icon: Icon, name, url, color, index }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center justify-center bg-white/5 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition-all duration-300 ${color}`}
    variants={itemVariant}
    whileHover={{ y: -2 }}
  >
    <div className="flex flex-col items-center">
      <Icon className="text-2xl mb-2 group-hover:scale-110 transition-transform" />
      <span className="text-white text-sm">{name}</span>
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I'm always open to new opportunities and collaborations
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariant}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-6">
              <FaEnvelope className="text-3xl text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            </div>
            <p className="text-gray-300 text-center">
              Feel free to reach out through any of the platforms below
            </p>
          </motion.div>

          <motion.div
            variants={containerVariant}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {socialLinks.map((link, index) => (
              <ContactItem key={index} {...link} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
