import React from 'react';
import { Github, Linkedin, ExternalLink, GraduationCap, Target, Briefcase, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { personalInfo, links } from '../data/content.js';

export default function About() {
  const getFactIcon = (label) => {
    switch (label) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-blue-400" />;
      case 'Focus':
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
      case 'Looking for':
      default:
        return <Briefcase className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="py-16 md:py-20 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400">
            01
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            About Me
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Main narrative (3-5 lines) */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          {personalInfo.aboutSummary.map((paragraph, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {paragraph}
              </p>
            </Reveal>
          ))}

          {/* Text links to GitHub and LinkedIn with pill badges */}
          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Direct Profiles:
              </span>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-700/80 text-sm font-medium text-slate-200 hover:text-white hover:border-blue-500/60 hover:shadow-glow-sm transition-all duration-200"
              >
                <Github className="w-4 h-4 text-blue-400" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-700/80 text-sm font-medium text-slate-200 hover:text-white hover:border-indigo-500/60 hover:shadow-glow-indigo transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Quick Facts Card with Glassmorphic styling and glowing accents */}
        <div className="lg:col-span-4">
          <Reveal delay={0.2}>
            <div className="relative rounded-2xl glass-card p-6 border border-slate-700/70 shadow-xl overflow-hidden group hover:border-blue-500/40 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Quick Facts
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              </div>

              <div className="space-y-4">
                {personalInfo.quickFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-slate-800/40 border border-slate-800 flex items-start gap-3 transition-colors hover:bg-slate-800/70"
                  >
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-700/80 shrink-0">
                      {getFactIcon(fact.label)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">
                        {fact.label}
                      </span>
                      <span className="text-sm font-semibold text-white mt-0.5 block">
                        {fact.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
