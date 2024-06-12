// JavaScript for your game studio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize download and website buttons
    const downloadButtons = document.querySelectorAll('.game-download');
    const websiteButtons = document.querySelectorAll('.game-website');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const game = this.getAttribute('data-game');
            const platform = this.getAttribute('data-platform');

            if (platform === 'windows') {
                downloadWindowsFiles(game);
            } else if (platform === 'linux') {
                downloadLinuxFiles(game);
            } else {
                const fileLink = this.getAttribute('data-file');
                downloadGame(fileLink);
            }
        });
    });

    websiteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const websiteLink = this.getAttribute('data-website');
            redirectToWebsite(websiteLink);
        });
    });

    // Toggle dark mode
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        updateModeToggleText();
        updateTextColors(); // Update text colors when toggling mode
    });

    // Smooth scroll for anchor links
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

    // Update active nav link on scroll
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

    // Initialize mode toggle button text on page load
    updateModeToggleText();
});

// Function to update mode toggle button text
function updateModeToggleText() {
    const modeToggleBtn = document.getElementById('modeToggle');
    if (document.body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = 'Toggle Light Mode';
    } else {
        modeToggleBtn.textContent = 'Toggle Dark Mode';
    }
}

// Function to trigger download of a single file
function downloadGame(fileLink) {
    const a = document.createElement('a');
    a.href = fileLink;
    a.setAttribute('download', '');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to redirect to a website
function redirectToWebsite(websiteLink) {
    window.open(websiteLink, '_blank');
}

// Function to trigger download of multiple files
function downloadFiles(fileUrls) {
    const delay = 1000; // Delay in milliseconds (adjust as needed)
    fileUrls.forEach((url, index) => {
        setTimeout(() => {
            const a = document.createElement('a');
            a.href = url;
            a.setAttribute('download', '');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }, index * delay);
    });
}

// Download functions for Windows files
function downloadWindowsFiles(game) {
    let files;
    if (game === 'game1') {
        files = [
            'Games/Game1/Tank-Blitzkrieg-(Beta)-0.78.1.7z'
        ];
    } else if (game === 'game2') {
        files = [
            'Games/Game2/4D-magic-block.zip'
        ];
    }
    downloadFiles(files);
}

// Download functions for Linux files
function downloadLinuxFiles(game) {
    let files;
    if (game === 'game1') {
        files = [
            'Games/Game1/Tank-Blitzkrieg-(Beta)-0.78.1.tar.7z'
        ];
    } else if (game === 'game2') {
        files = [
            'Games/Game2/4D-magic-block.tar.gz'
        ];
    }
    downloadFiles(files);
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
