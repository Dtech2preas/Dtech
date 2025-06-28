const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw initial text
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#0f0";
ctx.font = "20px monospace";
ctx.fillText("> PREASX24 OS [Mobile Mode]", 50, 50);

// Add mobile button
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
    ctx.fillText("> Button works!", 50, 150);
};
document.body.appendChild(btn);