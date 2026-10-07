import React from 'react';
import { Layout, Server, Database, Brain, Wrench, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { skillCategories } from '../data/content.js';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'AI / Generative AI':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Tools / Languages':
      default:
        return <Wrench className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getGradientBorder = (idx) => {
    const borders = [
      'from-blue-500 to-indigo-500',
      'from-indigo-500 to-purple-500',
      'from-cyan-500 to-blue-500',
      'from-purple-500 to-pink-500',
      'from-emerald-500 to-teal-500',
    ];
    return borders[idx % borders.length];
  };

  return (
    <section id="skills" className="py-16 md:py-20 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            02
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Technical Skills
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <Reveal key={cat.category} delay={idx * 0.08} className="h-full">
            <div className="group relative h-full rounded-2xl glass-card p-6 flex flex-col justify-between border border-slate-800/90 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl overflow-hidden">
              {/* Subtle Top Gradient Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getGradientBorder(
                  idx
                )} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/70">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
                      {getCategoryIcon(cat.category)}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500 bg-slate-900/90 px-2 py-0.5 rounded-md border border-slate-800">
                    {cat.skills.length} tools
                  </span>
                </div>

                {/* Interactive Tag Chips */}
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-xs text-slate-300 bg-slate-900/90 border border-slate-800/90 px-3 py-1.5 rounded-lg transition-all duration-200 hover:text-white hover:border-blue-400/50 hover:bg-slate-800 hover:scale-105 cursor-default"
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
