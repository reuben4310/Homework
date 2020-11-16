(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth - (window.innerWidth % 64);
        canvas.height = window.innerHeight - (window.innerHeight % 64) - 4;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const w = canvas.width / 64;
    const h = canvas.height / 64;

    const imgApp = new Image();
    imgApp.src = 'media/apple.png';

    const img = new Image();
    img.src = 'media/snakehead.png';
    img.addEventListener('load', () => {
        const SNAKE_SIZE = 64;
        let direction;
        let xSn = 0;
        let ySn = 0;
        let score = 0;
        let appX = (Math.floor(Math.random() * (w))) * SNAKE_SIZE;
        let appY = (Math.floor(Math.random() * (h))) * SNAKE_SIZE;

        const theButton = document.getElementById('theButton');

        theButton.addEventListener('click', () => {
            direction = 'ArrowRight';


        });

        function draw() {

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, xSn, ySn, SNAKE_SIZE, SNAKE_SIZE);
            context.drawImage(imgApp, appX, appY, SNAKE_SIZE, SNAKE_SIZE);

            context.font = 'bold 48px serif';
            context.fillText(score, canvas.width - 120, 50);

        }

        let game;
        game = setInterval(() => {

            draw();

            if (xSn === appX && ySn === appY) {
                console.log("Boom!!");
                appX = (Math.floor(Math.random() * (w))) * SNAKE_SIZE;
                appY = (Math.floor(Math.random() * (h))) * SNAKE_SIZE;
                score++;
                const hiss = document.getElementById('hiss');
                hiss.play();
            }

            if (xSn > canvas.width || xSn < 0 || ySn > canvas.height || ySn < 0) {

                const crash = document.getElementById('crash');
                crash.play();
                alert('Game over');
                clearInterval(game);
                window.location.reload();

            }

            switch (direction) {
                case 'ArrowLeft':
                    xSn -= SNAKE_SIZE;
                    break;
                case 'ArrowRight':
                    xSn += SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    ySn -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    ySn += SNAKE_SIZE;
                    break;
            }

        }, 500);



        document.addEventListener('keydown', e => {

            switch (e.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    direction = e.key;
            }
        });
    });
}());