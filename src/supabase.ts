import { createClient } from "@supabase/supabase-js";

// Read Supabase credentials from environment or fallback to project configuration
export const SUPABASE_URL =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_SUPABASE_URL) ||
  (typeof process !== "undefined" && process.env && (process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL)) ||
  "https://yaefjxsrsyrrrxwkmslq.supabase.co";

export const SUPABASE_ANON_KEY =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY) ||
  (typeof process !== "undefined" && process.env && (process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY)) ||
  "sb_publishable_JBPJZyfsVo1p9qUGNfVyew_XwCR2GCe";

// Initialize Supabase Client singleton
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export enum OperationType {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  LIST = "list",
  GET = "get",
  WRITE = "write",
}

export interface SupabaseErrorInfo {
  error: string;
  operationType: OperationType;
  table: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
  };
}

export function handleSupabaseError(error: unknown, operationType: OperationType, table: string | null): never {
  const errMessage = error instanceof Error ? error.message : (typeof error === "object" && error !== null && "message" in error) ? String((error as any).message) : String(error);

  const errInfo: SupabaseErrorInfo = {
    error: errMessage,
    operationType,
    table,
    authInfo: {
      userId: null,
      email: null,
    }
  };

  console.error("Supabase Error Detailed Payload:", JSON.stringify(errInfo));
  throw new Error(errMessage);
}
