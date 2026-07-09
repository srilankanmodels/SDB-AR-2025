/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useBranding } from "./BrandingContext";

interface SDBLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function SDBLogo({ className = "h-10", iconOnly = false }: SDBLogoProps) {
  const { branding } = useBranding();

  const logoTextSDB = branding?.logoTextSDB ?? "SDB";
  const logoTextBank = branding?.logoTextBank ?? "bank";
  const logoColor = branding?.logoColor ?? "#2B80C5";
  const logoTextColorBank = branding?.logoTextColorBank ?? "#4D4D4F";

  if (branding?.logoImage) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={branding.logoImage}
          alt="SDB Logo"
          referrerPolicy="no-referrer"
          className="h-full w-auto object-contain max-w-full rounded"
          style={{ maxHeight: '100%' }}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SDB Swirl Icon SVG */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Swirl 1: Outermost sweeping oval arc */}
        <path
          d="M 86 50 
             C 86 73, 70 90, 48 90 
             C 24 90, 8 72, 8 48 
             C 8 22, 26 8, 50 8 
             C 68 8, 82 18, 86 34"
          stroke={logoColor}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Swirl 2: Second inner sweeping oval arc */}
        <path
          d="M 76 50 
             C 76 66, 64 78, 48 78 
             C 31 78, 18 64, 18 46 
             C 18 28, 31 18, 48 18 
             C 60 18, 70 26, 73 38"
          stroke={logoColor}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Swirl 3: Third inner sweeping oval arc */}
        <path
          d="M 66 50 
             C 66 59, 58 66, 48 66 
             C 38 66, 28 56, 28 44 
             C 28 32, 38 28, 48 28 
             C 55 28, 61 33, 63 41"
          stroke={logoColor}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Swirl 4: Inner-most wave / central core resembling 'S' shape */}
        <path
          d="M 40 38 
             C 44 38, 48 40, 48 44 
             C 48 48, 42 50, 42 54 
             C 42 58, 46 60, 50 60"
          stroke={logoColor}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Brand Text styled to match the attached image perfectly */}
      {!iconOnly && (
        <div className="flex items-baseline text-left">
          {/* "SDB" in vibrant, bold slab-serif / sans hybrid brand font */}
          <span 
            className="font-sans font-black text-2xl md:text-3xl tracking-tight leading-none"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              color: logoColor
            }}
          >
            {logoTextSDB}
          </span>
          {/* "bank" in a low-contrast, dark slate typewriter / slab-serif font, lowercase */}
          <span 
            className="font-serif font-medium text-xl md:text-2xl leading-none ml-1"
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
