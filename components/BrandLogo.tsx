import * as React from "react";

export function BrandLogo({ className = "size-8", showText = true, textClassName = "text-lg font-bold" }: {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className={`relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-sm ${className}`}>
        <div className="size-full bg-card rounded-[11px] flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-primary"
          >
            {/* Elegant geometric prism / apex bolt shape */}
            <path
              d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
              fill="url(#brand-grad)"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="brand-grad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00A0FF" />
                <stop offset="0.5" stopColor="#6366F1" />
                <stop offset="1" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      {showText && (
        <span className={`tracking-tight text-foreground ${textClassName}`}>
          Solo<span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">Launch</span>
        </span>
      )}
    </div>
  );
}
