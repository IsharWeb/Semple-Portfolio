// ===== main.js =====

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // offset for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active section in navbar while scrolling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'font-semibold');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-blue-600', 'font-semibold');
        }
    });
});

// Make navbar sticky on scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-white');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-white');
    }
});

// Optional: Mobile menu toggle (if you add one)
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}
