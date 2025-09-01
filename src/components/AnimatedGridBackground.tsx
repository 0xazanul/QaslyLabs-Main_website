'use client';

import { motion } from 'framer-motion';

export default function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Enhanced hero-specific gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/25 via-black/70 to-black z-10 pointer-events-none" />
      
      {/* Centered glow for hero section */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] sm:w-[70vw] sm:h-[70vw] rounded-full bg-gradient-to-br from-blue-700/20 via-blue-900/10 to-transparent blur-3xl opacity-60 pointer-events-none" />
      
      {/* Additional hero accent */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-2xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

