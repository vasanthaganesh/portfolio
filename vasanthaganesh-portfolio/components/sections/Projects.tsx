"use client";

import { useRef, useState } from "react";
import { PROJECTS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import clsx from "clsx";

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  useScrollReveal({
    ref: containerRef,
    childrenSelector: ".reveal-project",
    stagger: 0.15,
    from: { opacity: 0, x: -30 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
  });

  return (
    <section id="projects" ref={containerRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="reveal-project">
        <SectionLabel number="03">Selected Work</SectionLabel>
      </div>

      <div className="reveal-project pb-16">
        <h3 className="font-display text-5xl md:text-7xl text-paper">
          PROUDEST BUILDS.
        </h3>
      </div>

      <div className="flex flex-col border-t border-rule/20">
        {PROJECTS.map((project, i) => (
          <article 
            key={project.id}
            className="reveal-project group relative border-b border-rule/20 cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Hover Background Tint */}
            <div 
              className={clsx(
                "absolute inset-0 bg-ember/5 transition-opacity duration-300 pointer-events-none",
                hoveredProject === project.id ? "opacity-100" : "opacity-0"
              )}
            />
            
            <div className="py-12 md:py-16 px-4 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center relative z-10 transition-transform duration-500 group-hover:translate-x-4">
              
              <div className="flex items-center gap-6 md:gap-12 w-full lg:w-1/3 shrink-0">
                <span className="font-mono text-2xl md:text-4xl text-rule/40 group-hover:text-ember transition-colors">
                  {project.number}
                </span>
                <h4 className="font-serif text-2xl md:text-3xl text-paper tracking-tight">
                  {project.title}
                </h4>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono uppercase tracking-widest text-ember-warm/80">
                      {tag}{i < project.tags.length - 1 && " / "}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="hidden lg:flex flex-1 justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-8 group-hover:translate-x-0">
                <div className="w-12 h-12 rounded-full border border-ember flex items-center justify-center text-ember">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
