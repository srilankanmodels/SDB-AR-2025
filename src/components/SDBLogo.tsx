/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Logo Component - Pure Vector SVG & Dynamic Brand Typography
 * Uses branding parameters: logoTextSDB, logoTextBank, logoColor, logoTextColorBank
 */

import { useState } from "react";
import { useBranding } from "./BrandingContext";

interface SDBLogoProps {
  className?: string;
  iconOnly?: boolean;
  inverted?: boolean;
}

export default function SDBLogo({ className = "h-9", iconOnly = false, inverted = false }: SDBLogoProps) {
  const { branding } = useBranding();
  const [imgError, setImgError] = useState(false);

  const logoTextSDB = branding?.logoTextSDB || "SDB";
  const logoTextBank = branding?.logoTextBank || "bank";
  const logoColor = inverted ? "#FFFFFF" : (branding?.logoColor || "#2B80C5");
  const logoTextColorBank = inverted ? "#F1F5F9" : (branding?.logoTextColorBank || "#4D4D4F");

  // Determine official logo source
  const officialLogo = iconOnly 
    ? "/assets/images/sdb_bank_icon.png" 
    : "/assets/images/sdb_bank_logo.png";

  const activeSrc = iconOnly 
    ? (branding?.logoIcon || officialLogo)
    : (branding?.logoImage || officialLogo);

  // Render official image logo by default
  if (!imgError && activeSrc) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={activeSrc}
          srcSet={
            activeSrc === "/assets/images/sdb_bank_logo.png"
              ? "/assets/images/sdb_bank_logo.png 1x, /assets/images/sdb_bank_logo@2x.png 2x, /assets/images/sdb_bank_logo@3x.png 3x"
              : activeSrc === "/assets/images/sdb_bank_icon.png"
              ? "/assets/images/sdb_bank_icon.png 1x, /assets/images/sdb_bank_icon@2x.png 2x"
              : undefined
          }
          alt="SANASA Development Bank PLC - SDB bank"
          onError={() => setImgError(true)}
          className={`h-full w-auto object-contain max-w-full transition-all duration-300 ${
            inverted ? "brightness-0 invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]" : ""
          }`}
          style={{ maxHeight: "100%" }}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Authentic SDB Swirl Spiral SVG Icon */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto shrink-0 transition-colors duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outermost sweeping arc */}
        <path
          d="M 88 50 C 88 74 71 92 48 92 C 23 92 6 74 6 50 C 6 24 24 6 50 6 C 69 6 84 17 88 34"
          stroke={logoColor}
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Second inner sweeping arc */}
        <path
          d="M 78 50 C 78 67 65 80 48 80 C 30 80 16 66 16 48 C 16 29 30 16 48 16 C 61 16 72 25 75 38"
          stroke={logoColor}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Third inner sweeping arc */}
        <path
          d="M 68 50 C 68 60 59 68 48 68 C 37 68 27 58 27 46 C 27 34 37 26 48 26 C 56 26 63 32 65 41"
          stroke={logoColor}
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Center core 'S' wave */}
        <path
          d="M 40 37 C 45 37 50 40 50 45 C 50 50 41 52 41 57 C 41 62 47 64 52 64"
          stroke={logoColor}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Typography using branding related properties */}
      {!iconOnly && (
        <div className="flex items-baseline text-left font-sans select-none tracking-tight">
          <span 
            className="font-black text-2xl md:text-3xl leading-none transition-colors duration-300"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              color: logoColor
            }}
          >
            {logoTextSDB}
          </span>
          <span 
            className="font-serif font-medium text-xl md:text-2xl leading-none ml-1 tracking-normal transition-colors duration-300"
            style={{ 
              fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
              color: logoTextColorBank
            }}
          >
            {logoTextBank}
          </span>
        </div>
      )}
    </div>
  );
}
