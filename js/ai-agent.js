const btn = document.getElementById("aiAgentBtn");
const box = document.getElementById("aiAgentBox");
const messages = document.getElementById("aiMessages");

btn.onclick = () => {
    box.style.display = box.style.display === "flex" ? "none" : "flex";
};

function respondAI() {
    const input = document.getElementById("aiInput");
    const question = input.value.toLowerCase();
    if (!question) return;

    addMsg("You", input.value);

    let answer = "Sorry, I am learning. Please contact admin.";

    if (question.includes("course"))
        answer = "We offer BCA, MCA, B.Tech, and MBA programs.";
    else if (question.includes("admission"))
        answer = "You can apply through the Admission page.";
    else if (question.includes("login"))
        answer = "Admin and staff can login using the Login page.";
    else if (question.includes("vichar"))
        answer = "You can view motivational thoughts on Achhi Vichar page.";
    else if (question.includes("contact"))
        answer = "You can contact us via the Contact page.";

    setTimeout(() => addMsg("AI", answer), 500);
    input.value = "";
}

function addMsg(sender, text) {
    messages.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
    messages.scrollTop = messages.scrollHeight;
}
