document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;
    const sections = document.querySelectorAll('section');
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    // Apply dark mode immediately
    applyDarkMode();

    // Event listeners for download and website buttons (if applicable)
    const downloadButtons = document.querySelectorAll('.game-download');
    const websiteButtons = document.querySelectorAll('.game-website');
    const demoButtons = document.querySelectorAll('.game-demo'); // Added demo buttons

    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itchIoLink = this.getAttribute('data-itchio');
            redirectToItchIo(itchIoLink);
        });
    });

    websiteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const websiteLink = this.getAttribute('data-website');
            redirectToWebsite(websiteLink);
        });
    });

    demoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const demoLink = this.getAttribute('data-demo');
            redirectToDemo(demoLink);
        });
    });

    // Toggle dark mode when modeToggle button is clicked
    modeToggle.addEventListener('click', function() {
        toggleDarkMode();
    });

    // Smooth scroll for anchor links
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let currentSectionId = '';
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= 100) {
                currentSectionId = section.id;
            }
        });

        const activeNavLinks = document.querySelectorAll('nav ul li a');
        activeNavLinks.forEach(link => {
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.parentElement.classList.add('active');
            } else {
                link.parentElement.classList.remove('active');
            }
        });

        // Show/hide header based on scroll direction
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            // Scroll down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up or at the top
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Function to apply dark mode immediately
    function applyDarkMode() {
        const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
        if (darkModeEnabled) {
            document.body.classList.add('dark-mode');
            updateModeToggleText();
            updateTextColors();
        } else {
            document.body.classList.remove('dark-mode');
            updateModeToggleText();
            updateTextColors();
        }
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    }

    // Function to enable dark mode
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        updateModeToggleText();
        updateTextColors();
    }

    // Function to disable dark mode
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
        updateModeToggleText();
        updateTextColors();
    }

    // Function to update mode toggle button text
    function updateModeToggleText() {
        const modeToggleBtn = document.getElementById('modeToggle');
        if (document.body.classList.contains('dark-mode')) {
            modeToggleBtn.textContent = 'Toggle Light Mode';
        } else {
            modeToggleBtn.textContent = 'Toggle Dark Mode';
        }
    }

    // Function to redirect to itch.io (replace with your redirection logic)
    function redirectToItchIo(itchIoLink) {
        window.open(itchIoLink, '_blank');
    }

    // Function to redirect to a website (replace with your redirection logic)
    function redirectToWebsite(websiteLink) {
        window.open(websiteLink, '_blank');
    }

    // Function to redirect to a demo (replace with your redirection logic)
    function redirectToDemo(demoLink) {
        window.open(demoLink, '_blank');
    }

    // Function to update text colors based on dark mode/light mode
    function updateTextColors() {
        const body = document.body;
        const h3Elements = document.querySelectorAll('h3');
        
        if (body.classList.contains('dark-mode')) {
            h3Elements.forEach(h3 => {
                h3.style.color = '#eee'; // Adjust text color for dark mode
            });
        } else {
            h3Elements.forEach(h3 => {
                h3.style.color = '#333'; // Adjust text color for light mode
            });
        }
    }
});
