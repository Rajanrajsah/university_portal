const user = JSON.parse(localStorage.getItem("user"));

if (!user || user.role !== "Admin") {
    alert("Access denied");
    window.location.href = "index.html";
}

const admissions = JSON.parse(localStorage.getItem("admissions")) || [];
const table = document.getElementById("appTable");

admissions.forEach(a => {
    let row = table.insertRow();
    row.insertCell(0).innerText = a.name;
    row.insertCell(1).innerText = a.email;
    row.insertCell(2).innerText = a.mobile;
    row.insertCell(3).innerText = a.course;
    row.insertCell(4).innerText = a.address;
});

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
