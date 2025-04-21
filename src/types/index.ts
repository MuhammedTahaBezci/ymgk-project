import { User } from 'firebase/auth';

// Auth context state tipi
export interface AuthContextType {
  user: User | null;
  loading: boolean;
}

// Kullanıcı kayıt/giriş/çıkış işlemleri için
export interface AuthResponse {
  user: User | null;
  error: string | null;
}

export interface SignOutResponse {
  success: boolean;
  error: string | null;
}

// Route koruma ve context sağlayıcı bileşenleri için
export interface ProtectedRouteProps {
  children: React.ReactNode;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
