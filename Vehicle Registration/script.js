// Function to validate registration number
function validateRegistration(regNo) {

    // Rule 1
    if (regNo === "") {
        throw "Registration number should not be empty.";
    }

    // Rule 2
    if (regNo.length !== 10) {
        throw "Registration number should be exactly 10 characters.";
    }

    // Rule 3
    if (!/^[A-Z]{2}/.test(regNo)) {
        throw "First two characters must be uppercase alphabets (State Code).";
    }

    // Rule 4
    if (!/^[A-Z]{2}[0-9]{2}/.test(regNo)) {
        throw "Characters 3 and 4 must be digits (District Code).";
    }

    // Rule 5
    if (!/^[A-Z]{2}[0-9]{2}[A-Z]{2}/.test(regNo)) {
        throw "Characters 5 and 6 must be uppercase alphabets (Series).";
    }

    // Rule 6
    if (!/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/.test(regNo)) {
        throw "Last four characters must be digits (Vehicle Number).";
    }

    return true;
}


// Function called when button is clicked
function checkRegistration() {

    var regNo = document.getElementById("regNo").value.trim();

    var result = document.getElementById("result");

    try {

        validateRegistration(regNo);

        alert("✅ Vehicle Registration Successful!");

        result.innerHTML = `
        <div class="success">

            <h3>✅ Registration Successful</h3>

            <hr>

            <p><strong>Registration Number :</strong> ${regNo}</p>

            <p><strong>Status :</strong> Valid Vehicle Registration Number</p>

        </div>
        `;

        // Clear textbox
        document.getElementById("regNo").value = "";

        // Focus again
        document.getElementById("regNo").focus();

    }

    catch(error){

        alert("❌ " + error);

        result.innerHTML = `
        <div class="error">

            <h3>❌ Invalid Registration Number</h3>

            <hr>

            <p><strong>Entered Number :</strong> ${regNo || "None"}</p>

            <p><strong>Reason :</strong> ${error}</p>

        </div>
        `;

        window.onload = function () {
    document.getElementById("regNo").focus();
        };

    }

}