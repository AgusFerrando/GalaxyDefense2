var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET game page. */
router.get('/game', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET ranking. */
router.get('/ranking', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
