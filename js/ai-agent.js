const btn = document.getElementById("aiAgentBtn");
const box = document.getElementById("aiAgentBox");
const messages = document.getElementById("aiMessages");

btn.onclick = () => {
    box.style.display = box.style.display === "flex" ? "none" : "flex";
};

async function respondAI() {
    const input = document.getElementById("aiInput");
    const msg = input.value;
    addMsg("You", msg);

    const res = await fetch("http://localhost:3000/ask-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
    });

    const data = await res.json();
    addMsg("AI", data.reply);
    input.value = "";
}

function addMsg(sender, text) {
    messages.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
    messages.scrollTop = messages.scrollHeight;
}
