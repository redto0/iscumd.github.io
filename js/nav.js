document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('nav');

    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  });