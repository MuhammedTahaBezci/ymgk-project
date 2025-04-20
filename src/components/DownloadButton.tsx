'use client';

import { useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '@/lib/firebase';

export default function DownloadButton() {
  const [downloading, setDownloading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setDownloading(true);
    setError(null);
    
    try {
      // Firebase Storage'dan APK dosyasının URL'sini alma
      const fileRef = ref(storage, 'downloads/game.apk');
      const url = await getDownloadURL(fileRef);
      
      // Yeni bir sekme açarak indirme işlemini başlat
      window.open(url, '_blank');
    } catch (err: any) {
      console.error('İndirme hatası:', err);
      setError('Dosya indirme sırasında bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="text-center">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-xl transition-colors"
      >
        {downloading ? 'İndiriliyor...' : 'APK Dosyasını İndir'}
      </button>
      
      <p className="mt-4 text-gray-600">
        Android cihazınızda bu APK dosyasını yüklemek için, bilinmeyen kaynaklardan uygulama yüklemeye izin verdiğinizden emin olun.
      </p>
    </div>
  );
}