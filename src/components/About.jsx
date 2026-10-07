import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { personalInfo, links } from '../data/content.js';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-accent">01 /</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            About Me
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Main narrative (3-5 lines) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {personalInfo.aboutSummary.map((paragraph, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                {paragraph}
              </p>
            </Reveal>
          ))}

          {/* Text links to GitHub and LinkedIn */}
          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-5 pt-3">
              <span className="text-xs font-mono text-muted uppercase tracking-wider">
                Profiles:
              </span>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Small facts row / sidebar card */}
        <div className="lg:col-span-4">
          <Reveal delay={0.2}>
            <div className="bg-card border border-border p-6 flex flex-col gap-4">
              <div className="text-xs font-mono text-muted uppercase tracking-wider border-b border-border pb-2">
                Quick Facts
              </div>
              {personalInfo.quickFacts.map((fact, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-xs font-mono text-muted">{fact.label}</span>
                  <span className="text-sm font-medium text-text mt-0.5">{fact.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
