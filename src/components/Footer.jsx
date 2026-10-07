import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, links } from '../data/content.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-[#0B0F19]/90 backdrop-blur-md py-12 relative z-10">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Monogram and Name & Year */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
            <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-xs">
              {personalInfo.monogram}
            </span>
          </div>
          <div className="text-xs text-slate-400">
            <span className="text-slate-200 font-semibold">{personalInfo.name}</span>
            <span className="mx-2 text-slate-600">•</span>
            <span>{currentYear}</span>
          </div>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Uday's GitHub profile"
            className="p-2.5 rounded-xl text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/50 bg-slate-900 hover:bg-slate-800 transition-all duration-200 hover:scale-105"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Uday's LinkedIn profile"
            className="p-2.5 rounded-xl text-slate-400 hover:text-white border border-slate-800 hover:border-indigo-500/50 bg-slate-900 hover:bg-slate-800 transition-all duration-200 hover:scale-105"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={links.email}
            aria-label="Email Uday"
            className="p-2.5 rounded-xl text-slate-400 hover:text-white border border-slate-800 hover:border-cyan-500/50 bg-slate-900 hover:bg-slate-800 transition-all duration-200 hover:scale-105"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          type="button"
          onClick={handleBackToTop}
          aria-label="Back to top of page"
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-200"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 text-blue-400" />
        </button>
      </div>
    </footer>
  );
}
