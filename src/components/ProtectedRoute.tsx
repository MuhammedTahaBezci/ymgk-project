'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import { ProtectedRouteProps } from '@/types';

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <div className="spinner"></div>
          <p className="mt-4">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // useEffect ile yönlendirme yapılacak
  }

  return <>{children}</>;
}