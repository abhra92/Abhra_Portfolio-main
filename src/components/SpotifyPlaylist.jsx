import React from 'react';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
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

const SpotifyPlaylist = () => {
  return (
    <section id="spotify" className="py-20 px-6 relative bg-gradient-to-b from-green-900/10 to-transparent">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
      >
        <h2 className="text-4xl font-bold mb-8 text-center relative inline-block">
          <span className="absolute -top-5 -right-12 bg-green-500 text-xs font-bold py-1 px-2 rounded-md transform rotate-12 animate-pulse">
            NEW!
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
            My Music Collection
          </span>
        </h2>
        <div className="mb-8 text-center text-gray-300">
          <p>Check out my playlists, favorite tracks, and podcast episodes</p>
        </div>
        
        <div className="space-y-8">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-4"
            variants={itemVariant}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">Playlist #1</h3>
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/playlist/2MU4BocuPdpXMwrxGAw7i1?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-4"
            variants={itemVariant}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">Playlist #2</h3>
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/playlist/3sFiqBChFppf58eQeGC21G?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </motion.div>

          <motion.div 
            className="rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-4"
            variants={itemVariant}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">Currently Favorite Song</h3>
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/track/5PetOhEX9N0oyBB0Keqobv?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </motion.div>

          <motion.div 
            className="rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-4"
            variants={itemVariant}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">Most Vibey Track</h3>
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/track/5UGrftqh9U3zKQUt3vs7Ob?utm_source=generator&theme=0" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </motion.div>

          <motion.div 
            className="rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-4"
            variants={itemVariant}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">Podcast Episode</h3>
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/episode/0OeynLzWRvnxMrYbEofzGS?utm_source=generator&t=44" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SpotifyPlaylist;
