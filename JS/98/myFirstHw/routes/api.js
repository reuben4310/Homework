var express = require('express');
var router = express.Router();
let contacts = [{ name: 'Joe', phone: 1234567890 }, { name: 'Bob', phone: 9087878765 },
{ name: 'Sam', phone: 9087878765 }];

router.get('/contacts', function (req, res, next) {
    res.send(contacts)
});

module.exports = router;