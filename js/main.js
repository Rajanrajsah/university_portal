const btn = document.createElement("button");
btn.innerText = "Dark Mode";
btn.onclick = () => document.body.classList.toggle("dark");
document.body.prepend(btn);
