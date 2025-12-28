const users = [
  { username: "student", password: "1234", role: "Student" },
  { username: "admin", password: "admin123", role: "Admin" }
];

function login() {
    const role = document.getElementById("role").value;
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("loginError");

    if (role === "admin" && user === "admin" && pass === "admin123") {
        localStorage.setItem("role", "admin");
        window.location.href = "dashboard.html";
    } 
    else if (role === "staff" && user === "staff" && pass === "staff123") {
        localStorage.setItem("role", "staff");
        window.location.href = "dashboard.html";
    } 
    else {
        error.innerText = "Invalid credentials";
    }
}
