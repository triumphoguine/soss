// Navigation active link functionality
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Scroll to sections functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Hero section button functionality
const heroButton = document.querySelector('.hero .btn');

if (heroButton) {
    heroButton.addEventListener('click', function () {
        const storiesSection = document.querySelector('.stories');
        storiesSection.scrollIntoView({ behavior: 'smooth' });
    });
}


// Select the hamburger menu and the navbar
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

// Add event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle('active');
});





