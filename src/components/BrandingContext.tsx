/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "../supabase";
import { CORPORATE_MANAGEMENT_IMAGE_MAP, getSupabaseImageUrl } from "../utils/supabasePersonnel";

export interface BrandingConfig {
  logoTextSDB: string;
  logoTextBank: string;
  logoColor: string;
  logoTextColorBank: string;
  headOfficeImage: string;
  cooperativeFarmingImage: string;
  digitalBankingImage: string;
  boardroomLeadershipImage: string;
  logoImage?: string;
  coverImage?: string;
  coverVideo?: string;
  chairpersonImage?: string;
  ceoImage?: string;
  boardImages?: Record<string, string>;
  managementImages?: Record<string, string>;
  updatedAt?: string;
}

// Generate default Supabase management URLs
const DEFAULT_MANAGEMENT_IMAGES: Record<string, string> = Object.entries(CORPORATE_MANAGEMENT_IMAGE_MAP).reduce(
  (acc, [name, filename]) => {
    acc[name] = getSupabaseImageUrl(filename);
    return acc;
  },
  {} as Record<string, string>
);

const DEFAULT_BRANDING: BrandingConfig = {
  logoTextSDB: "SDB",
  logoTextBank: "bank",
  logoColor: "#2B80C5",
  logoTextColorBank: "#4D4D4F",
  headOfficeImage: "/src/assets/images/sdb_head_office_1783367607149.jpg",
  cooperativeFarmingImage: "/src/assets/images/cooperative_farming_1783367621583.jpg",
  digitalBankingImage: "/src/assets/images/digital_banking_1783367635268.jpg",
  boardroomLeadershipImage: "/src/assets/images/boardroom_leadership_1783367647402.jpg",
  logoImage: "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/logo/sdb_logo_transparent.png",
  coverImage: "",
  coverVideo: "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/mainvideo.mp4",
  chairpersonImage: "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/chairperson%20potrait/EUK05956.png",
  ceoImage: "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/images/Kapila%20Ariyaratne.png",
  boardImages: {
    "01": "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/chairperson%20potrait/EUK05956.png",
    "02": "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/images/Kapila%20Ariyaratne.png",
  },
  managementImages: DEFAULT_MANAGEMENT_IMAGES
};

interface BrandingContextType {
  branding: BrandingConfig;
  loading: boolean;
  isAdmin: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
  saveBranding: (newConfig: BrandingConfig) => Promise<boolean>;
  error: string | null;
}

const BrandingContext = createContext<BrandingContextType | undefined>(undefined);

export function BrandingProvider({ children }: { children: ReactNode }) {
  const [branding, setBranding] = useState<BrandingConfig>(DEFAULT_BRANDING);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Load branding config and login state on mount
  useEffect(() => {
    async function init() {
      try {
        setLoading(true);

        // Try reading from Supabase
        let supabaseConfig: BrandingConfig | null = null;
        try {
          const { data, error: sbErr } = await supabase
            .from("branding")
            .select("config, updated_at")
            .eq("id", "global")
            .maybeSingle();

          if (!sbErr && data?.config) {
            supabaseConfig = data.config as BrandingConfig;
          }
        } catch (err) {
          console.warn("Supabase branding fetch failed:", err);
        }

        // Fetch local server config
        let localConfig: BrandingConfig | null = null;
        try {
          const res = await fetch("/api/admin/config");
          if (res.ok) {
            localConfig = await res.json();
          }
        } catch (e) {
          console.warn("Local config fetch failed:", e);
        }

        // Fetch localStorage config for robust persistent client-side fallback (essential for Vercel/static-only hosting)
        let localStoreConfig: BrandingConfig | null = null;
        try {
          const stored = localStorage.getItem("sdb_branding_config");
          if (stored) {
            localStoreConfig = JSON.parse(stored);
          }
        } catch (e) {
          console.warn("Local storage config load failed:", e);
        }

        // Find the newest config based on updatedAt timestamp
        let newestConfig = DEFAULT_BRANDING;
        let maxTime = 0;

        if (supabaseConfig) {
          const sbTime = supabaseConfig.updatedAt ? new Date(supabaseConfig.updatedAt).getTime() : 0;
          if (sbTime > maxTime) {
            maxTime = sbTime;
            newestConfig = supabaseConfig;
          }
        }

        if (localConfig) {
          const localTime = localConfig.updatedAt ? new Date(localConfig.updatedAt).getTime() : 0;
          if (localTime > maxTime) {
            maxTime = localTime;
            newestConfig = localConfig;
          }
        }

        if (localStoreConfig) {
          const storeTime = localStoreConfig.updatedAt ? new Date(localStoreConfig.updatedAt).getTime() : 0;
          if (storeTime > maxTime) {
            maxTime = storeTime;
            newestConfig = localStoreConfig;
          }
        }

        setBranding(newestConfig);

        // Check if token or admin session already exists
        const token = localStorage.getItem("sdb_admin_token");
        const { data: { session } } = await supabase.auth.getSession();
        if (token === "sdb_admin_auth_token_2025" || (session?.user?.email === "srilankanmodels@gmail.com")) {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error("Failed to load branding config:", err);
        setError("Could not load dynamic branding config. Using default branding.");
      } finally {
        setLoading(false);
      }
    }
    init();

    // Set up auth observer for Google login as admin
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user && session.user.email === "srilankanmodels@gmail.com") {
        setIsAdmin(true);
      } else {
        const token = localStorage.getItem("sdb_admin_token");
        if (!token) {
          setIsAdmin(false);
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Admin login function
  const login = async (password: string): Promise<boolean> => {
    // Elegant client-side validation bypass for "sdb2025" to support static-only deployments like Vercel
    if (password === "sdb2025") {
      localStorage.setItem("sdb_admin_token", "sdb_admin_auth_token_2025");
      setIsAdmin(true);
      setError(null);
      
      // Attempt to ping backend route silently in background without blocking login flow
      fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "admin", password })
      }).catch(() => {});

      return true;
    }

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "admin", password })
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("sdb_admin_token", data.token);
        setIsAdmin(true);
        setError(null);
        return true;
      } else {
        let errorMsg = "Login failed.";
        try {
          const data = await res.json();
          errorMsg = data.error || errorMsg;
        } catch (e) {}
        setError(errorMsg);
        return false;
      }
    } catch (err) {
      setError("Server communication error during login.");
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("sdb_admin_token");
    setIsAdmin(false);
  };

  // Save changes back to server
  const saveBranding = async (newConfig: BrandingConfig): Promise<boolean> => {
    const token = localStorage.getItem("sdb_admin_token");
    const { data: { session } } = await supabase.auth.getSession();
    const isSupabaseAdmin = session?.user?.email === "srilankanmodels@gmail.com";

    if (!token && !isSupabaseAdmin) {
      setError("Unauthorized operation. Log in as administrator first.");
      return false;
    }

    try {
      const configWithTimestamp = {
        ...newConfig,
        updatedAt: new Date().toISOString()
      };

      // 1. Attempt to write to Supabase branding table
      try {
        await supabase.from("branding").upsert({
          id: "global",
          config: configWithTimestamp,
          updated_at: new Date().toISOString()
        });
      } catch (supabaseErr) {
        console.warn("Supabase save branding skipped or denied:", supabaseErr);
      }

      // 2. Write to localStorage for robust client-side persistent fallback on Vercel/static-only hosting
      try {
        localStorage.setItem("sdb_branding_config", JSON.stringify(configWithTimestamp));
      } catch (lsErr) {
        console.warn("Failed to write to localStorage:", lsErr);
      }

      // 3. Also write to local server API for fallback stability if local token is available
      if (token) {
        try {
          await fetch("/api/admin/config", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(configWithTimestamp)
          });
        } catch (serverErr) {
          console.warn("Local API server save config failed (expected in Vercel/static-only hosting):", serverErr);
        }
      }

      setBranding(configWithTimestamp);
      setError(null);
      return true;
    } catch (err) {
      console.error("Save config error:", err);
      setError("Failed to save configuration.");
      return false;
    }
  };

  return (
    <BrandingContext.Provider value={{ branding, loading, isAdmin, login, logout, saveBranding, error }}>
      {children}
    </BrandingContext.Provider>
  );
}

export function useBranding() {
  const context = useContext(BrandingContext);
  if (!context) {
    throw new Error("useBranding must be used within a BrandingProvider");
  }
  return context;
}
