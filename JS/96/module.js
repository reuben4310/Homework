'use strict';

const fs = require('fs');
let path = require('path');

module.exports = function myModules(dir, ext, callback) {
    ext = '.' + ext;
    fs.readdir(dir, (err, data) => {
        if (err) return callback(err);

        data = data.filter((file) => {
            if (path.extname(file) === ext) {
                return true;
            } else {
                return false;
            }
        });
        callback(null, data);
    });

}

