const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
    if (email.validity.valueMissing) {
        email.setCustomValidity("Please enter your email to attend the screening");
    } else {
        email.setCustomValidity("");
    }
});