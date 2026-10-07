import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Terminal, Cpu } from 'lucide-react';
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
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 76;
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="top" className="relative pt-24 pb-20 md:pt-32 md:pb-28 max-w-content mx-auto px-6 overflow-hidden">
      {/* Ambient Gradient Highlights behind Hero */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-cyan-500/10 blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl flex flex-col items-start"
      >
        {/* Availability Status Badge with Pulsing Beacon */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-slate-300">
              Seeking Software Development Intern Roles
            </span>
            <span className="h-3 w-px bg-slate-700 mx-0.5" />
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Full-Stack & AI</span>
            </span>
          </div>
        </motion.div>

        {/* Hero Name with Dynamic Gradient Accent */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-5"
        >
          Hi, I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Role line */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl font-medium text-slate-300 leading-relaxed mb-4 max-w-2xl"
        >
          {personalInfo.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl"
        >
          {personalInfo.heroTagline}
        </motion.p>

        {/* Interactive Floating Skill Chips */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5 mb-10">
          {personalInfo.heroChips.map((chip, idx) => (
            <motion.span
              key={chip}
              whileHover={{ y: -2, scale: 1.04 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-xs text-slate-200 bg-slate-900/90 border border-slate-700/80 px-3.5 py-1.5 rounded-lg shadow-sm backdrop-blur-md flex items-center gap-1.5 hover:border-blue-400/60 hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] cursor-default transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>{chip}</span>
            </motion.span>
          ))}
        </motion.div>

        {/* Action Buttons with Rich Hover & Glow states */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
        >
          {/* Primary Action: View Projects */}
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-md hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-h-[46px]"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>

          {/* Secondary Action: Download Resume */}
          <a
            href={links.resume}
            download="Uday_Pratap_Singh_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 font-medium text-sm hover:border-blue-500/60 hover:text-white hover:bg-slate-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] min-h-[46px]"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Download Resume</span>
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 font-medium text-sm hover:border-slate-600 hover:text-white hover:bg-slate-800 transition-all duration-200 hover:scale-[1.02] min-h-[46px]"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Me</span>
          </a>

          {/* GitHub Link */}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Uday's GitHub profile"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 font-medium text-sm hover:border-blue-500/50 hover:text-white hover:bg-slate-800 transition-all duration-200 hover:scale-[1.02] min-h-[46px]"
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
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 font-medium text-sm hover:border-indigo-500/50 hover:text-white hover:bg-slate-800 transition-all duration-200 hover:scale-[1.02] min-h-[46px]"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
