document.getElementById("admissionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const student = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        course: course.value
    };

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("msg").innerText = "Application submitted successfully!";
    this.reset();
});
document.getElementById("admissionForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("msg").innerText = 
        "Application submitted successfully!";
});
