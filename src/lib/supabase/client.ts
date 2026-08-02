"use client";

import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv } from "@/lib/env";

export const createClient = () => {
  const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY } = getSupabaseEnv();
  return createBrowserClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
};
