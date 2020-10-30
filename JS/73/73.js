(function () {
    'use strict';

    class Vehicle {

        constructor(color) {
            this.color = color;
        }

        print() {
            console.log(`This is now going at the speed of: ${this.speed}. It's beutiful color is: ${this.color}`);
        }

        go(speed) {
            this.speed = speed;
            console.log(`Vehicle is now going at speed ${this.speed} VRooooooooooooooooooM!!!!!!`);

        }
    }

    const v1 = new Vehicle('Maroon', 100);
    v1.go(100);
    v1.print();

    class Plane extends Vehicle {
        go(speed) {
            this.speed = speed * 10;
            console.log(`Aircraft is now FLYING at speed ${this.speed}.Enjoy your flight!!`);
        }
    }

    const p1 = new Plane('Purple');
    p1.go(100);
    p1.print();

}());
