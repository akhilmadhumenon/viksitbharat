import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

// Demo mode flag
const isDemoMode = !import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create client only if credentials are available
export const supabase = isDemoMode ? null : createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Demo data handlers
export async function demoInsert(table: string, data: any) {
  if (!isDemoMode) {
    return supabase?.from(table).insert(data);
  }
  console.log('Demo mode: Insert into', table, data);
  return { data: null, error: null };
}

export async function demoSelect(table: string) {
  if (!isDemoMode) {
    return supabase?.from(table).select();
  }
  console.log('Demo mode: Select from', table);
  return { data: [], error: null };
}