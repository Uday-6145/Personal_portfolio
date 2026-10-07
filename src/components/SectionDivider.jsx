import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function SectionDivider({ nextSectionLabel = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-content mx-auto px-6 py-12 md:py-16">
      <div className="flex items-center gap-4">
        <motion.div
          className="h-px bg-border flex-1 origin-left"
          initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: shouldReduceMotion ? 0.2 : 0.65, ease: 'easeOut' }}
        />
        {nextSectionLabel && (
          <motion.span
            className="font-mono text-xs text-muted shrink-0 select-none tracking-wider uppercase"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.3 }}
          >
            {nextSectionLabel}
          </motion.span>
        )}
      </div>
    </div>
  );
}
