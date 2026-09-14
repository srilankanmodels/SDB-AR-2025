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

export const DATABASE_SDB_LOGO = "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/logo/sdb_logo_transparent.png";

export default function SDBLogo({ className = "h-9", iconOnly = false, inverted = false }: SDBLogoProps) {
  const { branding } = useBranding();
  
  // Use official transparent logo from database storage by default, or local fallback
  const logoSrc = branding?.logoImage || DATABASE_SDB_LOGO || sdbLogoTransparent;

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

