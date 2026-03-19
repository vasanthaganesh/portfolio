"use client";

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import Hero from '@/components/ui/animated-shader-hero';
import { HERO_COPY } from '@/lib/constants';

export default function HeroReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Initial states
      gsap.set('.light-bloom', { opacity: 0 });
      gsap.set('.bg-name', { 
        x: 100, 
        xPercent: -50, 
        yPercent: -50, 
        opacity: 0 
      });
      gsap.set('.hero-tagline', { opacity: 0 });
      gsap.set('.scroll-indicator', { opacity: 0 });

      // Animation sequence
      // 1. t=0.0s — Shader is rendering from initialization
      // 2. t=0.4s — Deep crimson-red radial light blooms
      tl.to('.light-bloom', { opacity: 0.8, duration: 1.2, ease: "power2.inOut" }, 0.4);
      
      // 3. t=1.0s — Giant background text "VASANTHAGANESH" slides in (adjusted timing since no photo)
      tl.to('.bg-name', { x: 0, opacity: 0.25, duration: 1.2, ease: "power3.out" }, 1.0);
      
      // 5. t=2.0s — Italic tagline sweeps in (we use fade since we don't have premium SplitText)
      tl.to('.hero-tagline', { opacity: 1, duration: 0.8, ease: "power2.out" }, 2.0);
      
      // 6. t=2.6s — Cinematic hold. Scroll indicator pulses.
      tl.to('.scroll-indicator', { opacity: 1, duration: 0.6 }, 2.6);

      // Pulse animation for scroll indicator
      gsap.to('.scroll-pulse', {
        y: 20,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power1.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative w-full h-screen border-b border-rule/20">
      <Hero
        headline={{ line1: HERO_COPY.name.join('') }}
        subtitle={HERO_COPY.tagline}
      >
        {/* Deep Crimson-Red Radial Light Bloom */}
        <div className="light-bloom absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_bottom,rgba(200,30,10,0.6)_0%,transparent_60%)] pointer-events-none mix-blend-screen z-0" />

        {/* Giant Background Text */}
        <div className="bg-name absolute top-1/2 left-1/2 w-full text-center z-[5] pointer-events-none">
          <span className="font-display text-[clamp(4rem,15vw,20rem)] leading-none text-paper whitespace-nowrap">
            {HERO_COPY.name.join('')}
          </span>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none">
          <span className="font-mono text-xs text-muted uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-rule/30 relative overflow-hidden">
            <div className="scroll-pulse absolute top-0 left-0 w-full h-1/2 bg-ember-warm"></div>
          </div>
        </div>
      </Hero>
    </section>
  );
}
