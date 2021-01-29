'use strict';

const http = require('http'),
    url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');

    res.on('error', (error) => {
        console.error(error);
    });

    res.on('data', (data) => {
        console.log(data);
    });

});