import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function SectionDivider({ nextSectionLabel = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-content mx-auto px-6 py-12 md:py-16">
      <div className="flex items-center gap-4">
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-slate-800 to-slate-700/60 flex-1 origin-left"
          initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, ease: 'easeOut' }}
        />
        {nextSectionLabel && (
          <motion.div
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800/80 shrink-0"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="font-mono text-xs text-slate-400 select-none tracking-wider uppercase">
              {nextSectionLabel}
            </span>
          </motion.div>
        )}
        <motion.div
          className="h-px bg-gradient-to-r from-slate-700/60 via-slate-800 to-transparent flex-1 origin-left"
          initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
