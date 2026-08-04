function reverseString(str) {

    return str.split("").reverse().join("");

}

function message() {

    var msg = "Palindrome Checker";

    function display() {

        return msg;

    }

    return display;

}

function checkPalindrome() {

    try {

        var word = document.getElementById("word").value.trim();

        if (word == "") {

            throw "Please enter a word.";

        }

        if (!/^[A-Za-z]+$/.test(word)) {

            throw "Only alphabets are allowed.";

        }

        if (word.length < 3) {

            throw "Minimum 3 characters required.";

        }

        if (word.length > 20) {

            throw "Maximum 20 characters allowed.";

        }

        var input = word.toLowerCase();

        var reverse = reverseString(input);

        var result;

        if (input == reverse) {

            result = "Palindrome";

        }

        else {

            result = "Not a Palindrome";

        }

        document.write(`

<!DOCTYPE html>

<html>

<head>

<title>Palindrome Checker</title>

<link rel="stylesheet" href="style.css">

</head>

<body>

<div class="container">

<h2>🔄 ${message()()}</h2>

<div class="result">

<p><b>Word :</b> ${word}</p>

<p>

<b>Result :</b>

<span class="${result=="Palindrome" ? "success":"fail"}">

${result=="Palindrome" ? "✅ Palindrome":"❌ Not a Palindrome"}

</span>

</p>

</div>

<input
type="button"
value="Check Another Word"
onclick="window.location.href='index.html'">

</div>

</body>

</html>

`);

    }

    catch(error){

        alert(error);

    }

}