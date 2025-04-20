'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DownloadButton from '@/components/DownloadButton';
import GameInfo from '@/components/GameInfo';

export default function Download() {
  return (
    <ProtectedRoute>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Oyunu İndir</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <img 
              src="/images/game-screenshots/main.jpg" 
              alt="Oyun Ekran Görüntüsü" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="md:w-1/2">
            <GameInfo />
          </div>
        </div>
        
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">İndirme Hazır!</h2>
          <DownloadButton />
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">Kurulum Talimatları</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>APK dosyasını indirin.</li>
            <li>Android cihazınızda APK dosyasına tıklayın.</li>
            <li>Kurulum izinlerini onaylayın (gerekirse "Bilinmeyen Kaynaklardan" yüklemeye izin verin).</li>
            <li>Kurulum tamamlanana kadar bekleyin.</li>
            <li>Oyunu açın ve eğlencenin tadını çıkarın!</li>
          </ol>
        </div>
      </div>
    </ProtectedRoute>
  );
}