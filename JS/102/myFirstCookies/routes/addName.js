var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Name',
    partials: { content: 'addName' }
  });
});

router.post('/', function (req, res, next) {
 

  res.redirect('/');
});
// 
// router.get('/addContact', function (req, res, next) {
//   res.render('layout', {
//     title: 'Add Contact',
//     partials: { content: 'addContact' }
//   });
// });
// 
// router.post('/addContact', function (req, res, next) {
//   //console.log(req.body);
//   req.body.id = contactsId++;
//   console.log(req.body)
//   contacts.push(req.body);
//   res.redirect('/contacts');
// });
// 
// router.get('/deleteContact/:id', function (req, res, next) {
//   contacts = contacts.filter(c => c.id !== +req.params.id);
//   res.redirect('/contacts')
// });
// 
// router.get('/editContact/:id', function (req, res, next) {
//   let contact = contacts.find(c => c.id === +req.params.id);
//   res.render('layout', {
//     title: 'Edit Contact',
//     contact,
//     partials: { content: 'editContact' }
//   });
// });
// 
// router.post('/editContact/:id', function (req, res, next) {
// 
//   req.body.id = +req.params.id;
//   contacts[+req.params.id] = req.body;
// 
//   res.redirect('/contacts');
// });
module.exports = router;
