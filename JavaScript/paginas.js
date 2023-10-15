const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page');
let currentPage = 0;
let startX = 0;
let isDragging = false;

function showPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < pages.length) {
        pages[currentPage].style.transform = 'rotateY(0deg)';
        currentPage = pageIndex;
        pages[currentPage].style.transform = 'rotateY(0deg)';
    }
}

book.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

book.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;

    if (diffX > 20) {
        showPage(currentPage - 1);
        isDragging = false;
    } else if (diffX < -20) {
        showPage(currentPage + 1);
        isDragging = false;
    }
});

book.addEventListener('touchend', () => {
    isDragging = false;
});

// Inicialmente muestra la primera página
showPage(currentPage);

