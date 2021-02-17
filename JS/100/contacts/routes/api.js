var express = require('express');
var router = express.Router();

router.get('/contacts', function (req, res, next) {
    db.query('SELECT * FROM contacts', (error, results, fields) => {

        if (error) {
            return next(`Unable to fetch contacts ${error.message}`);
        }

        res.send(results)
    });
});

router.post('/contacts', function (req, res, next) {
    db.query('INSERT INTO contacts(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
        [req.body.firstName, req.body.lastName, req.body.email, req.body.phone],
        (error, results, fields) => {
            if (error) {
                res.status(404).json({ message: "OOPS" })
                // return next(new Error(`Unable to insert contact - ${error.message}`));

            }
            
            const myContact = { ...req.body };
            myContact.id = results.insertId;

            res.status(201).json(myContact);
        });

});

module.exports = router;

