document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth page load transition
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // 2. Smooth scrolling for anchor links
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href) return;

            const hashIndex = href.indexOf('#');
            if (hashIndex !== -1) {
                const targetId = href.substring(hashIndex);
                if (targetId.length > 1) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        history.pushState(null, null, targetId);
                    }
                }
            }
        });
    });

    // 3. Handle Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Collect form data (if you want to process it later)
            // const formData = new FormData(this);

            // Show a simple success mechanism
            alert('Thank you for your message! I will get back to you soon.');

            // Reset the form
            this.reset();
        });
    }
});
