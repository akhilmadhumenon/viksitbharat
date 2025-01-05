export type UserRole = 'government' | 'club_owner' | 'public';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}