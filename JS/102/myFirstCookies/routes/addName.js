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

module.exports = router;
