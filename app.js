(function () {
    // Handle navigation buttons
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            // Update active navigation button
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

            // Update active section
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // Toggle light/dark mode
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Track "Download CV" button click
    const cvButton = document.querySelector('.main-btn');
    if (cvButton) { // Ensure the button exists
        cvButton.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'download_cv', {
                    'event_category': 'Button',
                    'event_label': 'Download CV Button'
                });
            } else {
                console.warn("Google Analytics 'gtag' function is not defined.");
            }
        });
    }
})();
