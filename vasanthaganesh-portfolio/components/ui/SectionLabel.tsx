"use client";

import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string; // Additional classes for the text
  number?: string;
}

export default function SectionLabel({ children, className = "", number }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-6 w-full mb-16 overflow-hidden">
      {number && (
        <span className="font-mono text-sm tracking-widest text-ember/70">
          [{number}]
        </span>
      )}
      <h2 className={`font-mono text-sm tracking-[0.2em] uppercase text-muted whitespace-nowrap ${className}`}>
        {children}
      </h2>
      <div className="h-[1px] bg-rule/30 w-full" />
    </div>
  );
}
