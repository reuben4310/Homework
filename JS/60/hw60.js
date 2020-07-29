







(function () {
    'use strict';
    const colors = ["red", "orange", "green", "blue", "brown", "purple", "gray", "white"];


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





    mixBut.addEventListener('click', () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            mixBut.value = 'Start';
        } else {
            intervalId = setInterval(changeColor, 1500);
            mixBut.value = 'Stop';
        }
    });
}());