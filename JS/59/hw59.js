// Q1
(function () {
    'use strict';
    let numbers = [2, 4, 6];



    function map(numbers, mapFunc) {

        const mapArr = [];

        for (let i = 0; i < numbers.length; i++) {
            const result = mapFunc(numbers[i], i, numbers);
            mapArr.push(result);
        } return mapArr;
    }
    const squareArr2 = map(numbers, num => num * 2);
    console.log(numbers);
    console.log(squareArr2);



}());


