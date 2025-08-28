'use client';

import { motion } from 'framer-motion';

export default function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
      {/* Animated blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/30 via-black/60 to-black z-10 pointer-events-none"></div>
      {/* Subtle blue glow overlay */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] sm:w-[80vw] sm:h-[80vw] rounded-full bg-gradient-to-br from-blue-700/20 via-blue-900/10 to-transparent blur-3xl opacity-40 animate-pulse-slow pointer-events-none"></div>
      {/* Minimal rotating globe */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
        style={{ width: '320px', height: '320px', opacity: 0.13 }}
      >
        <img src="/globe.svg" alt="Rotating Globe" className="w-full h-full object-contain select-none pointer-events-none" draggable="false" />
      </motion.div>
    </div>
  );
}

