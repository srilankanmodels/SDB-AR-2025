/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import sdbLogoTransparent from "../assets/images/sdb_logo_transparent.png";
import { useBranding } from "./BrandingContext";

interface SDBLogoProps {
  className?: string;
  iconOnly?: boolean;
  inverted?: boolean;
}

export default function SDBLogo({ className = "h-9", iconOnly = false, inverted = false }: SDBLogoProps) {
  const { branding } = useBranding();
  
  // Use uploaded official transparent logo by default, or branding override if custom uploaded
  const logoSrc = branding?.logoImage || sdbLogoTransparent;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="SANASA Development Bank PLC - SDB bank"
        referrerPolicy="no-referrer"
        className={`h-full w-auto object-contain max-w-full transition-all duration-300 ${
          inverted ? "brightness-0 invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]" : ""
        }`}
        style={{ maxHeight: "100%" }}
        loading="eager"
      />
    </div>
  );
}

