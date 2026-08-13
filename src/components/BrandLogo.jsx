import React from 'react';

export default function BrandLogo({ size = 32, className = "", isDark = false }) {
  const goldColor = "#B08D67";
  const darkColor = "#1C1C1C";
  const strokeColor = isDark ? "#FFFFFF" : goldColor;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Diamond-Arch Frame */}
      <rect 
        x="15" 
        y="15" 
        width="70" 
        height="70" 
        rx="35"
        stroke={strokeColor} 
        strokeWidth="2.5" 
        strokeOpacity="0.8"
      />
      <rect 
        x="22" 
        y="22" 
        width="56" 
        height="56" 
        rx="28"
        stroke={strokeColor} 
        strokeWidth="1" 
        strokeDasharray="3 3"
        strokeOpacity="0.5"
      />

      {/* Hijab Arch Flow Silhouette */}
      <path 
        d="M 30 70 C 30 45, 50 32, 50 32 C 50 32, 70 45, 70 70" 
        stroke={strokeColor} 
        strokeWidth="2" 
        strokeLinecap="round"
      />

      {/* Central Serif Monogram M */}
      <text 
        x="50" 
        y="62" 
        fontFamily="'Cormorant Garamond', 'Playfair Display', Georgia, serif" 
        fontSize="34" 
        fontWeight="600" 
        fill={strokeColor} 
        textAnchor="middle" 
        letterSpacing="0"
      >
        M
      </text>

      {/* Sparkle Diamond Crown Accent */}
      <polygon 
        points="50,18 53,25 60,25 54,29 56,36 50,31 44,36 46,29 40,25 47,25" 
        fill={strokeColor}
      />
    </svg>
  );
}
