import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { education } from '../data/content.js';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-20 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400">
            04
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education
          </h2>
        </div>
      </Reveal>

      <div className="max-w-3xl">
        <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-8 space-y-8">
          {education.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="relative group">
                {/* Glowing Timeline Node */}
                <div
                  className="absolute -left-[33px] sm:-left-[41px] top-1.5 h-4 w-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:scale-125 group-hover:bg-blue-500 group-hover:shadow-[0_0_12px_#3b82f6] transition-all duration-300"
                  aria-hidden="true"
                />

                <div className="rounded-2xl glass-card border border-slate-800/90 p-5 sm:p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-700/80 group-hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{item.degree}</span>
                    </h3>
                    <div className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300">
                    {item.institution}
                  </p>

                  {item.grade && (
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-semibold">
                        <Award className="w-3.5 h-3.5" />
                        <span>{item.grade}</span>
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
