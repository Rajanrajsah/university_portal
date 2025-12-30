document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");

  // If button not found (page without navbar), safely exit
  if (!toggleBtn) return;

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";

    document.body.setAttribute("data-theme", isDark ? "light" : "dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
    toggleBtn.textContent = isDark ? "🌙" : "☀️";
  });
});
