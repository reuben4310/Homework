var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    title: 'Express ',
    repo: [
      { name: "resque" },
      { name: "hub" },
      { name: "rip" }
    ],
    names: ['Joe', 'Bob', 'Sam'],
    partials: { content: 'index' },
    emptyArray: [],
    isEmpty: true
  });
  
});



module.exports = router;