document.getElementById("admissionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    // Inputs
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let course = document.getElementById("course").value;
    let address = document.getElementById("address").value.trim();

    // Clear errors
    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    // Name validation
    if (name.length < 3) {
        document.getElementById("nameErr").innerText = "Enter valid name";
        valid = false;
    }

    // Email validation
    if (!email.includes("@")) {
        document.getElementById("emailErr").innerText = "Invalid email";
        valid = false;
    }

    // Mobile validation
    if (!/^\d{10}$/.test(mobile)) {
        document.getElementById("mobileErr").innerText = "Enter 10 digit number";
        valid = false;
    }

    // Course validation
    if (course === "") {
        document.getElementById("courseErr").innerText = "Select course";
        valid = false;
    }

    // Address validation
    if (address.length < 5) {
        document.getElementById("addressErr").innerText = "Enter address";
        valid = false;
    }

    if (valid) {
        let admissions = JSON.parse(localStorage.getItem("admissions")) || [];

        admissions.push({
            name, email, mobile, course, address
        });

        localStorage.setItem("admissions", JSON.stringify(admissions));

        document.getElementById("successMsg").innerText =
            "Application submitted successfully!";

        document.getElementById("admissionForm").reset();
    }
});
