document.addEventListener("DOMContentLoaded", () => {
    const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active-link");
    }
});

    const navbarHTML = `
    <nav class="navbar">
        <div class="logo">ABC University</div>

        <div class="menu-toggle" id="menuToggle">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <ul class="nav-links" id="navLinks">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="courses.html">Courses</a></li>
            <li><a href="admission.html">Admission</a></li>
            <li><a href="achhi_vichar.html">Achhi Vichar</a></li>
            <li><a href="login.html">Login</a></li>
        </ul>
    </nav>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    setupNavbar();
});

function setupNavbar() {
    const toggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        toggle.classList.toggle("open");
    });

    // ✅ Auto-close menu when clicking any link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            toggle.classList.remove("open");
        });
    });
}
