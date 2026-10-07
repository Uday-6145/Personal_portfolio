import React from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { links, personalInfo } from '../data/content.js';

export default function Resume() {
  return (
    <section id="resume" className="py-12 md:py-16 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-accent">06 /</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            Resume
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="bg-card border border-border p-6 sm:p-8 max-w-2xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-bg border border-border flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text mb-1">
                {personalInfo.name} — Curriculum Vitae
              </h3>
              <p className="text-sm text-muted">
                Available in standard PDF format. Contains education, technical skills, and key projects.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
            {/* Download Resume */}
            <a
              href={links.resume}
              download="Uday_Pratap_Singh_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors min-h-[44px]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* View Resume (in new tab) */}
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-bg border border-border text-text font-medium text-sm hover:border-accent hover:text-accent transition-colors min-h-[44px]"
            >
              <span>View Resume</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
