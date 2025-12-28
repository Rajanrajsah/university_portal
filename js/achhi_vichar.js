const vicharList = [
    "सपने वो नहीं जो नींद में आते हैं, सपने वो हैं जो आपको नींद नहीं आने देते।",
    "मेहनत इतनी खामोशी से करो कि सफलता शोर मचा दे।",
    "खुद पर विश्वास रखो, चमत्कार अपने आप होंगे।",
    "हर दिन एक नया अवसर लेकर आता है।",
    "संघर्ष जितना कठिन होगा, जीत उतनी ही शानदार होगी।",
    "समय और मेहनत कभी बेकार नहीं जाते।",
    "आज का कष्ट कल की ताकत बनता है।"
];

function showNewVichar() {
    const randomIndex = Math.floor(Math.random() * vicharList.length);
    document.getElementById("vicharText").innerText = vicharList[randomIndex];
}

// Show one vichar on page load / refresh
window.onload = showNewVichar;
