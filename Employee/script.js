// =========================
// ADD EMPLOYEE
// =========================

function addEmployee() {

    let employee = {
        employeeId: document.getElementById("empId").value.trim(),
        employeeName: document.getElementById("empName").value.trim(),
        department: document.getElementById("department").value.trim(),
        salary: document.getElementById("salary").value.trim()
    };

    // Check empty fields
    if (
        employee.employeeId === "" ||
        employee.employeeName === "" ||
        employee.department === "" ||
        employee.salary === ""
    ) {
        alert("Please fill all employee details.");
        return;
    }


    // Send employee to server
    fetch("http://localhost:3000/api/employees", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
})

    .then(response => {

        if (!response.ok) {
            throw new Error("Unable to save employee");
        }

        return response.json();

    })

    .then(data => {

        console.log("Employee saved:", data);

        alert("Employee added successfully!");

        // Clear form
        document.getElementById("empId").value = "";
        document.getElementById("empName").value = "";
        document.getElementById("department").value = "";
        document.getElementById("salary").value = "";

    })

    .catch(error => {

        console.error("Error:", error);

        alert("Unable to add employee.");

    });

}


// =========================
// DISPLAY EMPLOYEE
// =========================

function displayEmployee(employee) {

    let tableBody = document.getElementById("employeeBody");

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${employee.employeeId}</td>
        <td>${employee.employeeName}</td>
        <td>${employee.department}</td>
        <td>₹${employee.salary}</td>
    `;

    tableBody.appendChild(row);
}


// =========================
// LOAD EMPLOYEES
// =========================

function loadEmployees() {
    fetch("employees.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to load employees.json");
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById("employeeBody");
            tableBody.innerHTML = "";

            data.forEach(employee => {
                displayEmployee(employee);
            });

            updateRecordCount();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Unable to load employees. Check employees.json.");
        });
}
            


// =========================
// UPDATE RECORD COUNT
// =========================

function updateRecordCount() {

    let rows = document.querySelectorAll(
        "#employeeBody tr"
    );

    document.getElementById("recordCount").textContent =
        String(rows.length).padStart(2, "0");
}