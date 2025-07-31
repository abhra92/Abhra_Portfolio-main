import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaSpotify, FaTimes } from 'react-icons/fa';

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user has dismissed the announcement before
    const hasSeenAnnouncement = localStorage.getItem('hasSeenMusicAnnouncement');
    if (hasSeenAnnouncement) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Save to localStorage so it stays dismissed on future visits
    localStorage.setItem('hasSeenMusicAnnouncement', 'true');
  };

  const handleClick = () => {
    const element = document.getElementById('spotify');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleDismiss();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-20 left-0 right-0 z-40 flex justify-center px-4"
        >
          <div className="flex items-center justify-between w-full max-w-3xl p-3 rounded-xl bg-gradient-to-r from-green-900 to-green-700 text-white shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-full">
                <FaSpotify className="text-lg text-green-400" />
              </div>
              <p className="text-sm md:text-base">
                <span className="font-bold">New Feature!</span> Check out my music collection and discover what I'm listening to!
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button 
                onClick={handleClick} 
                className="px-3 py-1 text-xs md:text-sm bg-green-500 hover:bg-green-400 transition-colors rounded-lg font-medium"
              >
                Show me
              </button>
              <button 
                onClick={handleDismiss} 
                className="p-1 hover:bg-white/10 rounded-full transition-colors" 
                aria-label="Dismiss"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Announcement;
