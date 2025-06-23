'use client';

import RegisterForm from '@/components/RegisterForm';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Register() {
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
    <div className="w-full h-screen container mx-auto py-10 flex justify-center items-center">
      <RegisterForm />
    </div>
  );
}