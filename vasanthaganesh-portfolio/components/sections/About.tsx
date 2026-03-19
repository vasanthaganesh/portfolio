"use client";

import { useRef } from "react";
import { ABOUT_COPY } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  
  useScrollReveal({
    ref: containerRef,
    childrenSelector: ".reveal-child",
    stagger: 0.15,
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  });

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="reveal-child">
        <SectionLabel number="01">About</SectionLabel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Philosophy & Manifesto */}
        <div className="space-y-12">
          <div className="reveal-child space-y-4">
            <h3 className="text-4xl md:text-5xl font-title text-paper">
              {ABOUT_COPY.headline.replace("alive.", "")}
              <span className="text-ember italic">alive.</span>
            </h3>
          </div>

          <div className="reveal-child space-y-6 text-muted font-sans text-lg md:text-xl leading-relaxed">
            {ABOUT_COPY.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="reveal-child bg-ink border border-rule/20 p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-ember-warm transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <div className="font-mono text-sm md:text-base text-paper/80 leading-loose space-y-2">
              {ABOUT_COPY.manifesto.map((line, i) => {
                const parts = line.split("_");
                return (
                  <div key={i} className={`${i === ABOUT_COPY.manifesto.length - 1 ? 'text-ember' : ''}`}>
                    {parts[0]}
                    {parts.length > 1 && <span className="animate-pulse">_</span>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Vitals */}
        <div className="reveal-child pt-12 lg:pt-0">
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-8 pb-4 border-b border-rule/20">
            Vital Statistics
          </h4>
          
          <div className="space-y-10">
            {ABOUT_COPY.vitals.map((vital, i) => (
              <div key={i} className="flex flex-col space-y-2 group">
                <span className="font-mono text-xs uppercase tracking-widest text-ember/80">
                  {vital.label}
                </span>
                <span className="font-display text-4xl text-paper group-hover:text-ember-warm transition-colors">
                  {vital.value}
                </span>
                <span className="font-sans text-sm text-muted">
                  {vital.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
