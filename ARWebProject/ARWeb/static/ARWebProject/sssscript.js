// DOM yüklendiğinde çalışacak
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const qaItems = document.querySelectorAll('.qa-item');

    // Arama butonuna tıklama olayı
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();

        qaItems.forEach(item => {
            const questionText = item.querySelector('h3').textContent.toLowerCase();
            if (questionText.includes(searchTerm)) {
                item.style.display = 'block'; // Eşleşiyorsa göster
            } else {
                item.style.display = 'none'; // Eşleşmiyorsa gizle
            }
        });
    });

    // Klavye ile "Enter" tuşuna basıldığında arama yapma
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchButton.click(); // Butona tıkla
        }
    });
});