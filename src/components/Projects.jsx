import React from 'react';
import { Github, ExternalLink, ArrowRight, Sparkles, Radio } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { projects, links } from '../data/content.js';

export default function Projects() {
  const getBadgeCategory = (id) => {
    switch (id) {
      case 'course-app':
        return 'Full-Stack Backend';
      case 'e-commerce-web-app':
        return 'Frontend & Auth';
      case 'kestrel-research-assistant':
        return 'Applied AI & RAG';
      default:
        return 'Software Project';
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            03
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Projects
          </h2>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 0.1} className="h-full">
            <article className="group relative h-full rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between border border-slate-800/90 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
              {/* Subtle Ambient Hover Glow on Card */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header: Project Index & Category Pill */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/70">
                  <span className="font-mono text-xs text-blue-400 font-semibold">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-[11px] text-slate-300 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-md">
                    {getBadgeCategory(project.id)}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {project.name}
                </h3>

                {/* One-line description */}
                <p className="text-sm text-slate-300 mb-5 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech Tags with interactive styling */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs bg-slate-900/90 text-slate-300 border border-slate-800 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Feature Bullets */}
                <div className="border-t border-slate-800/70 pt-4 mb-6">
                  <h4 className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2.5 list-none p-0 m-0 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center gap-3">
                {/* GitHub button (ALWAYS rendered) */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 hover:border-blue-500/60 hover:text-white hover:bg-slate-800 transition-all duration-200 min-h-[42px]"
                >
                  <Github className="w-4 h-4 text-blue-400" />
                  <span>GitHub</span>
                </a>

                {/* Live Demo button (rendered ONLY when live is not null) */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-medium shadow-glow-sm hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 min-h-[42px]"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* View all repositories footer link */}
      <Reveal delay={0.2}>
        <div className="flex justify-center pt-2">
          <a
            href={links.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm font-medium text-slate-200 hover:border-blue-500/60 hover:text-white hover:shadow-glow-sm transition-all duration-200 group"
          >
            <span>View all repositories on GitHub</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-blue-400" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
