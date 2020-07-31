(function () {
    'use strict';
    const colors = ["red", "orange", "green", "blue", "brown", "purple", "gray", "white"];
    // const colors2 = ['#FFFFFF', '#0000FF', '#FF0000', '#00FF00', '#808080', '#FFFF00'];

    let colorIndex = 0;

    let mixBut = document.getElementById("mixBut");
    let intervalId;





    function changeColor() {

        // body
        document.bgColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;


        // text
        let x = document.getElementById("par");
        if (x.style.color === "black") { x.style.color = "red"; }
        else if (x.style.color === "red") { x.style.color = "blue"; }
        else if (x.style.color === "blue") { x.style.color = "black"; }
        else { x.style.color = "black"; }
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
            intervalId = setInterval(changeColor, 1500);
            audio.play();

            mixBut.value = 'Stop';


        }
    });
}());

