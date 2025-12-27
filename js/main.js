const btn = document.createElement("button");
btn.innerText = "Dark Mode";
btn.onclick = () => document.body.classList.toggle("dark");
document.body.prepend(btn);

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
