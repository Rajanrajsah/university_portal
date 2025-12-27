const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}
