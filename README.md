This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Oyun kodlarının olduğu klasör drive içinde: https://drive.google.com/drive/folders/1FeVBgdli-n-64i5io31LYJwu9yz1U3SL

Bu proje, oyun indirime ve kullanıcı yönetimi sağlayan modern bir Next.js uygulamasıdır. Kullanıcılar giriş yapabilir, kayıt olabilir ve giriş yaptıklarında oyunu indirebilirler. Proje Firebase kullanarak kimlik doğrulama ve kullanıcı yönetimi sağlar.

Canlı sürüm: (https://ymgk-project.vercel.app/)

✨ Özellikler

🔑 Kullanıcı girişi ve kayıt sistemi (Firebase Authentication)

📁 Oyun indirme sayfası (Sadece giriş yapan kullanıcılara açık)

🎮 Oyun bilgileri bileşeni (GameInfo)

📊 React context ile oturum yönetimi (AuthContext)

🖊️ Tailwind CSS ile responsive ve modern tasarım

⚡ Next.js 13 App Router mimarisi


⚡ Kurulum

Projeyi yerel ortamda çalıştırmak için:

1. Gerekli Araçlar

Node.js (18+)

npm, yarn, pnpm ya da bun

2. Klonlama ve Bağımlılıklar

git clone https://github.com/MuhammedTahaBezci/ymgk-project.git
cd oyun-sitesi
npm install

3. Ortam Değişkenleri

.env.local dosyası oluşturun ve Firebase ayarlarını girin:

NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

4. Geliştirme Sunucusu

npm run dev

http://localhost:3000 adresinden uygulamaya erişin.

📈 Ana Sayfa (“page.tsx”)

Ana sayfa, oturum durumuna göre kullanıcıya butonlar gösterir:

Giriş yapan kullanıcılar: "Hemen İndir" butonu

Oturum açmayanlar: "Giriş Yap / Kayıt Ol" seçenekleri

Ayrıca oyunla ilgili tanıtım görseli ve bilgileri içerir.

🎓 Kullanılan Teknolojiler

Next.js

React

Firebase

Tailwind CSS

TypeScript

🚀 Yayınlam

Proje şu adreste yayındadır:
https://ymgk-project.vercel.app/

🚀 AR Uzay Nişancısı
AR Uzay Nişancısı, klasik uzay savaşını Artırılmış Gerçeklik (AR) ile birleştiren, hızlı tempolu bir mobil oyundur. Oyuncu, sezgisel dokunmatik kontroller ve sürükleyici AR oynanışıyla gerçek dünya ortamında bir uzay gemisiyle pilotluk yaparak galaksiyi uzaylı istilalarından korur.

🌌 Proje Genel Bakış
Bu oyun, fiziksel alanınızı bir savaş alanına dönüştürür. AR teknolojisini kullanarak, uzaylı gemileri her yönden ortaya çıkar ve size saldırır. Siz de:

Uzay geminizi gerçek zamanlı olarak hareket ettirin ve nişan alın
Hızlı ateş eden lazer silahlarıyla düşmanları yok edin
Gelen saldırılardan taktiksel olarak kaçının
Kendi ortamınızın üzerine katmanlanmış destansı savaşları deneyimleyin
🎯 Temel Oynanış
AR Entegrasyonu: Gerçek dünya yüzeyleri, 3D uzaylı savaşları için arenalara dönüşür
Dinamik Savaş: Hızlı refleks nişancılık, düşman dalgaları ve kaçınma mekanikleri
Sürükleyicilik: Oynanışı çevrenize sabitlemek için cihaz kamerasını ve AR takibini kullanır
İlerleme: Oyuncular düşman savaş gemilerini yok etmeye devam edebilir ve daha zorlu dalgalarla karşılaşabilir
