/* =========================================
   TASKFLOW - JAVASCRIPT AND JQUERY
   Experiment No. 12
========================================= */

$(document).ready(function () {

    // =====================================
    // 1. SELECT HTML ELEMENTS
    // =====================================

    const $taskForm = $("#taskForm");
    const $taskTitle = $("#taskTitle");
    const $taskPriority = $("#taskPriority");
    const $taskDueDate = $("#taskDueDate");

    const $taskList = $("#taskList");
    const $searchTasks = $("#searchTasks");

    const $totalTasks = $("#totalTasks");
    const $completedTasks = $("#completedTasks");
    const $pendingTasks = $("#pendingTasks");
    const $completionRate = $("#completionRate");

    const $circlePercentage = $("#circlePercentage");
    const $progressRing = $("#progressRing");
    const $progressCircle = $("#progressCircle");
    const $progressBarFill = $("#progressBarFill");
    const $remainingMessage = $("#remainingMessage");

    const $formMessage = $("#formMessage");

    const $newQuoteButton = $("#newQuoteButton");
    const $quoteStatus = $("#quoteStatus");
    const $quoteText = $("#quoteText");
    const $quoteAuthor = $("#quoteAuthor");
    const $quoteError = $("#quoteError");


    // =====================================
    // 2. APPLICATION VARIABLES
    // =====================================

    const STORAGE_KEY = "taskflowTasks";

    const QUOTE_API = "https://dummyjson.com/quotes/random";

    const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * 65;

    let currentFilter = "all";
    let tasks = [];
    let quoteRequest = null;
    let messageTimer = null;


    // =====================================
    // 3. FORMAT DATE
    // =====================================

    function getTodayDate() {

        const today = new Date();

        const year = today.getFullYear();

        const month = String(
            today.getMonth() + 1
        ).padStart(2, "0");

        const day = String(
            today.getDate()
        ).padStart(2, "0");

        return `${year}-${month}-${day}`;
    }


    function formatDate(dateString) {

        if (!dateString) {
            return "No due date";
        }

        const parts = dateString.split("-");

        if (parts.length !== 3) {
            return "No due date";
        }

        const date = new Date(
            Number(parts[0]),
            Number(parts[1]) - 1,
            Number(parts[2])
        );

        return date.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    }


    function formatTime(dateString) {

        const date = new Date(dateString);

        return date.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
    }


    function updateCurrentDate() {

        const today = new Date();

        $("#currentDate").text(
            today.toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            })
        );

    }


    // =====================================
    // 4. CREATE SAMPLE TASKS
    // =====================================

    function createSampleTasks() {

        const today = getTodayDate();

        const tomorrowDate = new Date();

        tomorrowDate.setDate(
            tomorrowDate.getDate() + 1
        );

        const tomorrowYear = tomorrowDate.getFullYear();

        const tomorrowMonth = String(
            tomorrowDate.getMonth() + 1
        ).padStart(2, "0");

        const tomorrowDay = String(
            tomorrowDate.getDate()
        ).padStart(2, "0");

        const tomorrow =
            `${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`;

        const now = new Date().toISOString();

        return [

            {
                id: "sample-1",
                title: "DC exam prep",
                priority: "High",
                dueDate: today,
                completed: false,
                createdAt: now
            },

            {
                id: "sample-2",
                title: "Study DSA",
                priority: "High",
                dueDate: tomorrow,
                completed: false,
                createdAt: now
            },

            {
                id: "sample-3",
                title: "JS practical",
                priority: "Medium",
                dueDate: today,
                completed: true,
                createdAt: now
            }

        ];

    }


    // =====================================
    // 5. VALIDATE TASK DATA
    // =====================================

    function isValidTask(task) {

        const validPriorities = [
            "High",
            "Medium",
            "Low"
        ];

        return (
            task !== null &&
            typeof task === "object" &&
            typeof task.id === "string" &&
            typeof task.title === "string" &&
            task.title.trim().length > 0 &&
            task.title.length <= 120 &&
            validPriorities.includes(task.priority) &&
            typeof task.completed === "boolean" &&
            typeof task.createdAt === "string" &&
            (
                task.dueDate === "" ||
                typeof task.dueDate === "string"
            )
        );

    }


    // =====================================
    // 6. LOAD TASKS FROM LOCALSTORAGE
    // =====================================

    function loadTasks() {

        try {

            const savedTasks =
                localStorage.getItem(STORAGE_KEY);

            // First visit: load sample tasks.
            if (savedTasks === null) {

                tasks = createSampleTasks();

                saveTasks();

                return;
            }

            const parsedTasks = JSON.parse(savedTasks);

            if (!Array.isArray(parsedTasks)) {
                throw new Error("Invalid task data.");
            }

            if (!parsedTasks.every(isValidTask)) {
                throw new Error("Invalid task format.");
            }

            tasks = parsedTasks;

        } catch (error) {

            console.error(
                "Unable to load saved tasks:",
                error
            );

            tasks = [];

            try {

                localStorage.removeItem(STORAGE_KEY);

            } catch (storageError) {

                console.error(
                    "Unable to clear invalid storage:",
                    storageError
                );

            }

            showFormMessage(
                "Saved data could not be loaded. Start with new tasks.",
                true
            );

        }

    }


    // =====================================
    // 7. SAVE TASKS TO LOCALSTORAGE
    // =====================================

    function saveTasks() {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(tasks)
            );

            return true;

        } catch (error) {

            console.error(
                "Unable to save tasks:",
                error
            );

            showFormMessage(
                "Warning: Tasks could not be saved in browser storage.",
                true
            );

            return false;

        }

    }


    // =====================================
    // 8. DISPLAY FORM MESSAGES
    // =====================================

    function showFormMessage(message, isError = false) {

        clearTimeout(messageTimer);

        $formMessage
            .text(message)
            .css(
                "color",
                isError ? "#ef4444" : "#159b73"
            );

        if (message) {

            messageTimer = setTimeout(function () {

                $formMessage.text("");

            }, 3500);

        }

    }


    // =====================================
    // 9. ADD A NEW TASK
    // =====================================

    $taskForm.on("submit", function (event) {

        // Prevent page reload.
        event.preventDefault();

        const title = $taskTitle.val().trim();

        const priority = $taskPriority.val();

        const dueDate = $taskDueDate.val();

        if (title.length === 0) {

            showFormMessage(
                "Please enter a task title.",
                true
            );

            $taskTitle.trigger("focus");

            return;
        }


        if (title.length > 120) {

            showFormMessage(
                "Task title cannot exceed 120 characters.",
                true
            );

            return;
        }


        if (
            dueDate &&
            dueDate < getTodayDate()
        ) {

            showFormMessage(
                "Please choose today or a future date.",
                true
            );

            return;
        }


        const newTask = {

            id:
                window.crypto &&
                typeof window.crypto.randomUUID === "function"
                    ? window.crypto.randomUUID()
                    : Date.now().toString() +
                      Math.random().toString(16).slice(2),

            title: title,

            priority: priority,

            dueDate: dueDate,

            completed: false,

            createdAt: new Date().toISOString()

        };


        tasks.unshift(newTask);

        saveTasks();

        // Clear the form.
        $taskTitle.val("");

        $taskPriority.val("High");

        $taskDueDate.val("");

        showFormMessage("Task added successfully!");

        // Refresh the interface.
        renderTasks();

        updateStats();

        $taskTitle.trigger("focus");

    });


    // =====================================
    // 10. RENDER TASK LIST
    // =====================================

    function renderTasks() {

        // Remove existing task rows.
        $taskList.empty();

        const searchTerm = $searchTasks
            .val()
            .trim()
            .toLowerCase();


        // Apply filter and search.
        const filteredTasks = tasks.filter(function (task) {

            const matchesSearch = task.title
                .toLowerCase()
                .includes(searchTerm);

            const matchesFilter =
                currentFilter === "all" ||

                (
                    currentFilter === "pending" &&
                    !task.completed
                ) ||

                (
                    currentFilter === "completed" &&
                    task.completed
                );

            return matchesSearch && matchesFilter;

        });


        // Display empty state.
        if (filteredTasks.length === 0) {

            let message = "No tasks yet. Add your first task above!";

            if (tasks.length > 0) {

                if (searchTerm) {
                    message = "No tasks match your search.";
                } else if (currentFilter === "pending") {
                    message = "No pending tasks. Great work!";
                } else if (currentFilter === "completed") {
                    message = "No completed tasks yet.";
                }

            }

            $("<p>")
                .addClass("empty-state")
                .text(message)
                .appendTo($taskList);

            return;

        }


        // Render every matching task.
        filteredTasks.forEach(function (task) {

            const $row = $("<article>")
                .addClass("task-item");

            if (task.completed) {
                $row.addClass("completed");
            }


            // Completion checkbox.
            const $checkbox = $("<input>")
                .attr({
                    type: "checkbox",
                    "aria-label": "Mark task as completed"
                })
                .addClass("task-checkbox")
                .prop("checked", task.completed)
                .data("task-id", task.id);


            // Task title.
            const $title = $("<h3>")
                .addClass("task-title")
                .text(task.title);


            // Task creation time.
            const createdTime = task.createdAt
                ? formatTime(task.createdAt)
                : "Unknown time";


            const $created = $("<span>")
                .text(
                    "Added " +
                    formatDate(
                        task.createdAt
                            ? task.createdAt.slice(0, 10)
                            : ""
                    ) +
                    ", " +
                    createdTime
                );


            // Due date.
            const $dueDate = $("<span>")
                .text(
                    task.dueDate
                        ? "Due " + formatDate(task.dueDate)
                        : "No due date"
                );


            const $meta = $("<div>")
                .addClass("task-meta")
                .append($created, $dueDate);


            const $details = $("<div>")
                .addClass("task-details")
                .append($title, $meta);


            // Priority label.
            const $priority = $("<span>")
                .addClass(
                    "task-priority priority-" +
                    task.priority.toLowerCase()
                )
                .text(task.priority);


            // Delete button.
            const $deleteButton = $("<button>")
                .attr({
                    type: "button",
                    "aria-label": "Delete " + task.title,
                    title: "Delete task"
                })
                .addClass("delete-task")
                .text("♧")
                .data("task-id", task.id);


            // Assemble task row.
            $row.append(
                $checkbox,
                $details,
                $priority,
                $deleteButton
            );

            $taskList.append($row);

        });

    }


    // =====================================
    // 11. MARK TASK COMPLETED OR PENDING
    // =====================================

    $taskList.on(
        "change",
        ".task-checkbox",
        function () {

            const taskId = $(this).data("task-id");

            const isCompleted = $(this).prop("checked");

            const task = tasks.find(function (item) {

                return item.id === taskId;

            });

            if (!task) {
                return;
            }

            task.completed = isCompleted;

            saveTasks();

            renderTasks();

            updateStats();

        }
    );


    // =====================================
    // 12. DELETE AN INDIVIDUAL TASK
    // =====================================

    $taskList.on(
        "click",
        ".delete-task",
        function () {

            const taskId = $(this).data("task-id");

            tasks = tasks.filter(function (task) {

                return task.id !== taskId;

            });

            saveTasks();

            renderTasks();

            updateStats();

            showFormMessage("Task deleted successfully.");

        }
    );


    // =====================================
    // 13. FILTER TASKS
    // =====================================

    $(".filter-button").on("click", function () {

        currentFilter = $(this).data("filter");

        // Update active tab.
        $(".filter-button")
            .removeClass("active");

        $(this).addClass("active");

        renderTasks();

    });


    // =====================================
    // 14. SEARCH TASKS
    // =====================================

    $searchTasks.on("input", function () {

        renderTasks();

    });


    // =====================================
    // 15. CLEAR COMPLETED TASKS
    // =====================================

    $("#clearCompleted").on("click", function () {

        const completedCount = tasks.filter(
            function (task) {
                return task.completed;
            }
        ).length;


        if (completedCount === 0) {

            showFormMessage(
                "There are no completed tasks to clear.",
                true
            );

            return;

        }


        tasks = tasks.filter(function (task) {

            return !task.completed;

        });


        saveTasks();

        renderTasks();

        updateStats();

        showFormMessage(
            completedCount +
            " completed task(s) cleared."
        );

    });


    // =====================================
    // 16. UPDATE DASHBOARD STATISTICS
    // =====================================

    function updateStats() {

        const total = tasks.length;


        const completed = tasks.filter(
            function (task) {

                return task.completed;

            }
        ).length;


        const pending = total - completed;


        const percentage = total === 0
            ? 0
            : Math.round((completed / total) * 100);


        // Update summary cards.
        $totalTasks.text(total);

        $completedTasks.text(completed);

        $pendingTasks.text(pending);

        $completionRate.text(percentage + "%");


        // Update circular progress.
        const offset =
            CIRCLE_CIRCUMFERENCE -
            (percentage / 100) * CIRCLE_CIRCUMFERENCE;


        $progressRing.css(
            "stroke-dasharray",
            CIRCLE_CIRCUMFERENCE
        );

        $progressRing.css(
            "stroke-dashoffset",
            offset
        );


        $circlePercentage.text(percentage + "%");


        $progressCircle.attr(
            "aria-label",
            percentage + " percent complete"
        );


        // Update horizontal progress bar.
        $progressBarFill.css(
            "width",
            percentage + "%"
        );


        // Update remaining tasks message.
        if (total === 0) {

            $remainingMessage.text(
                "Add tasks to get started."
            );

        } else if (pending === 0) {

            $remainingMessage.text(
                "All tasks completed. Excellent work!"
            );

        } else {

            $remainingMessage.text(
                pending +
                " task" +
                (pending === 1 ? "" : "s") +
                " left."
            );

        }

    }


    // =====================================
    // 17. FETCH A MOTIVATIONAL QUOTE
    // USING JQUERY AJAX
    // =====================================

    function fetchQuote() {

        // Prevent repeated requests from piling up.
        if (quoteRequest) {

            quoteRequest.abort();

        }


        $newQuoteButton.prop("disabled", true);

        $quoteStatus
            .text("Loading a motivational quote...")
            .addClass("loading");

        $quoteError
            .text("")
            .prop("hidden", true);


        quoteRequest = $.ajax({

            url: QUOTE_API,

            method: "GET",

            dataType: "json",

            timeout: 10000,


            // Runs when the server returns valid data.
            success: function (response) {

                if (
                    !response ||
                    typeof response.quote !== "string" ||
                    response.quote.trim() === ""
                ) {

                    $quoteStatus.text(
                        "The API returned an invalid quote."
                    );

                    $quoteError
                        .text(
                            "Please try requesting another quote."
                        )
                        .prop("hidden", false);

                    return;

                }


                $quoteText.text(
                    "“" + response.quote + "”"
                );


                $quoteAuthor.text(
                    "— " +
                    (
                        typeof response.author === "string" &&
                        response.author.trim()
                            ? response.author
                            : "Unknown author"
                    )
                );


                $quoteStatus
                    .text("A little inspiration for today.")
                    .removeClass("loading");

            },


            // Runs if the AJAX request fails.
            error: function (xhr, status) {

                if (status === "abort") {
                    return;
                }


                $quoteStatus
                    .text("Unable to load a new quote.")
                    .removeClass("loading");


                $quoteError
                    .text(
                        "Could not load a quote. Check your internet connection and try again."
                    )
                    .prop("hidden", false);

            },


            // Runs after the request finishes.
            complete: function () {

                $newQuoteButton.prop("disabled", false);

                quoteRequest = null;

                $quoteStatus.removeClass("loading");

            }

        });

    }


    // Request a quote when the user clicks the button.
    $newQuoteButton.on("click", function () {

        fetchQuote();

    });


    // =====================================
    // 18. NAVIGATION ACTIVE STATE
    // =====================================

    $(".nav-link").on("click", function () {

        $(".nav-link").removeClass("active");

        $(this).addClass("active");

    });


    // =====================================
    // 19. INITIALIZE APPLICATION
    // =====================================

    updateCurrentDate();

    loadTasks();

    renderTasks();

    updateStats();

    fetchQuote();

});