import React from 'react';
import { Medal, Trophy, Flag } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { achievements } from '../data/content.js';

export default function Achievements() {
  const getIcon = (badge) => {
    switch (badge) {
      case 'medal':
        return <Medal className="w-5 h-5 text-accent" />;
      case 'trophy':
        return <Trophy className="w-5 h-5 text-accent" />;
      case 'flag':
      default:
        return <Flag className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="achievements" className="py-12 md:py-16 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-accent">05 /</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            Achievements
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <Reveal key={idx} delay={idx * 0.08} className="h-full">
            <div className="h-full bg-card border border-border p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-accent">
              <div>
                <div className="w-10 h-10 bg-bg border border-border flex items-center justify-center mb-4">
                  {getIcon(item.badge)}
                </div>

                <h3 className="text-base font-semibold text-text mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-muted">Award 0{idx + 1}</span>
                <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
