'use client';

import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { signOut } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    const { success } = await signOut();
    if (success) {
      router.push('/');
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Profil</h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Hesap Bilgileri</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">
                <p className="text-gray-600 text-sm">E-posta:</p>
                <p className="font-medium">{user?.email}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-600 text-sm">Hesap Oluşturma Tarihi:</p>
                <p className="font-medium">
                  {user?.metadata.creationTime ? 
                    new Date(user.metadata.creationTime).toLocaleString('tr-TR') : 
                    'Bilinmiyor'}
                </p>
              </div>
              
              <div>
                <p className="text-gray-600 text-sm">Son Giriş Tarihi:</p>
                <p className="font-medium">
                  {user?.metadata.lastSignInTime ? 
                    new Date(user.metadata.lastSignInTime).toLocaleString('tr-TR') : 
                    'Bilinmiyor'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button 
              onClick={() => router.push('/download')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              İndirme Sayfasına Git
            </button>
            
            <button 
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}