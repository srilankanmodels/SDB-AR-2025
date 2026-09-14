import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "../supabase";

export interface AppUser {
  id: string;
  uid: string; // Compatibility alias with previous code referencing user.uid
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Monitor Supabase auth state changes
  useEffect(() => {
    // 1. Check initial active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const u = session.user;
        setUser({
          id: u.id,
          uid: u.id,
          email: u.email || null,
          displayName: (u.user_metadata?.full_name as string) || (u.user_metadata?.name as string) || (u.email ? u.email.split("@")[0] : null),
          photoURL: (u.user_metadata?.avatar_url as string) || (u.user_metadata?.picture as string) || null,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    }).catch(err => {
      console.error("Error loading Supabase auth session:", err);
      setLoading(false);
    });

    // 2. Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const u = session.user;
        setUser({
          id: u.id,
          uid: u.id,
          email: u.email || null,
          displayName: (u.user_metadata?.full_name as string) || (u.user_metadata?.name as string) || (u.email ? u.email.split("@")[0] : null),
          photoURL: (u.user_metadata?.avatar_url as string) || (u.user_metadata?.picture as string) || null,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Google Login OAuth
  const signInWithGoogle = async (): Promise<void> => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) {
        console.error("Google sign in error:", error);
      }
    } catch (error) {
      console.error("Google sign in error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      setLoading(true);
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Check if current authenticated user has administrative credentials
  const isAdmin = user !== null && user.email === "srilankanmodels@gmail.com";

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
