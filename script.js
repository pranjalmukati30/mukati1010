// scripts.js
let currentIndex = 0;

function showSlide(index) {
    const iframes = document.querySelectorAll('iframe');
    const totalSlides = iframes.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    iframes.forEach((iframe, i) => {
        iframe.classList.remove('active');
        if (i === currentIndex) {
            iframe.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
