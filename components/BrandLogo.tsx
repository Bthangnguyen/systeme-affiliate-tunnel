import * as React from "react";

export function BrandLogo({
  className = "size-9",
  showText = true,
  textClassName = "text-xl font-extrabold",
}: {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2.5 select-none group">
      {/* 
        Single Unified SVG: 
        - 44x44 viewBox with 4px margin around the 36px circular badge
        - ZERO clipping on top, bottom, left, right
        - Sharp, fluid gradient ring with subtle drop shadow
      */}
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0 transition-transform duration-200 group-hover:scale-105`}
      >
        <defs>
          {/* Outer Ring Gradient */}
          <linearGradient id="brand-ring-gradient" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00A0FF" />
            <stop offset="0.5" stopColor="#6366F1" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>

          {/* Lightning Bolt Fill Gradient */}
          <linearGradient id="brand-bolt-gradient" x1="14" y1="10" x2="30" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00A0FF" />
            <stop offset="0.45" stopColor="#6366F1" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>

          {/* Soft Shadow Filter for the Outer Ring */}
          <filter id="soft-glow" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#6366F1" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Glowing Gradient Ring (Diameter: 36px, centered at 22,22 with 4px outer safety margin) */}
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="url(#brand-ring-gradient)"
          filter="url(#soft-glow)"
        />

        {/* Inner Card Circle (Diameter: 32.5px, creating a crisp 1.75px gradient border) */}
        <circle
          cx="22"
          cy="22"
          r="16.25"
          className="fill-card stroke-background/50"
          strokeWidth="0.5"
        />

        {/* Perfectly Centered Lightning Bolt (24x24 centered inside 44x44 -> offset (10, 10)) */}
        <g transform="translate(10, 10)">
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            fill="url(#brand-bolt-gradient)"
            stroke="#6366F1"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>

      {showText && (
        <span className={`tracking-tight text-foreground ${textClassName}`}>
          Solo<span className="bg-gradient-to-r from-primary via-indigo-600 to-purple-600 bg-clip-text text-transparent">Launch</span>
        </span>
      )}
    </div>
  );
}
