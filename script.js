// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, Observer);

// Global default for smoother animations
gsap.defaults({
    ease: "power2.out",
    duration: 0.8
});

// About Us Section Animations
gsap.from(".about-section .about-tag, .about-section h2, .about-section > p", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 40,
    opacity: 0,
    stagger: 0.12
});

gsap.from(".about-section .feature-item, .about-section ul li", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
    },
    x: -25,
    opacity: 0,
    stagger: 0.08,
    ease: "back.out(1.4)"
});

gsap.from(".about-section .about-image", {
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    scale: 0.95,
    opacity: 0,
    duration: 1
});

// Services Section Cards Animation
gsap.from(".services-section h2, .services-section p, .services-section .section-title", {
    scrollTrigger: {
        trigger: ".services-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 35,
    opacity: 0,
    stagger: 0.15
});

gsap.from(".services-section .card, .services-section .service-card", {
    scrollTrigger: {
        trigger: ".services-section",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    y: 45,
    opacity: 0,
    stagger: 0.1,
    force3D: true // Forces GPU rendering for butter-smooth motion
});

// Industries We Serve Section Animation
gsap.from(".industries-section h2, .industries-section p, .industries-section .section-title", {
    scrollTrigger: {
        trigger: ".industries-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 35,
    opacity: 0,
    stagger: 0.15
});

gsap.from(".industries-section .card, .industries-section .industry-card", {
    scrollTrigger: {
        trigger: ".industries-section",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    y: 45,
    opacity: 0,
    stagger: 0.08,
    force3D: true // Keeps grid cascading fluid without lag
});

// GSAP Observer Plugin Setup for wheel and touch monitoring
Observer.create({
    target: window,
    type: "wheel,touch",
    onUp: () => {
        // Runs when user scrolls up
    },
    onDown: () => {
        // Runs when user scrolls down
    }
});
