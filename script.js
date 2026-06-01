
const revealElements = document.querySelectorAll(
  '.skill-card, .project-card, .about-box, .contact-card, .hero-card'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
