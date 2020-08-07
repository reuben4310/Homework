(function () {
    'use strict';




    let mixBut = document.getElementById("mixBut");
    let intervalId;




    let red = 0;
    let green = 0;
    let blue = 0;
    function changeColor() {
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;


        if (blue < 256) {
            blue++;
        } else if (green < 256) {
            blue = 0;
            green++;
        } else if (red < 256) {
            blue = 0;
            green = 0;
            red++;
        } else {
            red = 0;
            green = 0;
            blue = 0;
        }
    }

    

    const audio = document.querySelector("#audio");

    audio.play();

    const audio2 = document.querySelector("#audio");

    audio.pause();
    audio.currentTime = 0;



    mixBut.addEventListener('click', () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            mixBut.value = 'Start';
            audio2.pause();




        } else {
            intervalId = setInterval(changeColor, 1);
            audio.play();

            mixBut.value = 'Stop';


        }
    });
}());

