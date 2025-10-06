// =========================================
// Janaska Bowles
// File: moveMeme.js
// Description: Moves a meme image around the screen when "Start" is pressed,
// and stops when "Stop" is pressed.
// =========================================

// Store interval ID globally to control movement
let movementInterval = null;

// Function to start the movement
function startMoving() {
    // Disable Start button, enable Stop button
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;

    // Update message for user
    document.getElementById("output").innerHTML = "🌀 The meme is moving! Click STOP to freeze it.";

    // Get meme element
    let meme = document.getElementById("meme");

    // Start an interval that moves the image every 500 milliseconds
    movementInterval = setInterval(function() {
        // Random x/y positions inside the window
        let randomX = Math.random() * (window.innerWidth - meme.offsetWidth);
        let randomY = Math.random() * (window.innerHeight - meme.offsetHeight);

        // Apply new position
        meme.style.left = randomX + "px";
        meme.style.top = randomY + "px";
    }, 500);
}

// Function to stop the movement
function stopMoving() {
    // Disable Stop button, enable Start button
    document.getElementById("stopBtn").disabled = true;
    document.getElementById("startBtn").disabled = false;

    // Clear the interval to stop movement
    clearInterval(movementInterval);

    // Update message for user
    document.getElementById("output").innerHTML = "⏸️ The meme stopped! Click START to move again.";
}
