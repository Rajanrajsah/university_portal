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

const recognition = new webkitSpeechRecognition();
recognition.lang = "en-IN";

function startVoice() {
    recognition.start();
}

recognition.onresult = (event) => {
    document.getElementById("aiInput").value =
        event.results[0][0].transcript;
};

<button onclick="startVoice()">🎤</button>

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-IN";
    speechSynthesis.speak(speech);
}

speak(data.reply);

let lang = "en";

function toggleLang() {
    lang = lang === "en" ? "hi" : "en";
}

body: JSON.stringify({
    message: msg,
    language: lang
})

messages: [
  { role: "system", content: "Reply in " + (lang==="hi" ? "Hindi" : "English") },
  { role: "user", content: userMsg }
]
