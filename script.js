const nav = document.getElementById('navegacao');

window.addEventListener('scroll', () => {
  nav.classList.toggle('rolado', window.scrollY > 40);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.revelar').forEach((el) => observer.observe(el));