const myModule = require('./module.js');
const dircetory = process.argv[2];
const ext = process.argv[3];

myModule(dircetory, ext, (err, list) => {
    if (err)
        return console.error('There was an error:', err)

    list.forEach((file) => {
        console.log(file)
    })
})