'use client';

import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      router.push('/download');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="text-center py-8">Yükleniyor...</div>;
  }

  if (user) {
    return null; // useEffect ile yönlendirme yapılacak
  }

  return (
    <div className="container mx-auto py-10">
      <LoginForm />
    </div>
  );
}