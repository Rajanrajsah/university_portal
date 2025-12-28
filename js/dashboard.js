const role = localStorage.getItem("role");
if (!role) window.location.href = "login.html";

const ctx = document.getElementById("courseChart");
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['BCA', 'MCA', 'B.Tech', 'MBA'],
        datasets: [{
            label: 'Students',
            data: [2500, 1800, 4200, 1700],
        }]
    }
});

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}
