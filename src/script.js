// Main JavaScript file for Across Escrow
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code will go here

    // Scroll-triggered animations for How It Works steps (optional replay)
    const howItWorksSteps = document.querySelectorAll('.how-it-works-step');

    const observerHowItWorks = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // If you want these to replay too, remove the unobserve below
                // observerHowItWorks.unobserve(entry.target);
            } else {
                 // Optional: Remove class when leaving viewport to replay on scroll back
                 // entry.target.classList.remove('is-visible');
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    howItWorksSteps.forEach(step => {
        observerHowItWorks.observe(step);
    });

    // Scroll-triggered animations for general sections (will replay)
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    const observerScrollReveal = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // REMOVED: observerScrollReveal.unobserve(entry.target); // Stop observing after animation
            } else {
                entry.target.classList.remove('is-visible'); // Remove class when leaving viewport
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before reaching the bottom
    });

    scrollRevealElements.forEach(element => {
        observerScrollReveal.observe(element);
    });
});
