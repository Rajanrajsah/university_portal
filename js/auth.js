const users = [
  { username: "student", password: "1234", role: "Student" },
  { username: "admin", password: "admin123", role: "Admin" }
];

function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  let user = users.find(x => x.username === u && x.password === p);

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Invalid Credentials";
  }
}
