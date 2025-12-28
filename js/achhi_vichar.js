let language = "hi";
let index = 0;

// Default thoughts
const defaultVichar = {
    hi: [
        "सपने वो नहीं जो नींद में आते हैं, सपने वो हैं जो नींद उड़ाते हैं।",
        "मेहनत कभी व्यर्थ नहीं जाती।",
        "खुद पर विश्वास रखो।"
    ],
    en: [
        "Dreams are not what you see in sleep, dreams keep you awake.",
        "Hard work never goes waste.",
        "Believe in yourself."
    ]
};

// Load from storage or default
let vicharData = JSON.parse(localStorage.getItem("vicharData")) || defaultVichar;

function showNewVichar() {
    const list = vicharData[language];
    index = Math.floor(Math.random() * list.length);
    document.getElementById("vicharText").innerText = list[index];
}

function toggleLanguage() {
    language = language === "hi" ? "en" : "hi";
    showNewVichar();
}

function addVichar() {
    const text = document.getElementById("newVichar").value.trim();
    if (!text) return;

    vicharData[language].push(text);
    localStorage.setItem("vicharData", JSON.stringify(vicharData));

    document.getElementById("msg").innerText = "Vichar added successfully!";
    document.getElementById("newVichar").value = "";
    showNewVichar();
}

// Auto change every 5 seconds
setInterval(showNewVichar, 5000);

// On page load
window.onload = showNewVichar;
