document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-active');
            // Accessibility: Toggle aria-expanded attribute
            const isExpanded = mainNav.classList.contains('nav-active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Optional: Close menu when a link is clicked (for single-page sites)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('nav-active')) {
                // Only close if it's not a language switcher or external link without hash
                if (link.getAttribute('href').startsWith('#') || !link.classList.contains('lang-switcher')) {
                    mainNav.classList.remove('nav-active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
});