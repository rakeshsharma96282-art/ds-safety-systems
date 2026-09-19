// 1. Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 2. About Us Section Timeline
const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    defaults: { ease: "power2.out", duration: 0.8 }
});

aboutTl
    .from(".about-section .about-tag, .about-section h2, .about-section > p", {
        y: 40,
        autoAlpha: 0,
        stagger: 0.12
    })
    .from(".about-section .feature-item, .about-section ul li", {
        x: -25,
        autoAlpha: 0,
        stagger: 0.08,
        ease: "back.out(1.4)"
    }, "-=0.4")
    .from(".about-section .about-image", {
        scale: 0.95,
        autoAlpha: 0,
        duration: 1
    }, "-=0.6");

// 3. Services Section Timeline
const servicesTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".services-section",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    defaults: { ease: "power2.out", duration: 0.8 }
});

servicesTl
    .from(".services-section h2, .services-section p, .services-section .section-title", {
        y: 35,
        autoAlpha: 0,
        stagger: 0.15
    })
    .from(".services-section .card, .services-section .service-card", {
        y: 45,
        autoAlpha: 0,
        stagger: 0.1,
        force3D: true
    }, "-=0.4");

// 4. Industries Section Timeline
const industriesTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".industries-section",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    defaults: { ease: "power2.out", duration: 0.8 }
});

industriesTl
    .from(".industries-section h2, .industries-section p, .industries-section .section-title", {
        y: 35,
        autoAlpha: 0,
        stagger: 0.15
    })
    .from(".industries-section .card, .industries-section .industry-card", {
        y: 45,
        autoAlpha: 0,
        stagger: 0.08,
        force3D: true
    }, "-=0.4");
// Select all the sections we want to animate
const sections = document.querySelectorAll(".about-section, .services-section, .industries-section");

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15 // Triggers when 15% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Target elements inside this specific section
            const section = entry.target;
            
            // Run a clean GSAP timeline/tween for this section
            gsap.from(section.querySelectorAll("h2, p, .section-title, .about-tag"), {
                y: 35,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power2.out",
                force3D: true
            });

            gsap.from(section.querySelectorAll(".card, .service-card, .industry-card, .feature-item, ul li, .about-image"), {
                y: 45,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power2.out",
                force3D: true,
                delay: 0.2
            });

            // Stop observing once animated so it doesn't re-trigger every time
            observer.unobserve(section);
        }
    });
}, observerOptions);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
