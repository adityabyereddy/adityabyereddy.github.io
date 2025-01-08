// If you have any interactive features or dynamic content, you can add them here.

// Example: Smooth scroll behavior for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // adjust offset for fixed header
        behavior: 'smooth'
      });
    }
  });
});

