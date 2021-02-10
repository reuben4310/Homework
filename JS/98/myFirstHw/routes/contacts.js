var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('layout', {
        title: 'contacts ',

        contacts: [{ name: 'Joe', phone: 123 + '-' + 456 + '-' + 7890 },
        { name: 'Bob', phone: 908 + '-' + 787 + '-' + 8765 },
        { name: 'Sam', phone: 980 + '-' + 889 + '-' + 6587 }],
        partials: { content: 'contacts' },
        emptyArray: [],
        isEmpty: true
    });
});

// router.get('/addContact', function (req, res, next) {
//     res.render('layout', {
//         title: 'contacts ',
//         partials: { content: 'addContact' },
//         emptyArray: [],
//         isEmpty: true
//     });
// });
// 
// router.post('/addContact', function (req, res, next) {
//     router.route('/addContact')
//         .get((req, res, next) => {
//             res.render('layout'{
//                 title: 'Add Contact',
//                 partials: { content: 'addContact' }
// 
//             });
//         })
//         .post((req, res, next) => {
//             req.body.name = nextId++
//         })
// });

module.exports = router;