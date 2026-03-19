"use client";

import { useRef } from "react";
import { SKILLS_COPY } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
  // Reveal intro and tags
  useScrollReveal({
    ref: containerRef,
    childrenSelector: ".reveal-skill",
    stagger: 0.1,
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
  });

  // Reveal cards with a separate trigger
  useScrollReveal({
    ref: cardsRef,
    childrenSelector: ".reveal-card",
    stagger: 0.15,
    from: { opacity: 0, scale: 0.95, y: 40 },
    to: { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.2)" },
    start: "top 85%"
  });

  return (
    <section id="skills" ref={containerRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="reveal-skill">
        <SectionLabel number="02">Skills & Tools</SectionLabel>
      </div>

      <div className="space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Headline */}
          <div className="lg:col-span-5 reveal-skill">
            <h3 className="font-display text-7xl md:text-8xl xl:text-[7rem] leading-none text-ember text-left">
              {SKILLS_COPY.headline}
            </h3>
          </div>

          {/* Intro Text & Tags */}
          <div className="lg:col-span-7 space-y-8 reveal-skill">
            <p className="text-xl md:text-2xl font-light text-paper leading-relaxed border-l-2 border-rule/30 pl-6 lg:pl-8 py-2">
              {SKILLS_COPY.intro}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {SKILLS_COPY.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 border border-rule/20 hover:border-ember text-xs font-mono uppercase tracking-wider text-muted hover:text-paper transition-colors rounded-full cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 border-t border-rule/20">
          {SKILLS_COPY.cards.map((card, i) => (
            <article 
              key={i} 
              className="reveal-card group p-8 border border-rule/10 bg-ink hover:bg-rule/5 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity duration-500 text-6xl text-ember-warm mix-blend-screen pointer-events-none" aria-hidden="true" />
              
              <div className="mb-8 font-mono text-3xl text-ember leading-none">
                {card.icon}
              </div>
              
              <h4 className="font-mono text-base uppercase tracking-widest text-paper mb-4">
                {card.title}
              </h4>
              
              <p className="text-sm font-sans text-muted leading-relaxed">
                {card.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-ember transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 transform-origin-left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
