const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 4000;

const dataFile = path.join(__dirname, "employees.json");

// Allow JSON data
app.use(express.json());

// Serve HTML, CSS and JS files
app.use(express.static(__dirname));


// =========================
// GET EMPLOYEES
// =========================

app.get("/api/employees", (req, res) => {

    fs.readFile(dataFile, "utf8", (err, data) => {

        if (err) {
            return res.status(500).json({
                error: "Unable to read employees.json"
            });
        }

        res.json(JSON.parse(data));
    });

});


// =========================
// ADD EMPLOYEE
// =========================

app.post("/api/employees", (req, res) => {

    const newEmployee = req.body;

    fs.readFile(dataFile, "utf8", (err, data) => {

        if (err) {
            return res.status(500).json({
                error: "Unable to read employees.json"
            });
        }

        let employees = JSON.parse(data);

        employees.push(newEmployee);

        fs.writeFile(
            dataFile,
            JSON.stringify(employees, null, 4),
            "utf8",
            (err) => {

                if (err) {
                    return res.status(500).json({
                        error: "Unable to save employee"
                    });
                }

                res.json({
                    message: "Employee added successfully",
                    employee: newEmployee
                });

            }
        );

    });

});


// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});