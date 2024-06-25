const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(ctx);

const degToRad = (deg) => {
  return (deg / 180) * Math.PI;
};

let atoms = [];

// canvas.addEventListener("mousemove", function (e) {
//   for (let i = 0; i < 20; i++) {
//     atoms.push(new Atom(e.x, e.y));
//     console.log("test");
//     console.log(e.x);
//   }
// });

const animate = () => {
  atoms.forEach((atom, index) => {
    ctx.fillStyle = "white";
    atom.draw();

    atom.updateSpeed();
    atom.updateSize();

    if (atom.radious < 0.3) {
      atoms.splice(index, 1);
    }
  });
  ctx.save();
  //ctx.fillStyle = "rgba(0,255,255,0.2)";
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.restore();
  requestAnimationFrame(animate);
};

animate();

class Atom {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radious = Math.random() * 2 + 2;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
  }
  updateSpeed() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  updateSize() {
    this.radious -= 0.1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radious, 0, degToRad(360));
    ctx.fill();
  }
}

const point = {
  x: 0,
  y: 0,
};

let degree = 0;

const generateAtoms = () => {
  atoms.push(new Atom(canvas.width / 2 + (point.x * 200), canvas.height / 2 + (point.y * 200)));
  point.x = Math.cos((degree / 180) * Math.PI);
  point.y = point.x*point.x;
  requestAnimationFrame(generateAtoms);
  degree++;
};

generateAtoms();
