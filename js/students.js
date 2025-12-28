const role = localStorage.getItem("role");
if (role !== "admin") {
    alert("Access denied");
    window.location.href = "dashboard.html";
}

const students = JSON.parse(localStorage.getItem("students")) || [];
const table = document.getElementById("studentTable");

students.forEach(s => {
    table.innerHTML += `
        <tr>
            <td>${s.name}</td>
            <td>${s.email}</td>
            <td>${s.phone}</td>
            <td>${s.course}</td>
        </tr>
    `;
});
