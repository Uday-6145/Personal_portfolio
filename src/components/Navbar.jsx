import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, Sparkles } from 'lucide-react';
import { links, personalInfo, navItems } from '../data/content.js';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }

      const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 130;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 76;
      const targetPos = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth',
      });
    }
  };

  const handleMonogramClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F19]/85 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      {/* Dynamic Scroll Progress Bar with Glowing Gradient */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-800 pointer-events-none overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        aria-label="Main Navigation"
        className="max-w-content mx-auto px-6 h-16 flex items-center justify-between"
      >
        {/* Monogram / Logo with interactive glow */}
        <a
          href="#top"
          onClick={handleMonogramClick}
          aria-label="Go to top of page"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:scale-105">
            <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-sm tracking-wider">
              {personalInfo.monogram}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
              {personalInfo.name}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Seeking SDE Intern</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`relative px-3.5 py-1.5 text-sm font-medium transition-all duration-200 rounded-md group inline-flex items-center gap-1 ${
                      isActive
                        ? 'text-white bg-slate-800/80 shadow-sm border border-slate-700/60'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Active highlight glow dot */}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_#38bdf8]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-px bg-slate-800" aria-hidden="true" />

          {/* Social Links with interactive hover */}
          <div className="flex items-center gap-2">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Uday's GitHub profile"
              className="p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/60 transition-all duration-200 hover:scale-105"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Uday's LinkedIn profile"
              className="p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-200 hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800 bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-5 shadow-2xl">
          <ul className="flex flex-col gap-2 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'text-white bg-blue-600/20 border border-blue-500/30 font-semibold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-slate-500">{item.number}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-3">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Uday's GitHub profile"
              className="flex-1 flex items-center justify-center gap-2 text-xs font-mono text-slate-300 py-2.5 px-3 rounded-lg border border-slate-800 bg-slate-900 hover:border-blue-500/50 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Uday's LinkedIn profile"
              className="flex-1 flex items-center justify-center gap-2 text-xs font-mono text-slate-300 py-2.5 px-3 rounded-lg border border-slate-800 bg-slate-900 hover:border-indigo-500/50 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
