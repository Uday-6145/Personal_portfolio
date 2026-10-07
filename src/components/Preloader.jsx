import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/content.js';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const duration = 1500; // 1.5 seconds
    const intervalTime = 20;
    const totalSteps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      const nextProgress = Math.min(100, Math.round((step / totalSteps) * 100));
      setProgress(nextProgress);

      if (step >= totalSteps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 180);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0F19]"
          aria-label="Loading site"
        >
          {/* Subtle ambient light behind monogram */}
          <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 w-full max-w-xs px-6 flex flex-col items-center">
            {/* Glowing UP Monogram with animated border */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-16 h-16 rounded-xl glass-card flex items-center justify-center mb-6 shadow-glow-sm"
            >
              <span className="font-mono font-bold text-2xl tracking-wider gradient-text-primary">
                {personalInfo.monogram}
              </span>
              <span className="absolute -inset-px rounded-xl border border-blue-500/30 animate-pulse-glow" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-6"
            >
              <h1 className="text-sm font-semibold tracking-wider text-slate-200 uppercase">
                {personalInfo.name}
              </h1>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Software Development Intern
              </p>
            </motion.div>

            {/* Glowing horizontal progress bar */}
            <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage counter */}
            <div className="mt-3 w-full flex justify-between items-center text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>SYSTEM_READY</span>
              </span>
              <span className="text-blue-400 font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
