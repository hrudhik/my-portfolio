function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.getElementById("firstnameError").innerText = "";
    document.getElementById("lastnameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("subjectError").innerText = "";

    // Validate First Name
    let firstname = document.getElementById("firstname").value;
    if (firstname === "") {
        document.getElementById("firstnameError").innerText = "First name is required.";
        isValid = false;
    }

    // Validate Last Name
    let lastname = document.getElementById("lastname").value;
    if (lastname === "") {
        document.getElementById("lastnameError").innerText = "Last name is required.";
        isValid = false;
    }

    // Validate Email
    let email = document.getElementById("email").value;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        isValid = false;
    }

    // Validate Subject
    let subject = document.getElementById("subject").value;
    if (subject === "") {
        document.getElementById("subjectError").innerText = "Subject is required.";
        isValid = false;
    }

    return isValid;
}