(function () {
    'use strict';




    let mixBut = document.getElementById("mixBut");
    let intervalId;







    function changeColor() {

        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);


        let a = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let c = Math.floor(Math.random() * 256);

        let bgColor = "rgb(" + x + "," + y + "," + z + ")";

        let color = "rgb(" + a + ", " + b + ", " + c + ")";
        console.log(bgColor);
        console.log(color);

        document.body.style.background = bgColor;
        document.body.style.color = color;


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
            intervalId = setInterval(changeColor, 1200);
            audio.play();

            mixBut.value = 'Stop';


        }
    });
}());

