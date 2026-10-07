import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/content.js';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock body scroll while preloader is active
    document.body.style.overflow = 'hidden';

    const duration = 1400; // 1.4 seconds
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
        }, 150);
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
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg"
          aria-label="Loading site"
        >
          <div className="w-full max-w-xs px-6 flex flex-col items-center">
            {/* UP Monogram */}
            <div className="w-14 h-14 bg-card border border-border flex items-center justify-center mb-6">
              <span className="font-mono font-bold text-accent text-xl tracking-wider">
                {personalInfo.monogram}
              </span>
            </div>

            <div className="text-center mb-6">
              <h1 className="text-sm font-semibold text-text tracking-wide uppercase">
                {personalInfo.name}
              </h1>
            </div>

            {/* Horizontal progress bar (flat solid accent) */}
            <div className="w-full h-0.5 bg-border overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage counter */}
            <div className="mt-3 w-full flex justify-between items-center text-xs font-mono text-muted">
              <span>INITIALIZING</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
