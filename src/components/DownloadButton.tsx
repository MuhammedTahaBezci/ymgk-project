'use client';

import { useState } from 'react';

export default function DownloadButton() {
  const [downloading, setDownloading] = useState<boolean>(false);

  const handleDownload = async () => {
    setDownloading(true);

    try {
      const link = document.createElement('a');
      link.href = '/apk/uzayoyunu.apk'; // public klasörü üzerinden erişiyoruz
      link.download = 'uzayoyunu.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('İndirme sırasında bir hata oluştu:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="text-center">
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
