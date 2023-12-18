
//Animation - 
const myCanvas = document.getElementById('myCanvas');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const ctx = myCanvas.getContext('2d');
ctx.fillStyle = 'white';

console.log(ctx);

let lastTimestamp = 0; // Variable to store the timestamp of the last frame

// Initial rotation angle for each object
let diamondRotation = 0;
let circleY = myCanvas.height / 2;
let greenSquareRotation = 0;
let blueSquareX = myCanvas.width / 2 - 50;
let redSquareX = myCanvas.width / 2 - 20;

function draw(timestamp) {
    // Calculate the elapsed time since the last frame
    const deltaTime = (timestamp - lastTimestamp) / 1000; // Convert to seconds

    // Clear the canvas
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    // Drawing rectangles with animation
    ctx.fillStyle = 'red';
    ctx.lineWidth = 5;
    ctx.fillRect(redSquareX, myCanvas.height / 2 - 30, 40, 60);
    redSquareX += 50 * deltaTime; // Move the red square to the right with a speed of 50 pixels per second

    ctx.fillStyle = 'blue';
    ctx.fillRect(blueSquareX, myCanvas.height / 2 - 150, 100, 300);
    blueSquareX -= 50 * deltaTime; // Move the blue square to the left with a speed of 50 pixels per second

    ctx.fillStyle = 'green';
    ctx.save();
    ctx.translate(myCanvas.width / 2, myCanvas.height / 3);
    ctx.rotate((greenSquareRotation * Math.PI) / 180); // Rotate the green square
    ctx.fillStyle = 'green';
    ctx.fillRect(-10, -200, 20, 400);
    ctx.restore();
    greenSquareRotation += 30 * deltaTime; // Rotate the green square with a speed of 30 degrees per second

    // Drawing a circle with animation
    ctx.beginPath();
    ctx.arc(myCanvas.width / 2, circleY, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
    circleY += 50 * deltaTime; // Move the circle down with a speed of 50 pixels per second

    // Drawing a diamond shape with rotation animation
    ctx.save();
    ctx.translate(myCanvas.width / 2, myCanvas.height / 2);
    ctx.rotate((diamondRotation * Math.PI) / 180); // Rotate the diamond
    ctx.beginPath();
    ctx.moveTo(-50, 0);
    ctx.lineTo(0, -50);
    ctx.lineTo(50, 0);
    ctx.lineTo(0, 50);
    ctx.closePath();
    ctx.fillStyle = 'purple';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.restore();
    diamondRotation += 60 * deltaTime; // Rotate the diamond with a speed of 60 degrees per second

    // Update the timestamp of the last frame
    lastTimestamp = timestamp;

    // Request the next animation frame
    requestAnimationFrame(draw);
}

function resetAnimation() {
    // Reset initial positions and restart the animation
    diamondRotation = 0;
    circleY = myCanvas.height / 2;
    greenSquareRotation = 0;
    blueSquareX = myCanvas.width / 2 - 50;
    redSquareX = myCanvas.width / 2 - 20;

    // Schedule the next reset after a few seconds
    setTimeout(resetAnimation, 6000);
}

// Start the initial animation
requestAnimationFrame(draw);

// Schedule the first reset after a few seconds
setTimeout(resetAnimation, 6000);

