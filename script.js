// Dark mode toggle
const toggleModeBtn = document.getElementById('toggleMode');
toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleModeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌚';
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
};

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
