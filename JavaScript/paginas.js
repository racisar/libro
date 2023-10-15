const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < pages.length) {
        pages[currentPage].style.transform = 'rotateY(0deg)';
        currentPage = pageIndex;
        pages[currentPage].style.transform = 'rotateY(0deg)';
    }
}

book.addEventListener('click', () => {
    showPage(currentPage + 1);
});

// Inicialmente muestra la primera página
showPage(currentPage);
