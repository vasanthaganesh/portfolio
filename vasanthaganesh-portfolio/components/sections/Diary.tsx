"use client";

import { useRef, useState } from "react";
import { DIARY_ENTRIES } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import clsx from "clsx";
import { Compass, Gamepad2, Settings } from "lucide-react";

type TabKey = 'craft' | 'games' | 'work';
const TABS: { key: TabKey, label: string }[] = [
  { key: 'craft', label: 'On Craft' },
  { key: 'games', label: 'On Games & Art' },
  { key: 'work', label: 'On Work' }
];

export default function Diary() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<TabKey>('craft');
  
  useScrollReveal({
    ref: containerRef,
    childrenSelector: ".reveal-diary",
    stagger: 0.2,
    from: { opacity: 0, scale: 0.95, y: 50 },
    to: { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" }
  });

  const activeIndex = TABS.findIndex(t => t.key === activeTab);
  const nextTab = () => {
    setActiveTab(TABS[(activeIndex + 1) % TABS.length].key);
  };

  const getDoodle = (key: TabKey) => {
    switch (key) {
      case 'craft': return <Compass className="w-16 h-16 text-muted/20 opacity-50 absolute bottom-12 right-12 -rotate-12" strokeWidth={1} />;
      case 'games': return <Gamepad2 className="w-16 h-16 text-muted/20 opacity-50 absolute bottom-12 right-12 rotate-12" strokeWidth={1} />;
      case 'work': return <Settings className="w-16 h-16 text-muted/20 opacity-50 absolute bottom-12 right-12" strokeWidth={1} />;
    }
  };

  return (
    <section id="diary" ref={containerRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="reveal-diary">
        <SectionLabel number="04">Journal</SectionLabel>
      </div>

      <div className="reveal-diary w-full max-w-5xl mx-auto relative mt-8">
        {/* Notebook Tabs */}
          <div className="flex absolute -top-12 sm:-top-14 right-4 sm:right-12 gap-1 sm:gap-2 z-0" role="tablist" aria-label="Diary categories">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              aria-controls={`panel-${tab.key}`}
              id={`tab-${tab.key}`}
              onClick={() => setActiveTab(tab.key)}
              className={clsx(
                "px-4 sm:px-6 py-3 sm:py-4 rounded-t-xl font-serif text-sm sm:text-base italic transition-all duration-300 transform origin-bottom border border-b-0",
                activeTab === tab.key 
                  ? "bg-[#f5f0e4] text-ink z-10 scale-105 border-rule/30" 
                  : "bg-[#e5dfd1] text-muted z-0 hover:bg-[#efe9dc] border-transparent hover:-translate-y-1"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Notebook Body */}
        <div className="relative bg-[#f5f0e4] rounded-r-2xl w-full min-h-[600px] shadow-2xl z-10 p-8 sm:p-12 md:p-16 flex border-l-4 border-l-rule/50">
          
          {/* Spirals */}
          <div className="absolute top-0 bottom-0 left-2 w-4 flex flex-col justify-evenly py-8">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="w-8 h-4 border-[3px] border-ink/40 rounded-full -ml-4 bg-transparent shadow-[1px_1px_1px_rgba(0,0,0,0.1)] opacity-70" />
            ))}
          </div>

          {/* Paper Content Area */}
          <div 
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="flex-1 ml-6 relative h-full flex flex-col"
            style={{
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, rgba(0,0,0,0.05) 28px)',
              backgroundSize: '100% 28px',
              backgroundPosition: '0 4px',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {/* Title */}
            <h3 className="font-serif italic text-3xl md:text-5xl text-ink mb-12">
              {TABS[activeIndex].label}
            </h3>

            {/* Entries */}
            <div className="flex-1 flex flex-col gap-12 text-ink">
              {DIARY_ENTRIES[activeTab].map((entry, i) => (
                <article key={i} className="group cursor-default">
                  <span className="font-mono text-xs uppercase tracking-widest text-ember font-bold mb-2 block">
                    {entry.date}
                  </span>
                  <h4 className="font-display text-2xl md:text-3xl text-ink leading-tight group-hover:text-ember-dark transition-colors">
                    {entry.title}
                  </h4>
                  {/* Decorative line under title */}
                  <div className="w-12 h-0.5 bg-ember-warm/30 mt-4 group-hover:w-full transition-all duration-500" />
                  <p className="mt-4 text-sm font-sans text-ink/70 leading-relaxed">
                    {entry.content}
                  </p>
                </article>
              ))}
            </div>

            {/* Turn Page Button */}
            <div className="mt-12 flex justify-end">
              <button 
                onClick={nextTab}
                aria-label="Turn to next diary page"
                className="font-mono text-sm uppercase tracking-widest text-ink/60 hover:text-ember transition-colors flex items-center gap-2 group"
              >
                Turn page 
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>

            {/* Decorative Doodle */}
            {getDoodle(activeTab)}
          </div>
        </div>
      </div>
    </section>
  );
}
