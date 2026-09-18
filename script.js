function productService() {
  return {
    activeProduct: null,
    currentSlide: 0,
    selectedCategory: 'all',
    
    // PUT IT HERE inside your component methods:
    openProduct(product, event) {
      if (event) event.preventDefault(); // Stops the page from jumping
      this.activeProduct = product;
      this.currentSlide = 0;
      
      // Smoothly scroll to the products container
      document.getElementById('products').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    },

    closeProduct() {
      this.activeProduct = null;
    },

    // ... your other functions ...
  }
}



document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe Services Section
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    const header = document.getElementById('servicesHeader');
    const container = document.getElementById('sliderContainer');
    if (header) observer.observe(header);
    if (container) observer.observe(container);
  }

  // Observe Industries Section
  const industriesSection = document.getElementById('industries');
  if (industriesSection) {
    const indHeader = document.getElementById('industriesHeader');
    const indGrid = document.getElementById('industriesGrid');
    if (indHeader) observer.observe(indHeader);
    if (indGrid) observer.observe(indGrid);
  }

  // Card Click Animation & Navigation (Services)
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

  // --- FIX FOR PRODUCT CARD CLICKS (Prevents jumping to top & scrolls to details) ---
  const productCards = document.querySelectorAll('.product-card'); // Update selector if your product cards have a different class name
  productCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault(); // Stops the page from jumping to the top

      // Find your product details section/container element
      const productDetails = document.getElementById('productDetailsSection'); // Change to your actual product details container ID

      if (productDetails) {
        // Smoothly scroll down to the product details section
        productDetails.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
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

function toggleProductDropdown(event) {
  event.stopPropagation();
  var menu = document.getElementById('productDropdownMenu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

window.onclick = function(event) {
  var menu = document.getElementById('productDropdownMenu');
  if (menu && !event.target.closest('.dropdown-parent')) {
    menu.style.display = 'none';
  }
};

