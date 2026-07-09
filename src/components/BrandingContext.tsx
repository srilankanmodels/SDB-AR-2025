/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

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
  chairpersonImage?: string;
  ceoImage?: string;
  boardImages?: Record<string, string>;
  managementImages?: Record<string, string>;
}

interface BrandingContextType {
  branding: BrandingConfig;
  loading: boolean;
  isAdmin: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
  saveBranding: (newConfig: BrandingConfig) => Promise<boolean>;
  error: string | null;
}

const DEFAULT_BRANDING: BrandingConfig = {
  logoTextSDB: "SDB",
  logoTextBank: "bank",
  logoColor: "#2B80C5",
  logoTextColorBank: "#4D4D4F",
  headOfficeImage: "/src/assets/images/sdb_head_office_1783367607149.jpg",
  cooperativeFarmingImage: "/src/assets/images/cooperative_farming_1783367621583.jpg",
  digitalBankingImage: "/src/assets/images/digital_banking_1783367635268.jpg",
  boardroomLeadershipImage: "/src/assets/images/boardroom_leadership_1783367647402.jpg",
  logoImage: "",
  coverImage: "",
  chairpersonImage: "",
  ceoImage: "",
  boardImages: {},
  managementImages: {}
};

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
        const res = await fetch("/api/admin/config");
        if (res.ok) {
          const data = await res.json();
          setBranding(data);
        }

        // Check if token already exists in localStorage
        const token = localStorage.getItem("sdb_admin_token");
        if (token === "sdb_admin_auth_token_2025") {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error("Failed to load branding config:", err);
        setError("Could not load dynamic branding config from the server. Using default branding.");
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  // Admin login function
  const login = async (password: string): Promise<boolean> => {
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
        const data = await res.json();
        setError(data.error || "Login failed.");
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
    if (!token) {
      setError("Unauthorized operation. Log in as administrator first.");
      return false;
    }

    try {
      const res = await fetch("/api/admin/config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newConfig)
      });

      if (res.ok) {
        setBranding(newConfig);
        setError(null);
        return true;
      } else {
        const data = await res.json();
        setError(data.error || "Failed to save configuration.");
        return false;
      }
    } catch (err) {
      setError("Network error. Please verify the backend is running.");
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
