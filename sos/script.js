
  

  function subscribeNewsletter(event) {
    event.preventDefault();
    alert("Thank you for subscribing!");
}

// Select the hamburger menu and the navbar
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

// Add event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle('active');
});


// Hero section button functionality
const heroButton = document.querySelector('.hero .btn');

if (heroButton) {
    heroButton.addEventListener('click', function () {
        const storiesSection = document.querySelector('.stories');
        storiesSection.scrollIntoView({ behavior: 'smooth' });
    });
}
