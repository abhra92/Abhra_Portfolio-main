import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projectVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
}

const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.15,
            ease: [0.4, 0, 0.2, 1]
        }
    }
}

const BentoGrid = ({ children, className }) => (
  <motion.div 
    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    variants={containerVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
  >
    {children}
  </motion.div>
)

const BentoGridItem = ({ project, className }) => (
  <motion.div 
    variants={projectVariant}
    className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/20 transition-all duration-500 ${className}`}
  >
    <div className='p-8 h-full flex flex-col'>
      <div className='mb-6'>
        <h3 className='text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300'>
          {project.name}
        </h3>
      </div>
      
      <p className='text-gray-300 mb-6 flex-grow text-sm leading-relaxed'>
        {project.description}
      </p>
      
      {project.technologies && (
        <div className='flex flex-wrap gap-2 mb-6'>
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className='bg-white/5 text-stone-300 px-3 py-1 rounded-full text-xs border border-white/10'
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {project.link && (
        <div className="mt-auto">
          <motion.button
            onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
            className='group/link inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-medium cursor-pointer'
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm">View Project</span>
            <FaExternalLinkAlt size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      )}
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/30 via-blue-400/20 to-blue-300/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
  </motion.div>
)

const Projects = () => {
    return (
        <section id='projects' className='py-16 sm:py-20 md:py-24'>
            <div className='container mx-auto px-4 sm:px-6 md:px-8'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p 
                        className="text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        A collection of my recent work and contributions
                    </motion.p>
                </motion.div>
                <BentoGrid>
                    {PROJECTS.map((project, index) => (
                        <BentoGridItem 
                            key={index} 
                            project={project}
                            className=""
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    )
}

export default Projects
