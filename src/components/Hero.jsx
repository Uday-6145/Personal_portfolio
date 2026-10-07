import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, links } from '../data/content.js';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: 'easeOut',
      },
    },
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 72;
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="top" className="py-20 md:py-28 max-w-content mx-auto px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl flex flex-col items-start"
      >
        {/* Monogram Badge */}
        <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-accent px-2.5 py-1 bg-card border border-border">
            Portfolio
          </span>
          <span className="h-px w-8 bg-border" aria-hidden="true" />
          <span className="font-mono text-xs text-muted">2026</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text leading-tight mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role line */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-accent font-medium leading-relaxed mb-4"
        >
          {personalInfo.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-2xl"
        >
          {personalInfo.heroTagline}
        </motion.p>

        {/* Skill Chips */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
          {personalInfo.heroChips.map((chip) => (
            <span
              key={chip}
              className="font-mono text-xs bg-card text-text border border-border px-3 py-1.5 transition-colors hover:border-accent"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
        >
          {/* Primary Action: View Projects */}
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors min-h-[44px]"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Secondary Action: Download Resume */}
          <a
            href={links.resume}
            download="Uday_Pratap_Singh_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-card border border-border text-text font-medium text-sm hover:border-accent hover:text-accent transition-colors min-h-[44px]"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-card border border-border text-muted font-medium text-sm hover:border-accent hover:text-text transition-colors min-h-[44px]"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </a>

          {/* GitHub Link */}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Uday's GitHub profile"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-card border border-border text-muted font-medium text-sm hover:border-accent hover:text-text transition-colors min-h-[44px]"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Uday's LinkedIn profile"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-card border border-border text-muted font-medium text-sm hover:border-accent hover:text-text transition-colors min-h-[44px]"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
