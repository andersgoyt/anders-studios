// JavaScript for your game studio website

// Function to handle downloading game files and visiting game websites
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
});

// Function to download game file
function downloadGame(fileLink) {
    window.location.href = fileLink;
}

// Function to redirect to game website
function redirectToWebsite(websiteLink) {
    window.open(websiteLink, '_blank');
}
