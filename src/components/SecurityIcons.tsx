'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SecurityIcons() {
  const securityElements = [
    { id: 1, icon: '🔒', position: { top: '20%', left: '10%' }, delay: 0 },
    { id: 2, icon: '🛡️', position: { top: '70%', left: '15%' }, delay: 0.5 },
    { id: 3, icon: '⚠️', position: { top: '30%', left: '80%' }, delay: 1 },
    { id: 4, icon: '🔍', position: { top: '75%', left: '75%' }, delay: 1.5 },
    { id: 5, icon: '💻', position: { top: '60%', left: '40%' }, delay: 2 },
    { id: 6, icon: '📊', position: { top: '25%', left: '50%' }, delay: 2.5 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {securityElements.map(element => (
        <motion.div
          key={element.id}
          className="absolute opacity-5 select-none text-4xl"
          style={{
            top: element.position.top,
            left: element.position.left
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.05, 0.1, 0.05],
            y: ['-20px', '20px', '-20px'],
            x: ['-10px', '10px', '-10px'],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut'
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
}
