// ============================================================
// JAVASCRIPT EVENT HANDLING CASE STUDY
// ============================================================

// DOMCONTENTLOADED EVENT
document.addEventListener("DOMContentLoaded", function () {

    logEvent("DOMContentLoaded - Page loaded successfully");

    // ACCESSING HTML ELEMENTS USING DOM
    const form = document.getElementById("registrationForm");

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const birthday = document.getElementById("birthday");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const course = document.getElementById("course");
    const about = document.getElementById("about");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const terms = document.getElementById("terms");


    // ========================================================
    // FOCUS EVENT
    // ========================================================

    [
        firstName,
        lastName,
        birthday,
        username,
        email,
        password,
        about
    ].forEach(function (field) {

        field.addEventListener("focus", function () {

            logEvent("focus event on: " + field.id);

            field.classList.remove("invalid");
        });


        // ====================================================
        // BLUR EVENT
        // ====================================================

        field.addEventListener("blur", function () {

            logEvent("blur event on: " + field.id);

            validateField(field);
        });
    });


    // ========================================================
    // INPUT EVENT - USERNAME
    // ========================================================

    username.addEventListener("input", function () {

        logEvent("input event on username");

        const status =
            document.getElementById("usernameStatus");

        if (username.value.length >= 5) {

            status.textContent =
                "✓ Username length is valid";

            status.style.color = "#218653";

            username.classList.add("valid");
            username.classList.remove("invalid");

        } else {

            status.textContent =
                "Username must be at least 5 characters.";

            status.style.color = "#d13d3d";

            username.classList.remove("valid");
        }
    });


    // ========================================================
    // INPUT EVENT - PASSWORD
    // ========================================================

    password.addEventListener("input", function () {

        logEvent("input event on password");

        checkPasswordStrength();
    });


    // ========================================================
    // INPUT EVENT - TEXTAREA
    // ========================================================

    about.addEventListener("input", function () {

        document.getElementById("charCount").textContent =
            about.value.length + " / 200 characters";
    });


    // ========================================================
    // CHANGE EVENT
    // ========================================================

    birthday.addEventListener("change", function () {

        logEvent("change event on birthday");

        validateField(birthday);
    });


    course.addEventListener("change", function () {

        logEvent("change event on course");

        const error =
            document.getElementById("courseError");

        if (course.value !== "") {

            error.textContent =
                "Selected: " +
                course.options[course.selectedIndex].text;

            error.style.color = "#218653";

        } else {

            error.textContent =
                "Please select a course.";

            error.style.color = "#d13d3d";
        }
    });


    // ========================================================
    // KEYDOWN EVENT
    // ========================================================

    firstName.addEventListener("keydown", function (event) {

        logEvent("keydown event: " + event.key);
    });


    // Prevent numbers in name fields

    [firstName, lastName].forEach(function (field) {

        field.addEventListener("keydown", function (event) {

            if (/\d/.test(event.key)) {

                event.preventDefault();

                logEvent(
                    "keydown prevented a number in " + field.id
                );
            }
        });
    });


    // ========================================================
    // MOUSEOVER EVENT
    // ========================================================

    submitBtn.addEventListener("mouseover", function () {

        logEvent("mouseover event on Submit button");

        submitBtn.textContent = "Ready to Register";
    });


    // ========================================================
    // MOUSEOUT EVENT
    // ========================================================

    submitBtn.addEventListener("mouseout", function () {

        submitBtn.textContent = "Register";
    });


    // ========================================================
    // CLICK EVENT
    // ========================================================

    resetBtn.addEventListener("click", function () {

        logEvent("click event on Reset button");
    });


    // ========================================================
    // SUBMIT EVENT
    // ========================================================

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        logEvent("submit event triggered");


        const isValid =
            validateField(firstName) &
            validateField(lastName) &
            validateField(birthday) &
            validateField(email) &
            validatePassword() &
            validateGender() &
            validateCourse() &
            validateTerms();


        const message =
            document.getElementById("formMessage");


        if (isValid) {

            message.textContent =
                "✓ Registration successful! All inputs are valid.";

            message.className =
                "form-message success";

            logEvent("Form validation successful");

        } else {

            message.textContent =
                "✗ Please correct the highlighted fields.";

            message.className =
                "form-message failure";

            logEvent("Form validation failed");
        }
    });


    // ========================================================
    // RESET EVENT
    // ========================================================

    form.addEventListener("reset", function () {

        logEvent("reset event triggered");


        setTimeout(function () {

            document
                .querySelectorAll("input, select, textarea")
                .forEach(function (field) {

                    field.classList.remove(
                        "valid",
                        "invalid"
                    );
                });


            document
                .querySelectorAll(".error")
                .forEach(function (error) {

                    error.textContent = "";
                });


            document.getElementById("formMessage")
                .textContent = "";


            document.getElementById("usernameStatus")
                .textContent =
                "Username must be at least 5 characters.";


            document.getElementById("passwordStatus")
                .textContent =
                "Use 8+ characters with uppercase, lowercase, number and special character.";


            document.getElementById("charCount")
                .textContent =
                "0 / 200 characters";


            document.getElementById("passwordStrength")
                .style.width = "0%";

        }, 0);
    });


    // ========================================================
    // VALIDATION FUNCTION
    // ========================================================

    function validateField(field) {

        const errorElement =
            document.getElementById(field.id + "Error");


        if (!errorElement) {
            return true;
        }


        // REQUIRED FIELD VALIDATION

        if (field.value.trim() === "") {

            errorElement.textContent =
                "This field is required.";

            field.classList.add("invalid");
            field.classList.remove("valid");

            return false;
        }


        // EMAIL VALIDATION

        if (field.id === "email") {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(field.value.trim())) {

                errorElement.textContent =
                    "Enter a valid email address.";

                field.classList.add("invalid");
                field.classList.remove("valid");

                return false;
            }
        }


        // BIRTHDAY VALIDATION

        if (field.id === "birthday") {

            const today =
                new Date().toISOString().split("T")[0];


            if (field.value > today) {

                errorElement.textContent =
                    "Birthday cannot be in the future.";

                field.classList.add("invalid");
                field.classList.remove("valid");

                return false;
            }
        }


        errorElement.textContent = "";

        field.classList.add("valid");
        field.classList.remove("invalid");

        return true;
    }


    // ========================================================
    // PASSWORD VALIDATION
    // ========================================================

    function validatePassword() {

        const value = password.value;

        const status =
            document.getElementById("passwordStatus");


        const valid =
            value.length >= 8 &&
            /[A-Z]/.test(value) &&
            /[a-z]/.test(value) &&
            /\d/.test(value) &&
            /[^A-Za-z0-9]/.test(value);


        if (!valid) {

            status.textContent =
                "Password needs 8+ chars, uppercase, lowercase, number and special character.";

            status.style.color = "#d13d3d";

            password.classList.add("invalid");
            password.classList.remove("valid");

            return false;
        }


        status.textContent =
            "✓ Strong password";

        status.style.color = "#218653";

        password.classList.add("valid");
        password.classList.remove("invalid");

        return true;
    }


    // ========================================================
    // PASSWORD STRENGTH
    // ========================================================

    function checkPasswordStrength() {

        const value = password.value;

        const bar =
            document.getElementById("passwordStrength");

        let score = 0;


        if (value.length >= 8)
            score++;

        if (/[A-Z]/.test(value))
            score++;

        if (/[a-z]/.test(value))
            score++;

        if (/\d/.test(value))
            score++;

        if (/[^A-Za-z0-9]/.test(value))
            score++;


        bar.style.width =
            (score * 20) + "%";
    }


    // ========================================================
    // GENDER VALIDATION
    // ========================================================

    function validateGender() {

        const selected =
            document.querySelector(
                'input[name="gender"]:checked'
            );

        const error =
            document.getElementById("genderError");


        if (!selected) {

            error.textContent =
                "Please select your gender.";

            return false;
        }


        error.textContent = "";

        return true;
    }


    // ========================================================
    // COURSE VALIDATION
    // ========================================================

    function validateCourse() {

        const error =
            document.getElementById("courseError");


        if (course.value === "") {

            error.textContent =
                "Please select a course.";

            error.style.color = "#d13d3d";

            course.classList.add("invalid");

            return false;
        }


        error.textContent = "";

        course.classList.add("valid");
        course.classList.remove("invalid");

        return true;
    }


    // ========================================================
    // TERMS VALIDATION
    // ========================================================

    function validateTerms() {

        const error =
            document.getElementById("termsError");


        if (!terms.checked) {

            error.textContent =
                "You must accept the Terms & Conditions.";

            return false;
        }


        error.textContent = "";

        return true;
    }


    // ========================================================
    // EVENT LOG
    // ========================================================

    function logEvent(message) {

        document.getElementById("eventText")
            .textContent = message;

        console.log(message);
    }

});