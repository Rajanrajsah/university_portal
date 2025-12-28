import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/ask-ai", async (req, res) => {
    const userMsg = req.body.message;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer YOUR_API_KEY`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: userMsg }]
        })
    });

    const data = await response.json();
    res.json({ reply: data.choices[0].message.content });
});

app.listen(3000, () => console.log("AI server running"));

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
