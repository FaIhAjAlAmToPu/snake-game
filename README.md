# 🐍 Snake Game

A simple snake game built using **JavaScript** and the HTML5 **Canvas API**.

## 📜 Description
This is a classic **Snake Game**, where the player controls a growing snake, eats food, and avoids collisions with itself. The game increases in speed as the snake grows longer.

## 🎮 Features
- **Smooth Snake Movement**
- **Random Food Placement (Circle)**
- **Score Tracking System**
- **Speed Increases as You Eat**
- **Wall Wrapping (Snake reappears on the opposite side)**

## 🕹️ How to Play
- **Arrow Keys** to control the snake (`← ↑ → ↓`)
- Eat the **red food** to grow.
- Avoid **colliding with yourself**.
- The game ends if the snake runs into itself.

## 🚀 Installation & Running
1. Clone the repository or download the files.
2. Open `index.html` in a browser.
3. Click '**Start**' to begin playing.

## 🧩 Code Overview
### 🎨 **Game Rendering**
```js
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillText("Score: " + score, 10, 30);
