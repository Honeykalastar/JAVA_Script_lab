// ==========================================
// app.js
// Main Class Countdown Scheduler
// ==========================================

import {
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer
} from "./timer.js";

import {
    loadSchedule,
    saveSchedule,
    loadHistory,
    saveHistory,
    clearSavedSchedule,
    clearSavedHistory
} from "./storage.js";

import {
    startFireworks,
    stopFireworks
} from "./fireworks.js";


// ==========================================
// DOM ELEMENTS
// ==========================================

const elements = {
    scheduledCount: document.getElementById("scheduledCount"),
    completedCount: document.getElementById("completedCount"),
    totalStudyTime: document.getElementById("totalStudyTime"),

    bulkForm: document.getElementById("bulkForm"),
    bulkInput: document.getElementById("bulkInput"),
    quickAddBtn: document.getElementById("quickAddBtn"),
    clearInputBtn: document.getElementById("clearInputBtn"),
    formMessage: document.getElementById("formMessage"),

    scheduleList: document.getElementById("scheduleList"),
    classCountBadge: document.getElementById("classCountBadge"),
    startNextBtn: document.getElementById("startNextBtn"),
    clearScheduleBtn: document.getElementById("clearScheduleBtn"),

    currentSubject: document.getElementById("currentSubject"),
    timerStatus: document.getElementById("timerStatus"),
    timerDisplay: document.getElementById("timerDisplay"),

    timerProgress: document.getElementById("timerProgress"),
    timerProgressBar: document.getElementById("timerProgressBar"),

    startBtn: document.getElementById("startBtn"),
    pauseBtn: document.getElementById("pauseBtn"),
    endBtn: document.getElementById("endBtn"),

    celebration: document.getElementById("celebration"),
    dismissCelebrationBtn: document.getElementById("dismissCelebrationBtn"),

    historySessionCount: document.getElementById("historySessionCount"),
    historyStudyTime: document.getElementById("historyStudyTime"),
    historyTableBody: document.getElementById("historyTableBody"),
    clearHistoryBtn: document.getElementById("clearHistoryBtn")
};


// ==========================================
// APPLICATION STATE
// ==========================================

let schedule = loadSchedule();
let history = loadHistory();

let selectedClassId = null;

let timerState = "idle";
// Possible states: idle, running, paused, completed

let remainingSeconds = 0;
let plannedSeconds = 0;

let activeSession = null;

let accumulatedElapsedMs = 0;
let runningSince = null;

let completionTimeout = null;


// ==========================================
// GENERAL HELPER FUNCTIONS
// ==========================================

/**
 * Generate a unique class ID.
 */
function generateId() {
    if (globalThis.crypto?.randomUUID) {
        return globalThis.crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}


/**
 * Escape HTML before inserting user-entered text.
 */
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return replacements[character];
    });
}


/**
 * Format seconds as HH:MM:SS.
 */
function formatTime(totalSeconds) {
    const seconds = Math.max(0, Math.floor(totalSeconds));

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remaining = seconds % 60;

    return [
        String(hours).padStart(2, "0"),
        String(minutes).padStart(2, "0"),
        String(remaining).padStart(2, "0")
    ].join(":");
}


/**
 * Format seconds into a readable duration.
 */
function formatDuration(totalSeconds) {
    const seconds = Math.max(0, Math.floor(totalSeconds));

    if (seconds < 60) {
        return `${seconds}s`;
    }

    if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        const remaining = seconds % 60;

        return remaining
            ? `${minutes}m ${remaining}s`
            : `${minutes}m`;
    }

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return minutes
        ? `${hours}h ${minutes}m`
        : `${hours}h`;
}


/**
 * Format a date for the history table.
 */
function formatDate(dateValue) {
    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return "—";
    }

    return date.toLocaleDateString("en-CA");
}


/**
 * Format a time for the history table.
 */
function formatClock(dateValue) {
    if (!dateValue) {
        return "—";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
        return "—";
    }

    return date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
}


/**
 * Show a message beneath the bulk input form.
 */
function showMessage(message, type = "") {
    elements.formMessage.textContent = message;
    elements.formMessage.className = `form-message ${type}`.trim();
}


/**
 * Cancel any pending completion callback.
 */
function cancelCompletionTimeout() {
    if (completionTimeout !== null) {
        clearTimeout(completionTimeout);
        completionTimeout = null;
    }
}


/**
 * Get the currently selected class.
 */
function getSelectedClass() {
    return schedule.find(
        (item) => item.id === selectedClassId
    ) || null;
}


/**
 * Save the current schedule.
 */
function persistSchedule() {
    const success = saveSchedule(schedule);

    if (!success) {
        showMessage(
            "Unable to save the schedule. Check your browser storage.",
            "error"
        );
    }
}


/**
 * Save the current history.
 */
function persistHistory() {
    const success = saveHistory(history);

    if (!success) {
        showMessage(
            "Unable to save history. Check your browser storage.",
            "error"
        );
    }
}


// ==========================================
// DURATION PARSING AND VALIDATION
// ==========================================

/**
 * Supported formats:
 *
 * 45          -> 45 minutes
 * 1:30        -> 1 minute 30 seconds
 * 1:30:00     -> 1 hour 30 minutes
 * 00:00:45    -> 45 seconds
 */
function parseDuration(input) {
    const value = input.trim();

    if (!value) {
        return null;
    }

    // Plain numbers represent minutes.
    if (/^\d+(\.\d+)?$/.test(value)) {
        const minutes = Number(value);

        if (!Number.isFinite(minutes) || minutes <= 0) {
            return null;
        }

        const seconds = Math.round(minutes * 60);

        return seconds > 0 ? seconds : null;
    }

    // Handle MM:SS or HH:MM:SS.
    const parts = value.split(":");

    if (
        parts.length !== 2 &&
        parts.length !== 3
    ) {
        return null;
    }

    if (!parts.every((part) => /^\d+$/.test(part))) {
        return null;
    }

    const numbers = parts.map(Number);

    let seconds;

    if (parts.length === 2) {
        const [minutes, secs] = numbers;

        if (secs > 59) {
            return null;
        }

        seconds = minutes * 60 + secs;

    } else {
        const [hours, minutes, secs] = numbers;

        if (minutes > 59 || secs > 59) {
            return null;
        }

        seconds = hours * 3600 + minutes * 60 + secs;
    }

    return seconds > 0 ? seconds : null;
}


/**
 * Parse one line of bulk input.
 */
function parseClassLine(line, lineNumber) {
    const separator = line.indexOf(",");

    if (separator === -1) {
        return {
            error: `Line ${lineNumber}: use Subject, duration.`
        };
    }

    const subject = line.slice(0, separator).trim();
    const durationInput = line.slice(separator + 1).trim();

    if (!subject) {
        return {
            error: `Line ${lineNumber}: subject cannot be empty.`
        };
    }

    if (subject.length > 100) {
        return {
            error: `Line ${lineNumber}: subject must be 100 characters or fewer.`
        };
    }

    const duration = parseDuration(durationInput);

    if (duration === null) {
        return {
            error: `Line ${lineNumber}: invalid duration "${durationInput}".`
        };
    }

    return {
        classItem: {
            id: generateId(),
            subject,
            duration,
            completed: false
        }
    };
}


// ==========================================
// BULK CLASS SCHEDULER
// ==========================================

elements.bulkForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const lines = elements.bulkInput.value
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);

    if (lines.length === 0) {
        showMessage("Enter at least one class.", "error");
        return;
    }

    const parsedClasses = [];

    // Validate every line before adding anything.
    for (let index = 0; index < lines.length; index++) {
        const result = parseClassLine(lines[index], index + 1);

        if (result.error) {
            showMessage(result.error, "error");
            return;
        }

        parsedClasses.push(result.classItem);
    }

    schedule.push(...parsedClasses);

    if (!selectedClassId && schedule.length > 0) {
        selectedClassId = schedule[0].id;
        prepareSelectedClass();
    }

    persistSchedule();

    renderSchedule();
    renderStats();

    showMessage(
        `${parsedClasses.length} class(es) added successfully.`,
        "success"
    );

    elements.bulkInput.value = "";
});


/**
 * Fill the input with example classes.
 */
elements.quickAddBtn.addEventListener("click", () => {
    elements.bulkInput.value = [
        "Mathematics, 00:00:02",
        "Science, 00:00:03",
        "JavaScript, 00:00:05",
        "Database Systems, 00:00:04",
        "Operating Systems, 00:00:06"
    ].join("\n");

    elements.bulkInput.focus();

    showMessage(
        "Example classes added to the input. Click Add All Classes to schedule them."
    );
});


/**
 * Clear the input field.
 */
elements.clearInputBtn.addEventListener("click", () => {
    elements.bulkInput.value = "";
    showMessage("");
    elements.bulkInput.focus();
});


// ==========================================
// SCHEDULE RENDERING
// ==========================================

function renderSchedule() {
    elements.classCountBadge.textContent =
        `${schedule.length} CLASSES`;

    if (schedule.length === 0) {
        elements.scheduleList.innerHTML = `
            <div class="empty-state">
                <span>📖</span>
                <h3>No classes scheduled</h3>
                <p>Add your classes above to get started.</p>
            </div>
        `;

        elements.startNextBtn.disabled = true;

        return;
    }

    elements.startNextBtn.disabled = !schedule.some(
        (item) => !item.completed
    );

    elements.scheduleList.innerHTML = schedule.map((item) => {
        const isSelected = item.id === selectedClassId;
        const isCompleted = item.completed;

        const classes = [
            "schedule-item",
            isSelected ? "selected" : "",
            isCompleted ? "completed" : ""
        ].filter(Boolean).join(" ");

        return `
            <div class="${classes}">

                <button
                    class="schedule-select"
                    type="button"
                    data-action="select"
                    data-id="${escapeHTML(item.id)}"
                    aria-pressed="${isSelected}"
                    aria-label="Select ${escapeHTML(item.subject)}"
                >

                    <span class="class-check">
                        ${isCompleted ? "✓" : ""}
                    </span>

                    <span class="class-details">

                        <strong>${escapeHTML(item.subject)}</strong>

                        <small>
                            ${formatTime(item.duration)} planned
                            ${isCompleted ? " · Completed" : ""}
                        </small>

                    </span>

                </button>

                <button
                    class="delete-class-btn"
                    type="button"
                    data-action="delete"
                    data-id="${escapeHTML(item.id)}"
                    aria-label="Delete ${escapeHTML(item.subject)}"
                    title="Delete class"
                >×</button>

            </div>
        `;
    }).join("");
}


/**
 * Select a class by clicking its schedule item.
 */
elements.scheduleList.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");

    if (!button) {
        return;
    }

    const { action, id } = button.dataset;

    if (action === "select") {
        selectClass(id);
    }

    if (action === "delete") {
        deleteClass(id);
    }
});


/**
 * Select a class and prepare its timer.
 */
function selectClass(id) {
    if (timerState === "running" || timerState === "paused") {
        showMessage(
            "End the current session before selecting another class.",
            "error"
        );

        return;
    }

    const item = schedule.find((entry) => entry.id === id);

    if (!item) {
        return;
    }

    selectedClassId = id;

    prepareSelectedClass();

    renderSchedule();
}


/**
 * Prepare the selected class without starting the timer.
 */
function prepareSelectedClass() {
    const item = getSelectedClass();

    cancelCompletionTimeout();
    stopFireworks();

    resetTimer();

    remainingSeconds = item ? item.duration : 0;
    plannedSeconds = item ? item.duration : 0;

    timerState = "idle";

    activeSession = null;
    accumulatedElapsedMs = 0;
    runningSince = null;

    elements.celebration.hidden = true;

    if (item) {
        elements.currentSubject.textContent = item.subject;

        elements.timerStatus.textContent = item.completed
            ? "Completed class · Ready to start again"
            : "Ready when you are";

    } else {
        elements.currentSubject.textContent = "No Class Selected";
        elements.timerStatus.textContent = "Select a class to begin.";
    }

    updateTimerDisplay();
    updateControls();
}


// ==========================================
// DELETE AND CLEAR CLASSES
// ==========================================

function deleteClass(id) {
    if (id === selectedClassId &&
        (timerState === "running" || timerState === "paused")) {
        showMessage(
            "End the current session before deleting its class.",
            "error"
        );

        return;
    }

    schedule = schedule.filter((item) => item.id !== id);

    if (selectedClassId === id) {
        selectedClassId = schedule.length > 0
            ? schedule[0].id
            : null;

        prepareSelectedClass();
    }

    persistSchedule();

    renderSchedule();
    renderStats();
}


elements.clearScheduleBtn.addEventListener("click", () => {
    if (schedule.length === 0) {
        return;
    }

    if (!window.confirm("Clear all scheduled classes?")) {
        return;
    }

    cancelCompletionTimeout();
    stopFireworks();
    resetTimer();

    schedule = [];
    selectedClassId = null;

    timerState = "idle";
    remainingSeconds = 0;
    plannedSeconds = 0;

    activeSession = null;
    accumulatedElapsedMs = 0;
    runningSince = null;

    elements.celebration.hidden = true;

    clearSavedSchedule();

    prepareSelectedClass();

    renderSchedule();
    renderStats();

    showMessage("Schedule cleared successfully.", "success");
});


// ==========================================
// TIMER DISPLAY AND CONTROLS
// ==========================================

function updateTimerDisplay() {
    elements.timerDisplay.textContent =
        formatTime(remainingSeconds);

    let progress = 0;

    if (plannedSeconds > 0) {
        progress = (
            (plannedSeconds - remainingSeconds) /
            plannedSeconds
        ) * 100;
    }

    progress = Math.max(0, Math.min(100, progress));

    elements.timerProgressBar.style.width = `${progress}%`;

    elements.timerProgress.setAttribute(
        "aria-valuenow",
        String(Math.round(progress))
    );
}


/**
 * Update the button states.
 */
function updateControls() {
    const hasSelectedClass = Boolean(getSelectedClass());

    elements.startBtn.disabled =
        !hasSelectedClass ||
        timerState === "running" ||
        timerState === "completed";

    elements.pauseBtn.disabled = timerState !== "running";

    elements.endBtn.disabled =
        timerState !== "running" &&
        timerState !== "paused";

    if (timerState === "paused") {
        elements.startBtn.textContent = "▶ Resume";
    } else {
        elements.startBtn.textContent = "▶ Start";
    }
}


/**
 * Start a new session or resume a paused session.
 */
elements.startBtn.addEventListener("click", () => {
    if (timerState === "paused") {
        resumeSession();
        return;
    }

    if (timerState !== "idle") {
        return;
    }

    startSession();
});


/**
 * Begin a new class session.
 */
function startSession() {
    const item = getSelectedClass();

    if (!item) {
        showMessage("Select a class first.", "error");
        return;
    }

    cancelCompletionTimeout();
    stopFireworks();

    elements.celebration.hidden = true;

    plannedSeconds = item.duration;
    remainingSeconds = item.duration;

    accumulatedElapsedMs = 0;
    runningSince = Date.now();

    activeSession = {
        id: generateId(),
        classId: item.id,
        subject: item.subject,
        plannedSeconds: item.duration,
        startedAt: new Date().toISOString()
    };

    timerState = "running";

    elements.timerStatus.textContent = "Session in progress...";

    updateTimerDisplay();
    updateControls();

    startTimer(
        remainingSeconds,
        onTimerTick,
        onTimerComplete
    );
}


/**
 * Pause the countdown.
 */
elements.pauseBtn.addEventListener("click", () => {
    if (timerState !== "running") {
        return;
    }

    const remaining = pauseTimer();

    remainingSeconds = remaining;

    if (runningSince !== null) {
        accumulatedElapsedMs += Date.now() - runningSince;
        runningSince = null;
    }

    timerState = "paused";

    elements.timerStatus.textContent = "Session paused.";

    updateTimerDisplay();
    updateControls();
});


/**
 * Resume a paused session.
 */
function resumeSession() {
    if (timerState !== "paused" || !activeSession) {
        return;
    }

    runningSince = Date.now();

    timerState = "running";

    elements.timerStatus.textContent = "Session in progress...";

    updateControls();

    resumeTimer();
}


/**
 * Timer update callback.
 */
function onTimerTick(seconds) {
    remainingSeconds = seconds;

    updateTimerDisplay();
}


/**
 * Countdown completion callback.
 *
 * setTimeout() schedules the completion handler once.
 */
function onTimerComplete() {
    cancelCompletionTimeout();

    completionTimeout = setTimeout(() => {
        completionTimeout = null;

        if (timerState !== "running" || !activeSession) {
            return;
        }

        finishSession("Completed");

    }, 0);
}


/**
 * End the session manually or automatically.
 */
elements.endBtn.addEventListener("click", () => {
    if (timerState !== "running" && timerState !== "paused") {
        return;
    }

    finishSession("Ended");
});


/**
 * Record the actual session duration.
 */
function finishSession(status) {
    if (!activeSession) {
        return;
    }

    cancelCompletionTimeout();

    // Capture the final active time before stopping the timer.
    if (timerState === "running" && runningSince !== null) {
        accumulatedElapsedMs += Date.now() - runningSince;
    }

    const endedAt = new Date();

    const actualSeconds = Math.max(
        0,
        Math.floor(accumulatedElapsedMs / 1000)
    );

    const sessionRecord = {
        id: activeSession.id,
        subject: activeSession.subject,
        classId: activeSession.classId,

        startedAt: activeSession.startedAt,
        endedAt: endedAt.toISOString(),

        plannedSeconds: activeSession.plannedSeconds,
        actualSeconds,

        status
    };

    history.unshift(sessionRecord);

    persistHistory();

    if (status === "Completed") {
        const item = schedule.find(
            (entry) => entry.id === activeSession.classId
        );

        if (item) {
            item.completed = true;
        }

        persistSchedule();
    }

    resetTimer();

    timerState = "completed";

    remainingSeconds = status === "Completed"
        ? 0
        : remainingSeconds;

    runningSince = null;
    activeSession = null;

    elements.timerStatus.textContent =
        status === "Completed"
            ? "Countdown finished!"
            : "Session ended.";

    updateTimerDisplay();
    updateControls();

    renderSchedule();
    renderStats();
    renderHistory();

    if (status === "Completed") {
        elements.celebration.hidden = false;

        startFireworks();

        elements.celebration.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    } else {
        elements.celebration.hidden = true;
        stopFireworks();
    }
}


/**
 * Dismiss the celebration.
 */
elements.dismissCelebrationBtn.addEventListener("click", () => {
    elements.celebration.hidden = true;

    stopFireworks();

    timerState = "idle";

    const item = getSelectedClass();

    if (item) {
        remainingSeconds = item.duration;
        plannedSeconds = item.duration;

        elements.timerStatus.textContent = item.completed
            ? "Completed class · Ready to start again"
            : "Ready when you are";
    }

    updateTimerDisplay();
    updateControls();
});


// ==========================================
// START NEXT CLASS
// ==========================================

elements.startNextBtn.addEventListener("click", () => {
    if (timerState === "running" || timerState === "paused") {
        showMessage(
            "End the current session before starting another class.",
            "error"
        );

        return;
    }

    const nextClass = schedule.find((item) => !item.completed);

    if (!nextClass) {
        showMessage("All classes are completed!", "success");
        return;
    }

    selectedClassId = nextClass.id;

    prepareSelectedClass();

    renderSchedule();

    startSession();
});


// ==========================================
// SUMMARY CARDS
// ==========================================

function renderStats() {
    const completedSessions = history.filter(
        (session) => session.status === "Completed"
    ).length;

    const totalStudySeconds = history.reduce(
        (total, session) => total + (session.actualSeconds || 0),
        0
    );

    elements.scheduledCount.textContent = schedule.length;

    elements.completedCount.textContent = completedSessions;

    elements.totalStudyTime.textContent =
        formatDuration(totalStudySeconds);
}


// ==========================================
// SESSION HISTORY
// ==========================================

function renderHistory() {
    elements.historySessionCount.textContent = history.length;

    const totalActualSeconds = history.reduce(
        (total, session) => total + (session.actualSeconds || 0),
        0
    );

    elements.historyStudyTime.textContent =
        formatDuration(totalActualSeconds);

    if (history.length === 0) {
        elements.historyTableBody.innerHTML = `
            <tr>
                <td colspan="7" class="table-empty">
                    No sessions recorded yet.
                </td>
            </tr>
        `;

        return;
    }

    elements.historyTableBody.innerHTML = history.map((session) => {
        const statusClass =
            session.status === "Completed" ? "" : "ended";

        return `
            <tr>

                <td>${escapeHTML(session.subject)}</td>

                <td>${formatDate(session.startedAt)}</td>

                <td>${formatClock(session.startedAt)}</td>

                <td>${formatClock(session.endedAt)}</td>

                <td>${formatTime(session.plannedSeconds)}</td>

                <td>${formatDuration(session.actualSeconds)}</td>

                <td>
                    <span class="status-pill ${statusClass}">
                        ${escapeHTML(session.status)}
                    </span>
                </td>

            </tr>
        `;
    }).join("");
}


/**
 * Clear all session history.
 */
elements.clearHistoryBtn.addEventListener("click", () => {
    if (history.length === 0) {
        return;
    }

    if (!window.confirm("Clear all session history?")) {
        return;
    }

    history = [];

    clearSavedHistory();

    renderHistory();
    renderStats();

    showMessage("Session history cleared.", "success");
});


// ==========================================
// INITIALIZE APPLICATION
// ==========================================

function initializeApp() {
    // Normalize potentially missing properties in saved data.
    schedule = schedule
        .filter((item) => item && typeof item.subject === "string")
        .map((item) => ({
            ...item,
            duration: Number(item.duration),
            completed: Boolean(item.completed)
        }))
        .filter((item) => (
            Number.isFinite(item.duration) &&
            item.duration > 0
        ));

    history = history.filter(
        (session) => session && typeof session.subject === "string"
    );

    // The timer itself does not continue after a page reload.
    // Preserve classes and history, but start with an idle timer.
    selectedClassId = schedule.length > 0
        ? schedule[0].id
        : null;

    timerState = "idle";

    remainingSeconds = 0;
    plannedSeconds = 0;

    activeSession = null;
    accumulatedElapsedMs = 0;
    runningSince = null;

    persistSchedule();
    persistHistory();

    prepareSelectedClass();

    renderSchedule();
    renderStats();
    renderHistory();

    console.log("Class Countdown Scheduler initialized.");
}

initializeApp();