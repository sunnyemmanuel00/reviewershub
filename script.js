document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("sign-in-form");
    const registerForm = document.getElementById("registration-form");
    const errorMessage = document.getElementById("error-message");

    if (signInForm) {
        // Sign-In Form Validation
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const email = document.getElementById("sign-in-email").value.trim();
            const password = document.getElementById("sign-in-password").value.trim();

            if (!email || !password) {
                errorMessage.textContent = "Please enter your email and password!";
                return;
            }

            // Simulating sign-in success
            alert("Sign-in successful!");
        });
    }

    if (registerForm) {
        // Registration Form Validation
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            const phone = document.getElementById("phone").value.trim();
            const country = document.getElementById("country").value;
            const gender = document.querySelector('input[name="gender"]:checked');

            errorMessage.textContent = ""; // Clear previous errors

            if (!name || !username || !email || !password || !confirmPassword || !phone || !country || !gender) {
                errorMessage.textContent = "Please fill in all required fields!";
                return;
            }

            if (password.length < 6) {
                errorMessage.textContent = "Password must be at least 6 characters long!";
                return;
            }

            if (password !== confirmPassword) {
                errorMessage.textContent = "Passwords do not match!";
                return;
            }

            // Simulating registration success
            alert("Registration successful!");
        });
    }
});
