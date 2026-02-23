import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Intro({ onComplete }: { onComplete?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      if (onComplete) {
        setTimeout(onComplete, 1800);
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const blindCount = 10;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 overflow-hidden">
      {/* Horizontal blinds */}
      {[...Array(blindCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"
          style={{
            top: `${(i / blindCount) * 100}%`,
            height: `${100 / blindCount}%`,
          }}
          initial={{ scaleY: 1, opacity: 1 }}
          animate={{
            scaleY: isOpen ? 0 : 1,
            opacity: isOpen ? 0 : 1,
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: [0.87, 0, 0.13, 1],
          }}
        >
          {/* Slat shadow effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30" />
          
          {/* Highlight on slat */}
          <div className="absolute top-1 left-0 right-0 h-px bg-white/10" />
        </motion.div>
      ))}

      {/* Light rays coming through */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute top-0 bottom-0 bg-gradient-to-b from-yellow-200/10 via-yellow-100/5 to-transparent"
          style={{
            left: `${20 + i * 15}%`,
            width: '8%',
            transform: 'skewX(-10deg)',
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: isOpen ? [0, 0.3, 0] : 0,
            scaleY: isOpen ? [0, 1, 1] : 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5 + i * 0.1,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Center content */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: isOpen ? [0, 0, 1, 1, 0] : 0,
          y: isOpen ? [30, 30, 0, 0, -20] : 30,
        }}
        transition={{ duration: 1.8, delay: 0.4 }}
      >
        <div className="text-8xl font-bold text-white mb-4 drop-shadow-2xl">
          Welcome
        </div>
        <div className="text-2xl text-gray-300 tracking-[0.3em]">
          OPEN FOR BUSINESS
        </div>
      </motion.div>

      {/* Dust particles in light */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: isOpen ? [0, 0.6, 0.3, 0] : 0,
            y: isOpen ? [0, -50 - Math.random() * 100, -150] : 0,
            x: isOpen ? [0, (Math.random() - 0.5) * 30] : 0,
          }}
          transition={{
            duration: 2 + Math.random(),
            delay: 0.6 + Math.random() * 0.5,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Pull cord (decorative) */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-600"
        initial={{ height: '60%', y: 0 }}
        animate={{
          height: isOpen ? '20%' : '60%',
          y: isOpen ? '-100%' : 0,
        }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.87, 0, 0.13, 1] }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-8 bg-gray-700 rounded-full" />
      </motion.div>
    </div>
  );
}