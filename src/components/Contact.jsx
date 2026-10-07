import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { links, contactDetails } from '../data/content.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(links.emailAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${senderName}\n\nMessage:\n${senderMessage}`
    );
    window.location.href = `mailto:${links.emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-20 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            07
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            {contactDetails.heading}
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact info rows with visible text & rich cards */}
        <div className="lg:col-span-6 space-y-5">
          <Reveal delay={0.1}>
            <p className="text-base text-slate-300 leading-relaxed mb-6 font-normal">
              {contactDetails.subheading}
            </p>
          </Reveal>

          {/* Email Row with Copy action */}
          <Reveal delay={0.15}>
            <div className="rounded-2xl glass-card border border-slate-800/90 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:border-blue-500/50 hover:shadow-glow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">
                    {contactDetails.emailLabel}
                  </span>
                  <a
                    href={links.email}
                    className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors break-all"
                  >
                    {contactDetails.emailDisplay}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border text-xs font-mono transition-all duration-200 self-start sm:self-center shrink-0 min-h-[38px] ${
                  copied
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                    : 'bg-slate-900 border-slate-700/80 text-slate-300 hover:border-blue-500/50 hover:text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </Reveal>

          {/* LinkedIn Row */}
          <Reveal delay={0.2}>
            <div className="rounded-2xl glass-card border border-slate-800/90 p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-glow-indigo">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">
                    {contactDetails.linkedinLabel}
                  </span>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-white hover:text-indigo-400 transition-colors break-all"
                  >
                    {contactDetails.linkedinDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* GitHub Row */}
          <Reveal delay={0.25}>
            <div className="rounded-2xl glass-card border border-slate-800/90 p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-glow-cyan">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">
                    {contactDetails.githubLabel}
                  </span>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors break-all"
                  >
                    {contactDetails.githubDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Prefilled Mailto Form */}
        <div className="lg:col-span-6">
          <Reveal delay={0.2}>
            <div className="rounded-2xl glass-card border border-slate-800/90 p-6 sm:p-8 shadow-xl">
              <div className="border-b border-slate-800/80 pb-4 mb-6">
                <h3 className="text-lg font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Opens your email client with your name and message prefilled.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-2">
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 resize-y"
                    placeholder="Write your message here"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-md hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] min-h-[46px] group"
                >
                  <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  <span>Open Email Client</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
