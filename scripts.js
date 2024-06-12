// JavaScript for your game studio website

document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.game-download');
    const websiteButtons = document.querySelectorAll('.game-website');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fileLink = this.getAttribute('data-file');
            downloadGame(fileLink);
        });
    });

    websiteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const websiteLink = this.getAttribute('data-website');
            redirectToWebsite(websiteLink);
        });
    });

    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('click', function() {
        const body = document.body;
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            modeToggle.textContent = 'Toggle Dark Mode';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            modeToggle.textContent = 'Toggle Light Mode';
        }
    });
});

function downloadGame(fileLink) {
    window.location.href = fileLink;
}

function redirectToWebsite(websiteLink) {
    window.open(websiteLink, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
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

    const sections = document.querySelectorAll('section');
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
    });
});
