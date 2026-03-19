"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import clsx from "clsx";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Intersection Observer for active section spy
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is in middle of screen
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all logical sections
    NAV_LINKS.forEach(link => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav 
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-6 flex justify-between items-center",
        isScrolled ? "bg-ink/80 backdrop-blur-md border-b border-rule/10 py-4" : "bg-transparent"
      )}
    >
      <a href="#hero" aria-label="Back to top" className="font-display text-4xl text-ember hover:text-ember-warm transition-colors tracking-wide">
        VG
      </a>

      <ul className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a 
              href={link.href}
              className={clsx(
                "font-mono text-[0.72rem] uppercase tracking-[0.15em] transition-colors",
                activeSection === link.href.substring(1) 
                  ? "text-ember" 
                  : "text-muted hover:text-paper"
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Mobile menu button could go here, omitting for simplicity in v1 unless needed */}
      <div className="md:hidden" role="button" aria-label="Open mobile menu" tabIndex={0}>
        <span className="font-mono text-xs text-ember">MENU</span>
      </div>
    </nav>
  );
}
