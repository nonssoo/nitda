// script.js
let currentIndex = 0;

function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const newsCards = document.querySelectorAll('.news-card');
    const totalCards = newsCards.length;
    
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    moveSlide(0); // Initialize the first slide
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    const subscribeButton = document.querySelector('.subscribe-button');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('Read More clicked for event:', this.closest('.event-card').querySelector('h3').textContent);
        });
    });

    subscribeButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Subscribe button clicked.');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Custom JS code can be added here if needed
});