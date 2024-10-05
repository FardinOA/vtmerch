gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const svgPath = document.querySelector(".loader-svg path");
    const pathLength = svgPath.getTotalLength();

    // invisible the path
    svgPath.style.strokeDasharray = pathLength;
    svgPath.style.strokeDashoffset = pathLength;
    gsap.to(svgPath, {
        duration: 2,
        strokeDashoffset: 0,
        ease: "power2.inOut",
        onComplete: function () {
            gsap.to(".loading-screen", {
                duration: 1,
                opacity: 0,
                ease: "power2.out",
                onComplete: function () {
                    document.querySelector(".loading-screen").style.display =
                        "none";
                },
            });
        },
    });

    // Hero title animation
    gsap.from(".hero .title", {
        scrollTrigger: {
            trigger: ".hero",
            start: "top 80%",
        },
        delay: 1,
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
    });

    // Product card animation
    gsap.from(".swiper-slide.card", {
        scrollTrigger: {
            trigger: ".hero-product-slider",
            start: "top 90%",
            toggleActions: "play none none none",
        },
        delay: 2,
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power2.out",
    });

    // Swiper slider animation
    gsap.from(".swiper", {
        scrollTrigger: {
            trigger: ".hero-product-slider",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        duration: 1.2,
        scale: 0.95,
        opacity: 0,
        ease: "power3.out",
    });

    gsap.from(".text-stroke", {
        scrollTrigger: {
            trigger: ".text-stroke",
            start: "top 100%", //   the text is 100% from the top of the viewport
            end: "bottom 50%", //  the text is at 50% of the viewport
            scrub: 1,
        },
        x: 200,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    });

    // Animation for the product cards
    gsap.from(".best-seller .card", {
        scrollTrigger: {
            trigger: ".best-seller .product-wrapper",
            start: "top 90%",
            end: "bottom 70%",
            scrub: 1,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
    });

    // Animation for images inside the .image-container
    gsap.from(".shop-now .image-container img", {
        scrollTrigger: {
            trigger: ".image-container",
            start: "top 90%",
            end: "bottom 50%",
            scrub: 1,
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
    });

    // Animation for the quotes image on mission section
    gsap.from(".mission .quotes", {
        scrollTrigger: {
            trigger: ".mission",
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
        },
        rotation: 360,
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out",
    });

    // Animation for the title text on mission section
    gsap.from(".mission .title", {
        scrollTrigger: {
            trigger: ".mission",
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
    });

    // Animation for the men image on mission section
    gsap.from(".mission .men", {
        scrollTrigger: {
            trigger: ".mission",
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
    });

    // Footer fade-in when it comes into view
    gsap.from(".footer", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top bottom",
        },
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power3.out",
    });

    // Form elements slide-in on view
    gsap.from(".footer-form input, .footer-form button", {
        scrollTrigger: {
            trigger: ".footer-form",
            start: "top 90%",
        },
        duration: 1,
        x: -100,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
    });

    // Footer columns slide-in from left when in view
    gsap.from(".footer-column", {
        scrollTrigger: {
            trigger: ".footer-links",
            start: "top 90%",
        },
        duration: 1,
        x: -100,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
    });

    // Payment icons scale and fade-in on view
    gsap.from(".payment-icons img", {
        scrollTrigger: {
            trigger: ".footer-bottom",
            start: "top 95%",
        },
        duration: 1,
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        ease: "elastic.out(1, 0.75)",
    });

    // Social media icons bounce effect when in view
    gsap.from(".footer-column a i", {
        scrollTrigger: {
            trigger: ".footer-links",
            start: "top 90%",
        },
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "bounce.out",
    });
});
