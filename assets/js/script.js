/*
===============================================
  Project Name  : Designer Portfolio Website
  File Name     : script.js
  Author        : Raajia Shah
  Created On    : 27-07-2025
  Description   : Custom interactivity scripts
  Location      : /designer-portfolio/assets/js/
  Copyright     : © 2025 Raajia Shah
===============================================
*/

// Hamburger Script for Menu Toggling Functionality
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Auto year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
