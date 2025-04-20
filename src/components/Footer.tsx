export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} Oyun Adı. Tüm hakları saklıdır.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Gizlilik Politikası</a>
              <a href="#" className="hover:text-gray-300">Şartlar ve Koşullar</a>
              <a href="#" className="hover:text-gray-300">İletişim</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }