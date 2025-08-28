"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface LaunchAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function LaunchAnimation({ isVisible, onComplete }: LaunchAnimationProps) {
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  const [ending, setEnding] = useState(false);
  const handleAnimationComplete = () => {
    if (!showLogo) {
      setShowLogo(true);
      setTimeout(() => setShowText(true), 200);
      setTimeout(() => setEnding(true), 1100);
      setTimeout(() => {
        setEnding(false);
        onComplete();
      }, 1400);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ending ? 0 : 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Left Side Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.05 
            }}
            onAnimationComplete={handleAnimationComplete}
            className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black to-neutral-900 z-10"
          />

          {/* Right Side Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.05 
            }}
            className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black to-neutral-900 z-10"
          />

          {/* Center Content */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Logo Animation */}
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  initial={{ scale: 0.7, rotate: -180, opacity: 0 }}
                  animate={{ scale: ending ? 1.3 : 1, rotate: ending ? 20 : 0, opacity: ending ? 0 : 1 }}
                  transition={{ 
                    duration: ending ? 0.3 : 0.4, 
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  className="mb-6"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                    <span className="text-black font-black text-3xl">Q</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Text Animation */}
            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: ending ? 0 : 1, y: ending ? -30 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight"
                  >
                    Qasly Labs
                  </motion.h1>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex items-center gap-3 justify-center w-full"
                  >
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-neutral-400 text-lg text-center">Launching Platform</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading Dots */}
            <AnimatePresence>
              {showText && !ending && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="flex gap-2 mt-8"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1, 0] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                      }}
                      className="w-3 h-3 bg-white rounded-full"
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Background Pattern & Flash */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-pulse"></div>
            {ending && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-white"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
