document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer for Services Section Animation
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const header = document.getElementById('servicesHeader');
          const container = document.getElementById('sliderContainer');
          if (header) header.classList.add('is-visible');
          if (container) container.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(servicesSection);
  }

  // Card Click Animation & Navigation
  const cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
      this.classList.add('is-clicked');
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 250);
    });
  });
});

// Slider Logic
let currentIndex = 0;
const grid = document.getElementById('servicesGrid');
const dots = document.querySelectorAll('.dot');
const totalCards = document.querySelectorAll('.service-card').length;

function getCardsPerView() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 1200) return 2;
  return 4; 
}

function updateSlider() {
  if (!grid) return;
  const cardsPerView = getCardsPerView();
  const maxIndex = Math.max(0, totalCards - cardsPerView);
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const cardWidth = 295; 
  const gap = 25; 
  const offset = currentIndex * (cardWidth + gap);
  grid.style.transform = `translateX(-${offset}px)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function moveSlide(direction) {
  const cardsPerView = getCardsPerView();
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = maxIndex; 
  } else if (currentIndex > maxIndex) {
    currentIndex = 0; 
  }
  updateSlider();
}

function currentSlide(index) {
  const cardsPerView = getCardsPerView();
  const maxIndex = Math.max(0, totalCards - cardsPerView);
  currentIndex = Math.min(index, maxIndex);
  updateSlider();
}

window.addEventListener('resize', updateSlider);
