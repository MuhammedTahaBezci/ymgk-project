'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import GameInfo from '@/components/GameInfo';

export default function Home() {
  const { user, loading } = useAuth();

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-10 text-center">Yapım Aşamasında</h1>

      {/* Görsel ve açıklama yan yana */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl w-full">
        {/* Sol: Oyun Görseli */}
        <div className="w-full md:w-1/2">
          <img
            src="../images/oyun (1)-Photoroom.png"
            alt="Oyun Ekran Görüntüsü"
            className="w-full max-w-md h-auto rounded-2xl shadow-xl border border-gray-300 mx-auto"
            
          />
          
        </div>

        {/* Sağ: Açıklama */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <GameInfo />
          </div>
        </div>
      </div>

      {/* Butonlar */}
      <div className="mt-10 text-center">
        {!loading && (
          user ? (
            <Link
              href="/download"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors"
            >
              Hemen İndir
            </Link>
          ) : (
            <div className="flex flex-col items-center">
              <p className="mb-4 text-lg">İndirmek için lütfen giriş yapın veya kayıt olun</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/login"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors"
                >
                  Giriş Yap
                </Link>
                <Link
                  href="/register"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors"
                >
                  Kayıt Ol
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
