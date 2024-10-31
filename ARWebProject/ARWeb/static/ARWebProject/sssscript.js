document.addEventListener("DOMContentLoaded", function() {
    // Tüm accordion butonlarını seçiyoruz
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        // Her butona tıklama olayını ekliyoruz
        accordion.addEventListener("click", function() {
            // Tıklanan accordion'un aktif durumunu değiştiriyoruz
            this.classList.toggle("active");

            // Panel kısmını seçiyoruz
            const panel = this.nextElementSibling;

            // Diğer tüm aktif panelleri kapat
            accordions.forEach((item) => {
                if (item !== accordion && item.classList.contains("active")) {
                    item.classList.remove("active");
                    item.nextElementSibling.style.maxHeight = null;
                }
            });

            // Tıklanan panelin max-height durumunu değiştir
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null; // Kapat
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px"; // Aç
            }
        });
    });
});
