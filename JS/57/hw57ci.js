window.myApp = window.myApp || {};
window.myApp.utils = (function (utils) {
    'use strict';




    utils.stringCaseInsensitiveEquals = function (word1, word2) {
        return word1.toLowerCase() === word2.toLowerCase();
    };

    return utils;
}(window.myApp.utils || {}));