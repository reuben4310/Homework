'use strict';

const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(dir, function (err, data) {
    data.forEach(function (file) {
        if (path.extname(file) === extension) {
            console.log(file);
        }
    });
});