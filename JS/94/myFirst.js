'use strict';

const fs = require('fs');
const file = process.argv[2];
let buffer;

if (!file) console.log('Please, enter the file name as parameter');

buffer = fs.readFileSync(file);

console.log(buffer.toString().split("\n").length - 1);