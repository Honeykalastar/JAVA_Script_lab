/* =========================================================
   TEACHER ATTENDANCE MANAGEMENT SYSTEM
   ARRAY METHODS: push(), pop(), find(), filter(), forEach()
   ========================================================= */


/* ================= TEACHER ARRAY ================= */

// Empty array.
// Teacher details will be entered by the user through the form.
let teachers = [];


/* ================= INITIALIZE ================= */

document.addEventListener("DOMContentLoaded", function () {

    displayAll();

    updateDate();

    updateStatistics();

});


/* ================= DISPLAY ALL ================= */

function displayAll() {

    displayDashboard();

    displayAttendance();

    displayTeachers();

    updateStatistics();

}


/* ================= DASHBOARD TABLE ================= */

function displayDashboard() {

    let table = document.getElementById("dashboardTable");

    table.innerHTML = "";

    teachers.forEach(function (teacher) {

        table.innerHTML += createDashboardRow(teacher);

    });

}


/* ================= ATTENDANCE TABLE ================= */

function displayAttendance() {

    let table = document.getElementById("attendanceTable");

    table.innerHTML = "";

    teachers.forEach(function (teacher) {

        table.innerHTML += createAttendanceRow(teacher);

    });

}


/* ================= TEACHER TABLE ================= */

function displayTeachers() {

    let table = document.getElementById("teacherTable");

    table.innerHTML = "";

    teachers.forEach(function (teacher) {

        table.innerHTML += createTeacherRow(teacher);

    });

}


/* ================= DASHBOARD ROW ================= */

function createDashboardRow(teacher) {

    return `
        <tr>

            <td>

                <div class="teacher-cell">

                    <div class="teacher-avatar">
                        ${getInitials(teacher.name)}
                    </div>

                    <div>

                        <div class="teacher-name">
                            ${teacher.name}
                        </div>

                        <div class="teacher-email">
                            ${teacher.email}
                        </div>

                    </div>

                </div>

            </td>

            <td>
                ${teacher.subject}
            </td>

            <td>
                ${teacher.time}
            </td>

            <td>
                ${getStatusHTML(teacher.status)}
            </td>

            <td>

                <div class="action-buttons">

                    <button
                        class="action-btn present"
                        title="Mark Present"
                        onclick="markPresent(${teacher.id})">
                        ✓
                    </button>

                    <button
                        class="action-btn absent"
                        title="Mark Absent"
                        onclick="markAbsent(${teacher.id})">
                        ✕
                    </button>

                </div>

            </td>

        </tr>
    `;

}


/* ================= ATTENDANCE ROW ================= */

function createAttendanceRow(teacher) {

    return `
        <tr>

            <td>

                <div class="teacher-cell">

                    <div class="teacher-avatar">
                        ${getInitials(teacher.name)}
                    </div>

                    <div class="teacher-name">
                        ${teacher.name}
                    </div>

                </div>

            </td>

            <td>
                ${teacher.email}
            </td>

            <td>
                ${teacher.subject}
            </td>

            <td>
                ${getStatusHTML(teacher.status)}
            </td>

            <td>

                <div class="action-buttons">

                    <button
                        class="action-btn present"
                        title="Mark Present"
                        onclick="markPresent(${teacher.id})">
                        ✓
                    </button>

                    <button
                        class="action-btn absent"
                        title="Mark Absent"
                        onclick="markAbsent(${teacher.id})">
                        ✕
                    </button>

                    <button
                        class="action-btn delete"
                        title="Delete Teacher"
                        onclick="deleteTeacher(${teacher.id})">
                        🗑
                    </button>

                </div>

            </td>

        </tr>
    `;

}


/* ================= TEACHER ROW ================= */

function createTeacherRow(teacher) {

    return `
        <tr>

            <td>

                <div class="teacher-cell">

                    <div class="teacher-avatar">
                        ${getInitials(teacher.name)}
                    </div>

                    <div class="teacher-name">
                        ${teacher.name}
                    </div>

                </div>

            </td>

            <td>
                ${teacher.email}
            </td>

            <td>
                ${teacher.subject}
            </td>

            <td>
                ${teacher.time}
            </td>

            <td>
                ${getStatusHTML(teacher.status)}
            </td>

            <td>

                <div class="action-buttons">

                    <button
                        class="action-btn present"
                        title="Mark Present"
                        onclick="markPresent(${teacher.id})">
                        ✓
                    </button>

                    <button
                        class="action-btn absent"
                        title="Mark Absent"
                        onclick="markAbsent(${teacher.id})">
                        ✕
                    </button>

                    <button
                        class="action-btn delete"
                        title="Delete Teacher"
                        onclick="deleteTeacher(${teacher.id})">
                        🗑
                    </button>

                </div>

            </td>

        </tr>
    `;

}


/* ================= STATUS HTML ================= */

function getStatusHTML(status) {

    if (status === "Present") {

        return `
            <span class="status present">
                ● Present
            </span>
        `;

    }


    if (status === "Absent") {

        return `
            <span class="status absent">
                ● Absent
            </span>
        `;

    }


    return `
        <span class="status not-marked">
            ● Not Marked
        </span>
    `;

}


/* ================= GET INITIALS ================= */

function getInitials(name) {

    let parts = name.trim().split(" ");

    if (parts.length === 1) {

        return parts[0]
            .substring(0, 2)
            .toUpperCase();

    }

    return (
        parts[0][0] +
        parts[parts.length - 1][0]
    ).toUpperCase();

}


/* ================= MARK PRESENT ================= */

function markPresent(id) {

    // find() searches the array for the teacher
    let teacher = teachers.find(function (item) {

        return item.id === id;

    });


    if (!teacher) {

        showToast("Teacher not found.");

        return;

    }


    teacher.status = "Present";

    displayAll();

    showToast(
        teacher.name + " marked Present."
    );

}


/* ================= MARK ABSENT ================= */

function markAbsent(id) {

    // find() searches the array for the teacher
    let teacher = teachers.find(function (item) {

        return item.id === id;

    });


    if (!teacher) {

        showToast("Teacher not found.");

        return;

    }


    teacher.status = "Absent";

    displayAll();

    showToast(
        teacher.name + " marked Absent."
    );

}


/* ================= MARK ALL PRESENT ================= */

function markAllPresent() {

    // forEach() visits every teacher
    teachers.forEach(function (teacher) {

        teacher.status = "Present";

    });


    displayAll();

    showToast(
        "All teachers marked Present."
    );

}


/* ================= RESET ATTENDANCE ================= */

function resetAttendance() {

    teachers.forEach(function (teacher) {

        teacher.status = "Not Marked";

    });


    displayAll();

    showToast(
        "Attendance has been reset."
    );

}


/* ================= DELETE TEACHER ================= */

function deleteTeacher(id) {

    // find() is used to find the teacher
    let teacher = teachers.find(function (item) {

        return item.id === id;

    });


    if (!teacher) {

        showToast("Teacher not found.");

        return;

    }


    let confirmation = confirm(
        "Delete " + teacher.name + " from the teacher list?"
    );


    if (!confirmation) {

        return;

    }


    // filter() creates a new array without the selected teacher
    teachers = teachers.filter(function (item) {

        return item.id !== id;

    });


    displayAll();

    showToast(
        teacher.name + " removed."
    );

}


/* =========================================================
   POP FUNCTION
   ========================================================= */

/*
   This function removes the LAST teacher from the array.

   pop() removes the last element of an array.
*/

function removeLastTeacher() {

    if (teachers.length === 0) {

        showToast("No teachers available to remove.");

        return;

    }


    // pop() removes the last teacher
    let removedTeacher = teachers.pop();


    displayAll();

    showToast(
        removedTeacher.name + " removed using pop()."
    );

}


/* =========================================================
   ADD TEACHER
   ========================================================= */

document.getElementById("teacherForm").addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* ================= GET INPUT VALUES ================= */

        let name =
            document.getElementById("teacherName")
            .value
            .trim();


        let email =
            document.getElementById("teacherEmail")
            .value
            .trim();


        let subject =
            document.getElementById("teacherSubject")
            .value
            .trim();


        let time =
            document.getElementById("teacherTime")
            .value
            .trim();


        /* ================= VALIDATION ================= */

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            time === ""
        ) {

            showToast(
                "Please fill all fields."
            );

            return;

        }


        /* ================= CREATE OBJECT ================= */

        let newTeacher = {

            id: Date.now(),

            name: name,

            email: email,

            subject: subject,

            time: time,

            status: "Not Marked"

        };


        /* =====================================================
           PUSH FUNCTION
           ===================================================== */

        // push() adds the new teacher to the END of the array
        teachers.push(newTeacher);


        /* ================= RESET FORM ================= */

        document
            .getElementById("teacherForm")
            .reset();


        /* ================= UPDATE DISPLAY ================= */

        displayAll();


        /* ================= MESSAGE ================= */

        showToast(
            name + " added successfully using push()."
        );

    }
);


/* ================= STATISTICS ================= */

function updateStatistics() {

    // length gives the total number of teachers
    let total = teachers.length;


    /* ================= PRESENT ================= */

    // filter() returns teachers whose status is Present
    let present = teachers.filter(
        function (teacher) {

            return teacher.status === "Present";

        }
    ).length;


    /* ================= ABSENT ================= */

    // filter() returns teachers whose status is Absent
    let absent = teachers.filter(
        function (teacher) {

            return teacher.status === "Absent";

        }
    ).length;


    let marked = present + absent;

    let rate = 0;


    if (marked > 0) {

        rate = Math.round(
            (present / marked) * 100
        );

    }


    /* ================= DASHBOARD ================= */

    document.getElementById(
        "totalTeachers"
    ).textContent = total;


    document.getElementById(
        "presentTeachers"
    ).textContent = present;


    document.getElementById(
        "absentTeachers"
    ).textContent = absent;


    document.getElementById(
        "attendanceRate"
    ).textContent = rate + "%";


    /* ================= REPORT ================= */

    document.getElementById(
        "reportTotal"
    ).textContent = total;


    document.getElementById(
        "reportPresent"
    ).textContent = present;


    document.getElementById(
        "reportAbsent"
    ).textContent = absent;


    document.getElementById(
        "reportRate"
    ).textContent = rate + "%";


    /* ================= PROGRESS ================= */

    let presentPercent = 0;

    let absentPercent = 0;


    if (total > 0) {

        presentPercent =
            Math.round(
                (present / total) * 100
            );


        absentPercent =
            Math.round(
                (absent / total) * 100
            );

    }


    document.getElementById(
        "presentPercentage"
    ).textContent =
        presentPercent + "%";


    document.getElementById(
        "absentPercentage"
    ).textContent =
        absentPercent + "%";


    document.getElementById(
        "presentProgress"
    ).style.width =
        presentPercent + "%";


    document.getElementById(
        "absentProgress"
    ).style.width =
        absentPercent + "%";

}


/* ================= SEARCH ================= */

function searchTeacher(inputId, tableId) {

    let input =
        document.getElementById(inputId)
        .value
        .toLowerCase();


    let rows =
        document
        .getElementById(tableId)
        .getElementsByTagName("tr");


    for (let i = 0; i < rows.length; i++) {

        let text =
            rows[i]
            .textContent
            .toLowerCase();


        if (text.includes(input)) {

            rows[i].style.display = "";

        }

        else {

            rows[i].style.display = "none";

        }

    }

}


/* ================= NAVIGATION ================= */

function showSection(sectionId, clickedButton) {

    let sections =
        document.querySelectorAll(".section");


    sections.forEach(function (section) {

        section.classList.remove(
            "active-section"
        );

    });


    let selected =
        document.getElementById(sectionId);


    if (selected) {

        selected.classList.add(
            "active-section"
        );

    }


    let navItems =
        document.querySelectorAll(".nav-item");


    navItems.forEach(function (item) {

        item.classList.remove("active");

    });


    clickedButton.classList.add("active");


    updatePageTitle(sectionId);

}


/* ================= PAGE TITLES ================= */

function updatePageTitle(sectionId) {

    let title =
        document.getElementById("pageTitle");


    let subtitle =
        document.getElementById("pageSubtitle");


    if (sectionId === "dashboard") {

        title.textContent = "Dashboard";

        subtitle.textContent =
            "Monitor teacher attendance and daily records";

    }


    else if (sectionId === "attendance") {

        title.textContent = "Attendance";

        subtitle.textContent =
            "Manage today's teacher attendance";

    }


    else if (sectionId === "teachers") {

        title.textContent = "Teachers";

        subtitle.textContent =
            "View and manage registered teachers";

    }


    else if (sectionId === "reports") {

        title.textContent = "Reports";

        subtitle.textContent =
            "Attendance statistics and summaries";

    }


    else if (sectionId === "about") {

        title.textContent = "About System";

        subtitle.textContent =
            "TeacherTrack attendance management";

    }

}


/* ================= DATE ================= */

function updateDate() {

    let date = new Date();


    let options = {

        weekday: "long",

        year: "numeric",

        month: "long",

        day: "numeric"

    };


    let formattedDate =
        date.toLocaleDateString(
            "en-IN",
            options
        );


    document.getElementById(
        "currentDate"
    ).textContent = formattedDate;


    document.getElementById(
        "attendanceDate"
    ).textContent = formattedDate;

}


/* ================= TOAST ================= */

function showToast(message) {

    let toast =
        document.getElementById("toast");


    let toastMessage =
        document.getElementById("toastMessage");


    toastMessage.textContent = message;


    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


/* ================= MOBILE SIDEBAR ================= */

function toggleSidebar() {

    let sidebar =
        document.querySelector(".sidebar");


    sidebar.classList.toggle(
        "mobile-open"
    );

}


/* =========================================================
   ARRAY METHODS USED IN THIS PROJECT
   =========================================================

   1. push()
      Adds a new teacher to the array.

   2. pop()
      Removes the last teacher from the array.

   3. forEach()
      Displays and updates every teacher.

   4. find()
      Finds a particular teacher using their ID.

   5. filter()
      Removes/searches/selects teachers based on conditions.

   6. length
      Finds the total number of teachers.

   ========================================================= */