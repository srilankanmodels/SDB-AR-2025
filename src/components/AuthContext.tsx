import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<User | null>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Monitor auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    }, (error) => {
      console.error("Auth state change error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Google Login popup
  const signInWithGoogle = async (): Promise<User | null> => {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      // Enforce select_account prompt so they can switch accounts easily if needed
      provider.setCustomParameters({ prompt: "select_account" });
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.error("Google sign in error:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      setLoading(true);
      await firebaseSignOut(auth);
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
