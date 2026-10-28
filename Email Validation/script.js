// ==========================================
// STEAM LOGIN PAGE
// ACCOUNT NAME + EMAIL VALIDATION
// STRING FUNCTIONS + REGEX
// ==========================================


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const accountName = document.getElementById("accountName");
const password = document.getElementById("password");

const signInBtn = document.getElementById("signInBtn");
const loginMessage = document.getElementById("loginMessage");

const rememberMe = document.getElementById("rememberMe");


// Success Popup
const successPopup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");


// Error Popup
const errorPopup = document.getElementById("errorPopup");
const errorTitle = document.getElementById("errorTitle");
const errorText = document.getElementById("errorText");
const closeErrorPopup =
    document.getElementById("closeErrorPopup");


// Help
const helpLink = document.getElementById("helpLink");


// Search
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");


// ==========================================
// DEMO LOGIN CREDENTIALS
// ==========================================

const correctAccount = "Honey";

const correctEmail = "honey@gmail.com";

const correctPassword = "Steam@123";


// ==========================================
// REGULAR EXPRESSIONS
// ==========================================


// Account Name Regex
//
// Allows:
// Letters
// Numbers
// Underscore
// Hyphen
// Dot
//
// Minimum 3 characters
// Maximum 64 characters

const accountRegex =
    /^[A-Za-z0-9_.-]{3,64}$/;


// Email Regex
//
// Example:
// honey@gmail.com
// user123@yahoo.com
// abc.student@college.edu

const emailRegex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


// Password Regex
//
// Minimum 8 characters

const passwordRegex =
    /^.{8,}$/;


// ==========================================
// SHOW ERROR POPUP
// ==========================================

function showError(title, message) {

    errorTitle.textContent = title;

    errorText.textContent = message;

    errorPopup.classList.add("show");
}


// ==========================================
// LOGIN FUNCTION
// ==========================================

function loginUser() {


    // ======================================
    // GET USER INPUT
    // ======================================

    // trim() removes unnecessary spaces
    // from beginning and end.

    const username =
        accountName.value.trim();

    const userPassword =
        password.value.trim();


    // Clear previous message

    loginMessage.textContent = "";


    // ======================================
    // EMPTY ACCOUNT / EMAIL
    // ======================================

    if (username === "") {

        showError(
            "Account Name or Email Missing",
            "Please enter your Steam account name or email address."
        );

        return;
    }


    // ======================================
    // EMPTY PASSWORD
    // ======================================

    if (userPassword === "") {

        showError(
            "Password Missing",
            "Please enter your password."
        );

        return;
    }


    // ======================================
    // DETERMINE LOGIN TYPE
    // ======================================

    let loginType = "";

    let validFormat = false;


    /*
        String Function:

        includes("@")

        If @ is present,
        we treat the input as an email.
    */

    if (username.includes("@")) {

        loginType = "email";


        // ==================================
        // EMAIL REGEX VALIDATION
        // ==================================

        if (emailRegex.test(username)) {

            validFormat = true;

        } else {

            showError(
                "Invalid Email",
                "Please enter a valid email address such as honey@gmail.com."
            );

            return;
        }

    }


    // ======================================
    // ACCOUNT NAME
    // ======================================

    else {

        loginType = "account";


        // ==================================
        // ACCOUNT NAME REGEX VALIDATION
        // ==================================

        if (accountRegex.test(username)) {

            validFormat = true;

        } else {

            showError(
                "Invalid Account Name",
                "Account name must contain 3 to 64 characters and may use letters, numbers, underscores, hyphens or periods."
            );

            return;
        }

    }


    // ======================================
    // FORMAT MUST BE VALID
    // ======================================

    if (!validFormat) {

        showError(
            "Invalid Login",
            "Please enter a valid account name or email address."
        );

        return;
    }


    // ======================================
    // STRING FUNCTIONS
    // ======================================

    /*
        toLowerCase()

        Used so Honey and honey
        are treated the same.
    */

    const enteredLogin =
        username.toLowerCase();


    const storedAccount =
        correctAccount.toLowerCase();


    const storedEmail =
        correctEmail.toLowerCase();


    /*
        length

        Counts number of characters.
    */

    const inputLength =
        username.length;


    /*
        includes()

        Checks whether input contains
        the @ symbol.
    */

    const containsAtSymbol =
        username.includes("@");


    // Display in browser console

    console.log(
        "Entered Login:",
        username
    );

    console.log(
        "Login Type:",
        loginType
    );

    console.log(
        "Input Length:",
        inputLength
    );

    console.log(
        "Contains @:",
        containsAtSymbol
    );

    console.log(
        "Lowercase Input:",
        enteredLogin
    );


    // ======================================
    // CHECK ACCOUNT / EMAIL
    // ======================================

    if (loginType === "email") {

        // Compare entered email

        if (enteredLogin !== storedEmail) {

            showError(
                "Account Not Found",
                "The email address you entered is not registered."
            );

            return;
        }

    }


    else if (loginType === "account") {

        // Compare account name

        if (enteredLogin !== storedAccount) {

            showError(
                "Account Not Found",
                "The account name you entered is incorrect."
            );

            return;
        }

    }


    // ======================================
    // PASSWORD FORMAT
    // ======================================

    if (!passwordRegex.test(userPassword)) {

        showError(
            "Invalid Password",
            "Your password must contain at least 8 characters."
        );

        return;
    }


    // ======================================
    // PASSWORD CHECK
    // ======================================

    if (userPassword !== correctPassword) {

        showError(
            "Incorrect Password",
            "The password you entered is incorrect. Please check your password and try again."
        );

        return;
    }


    // ======================================
    // REMEMBER ME
    // ======================================

    if (rememberMe.checked) {

        console.log(
            "Remember Me: Enabled"
        );

    } else {

        console.log(
            "Remember Me: Disabled"
        );

    }


    // ======================================
    // SUCCESS
    // ======================================

    successPopup.classList.add("show");

}


// ==========================================
// SIGN IN BUTTON
// ==========================================

signInBtn.addEventListener(
    "click",
    loginUser
);


// ==========================================
// ACCOUNT NAME ENTER KEY
// ==========================================

accountName.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            password.focus();

        }

    }
);


// ==========================================
// PASSWORD ENTER KEY
// ==========================================

password.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            loginUser();

        }

    }
);


// ==========================================
// CLEAR MESSAGE WHEN TYPING
// ==========================================

accountName.addEventListener(
    "input",
    function () {

        loginMessage.textContent = "";

    }
);


password.addEventListener(
    "input",
    function () {

        loginMessage.textContent = "";

    }
);


// ==========================================
// CLOSE SUCCESS POPUP
// ==========================================

closePopup.addEventListener(
    "click",
    function () {

        successPopup.classList.remove("show");

    }
);


// ==========================================
// CLOSE ERROR POPUP
// ==========================================

closeErrorPopup.addEventListener(
    "click",
    function () {

        errorPopup.classList.remove("show");

    }
);


// ==========================================
// HELP LINK
// ==========================================

helpLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        showError(
            "Help",
            "For this college project, the help section is only a demonstration."
        );

    }
);


// ==========================================
// SEARCH BUTTON
// ==========================================

searchButton.addEventListener(
    "click",
    function () {

        // trim()
        const searchText =
            searchInput.value.trim();


        // Empty search

        if (searchText === "") {

            showError(
                "Search",
                "Please enter something to search."
            );

            return;
        }


        // toLowerCase()

        const lowerSearch =
            searchText.toLowerCase();


        // length

        const searchLength =
            searchText.length;


        // includes()

        const containsGame =
            lowerSearch.includes("game");


        // Console output

        console.log(
            "Search Text:",
            searchText
        );

        console.log(
            "Lowercase Search:",
            lowerSearch
        );

        console.log(
            "Search Length:",
            searchLength
        );

        console.log(
            "Contains 'game':",
            containsGame
        );


        // Popup

        showError(
            "Search",
            "You searched for: " + searchText
        );

    }
);


// ==========================================
// SEARCH ENTER KEY
// ==========================================

searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchButton.click();

        }

    }
);