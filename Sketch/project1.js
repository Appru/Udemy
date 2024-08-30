const canvasSketch = require("canvas-sketch");

// npx canvas-sketch-cli  project1.js --new --open

const settings = {
  dimensions: [1080, 1920],
  animate: true
};

const sketch = () => {
  let circles = [];
  for (let i = 0; i < 100; i++) {
    circles.push(
      new Circle(Math.random() * 1080, Math.random() * 1920, Math.random() * 20)
    );
  }
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";
    context.lineWidth = 8;

    circles.forEach(circle => {
      circle.draw(context);
      circle.move();
    });
  };
};

canvasSketch(sketch, settings);

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velX = Math.random() * 4 - 2;
    this.velY = Math.random() * 4 - 2;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.stroke();
  }
  move() {
    this.x += this.velX;
    this.y += this.velY;
  }
}
