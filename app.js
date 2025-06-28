const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

// Set canvas to full screen
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw(); // Redraw when resized
}
window.addEventListener("resize", resize);
resize(); // Initialize

// Main drawing function
function draw() {
    // Clear screen
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    ctx.fillStyle = "#0f0"; // Green
    ctx.font = "20px monospace";
    ctx.fillText("> PREASX24 OS [Version 1.0]", 50, 50);
    ctx.fillText("> Type 'help' for commands", 50, 80);
}

// Keyboard input
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        ctx.fillText("> Command executed!", 50, 150);
    }
});