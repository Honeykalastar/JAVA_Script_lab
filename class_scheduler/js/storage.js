// ==========================================
// storage.js
// Save and retrieve application data
// ==========================================

const SCHEDULE_KEY = "classSchedulerSchedule";
const HISTORY_KEY = "classSchedulerHistory";


/**
 * Load saved classes.
 */
export function loadSchedule() {
    try {
        const saved = localStorage.getItem(SCHEDULE_KEY);

        if (!saved) {
            return [];
        }

        const data = JSON.parse(saved);
        return Array.isArray(data) ? data : [];

    } catch (error) {
        console.error("Unable to load schedule:", error);
        return [];
    }
}


/**
 * Save classes.
 */
export function saveSchedule(schedule) {
    try {
        localStorage.setItem(
            SCHEDULE_KEY,
            JSON.stringify(schedule)
        );

        return true;

    } catch (error) {
        console.error("Unable to save schedule:", error);
        return false;
    }
}


/**
 * Load session history.
 */
export function loadHistory() {
    try {
        const saved = localStorage.getItem(HISTORY_KEY);

        if (!saved) {
            return [];
        }

        const data = JSON.parse(saved);
        return Array.isArray(data) ? data : [];

    } catch (error) {
        console.error("Unable to load history:", error);
        return [];
    }
}


/**
 * Save session history.
 */
export function saveHistory(history) {
    try {
        localStorage.setItem(
            HISTORY_KEY,
            JSON.stringify(history)
        );

        return true;

    } catch (error) {
        console.error("Unable to save history:", error);
        return false;
    }
}


/**
 * Remove all saved classes.
 */
export function clearSavedSchedule() {
    localStorage.removeItem(SCHEDULE_KEY);
}


/**
 * Remove all saved history.
 */
export function clearSavedHistory() {
    localStorage.removeItem(HISTORY_KEY);
}