(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ant {

        // js hint not ready for this experimental syntax yet
        static SIZE = 2; // jshint ignore:line

        constructor(context, color) {
            this.x = canvas.width / 2;
            this.y = canvas.height / 2;

            this.color = color;
            this.context = context;
            this.draw();

            this.brains = 0;
        }

        draw() {
            this.context.beginPath();
            this.context.fillStyle = this.color;
            this.context.fillRect(this.x, this.y, Ant.SIZE, Ant.SIZE);
        }

        move() {

            if (--this.brains <= 0) {
                this.brains = Ant.getRandomNumber(1, 100);
                this.randomX = Ant.getRandomNumber(-1, 1);
                this.randomY = Ant.getRandomNumber(-1, 1);
            }

            this.x += this.randomX;
            this.y += this.randomY;

            if (this.x < Ant.SIZE) {
                this.x = Ant.SIZE;
            } else if (this.x > canvas.width - Ant.SIZE) {
                this.x = canvas.width - Ant.SIZE;
            }

            if (this.y < Ant.SIZE) {
                this.y = Ant.SIZE;
            } else if (this.y > canvas.height - Ant.SIZE) {
                this.y = canvas.height - Ant.SIZE;
            }

            this.draw();
        }

        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

    const context = canvas.getContext('2d');
    const ants = [];
    for (let i = 0; i < 2000; i++) {
        ants.push(new Ant(context, 'black'));
    }

    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.move());
    }, 100); //17);

    document.getElementById('controls').addEventListener('submit', e => {
        e.preventDefault();

        const colorPicker = document.getElementById('color');
        const amountPicker = document.getElementById('amount');
        for (let i = 0; i < amountPicker.value; i++) {

            ants.push(new Ant(context, colorPicker.value));
        }

    });

}());
