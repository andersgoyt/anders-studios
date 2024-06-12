// JavaScript for your game studio website

// Function to handle downloading game files for different platforms
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.game-download');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fileLinkLinux = this.getAttribute('data-file-linux');
            const fileLinkWindows = this.getAttribute('data-file-windows');
            const fileLinkSFX = this.getAttribute('data-file-sfx');
            
            // Determine platform and download the corresponding file
            const platform = navigator.platform.toLowerCase();
            if (platform.includes('linux')) {
                downloadGame(fileLinkLinux);
            } else if (platform.includes('win')) {
                // Check if Windows is 32-bit or 64-bit
                if (navigator.userAgent.includes('WOW64') || navigator.userAgent.includes('Win64')) {
                    downloadGame(fileLinkWindows);
                } else {
                    downloadGame(fileLinkSFX);
                }
            } else {
                // For other platforms, show an alert or handle accordingly
                alert('Sorry, game download is not available for your platform.');
            }
        });
    });
});

// Function to download game file
function downloadGame(fileLink) {
    window.location.href = fileLink;
}

// Function to redirect to game website
function redirectToWebsite(websiteLink) {
    window.open(websiteLink, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
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

    // Highlight active section in navigation
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
                link.parentElement.classList.add('active'); // Add 'active' class
            } else {
                link.parentElement.classList.remove('active'); // Remove 'active' class from other links
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleModeButton = document.getElementById('toggle-mode');
    toggleModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
