export type UserRole = 'admin' | 'faculty' | 'student';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  department?: string;
  preferences: {
    categories: string[];
    priorities: string[];
    notifications: boolean;
  };
}