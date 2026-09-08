// =====================================================
// LIVE CHARACTER AND WORD COUNTER
// =====================================================

function updateCounter() {

    let str =
        document.getElementById("stringInput").value;


    // Character count

    document.getElementById("charCount").textContent =
        str.length;


    // Word count

    let words = str.trim() === ""
        ? []
        : str.trim().split(/\s+/);


    document.getElementById("wordCount").textContent =
        words.length;
}



// =====================================================
// EXPERIMENT 6
// BASIC STRING OPERATIONS + STRING METHODS
// =====================================================

function performStringOperations() {

    let str =
        document.getElementById("stringInput").value;


    // Check empty input

    if (str.trim() === "") {

        document.getElementById("output").innerHTML = `

            <div class="empty-state">

                <div class="code-icon">
                    !
                </div>

                <h3>Please enter a string</h3>

                <p>
                    Enter some text above to perform the operations.
                </p>

            </div>

        `;

        return;
    }


    // =================================================
    // BASIC STRING OPERATIONS
    // =================================================

    let length =
        str.length;


    let uppercase =
        str.toUpperCase();


    let lowercase =
        str.toLowerCase();


    // =================================================
    // REQUIRED STRING METHODS
    // =================================================


    // substring()

    let substringResult =
        str.substring(0, 10);


    // indexOf()

    let searchWord = "powerful";

    let position =
        str.toLowerCase().indexOf(searchWord);


    // split()

    let words =
        str.trim().split(/\s+/);


    // replace()

    let replaced =
        str.replace(/powerful/gi, "popular");


    // =================================================
    // DISPLAY RESULTS
    // =================================================

    document.getElementById("output").innerHTML = `

        <div class="result-grid">


            <!-- LENGTH -->

            <div class="result-card">

                <div class="method">
                    str.length
                </div>

                <div class="label">
                    String Length
                </div>

                <div class="value highlight">
                    ${length}
                </div>

            </div>


            <!-- SUBSTRING -->

            <div class="result-card">

                <div class="method">
                    str.substring(0, 10)
                </div>

                <div class="label">
                    Substring
                </div>

                <div class="value">
                    ${substringResult}
                </div>

            </div>


            <!-- UPPERCASE -->

            <div class="result-card">

                <div class="method">
                    str.toUpperCase()
                </div>

                <div class="label">
                    Uppercase
                </div>

                <div class="value">
                    ${uppercase}
                </div>

            </div>


            <!-- LOWERCASE -->

            <div class="result-card">

                <div class="method">
                    str.toLowerCase()
                </div>

                <div class="label">
                    Lowercase
                </div>

                <div class="value">
                    ${lowercase}
                </div>

            </div>


            <!-- INDEX OF -->

            <div class="result-card">

                <div class="method">
                    str.indexOf("powerful")
                </div>

                <div class="label">
                    Position of "powerful"
                </div>

                <div class="value highlight">

                    ${
                        position !== -1
                            ? position
                            : "Not Found"
                    }

                </div>

            </div>


            <!-- SPLIT -->

            <div class="result-card">

                <div class="method">
                    str.split(" ")
                </div>

                <div class="label">
                    Split into Words
                </div>

                <div class="value">
                    ${words.join(", ")}
                </div>

            </div>


            <!-- REPLACE -->

            <div class="result-card full">

                <div class="method">
                    str.replace("powerful", "popular")
                </div>

                <div class="label">
                    Replaced String
                </div>

                <div class="value">
                    ${replaced}
                </div>

            </div>


        </div>

    `;
}