document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter valid email";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").innerText = "Message cannot be empty";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }

});