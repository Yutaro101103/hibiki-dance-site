let i = 0;
setInterval(() => {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((s, idx) => s.style.display = idx === i ? 'block' : 'none');
  i = (i + 1) % slides.length;
}, 3000);