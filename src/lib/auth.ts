import { supabase } from './supabase';
import { demoUsers } from './demoUsers';
import { User } from '../types/auth';

export async function signIn(email: string, password: string): Promise<{ user: User | null; error: string | null }> {
  // Find demo user
  const demoUser = demoUsers.find(u => u.email === email && u.password === password);
  
  if (!demoUser) {
    return { user: null, error: 'Invalid credentials' };
  }

  // In a real app, this would be handled by Supabase authentication
  const user: User = {
    id: `demo-${demoUser.role}`,
    email: demoUser.email,
    name: demoUser.name,
    role: demoUser.role as 'government' | 'club_owner'
  };

  return { user, error: null };
}