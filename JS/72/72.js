(function () {

'use strict';

function Vehicle(color) {
    this.color = color;

}

Vehicle.prototype.print = function () {
    console.log(`The color of the travelling machine is: ${this.color}. It's speed is: ${this.speed}`);
};

Vehicle.prototype.go= function (speed) {
   
    this.speed=speed;
    console.log(`Vehicle is now going at speed ${this.speed}  VRooooooooooooooooooM!!!!!!`);
};

const v1 = new Vehicle("Teal");
v1.go(100);
v1.print();

    function Plane(color) {
        this.color = color;

    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function (fastSpeed) {
        this.speed=fastSpeed*10;
        console.log(`Aircraft is now FLYING at speed ${this.speed}. Enjoy your flight!!`);
    };

    const p1 = new Plane("Red");
    p1.go(100);
    p1.print();

}());
