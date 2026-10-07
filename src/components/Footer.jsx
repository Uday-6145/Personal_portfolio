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
    <footer className="mt-20 border-t border-border bg-bg py-12">
      <div className="max-w-content mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Monogram and Name & Year */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-card border border-border flex items-center justify-center">
            <span className="font-mono font-bold text-accent text-xs">
              {personalInfo.monogram}
            </span>
          </div>
          <div className="text-xs text-muted">
            <span className="text-text font-medium">{personalInfo.name}</span>
            <span className="mx-2">•</span>
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
            className="p-2 text-muted hover:text-accent border border-border bg-card transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Uday's LinkedIn profile"
            className="p-2 text-muted hover:text-accent border border-border bg-card transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={links.email}
            aria-label="Email Uday"
            className="p-2 text-muted hover:text-accent border border-border bg-card transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          type="button"
          onClick={handleBackToTop}
          aria-label="Back to top of page"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border text-xs font-mono text-muted hover:text-text hover:border-accent transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
