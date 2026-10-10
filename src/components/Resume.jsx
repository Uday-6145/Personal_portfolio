import React from 'react';
import { Download, FileText, ExternalLink, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { links, personalInfo } from '../data/content.js';

export default function Resume() {
  return (
    <section id="resume" className="py-16 md:py-20 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400">
            06
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Resume
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative rounded-2xl glass-card border border-slate-800/90 p-7 sm:p-9 max-w-3xl overflow-hidden group hover:border-blue-500/40 hover:shadow-glow-sm transition-all duration-300">
          {/* Subtle Ambient Background Highlight */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-7">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 shadow-sm">
              <FileText className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white">
                  {personalInfo.name} | Curriculum Vitae
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Up to Date</span>
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Available in standard PDF format. Contains comprehensive details regarding education, technical proficiencies, and software engineering projects.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800/80">
            {/* Download Resume with Glowing Gradient */}
            <a
              href={links.resume}
              download="Uday_Pratap_Singh_Software_Development_Intern_Resume.pdf"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-md hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 hover:scale-[1.02] min-h-[46px]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            {/* View Resume in new tab */}
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-200 font-medium text-sm hover:border-blue-500/60 hover:text-white hover:bg-slate-800 transition-all duration-200 hover:scale-[1.02] min-h-[46px]"
            >
              <span>View Resume in Tab</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
