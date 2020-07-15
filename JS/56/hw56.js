
// Q1

const wd = (function () {
    'use strict';

    const dayOfweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'שבת'];

    return {
        getDay: function (index) {
            return dayOfweek[index - 1];
        },
        getIndex: function (name) {
            return dayOfweek.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
        }
    };
}());

console.log('wd.getDay(7)', wd.getDay(7));
console.log('wd.getIndex("monday")', wd.getIndex('monday'));

// Q2
const cc = (function () {
    'use strict';

    let interestRate;
    let years;

    return {
        setRate: function (number) {
            interestRate = number;

        },
        setYears: function (year) {
            years = year;
        },
        calculateInterest: function (princple) {

            return princple * interestRate * years;
        },



    };


}());
cc.setRate(0.03);
cc.setYears(5);
console.log(Math.round(cc.calculateInterest(26)));

