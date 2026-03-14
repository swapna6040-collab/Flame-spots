// script.js

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Form submission with WhatsApp integration
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = encodeURIComponent(`New form submission: ${document.querySelector('input[name="name"]').value}`);
    const phoneNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
});

// Scroll animations
const animateElements = document.querySelectorAll('.animate-on-scroll');
const scrollAnimation = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    animateElements.forEach(element => {
        if (element.getBoundingClientRect().top + window.scrollY < scrollPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);

// Lazy loading images
const lazyLoadImages = document.querySelectorAll('img[data-src]');
const lazyLoad = () => {
    lazyLoadImages.forEach(img => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        }
    });
};

window.addEventListener('scroll', lazyLoad);

// Active navigation indicator
const navLinks = document.querySelectorAll('nav a');
const highlightActiveLink = () => {
    let scrollPosition = window.scrollY;
    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', highlightActiveLink);

// Parallax effects
const parallax = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(elem => {
        elem.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    });
};

window.addEventListener('scroll', parallax);
