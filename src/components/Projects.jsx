import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { projects, links } from '../data/content.js';

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-accent">03 /</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            Featured Projects
          </h2>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, idx) => (
          <Reveal key={project.id} delay={idx * 0.1} className="h-full">
            <article className="h-full bg-card border border-border p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-accent">
              <div>
                {/* Header: Project Index & Name */}
                <div className="flex items-center justify-between mb-3 border-b border-border pb-3">
                  <span className="font-mono text-xs text-accent">0{idx + 1}</span>
                  <span className="font-mono text-xs text-muted">Web & Software</span>
                </div>

                <h3 className="text-xl font-bold text-text mb-2">
                  {project.name}
                </h3>

                {/* One-line description */}
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs bg-bg text-text border border-border px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Feature Bullets */}
                <div className="border-t border-border pt-4 mb-6">
                  <h4 className="text-xs font-mono uppercase text-muted tracking-wider mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2 list-none p-0 m-0 text-xs sm:text-sm text-muted leading-relaxed">
                    {project.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 bg-accent mt-1.5 shrink-0" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border flex items-center gap-3">
                {/* GitHub button (ALWAYS rendered) */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-bg border border-border text-xs sm:text-sm font-medium text-text hover:border-accent hover:text-accent transition-colors min-h-[40px]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                {/* Live Demo button (ONLY when live is not null) */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2 bg-accent text-white text-xs sm:text-sm font-medium hover:bg-accent-hover transition-colors min-h-[40px]"
                  >
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border text-sm font-medium text-text hover:border-accent hover:text-accent transition-colors"
          >
            <span>View all repositories on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
