// Change navbar style on scroll









document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });
  










// Show/hide faq answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change icon
        const icon = faq.querySelector('.faq__icon i');
        icon.classList.toggle('uil-plus');
        icon.classList.toggle('uil-minus');
    });
});

// Show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

// Close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener('click', closeNav);
document.querySelector('#open-menu-btn').addEventListener('click', () => document.querySelector('.nav__menu').classList.toggle('show'));
