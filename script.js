document.getElementById("mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const toggleIcon = document.getElementById("mode-toggle");
  toggleIcon.textContent = toggleIcon.textContent === "🌞" ? "🌚" : "🌞";
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
