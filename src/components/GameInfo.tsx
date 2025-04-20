export default function GameInfo() {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Oyun Hakkında</h2>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Özellikler:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Heyecan verici oyun özellikleri</li>
            <li>Yenilikçi oyun mekanikleri</li>
            <li>Etkileyici grafikler ve ses tasarımı</li>
            <li>Çevrimiçi liderlik tabloları</li>
            <li>Çoklu dil desteği</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Sistem Gereksinimleri:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Android 6.0 veya daha yüksek</li>
            <li>En az 2GB RAM</li>
            <li>500MB boş depolama alanı</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Sürüm:</h3>
          <p>v1.0.0 (En güncel sürüm)</p>
        </div>
      </div>
    );
  }