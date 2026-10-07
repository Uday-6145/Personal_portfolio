import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { links, contactDetails } from '../data/content.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(links.emailAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${senderName}\n\nMessage:\n${senderMessage}`
    );
    // Direct mailto link with prefilled name and message
    window.location.href = `mailto:${links.emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 md:py-16 max-w-content mx-auto px-6">
      <Reveal>
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-accent">07 /</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text">
            {contactDetails.heading}
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact info rows with visible text */}
        <div className="lg:col-span-6 space-y-6">
          <Reveal delay={0.1}>
            <p className="text-base text-muted leading-relaxed mb-6">
              {contactDetails.subheading}
            </p>
          </Reveal>

          {/* Email Row */}
          <Reveal delay={0.15}>
            <div className="bg-card border border-border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bg border border-border flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted block">
                    {contactDetails.emailLabel}
                  </span>
                  <a
                    href={links.email}
                    className="text-sm sm:text-base font-medium text-text hover:text-accent transition-colors break-all"
                  >
                    {contactDetails.emailDisplay}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-bg border border-border text-xs font-mono text-muted hover:text-text hover:border-accent transition-colors self-start sm:self-center shrink-0 min-h-[36px]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span className="text-accent">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </Reveal>

          {/* LinkedIn Row */}
          <Reveal delay={0.2}>
            <div className="bg-card border border-border p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bg border border-border flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted block">
                    {contactDetails.linkedinLabel}
                  </span>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-medium text-text hover:text-accent transition-colors break-all"
                  >
                    {contactDetails.linkedinDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* GitHub Row */}
          <Reveal delay={0.25}>
            <div className="bg-card border border-border p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bg border border-border flex items-center justify-center shrink-0">
                  <Github className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <span className="text-xs font-mono text-muted block">
                    {contactDetails.githubLabel}
                  </span>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-medium text-text hover:text-accent transition-colors break-all"
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
            <div className="bg-card border border-border p-6 sm:p-7">
              <div className="border-b border-border pb-3 mb-6">
                <h3 className="text-base font-semibold text-text">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-muted mt-1">
                  Opens your email client with your name and message prefilled.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-muted mb-2">
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full bg-bg border border-border px-3.5 py-2.5 text-sm text-text placeholder-muted/50 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-muted mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    className="w-full bg-bg border border-border px-3.5 py-2.5 text-sm text-text placeholder-muted/50 focus:border-accent focus:outline-none transition-colors resize-y"
                    placeholder="Write your message here"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors min-h-[44px]"
                >
                  <Send className="w-4 h-4" />
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
