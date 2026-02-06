const page = document.body.dataset.page;

if (page) {
  document.querySelectorAll('.nav-links a').forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((item) => observer.observe(item));
