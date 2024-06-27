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
    
    atom.draw();

    atom.updateSpeed();
    atom.updateSize();

    if (atom.radious < 0.3) {
      atoms.splice(index, 1);
    }
  });
  ctx.save();
  ctx.fillStyle = "rgba(255,255,255,0.2)";
  //ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.restore();
  requestAnimationFrame(animate);
};

animate();

class Atom {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radious = Math.random() * 35 + 2;
    this.speedX = Math.random() * 10 - 2;
    this.speedY = Math.random() * 10 - 2;
  }
  updateSpeed() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  updateSize() {
    this.radious -= 0.01;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radious, 0, degToRad(360));
    ctx.fillStyle = "aqua";
    ctx.fill();
  }
}

const point = {
  x: 0,
  y: 0,
};

function getRandomInt(min,max){
  return Math.floor(Math.random()*(max-min))+min;
}
let degree = 0;

const generateAtoms = () => {
  atoms.push(new Atom(getRandomInt(0,1080),getRandomInt(0,1080)));
  
  point.x = Math.cos((degree / 90) * Math.PI);
  point.y = point.x*point.x;
  requestAnimationFrame(generateAtoms);
  degree++;
};



canvas.addEventListener("click",function(e){
  console.log("click");
  generateAtoms();
})

//generateAtoms();
