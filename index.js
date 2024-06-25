const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth
canvas.height = window.innerHeight
console.log(ctx)

// canvas.addEventListener('mousemove',(e)=>{
//     ctx.beginPath();
//     ctx.rect(e.x,e.y,10,10);
//     ctx.fill()
//    // console.log(e.x,e.y);
// });

const degToRad = (deg) => {
    return (deg / 180) * Math.PI;
}
// ctx.beginPath();
// ctx.arc(200,200,100,degToRad(0),degToRad(180));
// ctx.fill()
let atoms = [];

canvas.addEventListener('click', function (e) {
    for (let i = 0; i < 20; i++) {
        atoms.push(new Atom(e.x, e.y));
        console.log("test")
        console.log(e.x)

    }
});

const animate = () => {
    atoms.forEach(atom => {
        atom.draw();
        atom.update();
    });
    requestAnimationFrame(animate)
}

animate();

class Atom {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radious = Math.random() * 8 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y,this.radious, 0, degToRad(360));
        ctx.stroke()
    }
}