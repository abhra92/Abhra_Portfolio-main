import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import { TypeAnimation } from "react-type-animation";
import { FaChevronDown, FaMouse } from "react-icons/fa";

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

const textVariant = {
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

const scrollDownVariant = {
  initial: { y: -10, opacity: 0 },
  animate: {
    y: 10,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1,
    }
  }
};

const Home = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 md:px-8">
      <motion.div
        className="w-full max-w-4xl"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={textVariant} className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {HERO_CONTENT.greeting}
          </h1>
        </motion.div>

        <motion.div variants={textVariant} className="mb-8">
          <div className="text-2xl sm:text-3xl font-semibold text-blue-300">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "UI/UX Designer",
                2000,
                "IT Specialist",
                2000,
                "Freelancer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <motion.div variants={textVariant} className="mb-8">
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mb-4 md:whitespace-nowrap">
            {HERO_CONTENT.introduction}
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            {HERO_CONTENT.description}
          </p>
        </motion.div>

        <motion.div variants={textVariant}>
          <a
            href={HERO_CONTENT.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-white/5 backdrop-blur-lg text-white px-8 py-3 rounded-full border border-white/10 hover:border-blue-400/20 hover:text-blue-300 transition-all duration-300"
          >
            <span>{HERO_CONTENT.resumeLinkText}</span>
            <motion.span
              className="ml-2"
              whileHover={{ x: [0, 5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showScroll && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            variants={scrollDownVariant}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
          >
            <FaMouse className="text-2xl text-white/50 mb-2" />
            <FaChevronDown className="text-xl text-white/50" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home;
