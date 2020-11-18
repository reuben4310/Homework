(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');
  const context = canvas.getContext('2d');
  const SNAKE_SIZE = 64;
  const crashSound = document.getElementById('crash');
  const crunchSound = document.getElementById('hiss');
  let gameOver = false;
  let paused = false;
  let score = 0;
  let snake;
  let apple;
  let speed = 500;

  function resizeCanvas() {
    canvas.width = (window.innerWidth - 2) - ((window.innerWidth - 2) % SNAKE_SIZE);
    canvas.height = (window.innerHeight - 2) - ((window.innerHeight - 2) % SNAKE_SIZE);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Snake {
    constructor() {

      this.segments = [{ x: 0, y: 0 }];
      const theButton = document.getElementById('theButton');

      theButton.addEventListener('click', () => {
        this.direction = 'ArrowRight';

      });

      document.addEventListener('keydown', e => {
        console.log(e);
        switch (e.key) {
          case 'ArrowUp':
            if (this.segments.length === 1 || this.direction !== 'ArrowDown') {
              this.direction = e.key;
            }
            break;
          case 'ArrowDown':
            if (this.segments.length === 1 || this.direction !== 'ArrowUp') {
              this.direction = e.key;
            }
            break;
          case 'ArrowLeft':
            if (this.segments.length === 1 || this.direction !== 'ArrowRight') {
              this.direction = e.key;
            }
            break;
          case 'ArrowRight':
            if (this.segments.length === 1 || this.direction !== 'ArrowLeft') {
              this.direction = e.key;
            }
            break;
          case ' ':
            paused = !paused;
            break;
        }
      });

      this.draw();
    }

    draw() {
      context.drawImage(snakeImage, this.segments[0].x, this.segments[0].y, SNAKE_SIZE, SNAKE_SIZE);

      context.fillStyle = 'green';
      for (let i = 1; i < this.segments.length; i++) {
        context.beginPath();
        context.arc(this.segments[i].x + (SNAKE_SIZE / 2), this.segments[i].y + (SNAKE_SIZE / 2), SNAKE_SIZE / 2, 0, 2 * Math.PI, true);
        context.fill();

      }
    }

    move() {
      if (!paused) {
        let head = this.segments[0];
        let segmentFormerlyKnownAsTail = this.segments.pop();
        let oldTailX = segmentFormerlyKnownAsTail.x;
        let oldTailY = segmentFormerlyKnownAsTail.y;
        let x = head.x;
        let y = head.y;

        switch (this.direction) {
          case 'ArrowLeft':
            x -= SNAKE_SIZE;
            break;
          case 'ArrowRight':
            x += SNAKE_SIZE;
            break;
          case 'ArrowUp':
            y -= SNAKE_SIZE;
            break;
          case 'ArrowDown':
            y += SNAKE_SIZE;
            break;
        }

        if (x < 0 || x > canvas.width - SNAKE_SIZE || y < 0 || y > canvas.height - SNAKE_SIZE) {
          gameOver = true;
        }

        // check for crash with self (first 3 are waste...)
        if (this.isOnTopOf(x, y)) {
          gameOver = true;
        }

        if (gameOver) {
          // not going to add as head, reattach
          this.segments.push(segmentFormerlyKnownAsTail);

        } else {

          //chopped off tail being reused as new head
          segmentFormerlyKnownAsTail.x = x;
          segmentFormerlyKnownAsTail.y = y;
          this.segments.unshift(segmentFormerlyKnownAsTail);
        }

        if (apple) {
          if (segmentFormerlyKnownAsTail.x === apple.x && segmentFormerlyKnownAsTail.y === apple.y) {
            crunchSound.currentTime = 0;
            crunchSound.play();

            score++;
            speed = speed * 0.9;

            this.segments.push({ x: oldTailX, y: oldTailY });
            apple.move();
          }
        }
      }

      this.draw();
    }

    isOnTopOf(x, y) {
      return this.segments.some(segment => segment.x === x && segment.y === y);
    }
  }

  class Apple {
    constructor() {
      this.move();
    }

    draw() {
      context.drawImage(appleImage, this.x, this.y, SNAKE_SIZE, SNAKE_SIZE);
    }

    move() {
      do {
        this.x = Apple.getRandomNumber(canvas.width - SNAKE_SIZE);
        this.y = Apple.getRandomNumber(canvas.height - SNAKE_SIZE);
      } while (snake.isOnTopOf(this.x, this.y));

      this.draw();
    }

    static getRandomNumber(max) {
      let r = Math.floor(Math.random() * (max + 1));
      return r - (r % SNAKE_SIZE);
    }
  }

  function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    apple.draw();

    context.fillStyle = 'black';
    context.font = 'bold 48px serif';
    context.fillText(score, canvas.width - 120, 50);

    if (!gameOver) {
      setTimeout(gameLoop, speed);
    } else {
      crashSound.currentTime = 0;
      crashSound.play();
      alert('Game Over!!!!!!!!!!!!!!!!');
    }
  }

  const re = document.getElementById('re');
  re.addEventListener('click', () => {
    window.location.reload();

  });

  const snakeImage = new Image();
  snakeImage.src = 'media/snakehead.png';
  snakeImage.addEventListener('load', () => {
    snake = new Snake();
    setTimeout(() => {
      gameLoop();
    }, speed);
  });

  const appleImage = new Image();
  appleImage.src = 'media/apple.png';
  appleImage.addEventListener('load', () => {
    apple = new Apple();
  });
}());