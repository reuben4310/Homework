const express = require('express');
const router = express.Router();
var bcrypt = require('bcrypt');

router.post('/register', (req, res, next) => {
  console.log(req.body.name, req.body.password);
  if (!req.body.name || !req.body.password) {
    return next(new Error('name and password are required'));
  }

  bcrypt.hash(req.body.password, 10, async (err, hash) => {
    if (err) {
      return next(err);
    }

    await global.users.insertOne(
      { username: req.body.name, password: hash }
    );

    res.status(201).end('You have successful registered');

    /*pool.query('INSERT into u(name, password) VALUES (?, ?)',
      [req.body.name, hash],
      (err, result) => {
        if (err) {
          return next(err);
        }

        res.redirect('/');
      });*/
  });
});

router.post('/login', async (req, res, next) => {
  const found = await global.users.findOne({ username: req.body.name });

  if (found) {
    bcrypt.compare(req.body.password, found.password, function (err, result) {
      
      if (!result) {
        return next(new Error('Invalid name and password'));
      }

      req.session.user = req.body.name;
       return res.redirect('http://localhost:3000');
       
       
    });
  }
  //   ('SELECT password FROM users WHERE name = ?',
  //     [req.body.name],
  //     (error, results) => {
  //       if (error) {
  //         return next(error);
  //       }
  // 
  //       if (!results.length) {
  //         return next(new Error('Invalid name and password'));
  //       }


  // });
  //res.send('logged in');
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.end('logged out');
});

module.exports = router;
