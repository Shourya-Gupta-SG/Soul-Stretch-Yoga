document.getElementById("mode-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌚";
});

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
backToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
