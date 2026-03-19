"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device supports hover
    if (typeof window === "undefined" || !window.matchMedia("(hover: hover)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    
    if (!dot || !ring) return;

    // Set initial opacity and centering
    gsap.set([dot, ring], { 
      opacity: 0, 
      xPercent: -50, 
      yPercent: -50 
    });

    const xDot = gsap.quickTo(dot, "x", { duration: 0, ease: "none" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0, ease: "none" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.06, ease: "power2.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.06, ease: "power2.out" });

    const onMouseMove = (e: MouseEvent) => {
      // Show cursor cleanly
      if (dot.style.opacity === "0") {
        gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
      }

      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const updateHoverState = () => {
      const interactables = document.querySelectorAll('a, button, input, [role="button"], .hover-target');
      
      interactables.forEach(el => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    
    // Quick timeout to let DOM render
    setTimeout(updateHoverState, 1000);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) {
    return null;
  }

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-[8px] h-[8px] bg-ember rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{ 
          transform: `scale(${isHovering ? 1.5 : 1})`,
          transition: "transform 0.15s ease-out"
        }}
      />
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-[36px] h-[36px] border border-ember opacity-50 rounded-full pointer-events-none z-[99]"
        style={{ 
          transform: `scale(${isHovering ? 1.4 : 1})`,
          transition: "transform 0.2s ease-out"
        }}
      />
    </>
  );
}
