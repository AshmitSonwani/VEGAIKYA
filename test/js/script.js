const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
});

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Animate nav items
    navLinksItems.forEach((item, index) => {
        if (item.style.animation) {
            item.style.animation = '';
        } else {
            item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1 + 0.2}s`;
        }
    });
});

// Close menu when clicking a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        navLinksItems.forEach(item => {
            item.style.animation = '';
        });
    });
});

// Handle scroll behavior
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '0.8rem 2rem';
    } else {
        nav.style.padding = '1rem 2rem';
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const buttons = document.querySelectorAll('.image-button');

buttons.forEach((button, index) => {
    button.style.opacity = '0';
    button.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        button.style.transition = 'opacity 0.5s, transform 0.5s';
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
    }, 500 + (index * 200));
});
