"use client";

import { useRef } from "react";
import { CONTACT_COPY } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useScrollReveal({
    ref: containerRef,
    childrenSelector: ".reveal-contact",
    stagger: 0.15,
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  });

  const renderIcon = (iconStr: string) => {
    switch(iconStr) {
      case '✉':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        );
      case '✈':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2 11 13"></path>
            <path d="m22 2-7 20-4-9-9-4Z"></path>
          </svg>
        );
      case 'in':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        );
      default:
        return <span>{iconStr}</span>;
    }
  };

  return (
    <section id="contact" ref={containerRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center border-b border-rule/20">
      <div className="reveal-contact">
        <SectionLabel number="05">Contact</SectionLabel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-8">
        
        {/* Left Column */}
        <div className="flex flex-col gap-12">
          <h3 className="reveal-contact font-display text-7xl md:text-[6rem] lg:text-[7.5rem] leading-none text-paper uppercase">
            {CONTACT_COPY.headline.replace("THING.", "")}
            <span className="text-ember block lg:inline">THING.</span>
          </h3>
          
          <p className="reveal-contact text-xl text-muted font-light leading-relaxed max-w-lg border-l-2 border-rule/30 pl-6">
            {CONTACT_COPY.body}
          </p>
        </div>

        {/* Right Column: Contact Cards */}
        <div ref={rightColumnRef} className="flex flex-col gap-6 lg:justify-center">
          {CONTACT_COPY.links.map((link, i) => (
            <a 
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect via ${link.label}`}
              className="reveal-contact group flex flex-col md:flex-row items-start md:items-center justify-between p-8 border border-rule/20 hover:border-ember transition-colors duration-500 bg-ink hover:bg-rule/5 relative overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ember/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />

              <div className="flex items-center gap-6 relative z-10 w-full mb-6 md:mb-0">
                <div className="w-12 h-12 rounded-full border border-rule/30 flex items-center justify-center text-rule group-hover:text-ember group-hover:border-ember transition-colors">
                  {renderIcon(link.icon)}
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-paper transition-colors">
                    {link.label}
                  </span>
                  <span className="font-sans text-lg md:text-xl text-paper group-hover:text-ember-warm transition-colors mt-1">
                    {link.value}
                  </span>
                </div>
              </div>

              {/* Reveal Arrow */}
              <div className="relative z-10 hidden md:flex opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-ember pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
