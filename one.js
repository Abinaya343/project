// Navigation Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = link.getAttribute('href');
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Project Filter
const projectFilter = document.querySelector('.project-filter');
const projects = document.querySelectorAll('.project');

projectFilter.addEventListener('change', (e) => {
  const filterValue = e.target.value;
  projects.forEach((project) => {
    if (project.dataset.category === filterValue || filterValue === 'all') {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  console.log(formData);
  // Add form submission logic here
});