const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d');

const box = 20;
const width = canvas.width / box;
const height = canvas.height / box;

document.addEventListener('keydown', changeDirection);
let direction = 'RIGHT';
function changeDirection(event) {
  const keyPressed = event.key;
  if (keyPressed === 'ArrowLeft' && direction !== 'RIGHT') {
      direction = 'LEFT';
  } else if (keyPressed === 'ArrowUp' && direction !== 'DOWN') {
      direction = 'UP';
  } else if (keyPressed === 'ArrowRight' && direction !== 'LEFT') {
      direction = 'RIGHT';
  } else if (keyPressed === 'ArrowDown' && direction !== 'UP') {
      direction = 'DOWN';
  }
}

let food = { x: 0, y: 0 };
let snake = [{ x: 10, y: 10 }];
let score = 0;
let gameLoop = null;
let gameOver = false;
let speed = 150; // Initial speed

function draw(){
    if (gameOver) {
        clearInterval(gameLoop);
        ctx.fillStyle = "red";
        ctx.font = "50px Arial";
        ctx.fillText("Game Over", canvas.width / 4, canvas.height / 2);
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black"; // Text color
    ctx.font = "20px Arial"; // Font style
    ctx.fillText("Score: " + score, 10, 30); // Position: (10,30)

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? 'green' : 'lightgreen';
        ctx.fillRect(snake[i].x * box, snake[i].y * box, box, box);
    }

    ctx.beginPath(); // Start drawing
    ctx.arc(food.x * box + box / 2, food.y * box + box / 2, box / 2, 0, Math.PI * 2);
    ctx.fillStyle = "red"; // Set color
    ctx.fill(); // Fill the shape
    ctx.closePath(); // End drawing


    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === 'LEFT') headX--;
    if (direction === 'UP') headY--;
    if (direction === 'RIGHT') headX++;
    if (direction === 'DOWN') headY++;

    if (headX === food.x && headY === food.y) {
        score++;
        speed = Math.max(50, speed - 5);
        spawnFood();
    } else {
        snake.pop();
    }

    if (headX < 0) {
        headX = width - 1;
    }
    if (headX >= width) {
        headX = 0;
    }
    if (headY < 0) {
        headY = height - 1;
    }
    if (headY >= height) {
        headY = 0;
    }
    const newHead = { x: headX, y: headY };

    for (let i = 1; i < snake.length; i++) { // Start from 1 to skip head
      if (headX === snake[i].x && headY === snake[i].y) {
          gameOver = true;
      }
  }

    snake.unshift(newHead);
}

function startGame() {
    resetGame();
    spawnFood();
    gameLoop = setInterval(draw, speed);
}

function resetGame() {
    snake = [{ x: 10, y: 10 }];
    score = 0;
    direction = 'RIGHT';
    gameOver = false;
    clearInterval(gameLoop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    speed = 150; // Reset speed
}

function spawnFood() {
    food.x = Math.floor(Math.random() * width);
    food.y = Math.floor(Math.random() * height);
}

// Buttons
document.getElementById("start").addEventListener("click", startGame);

document.getElementById("restart").addEventListener("click", resetGame);