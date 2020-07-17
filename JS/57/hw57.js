window.myApp = window.myApp || {};
window.myApp.utils = (function (utils) {
    'use strict';

    const dayOfweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'שבת'];


    utils.getDay = function (index) {
        return dayOfweek[index - 1];
    };
    utils.getIndex = function (name) {
        return dayOfweek.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
    };

    return utils;
}(window.myApp.utils || {}));