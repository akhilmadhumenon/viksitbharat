import { create } from 'zustand';
import { User } from '../types/auth';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void; // Add a logout method
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }), // Clear user state
}));
