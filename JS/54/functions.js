'use strict';

// Q1
function multiply(x, y) {
    return x * y;
}

console.log(multiply(5, 10));
console.log(multiply(3, 6));
console.log(multiply(9, 1));

// Q2
function getMultiplier() {
    return function (x, y) { return x * y; };

}
const x = getMultiplier();
console.log(x(5, 5));
console.log(x(8, 15));


// Q3
function getMultiplier2(x) {
    return function (y) {
        return (x * y);

    };
}

const a = getMultiplier2(5);
console.log(a(8));

const b = getMultiplier2(15);
console.log(a(18));

const c = getMultiplier2(4);
console.log(a(80));