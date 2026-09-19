// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero Entrance Animation (slides and fades in elements inside your hero section)
gsap.from(".hero > *", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Scroll Reveal for Cards/Services
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".services-grid", // Make sure this matches your HTML container class
        start: "top 80%",          // Triggers when the top of the grid hits 80% down the screen
        toggleActions: "play none none none"
    },
    y: 50,          // Starts 50px lower
    opacity: 0,     // Starts invisible
    duration: 0.8,
    stagger: 0.15   // Cards appear one after another sequentially
});

// Dynamic About Us Animation
gsap.from(".about-section .about-tag, .about-section h2, .about-section > p", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15, // Cascades down line by line
    ease: "power2.out"
});

// Stagger the checkmark features so they snap into view
gsap.from(".about-section .feature-item, .about-section ul li", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 65%",
    },
    x: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1, // Pops them in sequentially
    ease: "back.out(1.7)" // Adds a fun little bounce effect
});

// Scale up the image container smoothly
gsap.from(".about-section .about-image", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// High-Dynamic Service Cards Animation
gsap.from(".services-section .card, .services-section .service-card", {
    scrollTrigger: {
        trigger: ".services-section",
        start: "top 70%",
        toggleActions: "play none none reverse" // Reverses when scrolling back up so it's always active
    },
    y: 80,
    scale: 0.9,     // Starts slightly shrunk
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,  // Snappy sequence across the cards
    ease: "back.out(1.2)" // Adds a crisp, modern bounce as they lock into place
});

// Industries We Serve Animation
gsap.from(".industries-section h2, .industries-section p, .industries-section .section-title", {
    scrollTrigger: {
        trigger: ".industries-section", // Adjust class name if yours is different
        start: "top 75%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
});

// Stagger the 8 industry cards smoothly in a grid
gsap.from(".industries-section .industry-card, .industries-section .card", {
    scrollTrigger: {
        trigger: ".industries-section",
        start: "top 65%",
        toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.08, // Quick, snappy cascade across all 8 cards
    ease: "power3.out"
});
