const user = JSON.parse(localStorage.getItem("user"));

if (!user || user.role !== "Staff") {
    alert("Access denied");
    window.location.href = "index.html";
}

const courseList = document.getElementById("courseList");
let courses = JSON.parse(localStorage.getItem("courses")) || [];

function renderCourses() {
    courseList.innerHTML = "";
    courses.forEach(c => {
        let li = document.createElement("li");
        li.innerText = c;
        courseList.appendChild(li);
    });
}

function addCourse() {
    let course = document.getElementById("courseName").value.trim();
    if (course === "") return;

    courses.push(course);
    localStorage.setItem("courses", JSON.stringify(courses));
    renderCourses();
    document.getElementById("courseName").value = "";
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

renderCourses();
