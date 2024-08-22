const canvasSketch = require("canvas-sketch");

const settings = {
  //dimensions: [ 2048, 2048 ]
  dimensions: [1080, 1920],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";
    context.lineWidth = 1;
    context.beginPath();

    for (let i = 0; i < 1000; i++) {
      context.rect(
        Math.random() * 1080,
        Math.random() * 1920,
        Math.random() * 50,
        Math.random() * 50
      );
      context.stroke();
    }
  };
};

canvasSketch(sketch, settings);
