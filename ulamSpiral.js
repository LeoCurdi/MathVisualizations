
// Set up the canvas and context
var canvas = document.getElementById('game-canvas');
var context = canvas.getContext('2d');
canvas.width = 800/* window.innerWidth * .9 */;
canvas.height = 800/* window.innerHeight * .9 */;

let num = 1, x = canvas.width / 2, y = canvas.height / 2;

// define the font and color for the txt
context.font = '8px Arial';
context.fillStyle = 'white';

let step = 1, stepSize = 2.5, direction = 0, stepsInARow = 1, turns = 0;

async function draw() {
  for (var i = 1; i < 200000; i++) {
    if (isPrime(i)) {
      //context.fillText(i, x, y); // print the number to the canvas
      context.beginPath();
      context.arc(x, y, .6, 0, 2 * Math.PI);
      context.fillStyle = "white";
      context.fill();
      await new Promise(resolve => setTimeout(() => { resolve(); }, .1));
    }
    switch (direction % 4) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
    }
  
    if (step === stepsInARow) {
      direction++, turns++, step = 0;
      if (turns % 2 === 0) {
        stepsInARow++;
      }
    }
    
    i++, step++;
  
  
  }
}

draw();


function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (var i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}