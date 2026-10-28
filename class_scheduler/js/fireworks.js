// ==========================================
// fireworks.js
// Canvas fireworks celebration
// ==========================================

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

let rockets = [];
let particles = [];
let animationId = null;
let isActive = false;

let lastLaunchTime = 0;


/**
 * Resize canvas to match the browser window.
 */
function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();


/**
 * Generate a random value.
 */
function random(min, max) {
    return Math.random() * (max - min) + min;
}


/**
 * Launch a rocket from the bottom of the screen.
 */
function launchRocket() {
    const x = random(
        window.innerWidth * 0.15,
        window.innerWidth * 0.85
    );

    rockets.push({
        x,
        y: window.innerHeight + 10,
        targetY: random(
            window.innerHeight * 0.15,
            window.innerHeight * 0.48
        ),
        speed: random(4, 7),
        hue: random(210, 290)
    });
}


/**
 * Create particles when a rocket explodes.
 */
function explode(x, y, hue) {
    const count = 65;

    for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = random(1, 5);

        particles.push({
            x,
            y,

            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,

            alpha: 1,
            decay: random(0.009, 0.018),
            radius: random(1.5, 3.5),

            hue: hue + random(-25, 25)
        });
    }
}


/**
 * Draw and move rockets.
 */
function drawRocket(rocket) {
    rocket.y -= rocket.speed;

    ctx.beginPath();
    ctx.moveTo(rocket.x, rocket.y);
    ctx.lineTo(rocket.x, rocket.y + 13);

    ctx.strokeStyle = `hsl(${rocket.hue}, 100%, 70%)`;
    ctx.lineWidth = 2;

    ctx.stroke();
}


/**
 * Draw and update explosion particles.
 */
function drawParticle(particle) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    particle.vx *= 0.985;
    particle.vy *= 0.985;
    particle.vy += 0.035;

    particle.alpha -= particle.decay;

    ctx.beginPath();

    ctx.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle =
        `hsla(${particle.hue}, 100%, 65%, ${Math.max(0, particle.alpha)})`;

    ctx.fill();
}


/**
 * Main animation loop.
 */
function animateFireworks(timestamp) {
    if (!isActive) {
        return;
    }

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Launch rockets at regular intervals.
    if (timestamp - lastLaunchTime > 280) {
        launchRocket();
        lastLaunchTime = timestamp;
    }

    // Update rockets.
    rockets = rockets.filter((rocket) => {
        if (rocket.y <= rocket.targetY) {
            explode(rocket.x, rocket.y, rocket.hue);
            return false;
        }

        drawRocket(rocket);
        return true;
    });

    // Update explosion particles.
    particles = particles.filter((particle) => {
        if (particle.alpha <= 0) {
            return false;
        }

        drawParticle(particle);
        return true;
    });

    animationId = requestAnimationFrame(animateFireworks);
}


/**
 * Start the fireworks.
 */
export function startFireworks() {
    stopFireworks();

    isActive = true;
    lastLaunchTime = 0;

    rockets = [];
    particles = [];

    animationId = requestAnimationFrame(animateFireworks);
}


/**
 * Stop the fireworks and clear the canvas.
 */
export function stopFireworks() {
    isActive = false;

    if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }

    rockets = [];
    particles = [];

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}