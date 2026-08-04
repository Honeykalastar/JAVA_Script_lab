function calculateResult() {

    // Student Details
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let course = document.getElementById("course").value.trim();
    let semester = document.getElementById("semester").value;

    // Password
    let originalPassword = document.getElementById("createPassword").value;

    // Marks
    let cc = Number(document.getElementById("cc").value);
    let cn = Number(document.getElementById("cn").value);
    let agentic_ai = Number(document.getElementById("agentic-ai").value);
    let javascript = Number(document.getElementById("javascript").value);
    let flexi_credit = Number(document.getElementById("flexi-credit").value);

    // empty field validation

    if (
        name === "" ||
        roll === "" ||
        course === "" ||
        semester === "" ||
        originalPassword === "" ||
        document.getElementById("cc").value === "" ||
        document.getElementById("cn").value === "" ||
        document.getElementById("agentic-ai").value === "" ||
        document.getElementById("javascript").value === "" ||
        document.getElementById("flexi-credit").value === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    /// Password Validation

let errorMessage = "";

if (originalPassword.length < 8) {
    errorMessage += "• Password must be at least 8 characters long.\n";
}

if (!/[A-Z]/.test(originalPassword)) {
    errorMessage += "• Password must contain at least one uppercase letter.\n";
}

if (!/[a-z]/.test(originalPassword)) {
    errorMessage += "• Password must contain at least one lowercase letter.\n";
}

if (!/[0-9]/.test(originalPassword)) {
    errorMessage += "• Password must contain at least one number.\n";
}

if (!/[@$!%*?&]/.test(originalPassword)) {
    errorMessage += "• Password must contain at least one special character.\n";
}

if (errorMessage !== "") {
    alert(errorMessage);
    return;
}

    // marks validation 

    let marks = [
        cc,
        cn,
        agentic_ai,
        javascript,
        flexi_credit
    ];

    for (let i = 0; i < marks.length; i++) {

        if (marks[i] < 0 || marks[i] > 100) {

            alert("Marks should be between 0 and 100.");
            return;

        }

    }

    //total marks and percentage

    let total =
        cc +
        cn +
        agentic_ai +
        javascript +
        flexi_credit;

    let percentage = total / 5;

    // grade

    let grade = "";

    if (percentage >= 90) {

        grade = "A+";

    } else if (percentage >= 80) {

        grade = "A";

    } else if (percentage >= 70) {

        grade = "B";

    } else if (percentage >= 60) {

        grade = "C";

    } else if (percentage >= 50) {

        grade = "D";

    } else {

        grade = "F";

    }

    // pass/fail

    let result = "";

    if (
        cc >= 35 &&
        cn >= 35 &&
        agentic_ai >= 35 &&
        javascript >= 35 &&
        flexi_credit >= 35
    ) {

        result = "PASS ✅";

    } else {

        result = "FAIL ❌";

    }

    //remarks based on grade

    let remarks = "";

    switch (grade) {

        case "A+":
            remarks = "Excellent";
            break;

        case "A":
            remarks = "Very Good";
            break;

        case "B":
            remarks = "Good";
            break;

        case "C":
            remarks = "Average";
            break;

        case "D":
            remarks = "Needs Improvement";
            break;

        default:
            remarks = "Failed";
    }

    // Highest and Lowest Marks

    let subjects = [
        "CC",
        "CN",
        "Agentic AI",
        "JavaScript",
        "Flexi Credit"
    ];

    let highest = Math.max(...marks);
    let lowest = Math.min(...marks);

    let highestSubject = subjects[marks.indexOf(highest)];
    let lowestSubject = subjects[marks.indexOf(lowest)];

    let today = new Date();

    let date = today.toLocaleDateString();
    let time = today.toLocaleTimeString();

    let resultId =
        "RES" + Math.floor(Math.random() * 9000 + 1000);

    console.log("Student Result Generated");

    console.table({
        Name: name,
        PRN: roll,
        Total: total,
        Percentage: percentage.toFixed(2),
        Grade: grade
    });

    //Display result
    document.getElementById("output").innerHTML =

        "<h2>Student Result</h2>" +

        "<hr><br>" +

        "<b>Result ID :</b> " + resultId + "<br><br>" +

        "<b>Date :</b> " + date + "<br><br>" +

        "<b>Time :</b> " + time + "<br><br>" +

        "<b>Name :</b> " + name + "<br><br>" +

        "<b>PRN :</b> " + roll + "<br><br>" +

        "<b>Course :</b> " + course + "<br><br>" +

        "<b>Semester :</b> " + semester + "<br><br>" +

        "<table>" +

        "<tr><th>Subject</th><th>Marks</th></tr>" +

        "<tr><td>CC</td><td>" + cc + "</td></tr>" +

        "<tr><td>CN</td><td>" + cn + "</td></tr>" +

        "<tr><td>Agentic AI</td><td>" + agentic_ai + "</td></tr>" +

        "<tr><td>JavaScript</td><td>" + javascript + "</td></tr>" +

        "<tr><td>Flexi Credit</td><td>" + flexi_credit + "</td></tr>" +

        "</table><br>" +

        "<b>Total Marks :</b> " + total + " / 500<br><br>" +

        "<b>Percentage :</b> " + percentage.toFixed(2) + "%<br><br>" +

        "<b>Grade :</b> " + grade + "<br><br>" +

        "<b>Result :</b> " + result + "<br><br>" +

        "<b>Highest Marks :</b> " + highest + " (" + highestSubject + ")<br><br>" +

        "<b>Lowest Marks :</b> " + lowest + " (" + lowestSubject + ")<br><br>" +

        "<b>Remarks :</b> " + remarks + "<br><br>" +

        "<hr>" +

        (result === "PASS ✅"

            ? "<h2 style='color:green;'>🎉 Congratulations! You Passed.</h2>"

            : "<h2 style='color:red;'>❌ Better Luck Next Time.</h2>");

} // End of calculateResult()



// print result

function printResult() {

    let content = document.getElementById("output").innerHTML;

    if (content.includes("Your Result Will Appear Here")) {

        alert("Please calculate the result first.");
        return;

    }

    let printWindow = window.open("", "", "width=800,height=700");

    printWindow.document.write("<html><head><title>Student Result</title></head><body>");

    printWindow.document.write(content);

    printWindow.document.write("</body></html>");

    printWindow.document.close();

    printWindow.print();

}



// reset form

function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
    document.getElementById("semester").selectedIndex = 0;

    document.getElementById("createPassword").value = "";

    document.getElementById("cc").value = "";
    document.getElementById("cn").value = "";
    document.getElementById("agentic-ai").value = "";
    document.getElementById("javascript").value = "";
    document.getElementById("flexi-credit").value = "";

    document.getElementById("output").innerHTML =
        "<h3 style='text-align:center;'>Your Result Will Appear Here</h3>";

}