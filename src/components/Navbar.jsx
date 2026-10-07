import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { links, personalInfo, navItems } from '../data/content.js';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track active section and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage for top progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }

      // Determine active section based on scroll offset
      const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 120; // 120px offset for navbar

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
      const navHeight = 72;
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
    <header className="sticky top-0 z-40 bg-bg border-b border-border">
      {/* 2px Solid Accent Scroll-Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-border pointer-events-none">
        <div
          className="h-full bg-accent transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        aria-label="Main Navigation"
        className="max-w-content mx-auto px-6 h-16 flex items-center justify-between"
      >
        {/* Monogram / Logo */}
        <a
          href="#top"
          onClick={handleMonogramClick}
          aria-label="Go to top of page"
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-9 h-9 bg-card border border-border flex items-center justify-center transition-colors group-hover:border-accent">
            <span className="font-mono font-bold text-accent text-sm tracking-wider">
              {personalInfo.monogram}
            </span>
          </div>
          <span className="font-mono text-xs text-muted group-hover:text-text transition-colors hidden sm:inline">
            {personalInfo.name}
          </span>
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
                    className={`relative px-3 py-2 text-sm font-medium transition-colors group inline-block ${
                      isActive ? 'text-accent' : 'text-muted hover:text-text'
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Hover sliding underline */}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-0.5 bg-accent transition-transform duration-200 origin-left ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-px bg-border" aria-hidden="true" />

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Uday's GitHub profile"
              className="p-2 text-muted hover:text-accent border border-transparent hover:border-border transition-colors bg-card/0 hover:bg-card"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Uday's LinkedIn profile"
              className="p-2 text-muted hover:text-accent border border-transparent hover:border-border transition-colors bg-card/0 hover:bg-card"
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
            className="p-2 text-muted hover:text-text border border-border bg-card focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Solid background, no blur) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-bg border-b border-border px-6 py-4">
          <ul className="flex flex-col gap-2 list-none m-0 p-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`flex items-center justify-between py-2 text-sm border-b border-border/50 ${
                      isActive ? 'text-accent font-semibold' : 'text-muted hover:text-text'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-muted">{item.number}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 pt-3 flex items-center gap-4">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Uday's GitHub profile"
              className="flex items-center gap-2 text-xs font-mono text-muted hover:text-accent p-2 border border-border bg-card"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Uday's LinkedIn profile"
              className="flex items-center gap-2 text-xs font-mono text-muted hover:text-accent p-2 border border-border bg-card"
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
