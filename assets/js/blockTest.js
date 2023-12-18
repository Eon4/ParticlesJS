const myCanvas = document.getElementById('myCanvas');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

const ctx = myCanvas.getContext('2d');
ctx.fillStyle = 'white';

console.log(ctx);

// Drawing rectangles
ctx.fillStyle = 'red';
ctx.lineWidth = 5;  // Fix the typo, it should be 'lineWidth' not 'lineWidt'

ctx.fillRect(10, 190, 40, 60);

ctx.fillStyle = 'blue';
ctx.fillRect(100, 10, 100, 300);

ctx.fillStyle = 'green';
ctx.fillRect(300, 10, 20, 400);

// Drawing a circle
ctx.beginPath();
ctx.arc(200, 200, 30, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = 'orange';
ctx.fill();
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.closePath();


// Drawing a diamond shape
ctx.beginPath();
ctx.moveTo(200, 250);
ctx.lineTo(250, 200);
ctx.lineTo(300, 250);
ctx.lineTo(250, 300);
ctx.closePath();
ctx.fillStyle = 'purple';
ctx.fill();
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.stroke();

