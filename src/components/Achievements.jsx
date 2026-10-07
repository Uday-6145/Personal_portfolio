import React from 'react';
import { Medal, Trophy, Flag, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { achievements } from '../data/content.js';

export default function Achievements() {
  const getBadgeConfig = (badge, idx) => {
    switch (badge) {
      case 'medal':
        return {
          icon: <Medal className="w-5 h-5 text-amber-400" />,
          bg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
          glow: 'group-hover:border-amber-500/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]',
        };
      case 'trophy':
        return {
          icon: <Trophy className="w-5 h-5 text-cyan-400" />,
          bg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
          glow: 'group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]',
        };
      case 'flag':
      default:
        return {
          icon: <Flag className="w-5 h-5 text-emerald-400" />,
          bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
          glow: 'group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]',
        };
    }
  };

  return (
    <section id="achievements" className="py-16 md:py-20 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400">
            05
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Achievements
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, idx) => {
          const config = getBadgeConfig(item.badge, idx);
          return (
            <Reveal key={idx} delay={idx * 0.08} className="h-full">
              <div
                className={`group relative h-full rounded-2xl glass-card border border-slate-800/90 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${config.glow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl border ${config.bg} transition-transform duration-300 group-hover:scale-110`}>
                      {config.icon}
                    </div>
                    <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-slate-400" />
                      <span>Recognition</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">Award 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
