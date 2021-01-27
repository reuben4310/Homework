'use strict';

const fs = require('fs');
const file = process.argv[2];
let lines;

fs.readFile(file, function (err, data) {
    lines = data.toString().split('\n').length - 1;

    console.log(lines);
});