const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

// Set fullscreen
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}
window.addEventListener("resize", resize);
resize();

// Draw function
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = "20px monospace";
    ctx.fillText("> PREASX24 OS [Mobile Mode]", 50, 50);
    ctx.fillText("> Tap the button or press Enter", 50, 80);
}

// Mobile button
function createMobileButton() {
    const btn = document.createElement("button");
    btn.textContent = "⏎ ENTER";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px";
    btn.style.background = "#0f0";
    btn.style.color = "black";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.fontFamily = "monospace";
    btn.style.zIndex = "1000";
    btn.onclick = () => {
        ctx.fillText("> Mobile command executed!", 50, 150);
    };
    document.body.appendChild(btn);
}

// Detect device
const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
if (isMobile) {
    createMobileButton();
} else {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            ctx.fillText("> Command executed!", 50, 150);
        }
    });
}