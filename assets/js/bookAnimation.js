const book = document.getElementById('book');
let isOpen = false;

book.addEventListener('click', () => {
    isOpen = !isOpen;
    toggleBook();
});

function toggleBook() {
    const leftPage = document.querySelector('.left-page');
    const rightPage = document.querySelector('.right-page');

    if (isOpen) {
        // Open the book
        leftPage.style.animation = 'openLeftPage 1s forwards';
        rightPage.style.animation = 'openRightPage 1s forwards';
    } else {
        // Close the book
        leftPage.style.animation = 'closeLeftPage 1s forwards';
        rightPage.style.animation = 'closeRightPage 1s forwards';
    }
}
