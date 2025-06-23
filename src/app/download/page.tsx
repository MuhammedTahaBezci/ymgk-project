'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DownloadButton from '@/components/DownloadButton';
import GameInfo from '@/components/GameInfo';
import Image from 'next/image';

export default function Download() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center px-4 py-8 mt-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Oyunu İndir</h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl w-full">
            {/* Sol: Oyun Görseli */}
            <div className="w-full md:w-1/2  flex justify-center">
              <Image
                src="/images/oyun (1)-Photoroom.png"
                alt="Oyun Ekran Görüntüsü"
                width={350}
                height={700}
              />

            </div>

            {/* Sağ: Açıklama */}
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <GameInfo />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">İndirme Hazır!</h2>
          <DownloadButton

          />
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Kurulum Talimatları</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>APK dosyasını indirin.</li>
            <li>Android cihazınızda APK dosyasına tıklayın.</li>
            <li>Kurulum izinlerini onaylayın (gerekirse &quot;Bilinmeyen Kaynaklardan&quot; yüklemeye izin verin).</li>
            <li>Kurulum tamamlanana kadar bekleyin.</li>
            <li>Oyunu açın ve eğlencenin tadını çıkarın!</li>
          </ol>
        </div>
      </div>
    </ProtectedRoute>
  );
}