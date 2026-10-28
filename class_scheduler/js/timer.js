// ==========================================
// timer.js
// Countdown timer using setInterval()
// ==========================================

let intervalId = null;
let remainingSeconds = 0;
let endTime = 0;
let isRunning = false;

let tickCallback = () => {};
let completionCallback = () => {};


/**
 * Start a new countdown.
 * @param {number} duration - Duration in seconds.
 * @param {Function} onTick - Called whenever the timer updates.
 * @param {Function} onComplete - Called when the countdown finishes.
 */
export function startTimer(duration, onTick, onComplete) {
    stopInterval();

    remainingSeconds = Math.max(0, Number(duration) || 0);
    tickCallback = typeof onTick === "function" ? onTick : () => {};
    completionCallback =
        typeof onComplete === "function" ? onComplete : () => {};

    if (remainingSeconds <= 0) {
        isRunning = false;
        tickCallback(0);
        completionCallback();
        return;
    }

    isRunning = true;
    endTime = Date.now() + remainingSeconds * 1000;

    tickCallback(remainingSeconds);
    intervalId = setInterval(updateTimer, 250);
}


/**
 * Update the countdown using the actual clock.
 * This avoids losing time when a browser tab is inactive.
 */
function updateTimer() {
    remainingSeconds = Math.max(
        0,
        Math.ceil((endTime - Date.now()) / 1000)
    );

    tickCallback(remainingSeconds);

    if (remainingSeconds <= 0) {
        stopInterval();
        isRunning = false;
        completionCallback();
    }
}


/**
 * Pause the running countdown.
 */
export function pauseTimer() {
    if (!isRunning) {
        return remainingSeconds;
    }

    remainingSeconds = Math.max(
        0,
        Math.ceil((endTime - Date.now()) / 1000)
    );

    stopInterval();
    isRunning = false;

    tickCallback(remainingSeconds);

    return remainingSeconds;
}


/**
 * Resume a paused countdown.
 */
export function resumeTimer() {
    if (isRunning || remainingSeconds <= 0) {
        return;
    }

    isRunning = true;
    endTime = Date.now() + remainingSeconds * 1000;

    tickCallback(remainingSeconds);
    intervalId = setInterval(updateTimer, 250);
}


/**
 * Reset and stop the current countdown.
 */
export function resetTimer() {
    stopInterval();

    remainingSeconds = 0;
    endTime = 0;
    isRunning = false;

    tickCallback(remainingSeconds);
}


/**
 * Clear the active interval.
 */
function stopInterval() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
}