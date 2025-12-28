const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

async function askAI() {
    const q = document.getElementById("aiInput").value;

    const res = await fetch("http://localhost:8080/api/ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: q,
            role: "USER"
        })
    });

    const data = await res.json();
    document.getElementById("aiReply").innerText = data.reply;
}
