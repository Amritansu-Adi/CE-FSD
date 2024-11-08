let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", Submit);

function Submit(event) {
    event.preventDefault(); // Prevent form submission

    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();
    ValidateInput(usernameValue, passwordValue);
}

function ValidateInput(usernameValue, passwordValue) {
    if (usernameValue === "admin" && passwordValue === "admin") {
        window.location.href = "/test/currencytest1.html";
    } else {
        alert("Invalid credentials");
    }
}

function Reset() {
    username.value = "";
    password.value = "";
    alert("Form reset");
}