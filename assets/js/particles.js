
const myCanvas = document.getElementById('myCanvas');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;


const ctx = myCanvas.getContext('2d');
ctx.fillStyle = 'white';

console.log(ctx);





class Controller {

    constructor (canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.particles = [];
        this.numParticles = 20;
        this.createParticles();

    }

    createParticles() {

        for (let index = 0; index < this.numParticles; index++) {
            this.particles.push(new Particle(this));

        }

    }
    

    handleParticle() {
        this.particles.forEach(particle => {
            particle.update();
            particle.draw(this.ctx);
        });
    }


}




class Particle {
    constructor (controller) {
        this.controller = controller;
        this.radius = Math.random() * 10;

        this.x = this.radius + Math.random() * (this.controller.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.controller.height - this.radius * 2);



    }

    update() {
        this.x++;

    }

    draw(ctx) {

        ctx.fillStyle = `hsl(${300},100%,50%)`
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }


}

const myController = new Controller(myCanvas, ctx);
myController.handleParticle();

