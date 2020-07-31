function changeColor() {
    'use strict';

    let mixBut = document.getElementById("mixBut");
    let intervalId;
    
    for (var r = 0; r < 256; r++) {
        for (var g = 0; g < 256; g++) {
            for (var b = 0; b < 256; b++) {
                // Assume we have 8 bits of alpha to use.
                for (var a = 0; a < 256; a++) {
                    console.log('rgba(' + [r, g, b, a / 255].join(',') + ')');
                }
            }
        }
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
}