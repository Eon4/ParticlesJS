//Ekstra with animation

const myCanvas = document.getElementById('myCanvas');
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
const ctx = myCanvas.getContext('2d');
ctx.fillStyle = 'white';

class Controller {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.particles = [];
        this.numParticles = 20;
        this.createParticles();
        this.animate();
    }

    createParticles() {
        for (let index = 0; index < this.numParticles; index++) {
            this.particles.push(new Particle(this));
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.handleParticle();
        requestAnimationFrame(() => this.animate());
    }

    handleParticle() {
        this.particles.forEach((particle, index, array) => {
            particle.update();
            particle.draw(this.ctx);

            // Reset particle if it goes out of the canvas
            if (particle.x - particle.radius > this.width || particle.x + particle.radius < 0 ||
                particle.y - particle.radius > this.height || particle.y + particle.radius < 0) {
                array[index] = new Particle(this);
            }
        });
    }
}

class Particle {
    constructor(controller) {
        this.controller = controller;
        this.radius = Math.random() * 10;
        this.x = this.radius + Math.random() * (this.controller.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.controller.height - this.radius * 2);
        this.alpha = 1; // Opacity
        this.fadeSpeed = 0.05; // Speed of opacity decrease
    }

    update() {
        this.x += Math.random() * 2 - 1; // Random horizontal movement
        this.y += Math.random() * 2 - 1; // Random vertical movement
        this.alpha -= this.fadeSpeed;

        // Reset particle if it becomes too transparent
        if (this.alpha <= 0) {
            this.x = Math.random() * this.controller.width;
            this.y = Math.random() * this.controller.height;
            this.alpha = 1;
        }
    }

    draw(ctx) {
        ctx.fillStyle = `hsla(300, 100%, 50%, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

const myController = new Controller(myCanvas, ctx);
