// =====================================================
// CASE STUDY 1
// REVERSE A STRING
// =====================================================

function reverseString() {

    // Get input

    let str =
        document.getElementById("reverseInput").value;


    // Check empty input

    if (str.trim() === "") {

        document.getElementById("reverseOutput").innerHTML =
            "⚠ Please enter a string.";

        return;
    }


    // Reverse string
    //
    // split("")  → converts string into array
    // reverse()  → reverses the array
    // join("")   → converts array back into string

    let reversed =
        str.split("").reverse().join("");


    // Display result

    document.getElementById("reverseOutput").innerHTML = `

        <strong>Original:</strong> ${str}

        <br><br>

        <strong>Reversed:</strong>
        <span style="color:#9be65f;">
            ${reversed}
        </span>

    `;
}



// =====================================================
// CASE STUDY 2
// COUNT VOWELS
// =====================================================

function countVowels() {

    // Get paragraph

    let paragraph =
        document.getElementById("vowelInput").value;


    // Check empty input

    if (paragraph.trim() === "") {

        document.getElementById("vowelOutput").innerHTML =
            "⚠ Please enter a paragraph.";

        return;
    }


    // Find all vowels

    let vowels =
        paragraph.match(/[aeiou]/gi);


    // If no vowels are found

    let count =
        vowels ? vowels.length : 0;


    // Display result

    if (count === 0) {

        document.getElementById("vowelOutput").innerHTML = `

            <div class="vowel-count">
                0
            </div>

            <div class="vowel-list">
                No vowels were found.
            </div>

        `;

        return;
    }


    document.getElementById("vowelOutput").innerHTML = `

        <div>
            Total Vowels:
        </div>

        <div class="vowel-count">
            ${count}
        </div>

        <div class="vowel-list">

            Vowels found:
            ${vowels.join(", ")}

        </div>

    `;
}