import { User } from 'firebase/auth';

// Auth ile ilgili tipler
export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface AuthContextType extends AuthState {
  // Ek context özellikleri gelecekte buraya eklenebilir
}

export interface AuthResponse {
  user: User | null;
  error: string | null;
}

export interface SignOutResponse {
  success: boolean;
  error: string | null;
}

// Bileşen props tipleri
export interface ProtectedRouteProps {
  children: React.ReactNode;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}