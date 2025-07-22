import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { 
    category: "Programming Languages", 
    icon: "< />",
    items: [
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" },
      { name: "JavaScript", icon: "JS" },
      { name: "TypeScript", icon: "TS" },
      { name: "C/C++", icon: "C++" },
      { name: "HTML/CSS", icon: "🌐" },
      { name: "SQL", icon: "🗃️" }
    ]
  },
  { 
    category: "Frameworks & Libraries", 
    icon: "{ }",
    items: [
      { name: "Spring Boot", icon: "🍃" },
      { name: "Angular", icon: "🅰️" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "React", icon: "⚛️" }
    ]
  },
  { 
    category: "Tools & Platforms", 
    icon: "⚡",
    items: [
      { name: "Docker", icon: "🐳" },
      { name: "Git/GitLab", icon: "📦" },
      { name: "Netlify", icon: "🌍" },
      { name: "GCP", icon: "☁️" },
      { name: "Jenkins", icon: "🔧" },
      { name: "Vercel", icon: "▲" },
      { name: "VS Code", icon: "💻" },
      { name: "GitHub", icon: "🐙" },
      { name: "Postman", icon: "📮" }
    ]
  },
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

const SkillItem = ({ name, icon }) => (
  <motion.div
    className="group relative flex items-center bg-white/5 backdrop-blur-lg rounded-lg p-4 cursor-pointer hover:bg-white/10 transition-all duration-300"
    variants={itemVariant}
    whileHover={{ 
      y: -2,
      transition: { duration: 0.2 } 
    }}
  >
    <div className="flex items-center space-x-3">
      <span className="text-lg">{icon}</span>
      <span className="text-white text-sm group-hover:text-blue-200 transition-colors">{name}</span>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24">
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
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Tools and technologies I work with
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index} 
              className="mb-12"
              variants={itemVariant}
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="text-blue-300 mr-3 font-mono text-lg">{category.icon}</span>
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {category.items.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
