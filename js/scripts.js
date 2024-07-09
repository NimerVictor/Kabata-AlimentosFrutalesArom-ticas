let currentIndex = 0;

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.carousel-button.next').addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarousel();
    }
});

document.querySelector('.carousel-button.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
