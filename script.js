const canvas = document.getElementById('birthdayCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw stars
for (let i = 0; i < 80; i++) {
  ctx.beginPath();
  ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height / 2, Math.random() * 2 + 1, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
}

// Draw moon
ctx.beginPath();
ctx.arc(canvas.width - 120, 100, 40, 0, Math.PI * 2);
ctx.fillStyle = "lightyellow";
ctx.fill();

// Tree trunk
ctx.fillStyle = "#8B4513";
ctx.fillRect(50, canvas.height - 200, 30, 120);

// Tree leaves
ctx.fillStyle = "forestgreen";
const leafPositions = [
  { x: 40, y: canvas.height - 220, r: 50 },
  { x: 70, y: canvas.height - 250, r: 40 },
  { x: 30, y: canvas.height - 270, r: 60 },
  { x: 90, y: canvas.height - 230, r: 45 }
];
leafPositions.forEach(p => {
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  ctx.fill();
});

// Balloons
const balloons = [
  { x: 200, y: 300, color: "red" },
  { x: 300, y: 250, color: "deeppink" },
  { x: 400, y: 320, color: "cyan" },
  { x: 500, y: 270, color: "orange" }
];
balloons.forEach(b => {
  ctx.beginPath();
  ctx.arc(b.x, b.y, 20, 0, Math.PI * 2);
  ctx.fillStyle = b.color;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(b.x, b.y + 20);
  ctx.lineTo(b.x, b.y + 50);
  ctx.strokeStyle = "white";
  ctx.stroke();
});

// Cake base
ctx.fillStyle = "chocolate";
ctx.fillRect(canvas.width / 2 - 50, canvas.height - 150, 100, 60);
ctx.fillStyle = "mistyrose";
ctx.fillRect(canvas.width / 2 - 40, canvas.height - 150 - 30, 80, 30);

// Candles
const candleX = [-30, -10, 10, 30];
candleX.forEach(offset => {
  let x = canvas.width / 2 + offset;
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.moveTo(x, canvas.height - 150 - 30);
  ctx.lineTo(x, canvas.height - 150 - 50);
  ctx.stroke();

  // Flame
  ctx.beginPath();
  ctx.arc(x, canvas.height - 150 - 55, 3, 0, Math.PI * 2);
  ctx.fillStyle = "orange";
  ctx.fill();
});

// After 3s, blow candles out
setTimeout(() => {
  candleX.forEach(offset => {
    let x = canvas.width / 2 + offset;
    ctx.beginPath();
    ctx.arc(x, canvas.height - 150 - 55, 3, 0, Math.PI * 2);
    ctx.fillStyle = "midnightblue";
    ctx.fill();

    // Smoke effect
    ctx.beginPath();
    ctx.arc(x + Math.random() * 10 - 5, canvas.height - 150 - 70, 4, 0, Math.PI * 2);
    ctx.fillStyle = "lightgray";
    ctx.fill();
  });
}, 3000);

// Typewriter animation
const title = "Happy Birthday My Cutest Best Friend ESHA 🎉";
let i = 0;
const titleEl = document.getElementById("titleText");
function typeTitle() {
  if (i < title.length) {
    titleEl.innerText += title.charAt(i);
    i++;
    setTimeout(typeTitle, 100);
  }
}
typeTitle();

const message = `Today the world got brighter because of you.\nYou're not just a friend, you're a piece of my heart.\nYour laughter, kindness, and spirit make everything better.\nI wish you all the happiness, joy, and love in the world.\nI'm really lucky to have you. ✨`;
let j = 0;
const bottomEl = document.getElementById("bottomText");
function typeBottom() {
  if (j < message.length) {
    bottomEl.innerText += message.charAt(j);
    j++;
    setTimeout(typeBottom, 40);
  }
}
setTimeout(typeBottom, 2000);
