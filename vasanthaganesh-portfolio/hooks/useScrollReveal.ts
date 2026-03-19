"use client";

import { useEffect, RefObject, useMemo } from "react";
import { gsap } from "@/lib/gsap";

interface UseScrollRevealProps {
  ref: RefObject<HTMLElement | null>;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  triggerContext?: string; // Optional selector or config
  start?: string;
  scrub?: boolean | number;
  stagger?: number;
  childrenSelector?: string;
}

export const useScrollReveal = ({
  ref,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
  start = "top 80%",
  scrub,
  stagger,
  childrenSelector
}: UseScrollRevealProps) => {

  const depsStr = JSON.stringify({ from, to, start, scrub, stagger, childrenSelector });

  useEffect(() => {
    if (!ref.current) return;
    
    const ctx = gsap.context(() => {
      const target = childrenSelector ? gsap.utils.toArray(childrenSelector) : ref.current;
      
      gsap.fromTo(target, 
        { ...from }, 
        {
          ...to,
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start,
            scrub,
            toggleActions: scrub ? undefined : "play none none reverse",
          }
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, depsStr]);
};
