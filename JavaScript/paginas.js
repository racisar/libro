const book = document.querySelector('.book');
const pages = document.querySelectorAll('.page');
let currentPage = 1; // Comenzamos en la página 1

function showPage(pageIndex) {
    if (pageIndex >= 1 && pageIndex <= pages.length) {
        pages[currentPage - 1].style.transform = 'rotateY(0deg)';
        currentPage = pageIndex;
        pages[currentPage - 1].style.transform = 'rotateY(0deg)';
    }
}

book.addEventListener('click', () => {
    showPage(currentPage + 1);
});

// Inicialmente muestra la primera página
showPage(currentPage);
