import React from 'react';
import Reveal from './Reveal.jsx';
import { education } from '../data/content.js';

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-16 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-accent">04 /</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            Education
          </h2>
        </div>
      </Reveal>

      <div className="max-w-3xl">
        <div className="relative border-l border-border pl-6 sm:pl-8 space-y-8">
          {education.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="relative group">
                {/* Timeline solid bullet */}
                <span
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 bg-bg border-2 border-accent transition-colors group-hover:bg-accent"
                  aria-hidden="true"
                />

                <div className="bg-card border border-border p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-text">
                      {item.degree}
                    </h3>
                    <span className="font-mono text-xs text-accent">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted">
                    {item.institution}
                  </p>

                  {item.grade && (
                    <div className="mt-3 pt-3 border-t border-border/60">
                      <span className="inline-block font-mono text-xs bg-bg border border-border px-2.5 py-1 text-text">
                        {item.grade}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
