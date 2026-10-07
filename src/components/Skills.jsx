import React from 'react';
import Reveal from './Reveal.jsx';
import { skillCategories } from '../data/content.js';

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-accent">02 /</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            Technical Skills
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <Reveal key={cat.category} delay={idx * 0.08} className="h-full">
            <div className="h-full bg-card border border-border p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-accent">
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-border pb-3">
                  <h3 className="text-base font-semibold text-text">
                    {cat.category}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    0{idx + 1}
                  </span>
                </div>

                {/* Tag List */}
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-xs bg-bg text-text border border-border px-2.5 py-1"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
